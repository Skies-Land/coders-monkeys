import { REGISTERED } from "@/lib/sessions-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

export default function Onboarding() {
    return (
        <>
            <Seo title="OnBoarding" description="Page de onboarding" />
            <Layout sessionStatus={REGISTERED}>
                <div className="flex items-center justify-center pt-20 py-20">
                    Welcome to onboarding
                </div>
            </Layout>
        </>
    );
}