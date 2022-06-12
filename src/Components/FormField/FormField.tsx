import "./FormField.css";

import { HTMLInputTypeAttribute } from "react";

export interface FormFieldProps {
  label?: string;

  inputType?: HTMLInputTypeAttribute;

  validFormField?: boolean;

  value?: string;

  errorMessage?: string;

  onChange?: (formInput: string) => void;
}

/**
 * Generic component to display a form field
 */
export default function FormField({
  label = "",
  inputType = "text",
  validFormField = true,
  value = "",
  errorMessage,
  onChange,
}: FormFieldProps) {
  return (
    <div style={{ width: "100%" }}>
      <input
        className={validFormField ? "formField" : "formField invalid"}
        type={inputType}
        placeholder={validFormField ? label : ""}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        style={validFormField ? { marginBottom: "16px" } : {}}
      />
      <p className="invalidText">
        {validFormField ? " " : errorMessage ?? `${label} cannot be empty`}
      </p>
    </div>
  );
}
