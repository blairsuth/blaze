import React from 'react';
import { cn } from '../utils/cn';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    className,
    options,
    label,
    helperText,
    error = false,
    fullWidth = false,
    onChange,
    id,
    ...props
  }, ref) => {
    const selectId = id || React.useId();
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-neutral-900"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            onChange={handleChange}
            className={cn(
              'appearance-none rounded-md border px-3 py-2 pr-10 text-sm outline-none transition-all',
              'focus:ring-2 focus:ring-offset-1',
              error
                ? 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
                : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20',
              fullWidth && 'w-full',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          </div>
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

Select.displayName = 'Select';

export default Select;