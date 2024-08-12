import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

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