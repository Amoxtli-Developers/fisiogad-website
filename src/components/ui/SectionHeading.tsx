"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlightedText,
  subtitle,
  centered = true,
  className = '',
  subtitleClassName = '',
}) => {
  // Split the title to highlight part of it if highlightedText is provided
  let titleContent;
  
  if (highlightedText && title.includes(highlightedText)) {
    const parts = title.split(highlightedText);
    titleContent = (
      <>
        {parts[0]}
        <span className="text-primary">{highlightedText}</span>
        {parts[1]}
      </>
    );
  } else {
    titleContent = title;
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16 ${className}`}
    >
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-6 font-display"
      >
        {titleContent}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`text-text-light text-lg ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;