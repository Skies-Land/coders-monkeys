import { SubmitErrorHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFilelsType } from "@/types/forms";
import { useState } from "react";

export const RegisterContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFilelsType>();

    const onSubmit: SubmitErrorHandler<RegisterFormFilelsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData);
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