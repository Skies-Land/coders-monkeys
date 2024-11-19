// CONTEXT
import { useAuth } from "@/context/AuthUserContext";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

//TYPES
import { BaseComponentProps } from "@/types/onboarding-steps-list";

// COMPONENTS / DESIGN SYSTEM
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";

// DEPENDENCIES
import { useState } from "react";
import { toast } from "react-toastify";

// API
import { updateUserIdentificationData } from "@/api/authentication";
import { firestoseUpdateDocument } from "@/api/firestore";

// FIREBASE
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage";
import { storage } from "@/config/firebase-config";

export const AvatarStep = ({ 
    prev, 
    next, 
    isFinalStep, 
    stepLists, 
    getCurrentStep 
}: BaseComponentProps) => {

    // Récupération de l'utilisateur connecté
    const { authUser } = useAuth();

    // Outils pour gérer le chargement
    const { value: isLoading, toggle } = useToggle();

    // Etat pour gérer l'image sélectionnée
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Etat pour gérer l'aperçu de l'image
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

    // Etat pour gérer la progression de l'upload
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    // Gestion de la sélection de l'image
    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file)

            const reader = new FileReader();
            reader.onload = (e) => {
                let imageDataUrl: string | ArrayBuffer | null = null;
                if (e.target) {
                    imageDataUrl = e.target.result;
                }
                setImagePreview(imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    // Gestion de la mise à jour des informations de l'utilisateur
    const updateUserDocument = async (photoURL: string) => {
        const body = {
            photoURL: photoURL
        };

        await updateUserIdentificationData(authUser.uid, body);

        const { error } = await firestoseUpdateDocument(
            "users",
            authUser.uid,
            body
        );

        if (error) {
            toggle();
            toast.error(error.message);
            return;
        }

        toggle();
        next();
    }

    // Gestion de l'upload de l'image
    const handleImageUpload = () => {
        let storageRef: StorageReference;
        let uploadTask: UploadTask;

        if (selectedImage !== null) {
            toggle();
            storageRef = ref(
                storage,
                `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
            );
            uploadTask = uploadBytesResumable(storageRef, selectedImage);

            uploadTask.on(
                "state_changed", (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    toggle();
                    toast.error("Une erreur s'est produite lors de l'upload de l'image");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            updateUserDocument(downloadURL);
                        }
                        
                    );
                }
            );
            // Si l'image n'a pas été sélectionnée, l'utilisateur peux passer à l'étape suivante
        } else {
            next();
        }
    };

    return (
        <div className="relative h-screen pb-[91px]">
            <div className="h-full overflow-auto">
                <Container className="grid h-full grid-cols-12">
                    { /* TEXT */}
                    <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                        <div className="w-full space-y-5 pb-4.5">
                            <OnboardingTabs 
                                tabs={stepLists}
                                getCurrentStep={getCurrentStep}
                            /> 
                            <Typography variant="h1" component="h1">
                                Dernière étape !
                            </Typography>
                            <Typography variant="body-base" component="p" theme="gray">
                                C’est sûr t'as une tête à être sur Coders Monkeys ! 
                                Mais on a besoin de ta plus belle photo de profil pour que 
                                tout le monde puisse voir à quel point tu es incroyable. 
                                Mettre une photo sympa, c'est la garantie de te faire 
                                remarquer et de faire craquer les développeurs en quête 
                                de nouveaux contacts. Alors montre-nous ta belle gueule et rejoins la communauté !
                            </Typography>
                        </div>
                    </div>
                    { /* UPLOAD IMAGE */}
                    <div className="flex items-center h-full col-span-6">
                        <div className="flex justify-center w-full">
                            <UploadAvatar 
                                handleImageSelect={handleImageSelect}
                                imagePreview={imagePreview}
                                uploadProgress={uploadProgress}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter 
                prev={prev}
                next={handleImageUpload}
                isFinalStep = {isFinalStep}
                isLoading={isLoading}
            />
        </div>
    );
};