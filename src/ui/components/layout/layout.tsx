// COMPONENTS
import { ReactElement } from "react";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { Container } from "../container/container";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

// INTERFACES
interface Props {
    children: React.ReactNode;
    isdisplayBreadcrumb?: boolean;
    withSidebar?: boolean;
}

export const Layout = ({ children, isdisplayBreadcrumb=true , withSidebar}: Props) => {
    
    let view: ReactElement = <></>
    if (withSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3">
                        <UserAccountNavigation />
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        )
    }
    else {
        view = <>{children}</>
    }
    
    return (
        <>
            <Navigation />
            {isdisplayBreadcrumb && <Breadcrumbs />}
            {view}
            <Footer />
        </>
    )
}