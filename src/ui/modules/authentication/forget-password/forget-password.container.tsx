// API
import { sendEmailToResetPassword } from "@/api/authentication";

// TYPES
import { ForgetPasswordFormFilelsType } from "@/types/forms";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

// DESIGN SYSTEM
import { ForgetPasswordView } from "./forget-password.view";

// DEPENDENCIES
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm<ForgetPasswordFormFilelsType>();

    const handleResetPassword = async ({email}: ForgetPasswordFormFilelsType) => {
        const { error } = await sendEmailToResetPassword(email);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success(`Un e-mail de réinitialisation de mot de passe vous a été envoyé à l'adresse ${email}`);
        setIsLoading(false);
        reset();
        router.push("/connexion");
    };

    const onSubmit: SubmitHandler<ForgetPasswordFormFilelsType> = async (formData) => {
        setIsLoading(true);
        handleResetPassword(formData);
    };

    return (
        <ForgetPasswordView 
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