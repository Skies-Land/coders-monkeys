// API
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

// CONFIGURATION FIREBASE
import { auth } from "@/config/firebase-config";

// UTILS
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";

// Fonction pour >CRÉER< un utilisateur avec Firebase Authentication
export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth, 
            email, 
            password
        );
        return { data: userCredential.user }
    } catch (error) {
        const firebaseError = error as FirebaseError;
        
        const errorMessage = getFirebaseErrorMessage(
            "createUserWithEmailAndPassword", 
            firebaseError.code
        );

        return { 
            error: {
                code: firebaseError.code,
                message: errorMessage,
            }, 
        };
    }
};

// Fonction pour >CONNECTER< un utilisateur avec Firebase Authentication
export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth, 
            email, 
            password
        );
        return { data: userCredential.user }
    } catch (error) {
        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "signInWithEmailAndPassword", 
            firebaseError.code
        );

        return { 
            error: {
                code: firebaseError.code,
                message: errorMessage,
            }, 
        };
    }
};

// Fonction pour >DÉCONNECTER< un utilisateur avec Firebase Authentication
export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth);
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "signOut", 
            firebaseError.code
        );

        return { 
            error: {
                code: firebaseError.code,
                message: errorMessage,
            }, 
        };
    }
};

// Fonction pour >RÉINITIALISER LE PASSWORD< de l'utilisateur avec Firebase Authentication
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "sendPasswordResetEmail", 
            firebaseError.code
        );

        return { 
            error: {
                code: firebaseError.code,
                message: errorMessage,
            }, 
        };
    }
};

// Fonction pour >ENVOYER UN EMAIL DE VÉRIFICATION< à l'utilisateur avec Firebase Authentication
export const sendEmailVerificationProcedure = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser);
            return { data: true }
        } catch (error) {
            const firebaseError = error as FirebaseError;

            const errorMessage = getFirebaseErrorMessage(
                "sendEmailVerification", 
                firebaseError.code
            );

            return { 
                error: {
                    code: firebaseError.code,
                    message: errorMessage,
                }, 
            };
        }
    } else {
        return {
            error: {
                code: "unknown",
                message: "Aucun utilisateur n'est connecté.",
            }
        }
    }
};

// Fonction pour >METTRE À JOUR LES DONNÉES D'IDENTIFICATION< de l'utilisateur
export const updateUserIdentificationData = async (uid: string, data: any) => {
    const result = await fetch ("https://updateuser-kiadtv5era-uc.a.run.app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            uid: uid,
            data: data,
        }),
    })

    if (!result.ok) {
        const errorResponse = await result.json();
        const firebaseError = errorResponse as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "updateUserIdentificationData", 
            firebaseError.code
        );

        return({
            error: {
                code: firebaseError.code,
                message: errorMessage,
            },
        });
    }
    return { data: true }
};