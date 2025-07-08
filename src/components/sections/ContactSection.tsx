"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Form from '@radix-ui/react-form'
import { MapPin, Phone, Mail, Calendar, Clock, Send } from 'lucide-react'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Teléfono',
      value: '+52 55 4959 1491',
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Correo',
      value: 'Terapia.gad@gmail.com',
      link: 'mailto:Terapia.gad@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Dirección',
      value: 'Félix Cuevas 301, Consultorio- 104, Colonia Del Valle, Benito Juárez, 03104 Ciudad de México, CDMX',
      link: 'https://maps.app.goo.gl/1eUdE5NmNViAsbG6A'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Horario de Atención',
      value: 'Lun-Vie: 9am - 6pm, Sáb: 9am - 2pm',
      link: '#'
    }
  ]
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary bg-opacity-5">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agenda tu <span className="text-primary">Sesión</span>
          </h2>
          <p className="text-text-light text-lg">
            ¿Listo para comenzar tu camino hacia la recuperación? Agenda una sesión o consulta
            con nuestro equipo de fisioterapeutas profesionales hoy mismo.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            
            <Form.Root className="space-y-4">
              <Form.Field name="name">
                <div className="flex items-baseline justify-between mb-2">
                  <Form.Label className="text-sm font-medium">
                    Nombre Completo
                  </Form.Label>
                  <Form.Message className="text-sm text-red-500" match="valueMissing">
                    Por favor ingresa tu nombre
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    required
                    placeholder="Juan Pérez"
                  />
                </Form.Control>
              </Form.Field>
              
              <Form.Field name="email">
                <div className="flex items-baseline justify-between mb-2">
                  <Form.Label className="text-sm font-medium">
                    Correo Electrónico
                  </Form.Label>
                  <Form.Message className="text-sm text-red-500" match="valueMissing">
                    Por favor ingresa tu correo electrónico
                  </Form.Message>
                  <Form.Message className="text-sm text-red-500" match="typeMismatch">
                    Por favor proporciona un correo electrónico válido
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    type="email"
                    required
                    placeholder="juan@ejemplo.com"
                  />
                </Form.Control>
              </Form.Field>
              
              <Form.Field name="phone">
                <div className="flex items-baseline justify-between mb-2">
                  <Form.Label className="text-sm font-medium">
                    Teléfono
                  </Form.Label>
                  <Form.Message className="text-sm text-red-500" match="valueMissing">
                    Por favor ingresa tu número de teléfono
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </Form.Control>
              </Form.Field>
              
              <Form.Field name="service">
                <div className="flex items-baseline justify-between mb-2">
                  <Form.Label className="text-sm font-medium">
                    Tipo de Servicio
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="sports-injury">Lesiones Deportivas</option>
                    <option value="daily-pain">Dolor por Actividad Diaria</option>
                    <option value="custom-treatment">Tratamiento Personalizado</option>
                    <option value="follow-up">Sesión de Seguimiento</option>
                    <option value="consultation">Consulta Inicial</option>
                  </select>
                </Form.Control>
              </Form.Field>
              
              <Form.Field name="message">
                <div className="flex items-baseline justify-between mb-2">
                  <Form.Label className="text-sm font-medium">
                    Mensaje
                  </Form.Label>
                </div>
                <Form.Control asChild>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                    placeholder="Cuéntanos sobre tu condición o preguntas..."
                  />
                </Form.Control>
              </Form.Field>
              
              <Form.Submit asChild>
                <button className="btn-primary w-full mt-6">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </Form.Submit>
            </Form.Root>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start hover:bg-gray-50 p-3 rounded-md transition-colors duration-200"
                  >
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-text-light">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Agenda Cita Rápida</h3>
              <div className="flex items-center justify-center bg-primary bg-opacity-10 p-6 rounded-lg mb-6">
                <Calendar className="h-12 w-12 text-primary mr-4" />
                <div>
                  <p className="text-lg font-bold">¿Necesitas atención urgente?</p>
                  <p className="text-text-light">
                    Llámanos directamente para citas el mismo día
                  </p>
                </div>
              </div>
              <a href="https://wa.link/ma7xty" className="btn-primary w-full text-center">
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection