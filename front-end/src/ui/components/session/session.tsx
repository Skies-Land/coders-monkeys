// CONTEXT
import { useAuth } from "@/context/AuthUserContext";

// LIB
import { GUEST, REGISTERED } from "@/lib/sessions-status";

// TYPES
import { SessionStatusTypes } from "@/types/session-status-types";

// DESIGN SYSTEM
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";

// DEPENDENCIES
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}

export const Session = ({ children, sessionStatus }: Props) => {
    const router = useRouter();
    const { authUserIsLoading, authUser } = useAuth();

    // Pour vérifier si l'utilisateur a terminé son onboarding
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

    // Pour procéder à la redirection vers la page d'onboarding
    const shouldRedirectToOnboarding = () => {
        return (
            // Si l'app n'est plus en cours de chargement,
            !authUserIsLoading &&
            // s'il y a un utilisateur qui est authentifié,
            authUser &&
            // et que l'utilisateur n'a pas encore terminé son onboarding,
            !onboardingIsCompleted && 
            // alors redirection vers la page d'onboarding.
            router.asPath !== "/onboarding"
        );
    };

    // Pour ne pas procéder à la redirection vers la page d'onboarding
    const shouldNotRedirectToOnboarding = () => {
        return (
            // Si l'app n'est plus en cours de chargement,
            !authUserIsLoading &&
            // s'il y a un utilisateur qui est authentifié,
            authUser &&
            // et que l'utilisateur a terminé son onboarding,
            onboardingIsCompleted && 
            // alors pas de rediction vers la page d'onboarding vu que l'utilisateur est déjà passé par là.
            router.asPath === "/onboarding"
        );
    };

    // Si l'utilisateur n'a pas encore terminé son onboarding
    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }

    // Si l'utilisateur a déjà terminé son onboarding
    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />;
    }

    // Si l'utilisateur n'est pas authentifié
    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>;
        }
        else {
            // Type de page qui doit être affiché qu'à des membres invités
            router.push("/mon-espace");
        }
    }

    // Si la session est en cours d'enregistrement et que l'application n'est pas en cours de chargement
    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        // Si j'ai un utilisateur authentifié alors je peux afficher le contenu
        if (authUser) {
            return <>{children}</>;
        }
        else {
            // Type de page qui doit être affiché qu'à des membres authentifiés
            router.push("/connexion");
        }
    }

    // Si l'application n'est pas ou plus en cours de chargement
    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }

    return <ScreenSpinner />;
};