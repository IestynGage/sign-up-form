import { CSSProperties, MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  className,
  children,
  style,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
