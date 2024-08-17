// DEPENDENCIES
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { RiHome3Line } from "react-icons/ri";

// COMPONENTS
import { Container } from "../container/container";

// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";

export const Breadcrumbs = () => {
    
    const router = useRouter();
    const asPath = router.asPath;
    
    const segments = asPath.split("/");
    const lastSegment = segments[segments.length - 1];
    segments[0] = "accueil";

    const view = segments.map((path, index) => (
        <div key={uuidv4()}>
            <Link href={
                index > 0 
                    ? `/${segments.slice(1, index +1).join("/")}` 
                    : "/"
                }>
                <Typography 
                    variant="caption3"
                    component="span"
                    className={clsx(
                        path !== lastSegment ? "text-gray-600" : "text-gray",
                        "capitalize hover:text-gray animate"
                    )}
                >
                    {/* CONDITION : si le path est différent de la page d'accueil, 
                    affiche le path, sinon afficher l'icône de l'accueil */}
                    {path !== "accueil" ? path.replace(/-/g, " ") : <RiHome3Line className="inline -mt-1" />}
                </Typography>

                {/* CONDITION : si le path est différent de lastSegment affiche Typography */}
                {path !== lastSegment && (
                    <Typography variant="caption2" component="span" className="ml-2 text-gray-600 ">
                        /
                    </Typography>
                )}
            </Link>
        </div>
    ));
    
    return <Container className="flex items-center gap-2 py-7">
        {view}
        </Container>;
};