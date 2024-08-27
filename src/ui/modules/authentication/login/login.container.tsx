import { useState } from "react";
import { LoginView } from "./login.view";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { LoginFormFilelsType } from "@/types/forms";

export const LoginContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFilelsType>();

    const onSubmit: SubmitErrorHandler<LoginFormFilelsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData);
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