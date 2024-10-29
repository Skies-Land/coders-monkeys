// FIREBASE CONFIG
import { auth, db } from "@/config/firebase-config";

// TYPES
import { UserDocument, UserInterface } from "@/types/user";

// DEPENDENCIES "FIREBASE"
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

// DEPENDENCIES "REACT"
import { useEffect, useState } from "react";

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true)

    // Formate l'utilisateur Firebase pour ne conserver que les informations nécessaires
    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
    });

    // Récupère le document utilisateur depuis Firestore et met à jour l'état authUser
    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user;

            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument;
                }
                setAuthUser((prevAuthUser) => (
                    {
                        ...prevAuthUser,
                        ...compactUser,
                    }
                ));
                setAuthUserIsLoading(false);
            });
        }
    };

    // Gère les changements d'état d'authentification
    const authStateChanged = async (authState: UserInterface | User | null ) => {
        if (!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return;
        }
        setAuthUserIsLoading(true)
        const formatedUser = formatAuthUser(authState);
        await getUserDocument(formatedUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        authUserIsLoading,
    };
}