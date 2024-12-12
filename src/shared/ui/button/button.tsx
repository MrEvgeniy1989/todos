import { ComponentPropsWithoutRef, ReactNode } from "react";
import s from "./button.module.scss";

type Props = {
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button className={`${s.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};
