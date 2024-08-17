// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// MODULES
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
    return (
        <>
            <Seo 
                title="Mots de passe oublié sur Coders Monkers" 
                description="Page de mots de passe oublié sur Coders Monkey" 
            />
            <Layout>
                <ForgetPasswordContainer />
            </Layout>
        </>
    );
}