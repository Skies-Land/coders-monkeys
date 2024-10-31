// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// LIB
import { GUEST } from "@/lib/sessions-status";

// MODULES
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
    return (
        <>
            <Seo 
                title="Inscription sur Coders Monkers" 
                description="Page d'inscription sur Coders Monkey" 
            />
            <Layout sessionStatus={GUEST}>
                <RegisterContainer />
            </Layout>
        </>
    );
}