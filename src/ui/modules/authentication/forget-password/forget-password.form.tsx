// TYPES
import { FormsType } from "@/types/forms";

// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

// INTERFACES
interface Props {
    form: FormsType;
}

export const ForgetPasswordForm = ({form}: Props) => {
    const { register, handleSubmit, onSubmit, errors, isLoading } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6 pb-5 space-y-4">
            <Input 
                isLoading={isLoading || false}
                placeholder="votre-email@gmail.com"
                type="email"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="email"
            />

            <Button isLoading={isLoading} type="submit" fullWith>
                Envoyer
            </Button>
        </form>
    );
};