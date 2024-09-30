// API
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

// CONFIGURATION FIREBASE
import { auth } from "@/config/firebase-config";

// Fonction pour CRÉER un utilisateur avec Firebase Authentication
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
        // format error
        return { 
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }, 
        };
    }
};

// Fonction pour CONNECTER un utilisateur avec Firebase Authentication
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
        // format error
        return { 
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }, 
        };
    }
};

// Fonction pour DÉCONNECTER un utilisateur avec Firebase Authentication
export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth);
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError;
        // format error
        return { 
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }, 
        };
    }
};

// Fonction pour RÉINITIALISER LE PASSWORD de l'utilisateur avec Firebase Authentication
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError;
        // format error
        return { 
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }, 
        };
    }
};