// CONTEXT
import { useAuth } from "@/context/AuthUserContext";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";

// DEPENDENCIES
import clsx from "clsx";
import { RiCamera2Fill } from "react-icons/ri";

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number
    isLoading: boolean;
}

export const UploadAvatar = ({ handleImageSelect, imagePreview, uploadProgress, isLoading }: Props) => {
    
    const { authUser } = useAuth();
    
    // Style de la barre de progression de l'upload
    const uploadProgressBarStyle = `fixed top-0 left-0 w-full h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`;

    return (    
        <div className="flex items-center gap-5">
            {/* Barre de progression de l'upload en pourcentage */}
            <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%`}} />

            <label className={clsx(
                isLoading ? "cursor-not-allowed" : "cursor-pointer",
                "inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium animate"
            )}>
                <div className="flex items-center gap-2">
                    <RiCamera2Fill />
                    <span>Choisir un fichier</span>
                </div>
                <input 
                    type="file" 
                    disabled={isLoading}
                    onChange={handleImageSelect} 
                    className="hidden" 
                />
            </label>

            <Avatar 
                size="extra-large" 
                alt="Avatar" 
                isLoading={isLoading}
                src={
                    // Condition vérifiant si la propriété imagePreview contient une valeur.
                    imagePreview
                        // Si imagePreview est défini et est une chaïne de caractères (URL ou base64),
                        ? typeof imagePreview === "string" 
                            // utilisation de la valeur de imagePreview comme source de l'image
                            ? imagePreview
                            // si imagePreview est défini, mais n'est pas une chaïne, conversion de la valeur en chaîne de caractères.
                            : String(imagePreview)
                        // Si imagePreview n'est pas défini, vérification si l'utilisateur a une photo de profil et affichage de cette photo.
                        : authUser.userDocument.photoURL ? authUser.userDocument.photoURL
                        // Si aucune image n'a été sélectionnée, utilisation de l'image par défaut.
                        : "/assets/svg/camera.svg"
                }
            />
        </div>
    );
};