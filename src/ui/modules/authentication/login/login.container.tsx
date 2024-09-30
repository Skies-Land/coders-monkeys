// API
import { firebaseSignInUser } from "@/api/authentication";

// TYPES
import { LoginFormFilelsType } from "@/types/forms";

// HOOKS
import { useToggle } from "@/hooks/use-toggle";

// DESIGN SYSTEM
import { LoginView } from "./login.view";

// DEPENDENCIES
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export const LoginContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
                console.log('user', user);
              // ...
            } else {
                console.log("Tu n'es pas connecté");
              // User is signed out
              // ...
            }
          });
    }, []);

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