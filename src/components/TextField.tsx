import React from "react";
import { cn } from "../utils/cn";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      fullWidth = false,
      leadingIcon,
      trailingIcon,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-900"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leadingIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
              {leadingIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "rounded-md border px-3 py-2 text-sm outline-none transition-all",
              leadingIcon ? "pl-10" : undefined,
              trailingIcon ? "pr-10" : undefined,
              "focus:ring-2 focus:ring-offset-1",
              error
                ? "border-error-500 focus:border-error-500 focus:ring-error-500/20"
                : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20",
              fullWidth && "w-full",
              className
            )}
            {...props}
          />
          {trailingIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500">
              {trailingIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p
            className={cn(
              "text-xs",
              error ? "text-error-500" : "text-neutral-500"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
