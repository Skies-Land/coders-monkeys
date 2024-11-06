// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// LIB
import { GUEST } from "@/lib/sessions-status";

// MODULES
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Connexion() {
    return (
        <>
            <Seo 
                title="Connexion sur Coders Monkers" 
                description="Page de connexion sur Coders Monkey" 
            />
            <Layout sessionStatus={GUEST}>
                <LoginContainer />
            </Layout>
        </>
    );
}