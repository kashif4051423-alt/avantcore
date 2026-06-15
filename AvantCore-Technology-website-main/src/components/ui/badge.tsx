import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  label: string;
  variant?: 'blue' | 'orange' | 'green' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({
  label,
  variant = 'blue',
  size = 'sm',
  className = '',
}: BadgeProps) => {
  const variantClasses = {
    blue: 'bg-blue-100 text-blue-800',
    orange: 'bg-orange-100 text-orange-800',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-200 text-gray-700',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs font-semibold uppercase tracking-wider',
    md: 'px-4 py-2 text-sm font-semibold uppercase tracking-wider',
  };

  return (
    <span
      className={clsx(
        'inline-block rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
