import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

// Reusable animated component that triggers when in view
export const AnimateOnScroll: React.FC<{
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}> = ({ 
  children, 
  variants, 
  className = '', 
  delay = 0,
  once = true,
  amount = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animations
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}> = ({ 
  children, 
  className = '',
  delayChildren = 0,
  staggerChildren = 0.1,
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Item component to be used inside StaggerContainer
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}> = ({ 
  children, 
  className = '',
  variants
}) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animation wrapper for sliding in from different directions
export const SlideIn: React.FC<{
  children: React.ReactNode;
  direction: 'left' | 'right' | 'up' | 'down';
  className?: string;
  delay?: number;
  once?: boolean;
}> = ({ 
  children, 
  direction, 
  className = '', 
  delay = 0,
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });
  
  const directionVariants = {
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.5,
          delay
        }
      }
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.5,
          delay
        }
      }
    },
    up: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay
        }
      }
    },
    down: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay
        }
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
};