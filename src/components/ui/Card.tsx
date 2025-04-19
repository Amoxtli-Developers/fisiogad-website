"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  elevation = 'md',
  hover = true,
  padding = 'md',
  border = false,
  rounded = 'md',
}) => {
  // Shadow elevation styles
  const elevationStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  // Padding styles
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8'
  };

  // Rounded styles
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const baseStyles = `
    bg-background
    ${elevationStyles[elevation]}
    ${paddingStyles[padding]}
    ${roundedStyles[rounded]}
    ${border ? 'border border-gray-200' : ''}
    ${hover ? 'transition-all duration-300 hover:shadow-lg' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  if (onClick) {
    return (
      <motion.div
        whileHover={hover ? { y: -5 } : {}}
        whileTap={{ scale: 0.98 }}
        className={baseStyles}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
};

export default Card;