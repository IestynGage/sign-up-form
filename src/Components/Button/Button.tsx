import { CSSProperties } from "react";

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
