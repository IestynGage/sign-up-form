import { CSSProperties } from "react";
import "./Button.css";

export interface ButtonProps {
  className?: string;
  label?: string;
  style?: CSSProperties;
}

export default function Button({ className, label, style }: ButtonProps) {
  return (
    <button className={className} style={style}>
      {" "}
      {label}
    </button>
  );
}
