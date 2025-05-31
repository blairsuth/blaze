import React from 'react';
import { cn } from '../utils/cn';
import { elevation } from '../styles/theme';

export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  icon: React.ReactNode;
  label?: string;
  extended?: boolean;
}

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({
    color = 'primary',
    size = 'medium',
    icon,
    label,
    extended = false,
    className,
    ...props
  }, ref) => {
    const colorClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
      tertiary: 'bg-tertiary-600 text-white hover:bg-tertiary-700',
    };
    
    const sizeClasses = {
      small: extended 
        ? 'h-10 px-3 text-sm' 
        : 'w-10 h-10 text-sm',
      medium: extended 
        ? 'h-14 px-4' 
        : 'w-14 h-14',
      large: extended 
        ? 'h-20 px-6' 
        : 'w-20 h-20',
    };
    
    const iconSizes = {
      small: 'w-5 h-5',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full flex items-center justify-center transition-all',
          extended ? 'gap-2' : '',
          colorClasses[color],
          sizeClasses[size],
          elevation[3],
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          `focus:ring-${color}-600`,
          className
        )}
        {...props}
      >
        <span className={iconSizes[size]}>{icon}</span>
        {extended && label && <span className="font-medium">{label}</span>}
      </button>
    );
  }
);

Fab.displayName = 'Fab';

export default Fab;