import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { COLORS } from "../../theme/color";

interface InputFieldProps {
    label: string;
    id: string;
    value?: string;
    type: string;
    error?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: UseFormRegisterReturn;
}

const InputField: FC<InputFieldProps> = ({ label, id, onChange, type = "text", values, error }) => {
    return (
        <div className="input-group">
            <label htmlFor={id} className="input-label">
                {label}
            </label>
            <input id={id} type={type} {...values} style={{ borderWidth: 2, borderColor: error ? COLORS.error : COLORS.error }} className={`${error ? "error-border" : ""}`} />
            {error && <div style={{
                color: "red",
                fontSize: 15,
                marginTop: "5px",
                marginBottom: "5"
            }}
                className="error-text">{error.message}</div>}
        </div>
    );
};

export default InputField;
