// COMPONENETS
import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworkLinks } from "./app-links";

// DEPENDENCIES
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiFacebookFill } from "react-icons/ri";

// TYPES
interface Props {
    className?: string;
    theme?: "gray" | "accent" | "secondary";
}

export const SocialNetworksButtons = ({ className, theme = "accent" }: Props) => {

    const iconList = footerSocialNetworkLinks.map((socialNetwork) => (
        <Button
            key={uuidv4()}
            variant="ico"
            iconTheme={theme}
            icon={{ 
                icon: socialNetwork.icon 
                ? socialNetwork.icon 
                : RiFacebookFill
            }}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ));

    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>
            {iconList}
        </div>
    );
};