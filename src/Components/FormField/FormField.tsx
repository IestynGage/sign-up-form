import { HTMLInputTypeAttribute } from "react";

export interface FormFieldProps {
  label?: string;

  inputType?: HTMLInputTypeAttribute;

  checkInput?: (formInput: string) => string;
}

/**
 * Generic component to display a form field
 */
export default function FormField({ label = "", inputType }: FormFieldProps) {
  return <input type={inputType}> {label} </input>;
}
