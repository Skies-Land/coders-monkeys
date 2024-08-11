import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerAplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";

export const Footer = () => {

    const footerNavigationList = footerAplicationLinks.map((element) => (
        <div key={uuidv4()}>{element.label}</div>
    ));

    const curentYear = new Date().getFullYear();

    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">

                {/* PPARTIE DE GAUCHE : Test + Logo */}
                <div className="flex flex-col items-center gap-1">
                    <Typography variant="caption1" theme="white" weight="medium">
                        Formations gratuites
                    </Typography>
                    <Typography variant="caption3" theme="gray">
                        Abonne-toi à la chaine
                    </Typography>
                    <a href="https://www.youtube.com/@remotemonkey" target="_blank">
                        <Image
                            src="/assets/svg/YTB.svg"
                            alt="Remote Monkey ⎥ youtube"
                            width={229}
                            height={216}
                            priority
                        />
                    </a>
                </div>

                {/* PPARTIE DU MILIEU : Liste de Liens */}
                <div className=""><FooterLink/></div>
            </Container>

            {/* BAS DU FOOTER */}
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between">

                    {/* Copyright */}
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${curentYear} | Propulsed by`}{" "}
                        <a href="portfolio-jonathan-araldi.netlify.app/" target="_blank" className="underline">
                            Jonathan Araldi
                        </a>
                        {` - SkiesLand`}

                    </Typography>

                    {/* Réseaux sociaux */}
                    <div className=""></div>
                </div>
            </Container>
        </div>
    );
};

const FooterLink = () => {

    const linksList = footerAplicationLinks.map((link) => (
        // Condition pour les liens de navigation dans le footer
        <div key={uuidv4()}>
            {/* Liens INTERNE dans l'application */}
            {link.type === "internal" && (
                <ActiveLink href={link.baseUrl}>
                    {link.label}
                </ActiveLink>
            )}
            {/* Liens EXTERNE dans l'application */}
            {link.type === "external" && (
                <a href={link.baseUrl} target="_blank">
                {link.label}
            </a>
            )}
        </div>
    ));

    return (
        <div className="min-w-[190px]">
            <Typography 
                theme="white" 
                variant="caption2" 
                weight="medium"
                className=""
            >
                titre
            </Typography>
            <Typography 
                theme="gray" 
                variant="caption3" 
                className="space-y-4"
            >
                {linksList}
            </Typography>
        </div>
    );
}