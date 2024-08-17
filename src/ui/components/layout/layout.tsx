// COMPONENTS
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

// INTERFACES
interface Props {
    children: React.ReactNode;
    isdisplayBreadcrumb?: boolean;
}

export const Layout = ({ children, isdisplayBreadcrumb=true }: Props) => {
    return (
        <>
            <Navigation />
            {isdisplayBreadcrumb && <Breadcrumbs />}
            {children}
            <Footer />
        </>
    )
}