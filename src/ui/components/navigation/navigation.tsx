// DEPENDENCIES
import Link from "next/link";

// COMPONENTS
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";

// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

export const Navigation = () => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                
                {/* Logo & titre, sous-titre */}
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                        <Logo size="small" />
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[24px]">
                                Coders Monkeys
                            </div>
                            <Typography 
                                variant="caption4" 
                                theme="gray" 
                                component="span"
                            >
                                Trouve de l'inspiration & recois des feedbacks !
                            </Typography>
                        </div>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-7">
                    <Typography 
                        variant="caption3" 
                        component="div" 
                        className="flex items-center gap-7"
                    >
                        <ActiveLink href="/design-system">Design System</ActiveLink>
                        <Link href="/projets">Projets</Link>
                        <Link href="/formations">Formations</Link>
                        <Link href="/contact">Contact</Link>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button baseUrl="/connexion" size="small">Connexion</Button>
                        <Button baseUrl="/connexion/inscription" size="small" variant="secondary" >Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}