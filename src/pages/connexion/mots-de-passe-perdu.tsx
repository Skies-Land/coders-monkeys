// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// LIB
import { GUEST } from "@/lib/sessions-status";

// MODULES
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
    return (
        <>
            <Seo 
                title="Mots de passe oublié sur Coders Monkers" 
                description="Page de mots de passe oublié sur Coders Monkey" 
            />
            <Layout sessionStatus={GUEST}>
                <ForgetPasswordContainer />
            </Layout>
        </>
    );
}