// TYPE
import { BaseComponentProps } from "@/types/onboarding-steps-list";

// COMPONENT
import { OnboardingFooter } from "../../footer/onboarding-footer";

export const WelcomeStep = ({ next, isFirstStep, isFinalStep }: BaseComponentProps) => {
    return (
        <div className="relative h-screen">
            Welcome Step component
            <OnboardingFooter 
                next={next}
                isFirstStep = {isFirstStep}
                isFinalStep = {isFinalStep}
            />
        </div>
    )
};