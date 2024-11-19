// DEPENDENCIES
import Image from "next/image";

// COMPONENTS
import { Container } from "@/ui/components/container/container";

// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="max-w-lg">
                    Rejoins les singes codeurs !
                </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-xl">
                Ici, on se prend pas la tête, mais on code comme des bêtes !
                Rejoins notre tribu de singes codeurs, partage tes projets les plus fous et fais-toi de nouveaux amis développeurs.
                </Typography>
                <div className=" space-x-5 pt-2.5">
                    <Button baseUrl="/connexion/inscription">
                        Commencer
                    </Button>
                    <Button baseUrl="" variant="secondary">
                        En savoir plus
                    </Button>
                </div>
            </div>

            <Image 
                src="/assets/svg/rocket.svg"
                alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
                width={811}
                height={596}
                className="absolute top-0 right-0 z-0"
                priority
            />
        </Container>
    );
};