import { AppLinks } from "@/types/app-links";

const footerAplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders Monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "https://www.youtube.com/@remotemonkey",
        type: "external"
    },
];

const footerUserLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    },
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "À propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    },
];

const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "YouTube",
        baseUrl: "https://www.youtube.com",
        type: "external"
    },
    {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com",
        type: "external"
    },
    {
        label: "Slack",
        baseUrl: "https://www.slack.com",
        type: "external"
    },
];

export const footerLinks = [
    {
        label: "App",
        links: footerAplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUserLinks,
    },
    {
        label: "Informations",
        links: footerInformationLinks,
    },
    {
        label: "Réseaux",
        links: footerSocialNetworkLinks,
    },
]