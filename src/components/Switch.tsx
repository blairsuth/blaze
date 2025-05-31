import React from 'react';
import { cn } from '../utils/cn';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, helperText, id, ...props }, ref) => {
    const switchId = id || React.useId();
    
    return (
      <div className="flex items-start">
        <div className="mr-2 flex h-6 items-center">
          <div className="relative">
            <input
              type="checkbox"
              id={switchId}
              className="peer sr-only"
              ref={ref}
              {...props}
            />
            <div
              className={cn(
                "h-6 w-10 rounded-full bg-neutral-300 transition-colors",
                "peer-checked:bg-primary-600",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500/20 peer-focus-visible:ring-offset-1",
                "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
                className
              )}
            >
              <div
                className={cn(
                  "h-5 w-5 translate-x-0.5 translate-y-0.5 transform rounded-full bg-white transition-transform",
                  "peer-checked:translate-x-4.5"
                )}
              />
            </div>
          </div>
        </div>
        {(label || helperText) && (
          <div className="text-sm">
            {label && (
              <label
                htmlFor={switchId}
                className="font-medium text-neutral-900"
              >
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

Switch.displayName = 'Switch';

export default Switch;