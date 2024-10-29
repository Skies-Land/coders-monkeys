// HOOKS
import useFirebaseAuth from "@/hooks/use-firebase-auth";

// TYPES
import { UserDocument } from "@/types/user";

// DEPENDENCIES
import { createContext, useContext } from "react";

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
};

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
});
interface Props {
    children: React.ReactNode;
}

export function AuthUserProvider({ children }: Props) {
    const auth = useFirebaseAuth();
    
    return(
        <authUserContext.Provider
            value={
                {
                    authUser: auth.authUser as {
                        uid: string;
                        email: string;
                        displayName: string;
                        emailVerified: boolean;
                        phoneNumber: string;
                        photoURL: string;
                        userDocument: UserDocument;
                    },
                    authUserIsLoading: auth.authUserIsLoading,
                }
            }
        >
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext(authUserContext);