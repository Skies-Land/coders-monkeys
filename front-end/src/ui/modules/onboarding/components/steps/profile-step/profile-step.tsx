// TYPE
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingProfileFormFieldsType } from "@/types/forms";

// COMPONENTS / DESIGN SYSTEM
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileStepForm } from "./profile-step-form";

// HOOKS
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

// API
import { firestoseUpdateDocument } from "@/api/firestore";

// CONTEXT
import { useAuth } from "@/context/AuthUserContext";

// DEPENDENCIES
import { toast } from "react-toastify";
import { useEffect } from "react";

// API
import { updateUserIdentificationData } from "@/api/authentication";

export const ProfileStep = ({ 
    prev, 
    next, 
    isFirstStep, 
    isFinalStep, 
    stepLists, 
    getCurrentStep 
}: BaseComponentProps) => {
    // Récupération de l'utilisateur connecté
    const { authUser } = useAuth();

    // Outils pour gérer le chargement
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    // Outils pour gérer le formulaire
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
    } = useForm<OnboardingProfileFormFieldsType>();

    const { displayName, expertise, biography } = authUser.userDocument;

    // Récupération des données de l'utilisateur pour les afficher dans le formulaire
    useEffect(() => {
        const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] =[
            "displayName",
            "expertise",
            "biography",
        ];
        for (const field of fieldsToUpdate) {
            setValue(field, authUser.userDocument[field]);
        }
    }, []);
    
    // Fonction pour mettre à jour le document utilisateur
    const handleUpdateUserDocument = async (
        formData: OnboardingProfileFormFieldsType
    ) => {
        const { error } = await firestoseUpdateDocument(
            "users",
            authUser.uid,
            formData
        );
        // En cas d'erreur le formulaire arrête de charger et affiche un message d'erreur
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        // Si tout est ok, le formulaire arrête de charger, réinitialise les champs du form et passe à l'étape suivante
        setIsLoading(false);
        reset();
        next();
    };

    // Fonction pour soumettre le formulaire
    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (formData) => {
        setIsLoading(true);
        // Vérification si les données ont changé
        if (
            displayName !== formData.displayName ||
            expertise !== formData.expertise ||
            biography !== formData.biography
        ) {
            if (
                displayName !== formData.displayName || authUser.displayName !== formData.displayName
            ) {
                const data = {
                    displayName: formData.displayName,
                };
                
                const { error } = await updateUserIdentificationData(
                    authUser.uid,
                    data
                );
                if (error) {
                    setIsLoading(false);
                    toast.error(error.message);
                    return;
                }
            }

            handleUpdateUserDocument(formData); 
        }
        setIsLoading(false);
        next();
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
                                Présente-toi!
                            </Typography>
                            <Typography variant="body-base" component="p" theme="gray">
                            Dis-nous tout sur toi ! Remplis notre formulaire de présentation 
                            pour qu'on puisse mieux te connaître. On veut savoir qui tu es, 
                            ce que tu fais et comment t'as atterri ici. Plus on en saura sur 
                            toi, mieux on pourra personnaliser ton expérience sur notre plateforme.
                            </Typography>
                        </div>
                    </div>
                    { /* FORM */}
                    <div className="flex items-center h-full col-span-6">
                        <div className="flex justify-end w-full">
                            <ProfileStepForm 
                                form={{
                                    errors,
                                    control,
                                    register,
                                    handleSubmit,
                                    onSubmit,
                                    isLoading,
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter 
                prev={prev}
                next={handleSubmit(onSubmit)}
                isFirstStep = {isFirstStep}
                isFinalStep = {isFinalStep}
                isLoading={isLoading}
            />
        </div>
    );
};