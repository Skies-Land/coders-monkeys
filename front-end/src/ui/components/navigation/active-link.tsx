// DEPENDENCIES
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

// INTERFACES
interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
    const router = useRouter();

    // Utilisation du hook useMemo pour mémoriser la valeur de isActive
    // isActive est vrai si le chemin actuel du routeur correspond à href
    const isActive: boolean = useMemo(() => {
        return router.pathname === href;
    }, [router.pathname, href])

    return (
        // Class CSS appliquer au lien de navigation, si `isActive` est vrai
        <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
            {children}
        </Link>
    )
}