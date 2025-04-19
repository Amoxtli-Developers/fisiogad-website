"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  image,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-background p-8 rounded-lg shadow-sm h-full flex flex-col relative ${className}`}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-primary opacity-20">
        <Quote size={32} />
      </div>
      
      {/* Author info */}
      <div className="flex items-center mb-4 relative z-10">
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-text-light">{role}</p>
        </div>
      </div>
      
      {/* Rating stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial content */}
      <p className="text-text-light flex-grow mb-4">&quot;{content}&quot;</p>
    </motion.div>
  );
};

export default TestimonialCard;