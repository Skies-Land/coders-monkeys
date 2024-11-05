// TYPE
import { FormsType } from "@/types/forms";

// DESIGN SYSTEM
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
    form: FormsType
}

export const ProfileStepForm = ({ form }: Props) => {

    const { register, errors, isLoading = false } = form;

    return (
        <form className="w-full max-w-md space-y-4">
            <Input 
                label="Pseudo"
                isLoading={isLoading}
                placeholder="Indique ton pseudo"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner un pseudo"
                id="displayName"
            />
            <Input 
                label="Spécialité"
                isLoading={isLoading}
                placeholder="Développeur front-end React..."
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ton expertise"
                id="expertise"
            />
            <Textarea 
                label="Biographie"
                isLoading={isLoading}
                placeholder="Indique une courte description de toi et ton parcours..."
                rows={5}
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="biography"
                required={false}
            />
        </form>
    )
};