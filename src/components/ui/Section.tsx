"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'alt' | 'primary' | 'none';
  fullHeight?: boolean;
  withContainer?: boolean;
  animate?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  bgColor = 'white',
  fullHeight = false,
  withContainer = true,
  animate = true,
  padding = 'lg',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Background color styles
  const bgStyles = {
    white: 'bg-background',
    alt: 'bg-background-alt',
    primary: 'bg-primary bg-opacity-5',
    none: ''
  };
  
  // Padding styles
  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-20',
    lg: 'py-20 md:py-32'
  };
  
  const baseStyles = `
    ${bgStyles[bgColor]}
    ${paddingStyles[padding]}
    ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''}
    ${className}
  `;
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section
      id={id}
      ref={ref}
      className={baseStyles}
    >
      {withContainer ? (
        <div className="container mx-auto px-4">
          {animate ? (
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              {children}
            </motion.div>
          ) : (
            children
          )}
        </div>
      ) : animate ? (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;