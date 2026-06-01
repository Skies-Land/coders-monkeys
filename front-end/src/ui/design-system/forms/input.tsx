// DEPENDENCIES
import clsx from "clsx";

// DESIGN SYSTEM
import { Typography } from "../typography/typography";

// INTERFACES
interface Props {
    isLoading?: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "url";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    label?: string;
}

export const Input = ({ 
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted = false,
    label,
}: Props) => {

    return (
        <div className="space-y-2">
            {label && (
                <Typography 
                    variant="caption4" 
                    component="div" 
                    theme={errors[id] ? "danger" : "gray-600"}
                >
                    {label}
                </Typography>
            )}

            <div className="flex items-center">
                {/* ÉLÉMENT INPUT - GAUCHE */}
                {type === "url" && (
                    <div className="p-4 text-gray-600 border-l border-gray-400 rounded-l bg-gray-500/40 border-y">
                        https://
                    </div>
                )}

                {/* ÉLÉMENT INPUT - DROITE */}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        type === "url" ? "rounded-r" : "rounded",
                        isLoading && "cursor-not-allowed",
                        errors[id] 
                            ? "placeholder-alert-danger text-alert-danger" 
                            : "placeholder-gray-600",
                        "w-full p-4 font-light border border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary"
                    )}
                    disabled={isLoading}
                    {...register(id, {
                    required: {
                        value: required,
                        message: errorMsg,
                    },
                    })}
                    autoComplete={isAutoCompleted ? "on" : "off"}
                />
            </div>

            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
};
