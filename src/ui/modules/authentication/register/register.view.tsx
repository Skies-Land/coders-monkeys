// DEPENDENCIES
import Image from "next/image";
import Link from "next/link";

// COMPONENT
import { Container } from "@/ui/components/container/container";
import { RegisterForm } from "./register-form";

// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import { FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
}

export const RegisterView = ({ form }: Props) => {    
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            {/* IMAGE */}
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image
                        fill
                        src="/assets/images/character-1.png"
                        alt="Illustration pour la page d'inscription"
                        className="object-scale-down"
                    />
                </div>
            </div>
            {/* FORMULAIRE D'INSCRIPTION */}
            <div className="flex items-center">
                <Box padding_y="py-5">
                    
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Inscription
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                Tu as déjà un compte ?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary">
                                <Link href="/connexion">Connexion</Link>
                            </Typography>
                        </div>
                    </div>
                    <RegisterForm form={form}/>
                </Box>
            </div>
        </Container>
    );
};