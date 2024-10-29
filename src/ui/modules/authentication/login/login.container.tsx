// API
import { firebaseSignInUser } from "@/api/authentication";

// TYPES
import { LoginFormFilelsType } from "@/types/forms";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

// DESIGN SYSTEM
import { LoginView } from "./login.view";

// DEPENDENCIES
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFilelsType>();

    const handleSignInUser = async ({email, password}: LoginFormFilelsType) => {
        const { error } = await firebaseSignInUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success("Bienvenue sur Coders Monkeys");
        setIsLoading(false);
        reset();
        router.push("/mon-espace");
    };

    const onSubmit: SubmitHandler<LoginFormFilelsType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;
        if (password.length <= 5) {
            setError('password', {
                type: 'manual',
                message: 'Votre mot de passe doit contenir au minimum 6 caractères',
            });
            setIsLoading(false);
            return;
        }
        handleSignInUser(formData);
    };

    return (
        <LoginView 
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