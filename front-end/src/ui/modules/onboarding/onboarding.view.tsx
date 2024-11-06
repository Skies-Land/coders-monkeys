// TYPE
import { BaseComponentProps } from "@/types/onboarding-steps-list";

export const OnboardingView = ({
    getCurrentStep,
    next,
    prev,
    isFirstStep,
    isFinalStep,
    stepLists,
}: BaseComponentProps) => {
    if (getCurrentStep()?.component) {
        const Component = getCurrentStep()?.component.step;

        return (
            <div>
                {Component && (
                    <Component 
                        getCurrentStep={getCurrentStep}
                        next={next}
                        prev={prev}
                        isFirstStep={isFirstStep}
                        isFinalStep={isFinalStep}
                        stepLists={stepLists}
                    />
                )}
            </div>
        );
    }
    return null;
};