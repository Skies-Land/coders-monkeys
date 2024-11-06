// DEPENDENCIES
import clsx from "clsx";
import Image from "next/image";

// INTERFACES
interface Props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt }: Props) => {
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
  }

  return (
    <div className={clsx(sizeStyle, "relative bg-gray-400 rounded-full")}>
      <Image 
        fill
        src={src ? src : "/assets/svg/barrel.svg"} 
        alt={alt} 
        className="object-cover object-left-center rounded-full"
      />
    </div>
  );
};
