// DEPENDENCIES
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { ForgetPasswordForm } from "./forget-password.form";

// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import { FormsType } from "@/types/forms";

// INTERFACES
interface Props {
    form: FormsType;
}

export const ForgetPasswordView = ({form}: Props) => {    
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
        {/* IMAGE */}
        <div className="flex items-center">
            <div className="relative w-full h-[531px]">
                <Image
                    fill
                    src="/assets/images/character-3.png"
                    alt="Illustration pour la page d'inscription"
                    className="object-scale-down"
                />
            </div>
        </div>
        {/* FORMULAIRE DE MOT DE PASSE PERDU */}
        <div className="flex items-center">
            <Box padding_y="py-5">
                
                <div className="flex items-center justify-between">
                    <Typography variant="h5" component="h1">
                        Mot de passe perdu
                    </Typography>
                    <Typography variant="caption4" component="span" theme="primary">
                        <Link href="/connexion">Connexion</Link>
                    </Typography>
                </div>
                <ForgetPasswordForm form={form} />
            </Box>
        </div>
    </Container>
    );
};