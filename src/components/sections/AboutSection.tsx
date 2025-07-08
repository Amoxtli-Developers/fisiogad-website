"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Award, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import mainlogo from '@/assets/mainlogo.svg'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Equipo Profesional',
      description: 'Llevamos equipos de fisioterapia de nivel hospitalario directamente a tu puerta para los tratamientos más efectivos.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Terapeutas Certificados',
      description: 'Nuestro equipo consta de profesionales licenciados con amplia formación y años de experiencia práctica.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Horarios Flexibles',
      description: 'Programa citas en horarios que funcionen para ti, incluyendo tardes y fines de semana.'
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: 'Enfoque Personalizado',
      description: 'Cada plan de tratamiento está adaptado a tus necesidades específicas, condición y objetivos de recuperación.'
    }
  ]
  
  return (
    <section id="about" className="py-20 md:py-32 bg-background-alt">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <motion.div
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              >
              <Image
                src={mainlogo}
                alt="Imagen del Equipo - Nuestros fisioterapeutas profesionales"
                className="object-cover w-full h-full rounded"
                width={500}
                height={500}
                priority
              />
              </motion.div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre <span className="text-primary">Fisiogad</span>
            </h2>
            <p className="text-text-light mb-6">
              En Fisioterapia y Rehabilitación Gad, ubicada en
              Colonia del Valle, mejoramos tu salud y calidad
              de vida con tratamientos personalizados de
              fisioterapia y rehabilitación física. Atendemos
              lesiones deportivas, problemas de columna
              y procesos posoperatorios.
            </p>
            <p className="text-text-light mb-8">
              Nuestro equipo profesional te acompaña en cada paso de tu
              recuperación con atención cercana y enfocada
              en tus necesidades. Tu bienestar es nuestra prioridad
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-background p-6 rounded-lg shadow-sm"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection