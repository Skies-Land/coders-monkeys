export interface FormsType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading?: boolean;
    register: any;
    handleSubmit: any;
}

// Structure des champs du formulaire d'inscription
export interface RegisterFormFilelsType {
    email: string;
    password: string;
    how_did_hear: string;
}

// Structure des champs du formulaire de connexion
export interface LoginFormFilelsType {
    email: string;
    password: string;
}

// Structure des champs du formulaire de réinitialisation de mot de passe
export interface ForgetPasswordFormFilelsType {
    email: string;
}

// Structure des champs du formulaire pour le onboarding de l'utilisateur
export interface OnboardingProfileFormFieldsType {
    displayName: string;
    expertise: string;
    biography: string;
}