import { Children, CSSProperties } from "react";
import "./Button.css";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

export default function Button({ className, children, style }: ButtonProps) {
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
}
