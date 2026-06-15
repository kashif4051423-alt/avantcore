import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { cardHover } from '@/constants/animations';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'minimal' | 'bordered';
  hoverable?: boolean;
  className?: string;
}

const Card = ({
  children,
  variant = 'default',
  hoverable = true,
  className = '',
}: CardProps) => {
  const baseClasses = 'rounded-lg transition-all duration-300';

  const variantClasses = {
    default:
      'bg-white border border-gray-200 shadow-sm p-6 md:p-8',
    featured:
      'bg-white border border-gray-200 text-gray-900 p-8 md:p-10 shadow-sm',
    minimal: 'bg-gray-50 border border-gray-200 p-6',
    bordered:
      'bg-white border border-gray-300 p-6 md:p-8',
  };

  return (
    <motion.div
      {...(hoverable ? cardHover : {})}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        hoverable ? 'hover:shadow-lg' : '',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
