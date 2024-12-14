import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import * as CheckboxRadix from "@radix-ui/react-checkbox";
import * as LabelRadix from "@radix-ui/react-label";

import s from "./checkbox.module.scss";
import { CheckboxIcon } from "../../assets/icons/checkbox-icon.tsx";

export type CheckboxProps = {
  checked: boolean;
  className?: string;
  id?: string;
  label?: string;
  onCheckedChange: (checked: boolean) => void;
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>;

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckboxProps
>(
  (
    {
      checked,
      className,
      disabled,
      id,
      label,
      onCheckedChange,
      name,
      ...restProps
    },
    ref,
  ) => (
    <div className={s.container}>
      <LabelRadix.Root className={s.label} aria-disabled={disabled}>
        <CheckboxRadix.Root
          {...restProps}
          checked={checked}
          className={s.root + " " + (className ?? "")}
          disabled={disabled}
          name={name}
          id={id}
          onCheckedChange={onCheckedChange}
          ref={ref}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            <CheckboxIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label}
      </LabelRadix.Root>
    </div>
  ),
);
