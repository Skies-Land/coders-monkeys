// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";

// DEPENDENCIES
import clsx from "clsx";

interface Props {
    next?: () => void;
    prev?: () => void;
    isFirstStep?:  () => boolean;
    isFinalStep?: () => boolean;
    isLoading?: boolean;
}

export const OnboardingFooter = ({next, prev, isFirstStep, isFinalStep, isLoading} : Props) => {

    // Varialbe pour determiner le titre du bouton d'action en fonction de l'étape
    let actionButtonTitle: string;

    // Si on est à la première étape
    if (isFirstStep && isFirstStep()) {
        actionButtonTitle = "Démarrer";

    // Si on est à la dernière étape
    } else if (isFinalStep && isFinalStep()) {
        actionButtonTitle = "Terminer";

    // Si on est à une étape intermédiaire
    } else {
        actionButtonTitle = "Continuer";
    }

    return (
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
            <div className={clsx (
                "flex items-center gap-5",
                // Si le bouton précédent existe et pas le bouton suivant, alors le bouton précédent s'aligner à gauche
                prev && !next && "justify-start", 
                // Si le bouton précédent n'existe pas et que le bouton suivant existe, alors ce dernier s'aligner à droite
                !prev && next && "justify-end",
                // Si les boutons précédents et suivants existent, alors ils s'alignent à gauche et à droite respectivement
                prev && next && "justify-between"
            )}>
                { /* Boutton d'action = RETOUR */ }
                {prev && (
                    <Button 
                        disabled={isLoading} 
                        variant={!isLoading ? "outline" : "disable"} 
                        action={prev}
                    >
                        Retour
                    </Button>
                )}
                { /* Boutton d'action = SUIVANT */ }
                {next && (
                    <Button
                        isLoading={isLoading}
                        action={next}
                    >
                        {actionButtonTitle}
                    </Button>
                )}
            </div>
        </div>
    )
};