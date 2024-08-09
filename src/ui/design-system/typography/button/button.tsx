import { IconProps } from "@/types/iconProps";
import clsx from "clsx";

// Définition des propriétés acceptées par le composant Button
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disable" | "ico";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
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
        case "ico":
            if (iconTheme === "accent") {  // Style par défaut
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
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

    // Rendu du composant avec les classes CSS dynamiques
    return (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, icoSize)} 
            onClick={() => console.log("click")} 
            disabled={disabled}
        >
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
        </button>
    );
}