// API
import { firebaseLogoutUser } from "@/api/authentication";

// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

// DEPENDENCIES
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {

    const router = useRouter();

    const handleLogOutUser = async () => {
        const { error } = await firebaseLogoutUser()
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("À bientôt sur Coders Monkeys");
        router.push("/connexion");
    }

    return (
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">
                        Mon Compte
                    </ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-compte/mes-projets">
                        Mes Projets
                    </ActiveLink>
                </Typography>
            </div>
            <Button action={ handleLogOutUser } variant="danger">
                Se déconnecter
            </Button>
        </Box>
    );
};