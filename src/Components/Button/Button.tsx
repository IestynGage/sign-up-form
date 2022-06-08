import FormField from "../FormField/FormField";

export interface ButtonProps {
  label?: string;
}

export default function Button({ label }: ButtonProps) {
  return <button className="w-80 shadow rounded"> {label}</button>;
}
