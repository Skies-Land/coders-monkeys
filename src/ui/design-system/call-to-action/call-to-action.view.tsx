// DEPENDENCIES
import Image from "next/image";

// COMPONENTS
import { Container } from "@/ui/components/container/container";

// DESIGN SYSTEM
import { Button } from "../button/button";
import { Typography } from "../typography/typography";

// TYPES
import { LinkTypes } from "@/lib/link-type";

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                
                {/* ELEMENT DE GAUCHE */}
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        N'attend pas pour développer tes compétences...
                    </Typography>
                    <div>
                        <Button variant="sucess" baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                            Formation React.js gratuite
                        </Button>
                    </div>
                    
                </div>

                {/* ELEMENT DE DROITE */}
                <div>
                    <Image 
                        width={1300}
                        height={1300}
                        src="/assets/svg/bombers.svg"
                        alt="Illustration d'une bombe"
                        className="absolute -bottom-[490px] -right-[300px]"
                    />
                </div>
            </Container>
        </div>
    );
};