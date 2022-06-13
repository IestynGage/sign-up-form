import "./FormField.css";

import { HTMLInputTypeAttribute } from "react";

export interface FormFieldProps {
  /** Label of the form field */
  label?: string;

  /**
   * The type of input e.g. text, date, number
   * @default "text"
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
   **/
  inputType?: HTMLInputTypeAttribute;

  /**
   * If the form field is valid:
   *    - True = valid form field,
   *    - False = invalid form field and displays the error message
   * @default true
   */
  validFormField?: boolean;

  /** The value of the form field, must be set for a value to be shown. */
  value?: string;

  /**
   * The string shown when validFormField is false.
   * @default `${label} cannot be empty`
   */
  errorMessage?: string;

  /** callback used for when the input changes. */
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
