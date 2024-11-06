// TYPE
import { BaseComponentProps } from "@/types/onboarding-steps-list";

// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";

// COMPONENTS
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";

export const WelcomeStep = ({ next, isFirstStep, isFinalStep, stepLists, getCurrentStep }: BaseComponentProps) => {
    return (
        <div className="relative h-screen pb-[91px]">
            <div className="h-full overflow-auto">
                <Container className="grid h-full grid-cols-12">
                    { /* TEXT */}
                    <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                        <div className="w-full space-y-5 pb-4.5">
                            <OnboardingTabs 
                                tabs={stepLists}
                                getCurrentStep={getCurrentStep}
                            /> 
                            <Typography variant="h1" component="h1">
                                Bienvenue sur l'appli des singes codeurs !
                            </Typography>
                            <Typography variant="body-base" component="p" theme="gray">
                                Viens traîner avec des développeurs aussi fous que toi, 
                                montre tes projets persos et reçois des feedbacks constructifs 
                                (ou fais-toi carrément descendre). 
                                Prêt à créer des trucs incroyables ?
                            </Typography>
                        </div>
                    </div>
                    { /* ILLUSTRATION */}
                    <div className="flex items-center h-full col-span-6">
                        <div className="w-full">
                            <Image 
                                src="/assets/svg/rocket.svg"
                                alt="Illustration de fusée"
                                width={811}
                                height={596}
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter 
                next={next}
                isFirstStep = {isFirstStep}
                isFinalStep = {isFinalStep}
            />
        </div>
    )
};