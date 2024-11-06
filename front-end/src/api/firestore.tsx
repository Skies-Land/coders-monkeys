// API
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

// Fonction pour créer un document dans Firestore
export const firestoseCreateDocument = async (
    collectionName: string, 
    documentID: string, 
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, documentID);

        await setDoc(documentRef, data);
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

// Fonction pour mettre à jour un document dans Firestore
export const firestoseUpdateDocument = async (
    collectionName: string, 
    documentID: string, 
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, documentID);

        await updateDoc(documentRef, data);
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