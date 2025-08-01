import React from "react";
import { cn } from "../utils/cn";

type ButtonVariant = "filled" | "outlined" | "text";
type ButtonColor = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      color = "primary",
      size = "medium",
      icon,
      fullWidth = false,
      disabled = false,
      loading = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantStyles = {
      filled: {
        primary:
          "bg-primary-600 text-green hover:bg-primary-700 focus:ring-primary-600",
        secondary:
          "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-600",
        tertiary:
          "bg-tertiary-600 text-white hover:bg-tertiary-700 focus:ring-tertiary-600",
      },
      outlined: {
        primary:
          "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-600",
        secondary:
          "border border-secondary-600 text-secondary-600 hover:bg-secondary-50 focus:ring-secondary-600",
        tertiary:
          "border border-tertiary-600 text-tertiary-600 hover:bg-tertiary-50 focus:ring-tertiary-600",
      },
      text: {
        primary: "text-primary-600 hover:bg-primary-50 focus:ring-primary-600",
        secondary:
          "text-secondary-600 hover:bg-secondary-50 focus:ring-secondary-600",
        tertiary:
          "text-tertiary-600 hover:bg-tertiary-50 focus:ring-tertiary-600",
      },
    };
    const sizeStyles = {
      small: "text-sm px-3 py-1.5 gap-1.5",
      medium: "text-base px-4 py-2 gap-2",
      large: "text-lg px-6 py-3 gap-2.5",
    };
    const widthStyles = fullWidth ? "w-full" : "";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant][color],
          sizeStyles[size],
          widthStyles,
          disabledStyles,
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        <span className={loading ? "invisible" : ""}>
          {icon && <span className="inline-flex">{icon}</span>}
          {children && <span>{children}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
