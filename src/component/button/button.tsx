import React from "react";
import "./Button.css";
import { COLORS } from "../../theme/color";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: keyof typeof COLORS;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = COLORS.primaryOrangeHex,
    disabled = false,
}) => {
    return (
        <button
        className="custom-button"
        style={{ backgroundColor: COLORS[variant] }} // Apply dynamic colors
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </button>
    );
};
