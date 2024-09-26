import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFilelsType } from "@/types/forms";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from 'react-toastify';
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle({ 
        initial: true 
    });

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFilelsType>();

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
        // create user document
        toast.success("Bienvenue sur l'app, votre compte a bien été créé.");
        setIsLoading(false);
        reset();
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