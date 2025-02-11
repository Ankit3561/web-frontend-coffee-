export const emailValidation = {
    required: "Email is required",
    pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Enter a valid email",
    },
};

export const passwordValidation = {
    required: "Password is required",
    minLength: {
        value: 4,
        message: "Password must be at least 4 characters",
    },
};

export const confirmPasswordValidation = (password: string) => ({
    required: "Confirm password is required",
    validate: (value: string) => value === password || "Passwords do not match",
});