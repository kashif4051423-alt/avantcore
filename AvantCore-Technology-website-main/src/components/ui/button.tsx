import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ctaButtonHover } from '@/constants/animations';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      icon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
      secondary:
        'bg-yellow-400 text-white border-2 border-yellow-400 hover:bg-yellow-500',
      tertiary:
        'text-blue-600 hover:text-blue-700 underline hover:no-underline',
      ghost: 'text-gray-700 border border-gray-300 hover:bg-gray-50',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        {...ctaButtonHover}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          widthClass,
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">⟳</span>
        ) : (
          icon
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

// Export button variants for shadcn/ui compatibility
const buttonVariants = (props?: ButtonProps) => {
  const { variant = 'primary', size = 'md', fullWidth = false, className } = props || {};
  
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-yellow-400 text-white border-2 border-yellow-400 hover:bg-yellow-500',
    tertiary: 'text-blue-600 hover:text-blue-700 underline hover:no-underline',
    ghost: 'text-gray-700 border border-gray-300 hover:bg-gray-50',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return clsx(
    baseClasses,
    variantClasses[variant as string] || variantClasses.primary,
    sizeClasses[size as string] || sizeClasses.md,
    widthClass,
    className
  );
};

export default Button;
export { Button, buttonVariants };
export type { ButtonProps };
