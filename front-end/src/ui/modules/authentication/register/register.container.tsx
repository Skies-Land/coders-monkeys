// API
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { firestoseCreateDocument } from "@/api/firestore";

// TYPES
import { RegisterFormFilelsType } from "@/types/forms";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

// DESIGN SYSTEM
import { RegisterView } from "./register.view";

// DEPENDENCIES
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export const RegisterContainer = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFilelsType>();

    const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
        const { error } = await firestoseCreateDocument(collectionName, documentID, document);
        if (error) {
            toast.error(error.message);
            setIsLoading(false);
            return;
        }
        toast.success("Bienvenue sur l'app, votre compte a bien été créé.");
        setIsLoading(false);
        reset();
        sendEmailVerificationProcedure();
    }

    const handleCreateUserAuthentication = async ({
        email, 
        password, 
        how_did_hear
    }: RegisterFormFilelsType) => {
        const { error, data } = await firebaseCreateUser(email, password)
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return
        }

        const userDocumentData = {
            email: email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: new Date(),
        }

        handleCreateUserDocument("users", data.uid, userDocumentData);
        
    };

    const onSubmit: SubmitHandler<RegisterFormFilelsType> = async (formData) => {
        setIsLoading(true);

        const { password } = formData;

        // Fonction qui permet de vérifier si le mot de passe contient au moins 6 caractères
        if (password.length <= 5) {
            setError('password', {
                type: 'manual',
                message: 'Votre mot de passe doit contenir au minimum 6 caractères'
            });
            return;
        }

        handleCreateUserAuthentication (formData);

    };

    return (
        <RegisterView 
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
};