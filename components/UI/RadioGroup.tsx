import React from "react";
import { InputHook } from "../../hooks/useInput";
import Radio from "./Radio";

interface RadioGroupProps extends InputHook {
  name: string;
  className?: string;
  children: React.ReactNode;
}

export default function RadioGroup({
  error,
  value,
  onChange,
  name,
  className,
  children,
}: RadioGroupProps) {
  const Radios = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      name,
      onChange,
      passedValue: value,
    });
  });

  return (
    <div className={(className || "") + (error ? " border-2 border-red-300" : "")}>{Radios}</div>
  );
}
