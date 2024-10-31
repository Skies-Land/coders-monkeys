// DEPENDENCIES
import Link from "next/link";

// COMPONENTS
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";

// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

// CONTEXT
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./acount-avatar-link";

export const Navigation = () => {
    const { authUser } = useAuth();
    console.log('authUser', authUser);

    const authentificationSystem = (
        <div className="flex items-center gap-2">
            <Button baseUrl="/connexion" size="small">Connexion</Button>
            <Button baseUrl="/connexion/inscription" size="small" variant="secondary" >Rejoindre</Button>
        </div>
    )

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
                        <ActiveLink href="/projets">Projets</ActiveLink>
                        <ActiveLink href="/formations">Formations</ActiveLink>
                        <ActiveLink href="/contact">Contact</ActiveLink>
                    </Typography>
                    
                    {!authUser ? authentificationSystem : <AccountAvatarNavigationLink />}
                </div>
            </Container>
        </div>
    )
}