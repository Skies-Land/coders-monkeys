export interface FormsType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading?: boolean;
    register: any;
    handleSubmit: any;
}

export interface RegisterFormFilelsType {
    email: string;
    password: string;
    how_did_hear: string;
}

export interface LoginFormFilelsType {
    email: string;
    password: string;
}

export interface ForgetPasswordFormFilelsType {
    email: string;
}