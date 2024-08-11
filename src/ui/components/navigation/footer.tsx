// COMPONENTS
import { FooterLinks } from "@/types/app-links";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { footerLinks } from "./app-links";
import { LinkTypes } from "@/lib/link-type";

// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";

// DEPENDANCES
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";


export const Footer = () => {
    /** RÔLE DE CETTE FONCTION :
    * - Mappe toutes les informations du `footerLinks` présent dans `app-links.tsx`
    * - utilisation de uuidv4 pour générer des clés uniques pour chaque élément récupéré 
    * - Affiche dynamiquement les liens de navigation du footer avec le composant FooterLink
    * 
    * @constant {JSX.Element[]} footerNavigationList - Liste des éléments de navigation du footer.
    */
    const footerNavigationList = footerLinks.map((colomnLinks) => (
        <FooterLink key={uuidv4()} data={colomnLinks} />
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
                        <Image src="/assets/svg/YTB.svg" alt="Remote Monkey ⎥ youtube"
                            width={229}
                            height={216}
                            priority />
                    </a>
                </div>

                {/* PPARTIE DU MILIEU : Liste de Liens */}
                <div className="flex gap-7">
                    {footerNavigationList}
                </div>
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

interface footerLinkProps {
    data: FooterLinks;
}

/** RÔLE DE CETTE FONCTION :
* - Créer un composant de liste de liens pour le footer pour structurer l'affichage
* - Gère les types de redirection des liens (interne ou externe)
* 
* @param {footerLinkProps} props - Les propriétés du composant FooterLink.
* @param {Object} props.data - Les données pour générer les liens de navigation.
* @param {string} props.data.label - Le label de la section de liens.
* @param {Array} props.data.links - La liste des liens de navigation.
* @param {string} props.data.links[].type - Le type de lien (interne ou externe).
* @param {string} props.data.links[].baseUrl - L'URL de base du lien.
* @param {string} props.data.links[].label - Le texte du lien.
* 
* @returns {JSX.Element} - Un composant JSX représentant une liste de liens de navigation dans le footer.
*/
const FooterLink = ( { data }: footerLinkProps) => {
    const linksList = data.links.map((link) => (
        // Condition pour les liens de navigation dans le footer
        <div key={uuidv4()}>
            {/* Liens INTERNE dans l'application */}
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>
                    {link.label}
                </ActiveLink>
            )}
            {/* Liens EXTERNE dans l'application */}
            {link.type === LinkTypes.EXTERNAL && (
                <a href={link.baseUrl} target="_blank">
                {link.label}
            </a>
            )}
        </div>
    ));

    return (
        <div className="min-w-[190px]">
            <Typography theme="white" variant="caption2" weight="medium" className="pb-5">
                {data.label}
            </Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4">
                {linksList}
            </Typography>
        </div>
    );
}