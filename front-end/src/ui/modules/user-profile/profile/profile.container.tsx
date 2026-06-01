// CONTEXT
import { useAuth } from "@/context/AuthUserContext"

// COMPONENTS
import { ProfileView } from "./profile.view";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

// DEPENDENCIES
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// TYPES
import { UserProfileFormFieldsType } from "@/types/forms";

// API
import { firestoreUpdateDocument } from "@/api/firestore";
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage";
import { storage } from "@/config/firebase-config";
import { updateUserIdentificationData } from "@/api/authentication";

export const ProfileContainer = () => {
    const { authUser, reloadAuthUserData } = useAuth();
    const { value: isLoading, setValue: setLoading } = useToggle()
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        setValue,
        setError,
    } = useForm<UserProfileFormFieldsType>();

    // Stocke le fichier image sélectionné par l'utilisateur avant l'upload
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    // Stocke l'URL locale (base64) pour afficher un aperçu de l'image sélectionnée
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
    // Suit la progression du téléchargement de l'image vers Firebase (en pourcentage)
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    // Extraction des données actuelles de l'utilisateur pour pré-remplir le formulaire
    const { displayName, expertise, biography, linkedin, github } = authUser.userDocument;
    
    // Initialisation des champs du formulaire au montage du composant
    useEffect(() => {
        const fieldsToUpdate: (
            | "displayName"
            | "expertise"
            | "biography"
            | "linkedin"
            | "github"
        ) [] = ["displayName", "expertise", "biography", "linkedin", "github"];
        for (const field of fieldsToUpdate) {
            setValue(field, authUser.userDocument[field])
        }
    }, []);

    // Gère le changement de l'input fichier : sauvegarde l'image et génère un aperçu visuel
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

    // Gère l'upload de l'image de profil vers Firebase Storage et suit l'état d'avancement
    const handleImageUpload = () => {
        let storageRef: StorageReference;
        let uploadTask: UploadTask;

        if (selectedImage !== null) {
            setLoading(true);
            // Création de la référence (chemin de stockage) dans Firebase
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
                    setLoading(false);
                    toast.error("Une erreur inconnue est survenue");
                    setUploadProgress(0)
                },
                () => {
                    // Une fois l'upload terminé, on récupère l'URL publique de l'image
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            updateUserAvatar(downloadURL);
                            setSelectedImage(null)
                            setTimeout(() => {
                                setUploadProgress(0)
                            }, 1000)
                        }
                    );
                }
            );
        }
    };

    // Met à jour l'URL de l'avatar dans l'authentification Firebase ET dans le document Firestore
    const updateUserAvatar = async (photoURL: string) => {
        const body = {
            photoURL: photoURL,
        }

        await updateUserIdentificationData(authUser.uid, body);

        const { error } = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            body
        );
        if (error) {
            setLoading(false);
            toast.error(error.message)
            return;
        }
        reloadAuthUserData();
        setLoading(false);
    };

    // Sauvegarde les informations du formulaire (texte) dans le document Firestore de l'utilisateur
    const handleUpdateUserDocument = async (formData: UserProfileFormFieldsType) => {
        setLoading(true);

        const { error } = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            formData
        );

        if (error) {
            setLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Ton profil a été mis à jour avec succès !")
        setLoading(false);
    };

    // Point d'entrée de la soumission du formulaire : gère la validation, l'upload de l'image et l'enregistrement des données
    const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (formData) => {

        if (selectedImage) {
            handleImageUpload();
        }

        // Validation personnalisée : s'assure que les URLs renseignées correspondent bien aux bons domaines
        if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
            setError("linkedin", {
                type: "manual",
                message: "Cette URL ne correspond pas à un profil LinkedIn",
            })
            return;
        }
        if (formData.github && !formData.github.includes("github.com/")) {
            setError("github", {
                type: "manual",
                message: "Cette URL ne correspond pas à un profil GitHub",
            })
            return;
        }

        // Vérifie si au moins un des champs texte a été modifié par rapport aux données en base
        if (
            displayName !== formData.displayName || 
            expertise !== formData.expertise || 
            biography !== formData.biography || 
            linkedin !== formData.linkedin || 
            github !== formData.github
        ) {

            // Si le nom d'affichage a changé, il faut mettre à jour le profil d'authentification Firebase en plus de Firestore
            if (displayName !== formData.displayName || authUser.displayName !== formData.displayName) {
                const body = {
                    displayName: formData.displayName,
                };

                const { error } = await updateUserIdentificationData(
                    authUser.uid,
                    body
                );
                if (error) {
                    setLoading(false);
                    toast.error(error.message);
                    return;
                }
                reloadAuthUserData();
            }

            // Nettoyage de l'objet formData : 
            // Firebase Firestore n'accepte pas les valeurs "undefined"
            for (const key in formData) {
                if (
                    formData.hasOwnProperty(key) &&
                    formData[key as keyof UserProfileFormFieldsType] === undefined
                ) {
                    // Suppression de la propriété si sa valeur est indéfinie
                    delete formData[key as keyof UserProfileFormFieldsType];
                }
            }
            handleUpdateUserDocument(formData);
            return;
        } 
    };

    return (
        <ProfileView 
            imagePreview={imagePreview}
            uploadProgress={uploadProgress}
            handleImageSelect={handleImageSelect}
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading
            }}
        />
    )
}