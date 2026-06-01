// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// MODULES
import { ProfileContainer } from "@/ui/modules/user-profile/profile/profile.container";

//LIB
import { REGISTERED } from "@/lib/sessions-status";

export default function UserAccount() {
    return (
        <>
            <Seo 
                title="Mon espace sur Coders Monkers" 
                description="Dashboard de l'utilisateur sur Coders Monkey" 
            />
            <Layout withSidebar sessionStatus={REGISTERED}>
                <ProfileContainer />
            </Layout>
        </>
    );
}