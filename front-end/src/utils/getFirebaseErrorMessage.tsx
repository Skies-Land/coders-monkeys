// CONFIG
import errors from "@/config/locales/errors.json"

// TYPES
type FirebaseErrorsType = {
    [key: string]: string;
}
type FirebaseErrors = {
    [key: string]: FirebaseErrorsType;
}

const firebaseErrors: FirebaseErrors = {
    ...errors,
    an_unknown_error_has_occurred: {
        an_unknown_error_has_occurred: errors.an_unknown_error_has_occurred
    }
}

export function getFirebaseErrorMessage(
    method: string,
    errorCode: string
): string {
    // Message d'erreur par defaut
    const defaultErrorMessage = errors.an_unknown_error_has_occurred;

    // Si la méthode n'existe pas dans firebaseErrors, affichage du message d'erreur par défaut
    if (!firebaseErrors[method]) {
        return defaultErrorMessage;
    }

    // Si la méthode existe dans firebaseErrors, mais que le code d'erreur n'est pas trouver affichage du message d'erreur par défaut
    if (!firebaseErrors[method][errorCode]) {
        return defaultErrorMessage;
    }

    // Si la méthode et le code d'erreur existent dans firebaseErrors, affichage du message d'erreur
    const errorMessage = firebaseErrors[method][errorCode];

    return errorMessage;
}