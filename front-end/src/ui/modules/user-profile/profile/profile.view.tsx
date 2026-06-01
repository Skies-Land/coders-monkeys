// COMPONENTS
import { Typography } from "@/ui/design-system/typography/typography"
import { ProfileForm } from "./profile.form"

// TYPES
import { FormsType } from "@/types/forms"

// PROPS
interface Props {
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    form: FormsType;
}

export const ProfileView = ({form, imagePreview, uploadProgress, handleImageSelect}: Props) => {
    return (
        <div className="space-y-5">
            <Typography variant="h1" component="h1">
                Mon compte
            </Typography>
            <ProfileForm 
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                handleImageSelect={handleImageSelect}
                form={form} 
            />
        </div>
    )
}