"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  type = 'button',
}) => {
  // Different variant styles
  const variantStyles = {
    primary: 'bg-primary text-background hover:bg-primary-dark',
    secondary: 'bg-secondary text-background hover:bg-secondary-dark',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-background',
    text: 'bg-transparent text-primary hover:bg-primary hover:bg-opacity-10'
  };

  // Different size styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  // Button content with icon
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  const buttonAnimation = {
    tap: { scale: 0.98 }
  };

  if (href) {
    return (
      <Link href={href} className={baseStyles} onClick={onClick}>
        <motion.span 
          whileTap="tap"
          variants={buttonAnimation}
          className="inline-flex items-center justify-center"
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileTap="tap"
      variants={buttonAnimation}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;