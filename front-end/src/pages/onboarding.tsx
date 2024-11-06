import { REGISTERED } from "@/lib/sessions-status";
import { Seo } from "@/ui/components/seo/seo";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
    return (
        <>
            <Seo title="OnBoarding" description="Page de onboarding" />
            <Session sessionStatus={REGISTERED}>
                <OnboardingContainer />
            </Session>
        </>
    );
}