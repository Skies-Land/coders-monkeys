import clsx from "clsx";

// Définition des propriétés acceptées par le composant Button
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disable" | "ico";
    icon?: any;
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
            variantStyles = "";
            break;
    }

    // Détermine la taille du text dans le bouton
    switch (size) {
        case "small":
            sizeStyles = "text-caption3 font-medium px-[14px] py-[12px]";
            break;
        case "medium": // Taille par défaut
            sizeStyles = "text-caption2 font-medium px-[18px] py-[15px]";
            break;
        case "large":
            sizeStyles = "text-caption1 font-medium px-[22px] py-[18px]"; 
            break;
    }

    // Rendu du composant avec les classes CSS dynamiques
    return (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, "")} 
            onClick={() => console.log("click")} 
            disabled={disabled}
        >
            {children}
        </button>
    );
}