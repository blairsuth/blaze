import React from 'react';
import { cn } from '../utils/cn';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, helperText, id, ...props }, ref) => {
    const checkboxId = id || React.useId();
    
    return (
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <div className="relative">
            <input
              id={checkboxId}
              type="checkbox"
              className="peer h-4 w-4 opacity-0 absolute"
              ref={ref}
              {...props}
            />
            <div className={cn(
              "h-4 w-4 rounded border border-neutral-300 flex items-center justify-center",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-primary-500/20",
              "transition-colors",
              "peer-checked:bg-primary-600 peer-checked:border-primary-600",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              className
            )}>
              <Check 
                className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100" 
                strokeWidth={3} 
              />
            </div>
          </div>
        </div>
        {(label || helperText) && (
          <div className="ml-2 text-sm">
            {label && (
              <label htmlFor={checkboxId} className="font-medium text-neutral-900">
                {label}
              </label>
            )}
            {helperText && (
              <p className="text-xs text-neutral-500 mt-0.5">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;