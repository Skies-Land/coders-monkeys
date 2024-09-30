// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// MODULES
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";

export default function Connexion() {
    return (
        <>
            <Seo 
                title="Mon espace sur Coders Monkers" 
                description="Dashboard de l'utilisateur sur Coders Monkey" 
            />
            <Layout withSidebar>
                <UserAccountContainer />
            </Layout>
        </>
    );
}