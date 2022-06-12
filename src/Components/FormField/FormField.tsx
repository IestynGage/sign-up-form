import "./FormField.css";

import { HTMLInputTypeAttribute } from "react";

export interface FormFieldProps {
  placeholder?: string;

  inputType?: HTMLInputTypeAttribute;

  validFormField?: boolean;

  value?: string;

  onChange?: (formInput: string) => void;
}

/**
 * Generic component to display a form field
 */
export default function FormField({
  placeholder = "",
  inputType = "text",
  validFormField = true,
  value = "",
  onChange,
}: FormFieldProps) {
  return (
    <input
      className={validFormField ? "formField" : "formField invalid"}
      type={inputType}
      placeholder={validFormField ? placeholder : ""}
      value={value}
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
    />
  );
}
