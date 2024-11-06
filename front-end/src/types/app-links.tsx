// DEPENDENCIES
import { IconType } from "react-icons";

// TYPES
import { LinkType } from "@/lib/link-type";

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType;
}

export interface FooterLinks {
    label: string;
    links: AppLinks[];
}