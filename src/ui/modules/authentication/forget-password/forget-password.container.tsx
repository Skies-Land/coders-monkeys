import { useState } from "react";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFilelsType } from "@/types/forms";

export const ForgetPasswordContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<ForgetPasswordFormFilelsType>();

    const onSubmit: SubmitErrorHandler<ForgetPasswordFormFilelsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData);
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