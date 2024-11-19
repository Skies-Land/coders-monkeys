// DEPENDENCIES
import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

// INTERFACES
interface Props {
  size?: "small" | "medium" | "large" | "extra-large";
  src: string;
  alt: string;
  isLoading?: boolean;
}

export const Avatar = ({ size = "medium", src, alt, isLoading }: Props) => {
  let sizeStyle: string;

  switch (size) {
    case "small":
      sizeStyle = "w-[24px] h-[24px]";
      break;
    case "medium": // Taille par défaut
      sizeStyle = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyle = "w-[50px] h-[50px]";
      break;
    case "extra-large":
      sizeStyle = "w-[130px] h-[130px]";
      break;
  }

  return (
    <div 
      className={clsx(
        sizeStyle, 
        isLoading && "flex items-center justify-center",
        "relative bg-gray-300 rounded-full overflow-hidden"
      )}
    >
      {/* Placement d'un filigrane qui s'affiche par-dessus l'image qu'en temps de chargement */}
      <div 
        className={clsx(
          isLoading ? "opacity-40" : "opacity-0",
          "absolute z-10 w-full h-full bg-white animate"
        )}
      />  
      <Image 
        fill
        src={src ? src : "/assets/svg/barrel.svg"} 
        alt={alt} 
        className={clsx(
          // léger flou sur l'image en temps de chargement
          isLoading && "blur-[2px]",
          "object-cover object-center rounded-full animate"
        )}
      />

      {isLoading && <Spinner className="relative z-20" />}
    </div>
  );
};
