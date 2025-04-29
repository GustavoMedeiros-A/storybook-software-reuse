import React from "react";
import "./input.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  borderColor?: string;
  inputSize?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Input = ({
  placeholder,
  value,
  onChange,
  borderColor = "#ccc",
  inputSize = "medium",
  disabled,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      className={`input input-${inputSize} ${className ?? ""}`}
      style={{ borderColor, cursor: disabled ? "not-allowed" : "text" }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};
