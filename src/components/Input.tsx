import React from 'react';
import { cn } from '../utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    helperText, 
    error = false, 
    fullWidth = false,
    id,
    ...props 
  }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-900"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'rounded-md border px-3 py-2 text-sm outline-none transition-all',
            'focus:ring-2 focus:ring-offset-1',
            error
              ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
              : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
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

Input.displayName = 'Input';

export default Input;