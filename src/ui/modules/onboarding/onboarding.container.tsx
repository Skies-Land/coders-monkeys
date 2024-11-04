// DEPENDENCIES
import { useState } from "react"

// VIEWS
import { OnboardingView } from "./onboarding.view"

// COMPONENTS
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step";
import { ProfileStep } from "./components/steps/profile-step/profile-step";

// TYPE
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";

export const OnboardingContainer = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    // Liste des étapes pour l'onboarding
    const stepLists: onboardingStepsListInterface[] = [
        {
            id: 1, 
            label: "Bienvenue", 
            component: { 
                step: WelcomeStep
            },
        },
        {
            id: 2, 
            label: "Profile", 
            component: { 
                step: ProfileStep
            },
        },
    ];

    // Pour obtenir l'étape actuelle en fonction de l'ID de l'état actuel
    const getCurrentStep = () => {
        return stepLists.find((element) => element.id === currentStep);
    }

    // Pour passer à l'étape suivante
    const nextStep = () => {
        if (currentStep < stepLists.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Pour revenir à l'étape précédente
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Pour permettre d'identifier si on est à l'étape de démarrage
    const isFirstStep = () => {
        if (currentStep === 1) {
            return true;
        }
        return false;
    };

    // Pour permettre d'identifier si on est à la dernière étape
    const isFinalStep = () => {
        if (currentStep === stepLists.length) {
            return true;
        }
        return false;
    };

    return (
        <OnboardingView 
            getCurrentStep={getCurrentStep}
            next={nextStep}
            prev={prevStep}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            stepLists={stepLists}
        />
    )
}