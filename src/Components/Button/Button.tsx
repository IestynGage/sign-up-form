import { CSSProperties } from "react";

export interface ButtonProps {
  /** the class name of the button */
  className?: string;

  /** Button label */
  children: React.ReactNode;

  /** Style added to the button */
  style?: CSSProperties;

  /** callback used when the button is clicked */
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
