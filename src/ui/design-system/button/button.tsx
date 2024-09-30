// COMPONENTS
import { Spinner } from "../spinner/spinner";

// TYPES
import { IconProps } from "@/types/iconProps";
import { LinkType, LinkTypes } from "@/lib/link-type";

// DEPENDENCIES
import clsx from "clsx";
import Link from "next/link";


// Définition des propriétés acceptées par le composant Button
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disable" | "ico" | "sucess" | "danger";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType;
    action?: Function;
    type?: "button" | "submit";
    fullWith?: boolean;
}

export const Button = ({ 
    size = "medium", // Taille du text par défaut
    variant = "accent", // Style visuel par défaut
    icon,
    iconTheme = "accent", // Thème de l'icône par défaut
    iconPosition = "right", // Position de l'icône par défaut
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal", // Type de lien par défaut
    type = "button", 
    fullWith = false,
    action = () => {}, // Action par défaut
}: Props) => {

    let variantStyles: string = "", 
        sizeStyles: string = "", 
        icoSize: number = 0;

    // Détermine le style visuel du bouton 
    switch (variant) {
        case "accent": // Style par défaut
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disable":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "sucess":
            variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
            break;
        case "danger":
            variantStyles = "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
            break;
        case "ico":
            if (iconTheme === "accent") {  // Style par défaut
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
            }
            break;
    }

    // Détermine la taille du text et de l'icône pour le bouton dans une condition
    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
            }`;
            icoSize = 18;
            break;
        case "medium": // Taille par défaut
            sizeStyles = `text-caption2 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
            } `;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
            }`; 
            icoSize = 24;
            break;
    }

    // Contenu du bouton
    const buttonContent = (
        <>
            {/* Condition pour rendre le Spinner (animation de chargement) en blanc si les props 
                >variant === "accent" || variant === "ico"< sont indiquée, 
                sinon le composant est rendu dans la couleur "primary" 
            */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === "ico" ? (<Spinner size="small" variant="white" />) : (<Spinner size="small" />)}
                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "ico" ? (
                    <icon.icon size={icoSize} />
                ) : (
                    <div className={clsx(icon && "flex items-center gap-1")}>
                        {/* Possitionnement de l'icône à gauche */}
                        {icon && iconPosition === "left" && (
                            <icon.icon size={icoSize} />
                        )}
                        {children}
                        {/* Possitionnement de l'icône à droite */}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize} />
                        )}
                    </div>
                )}
            </div>
        </>
    );

    // Action du bouton
    const handleClick = () => {
        if (action) {
            action();
        }
    }

    // Rendu du bouton
    const buttonElement = (
        <button
            type={type}
            className={clsx(
                variantStyles, 
                sizeStyles, 
                isLoading && "cursor-not-allowed", 
                fullWith && "w-full",
                "relative animate"
            )} 
            onClick={handleClick} 
            disabled={disabled || isLoading ? true : false}
        >
            {buttonContent}
        </button>
        
    );

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="blank">
                    {buttonElement}
                </a>
            );
        } else {
            return <Link href={baseUrl}>{buttonElement}</Link>;
        }
    } 

    return buttonElement;
}