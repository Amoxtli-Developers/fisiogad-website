"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Card from './Card'

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  href = '#services',
  className = '',
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.4 
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };
  
  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.3,
        duration: 0.3 
      }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={className}
    >
      <Card padding="lg" elevation="sm" className="h-full flex flex-col">
        <motion.div 
          variants={iconVariants}
          className="bg-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-6"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-text-light mb-6 flex-grow">{description}</p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-primary font-medium hover:underline mt-4 group"
        >
          <span>Saber Más</span>
          <motion.span
            variants={linkVariants}
            className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
          >
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;