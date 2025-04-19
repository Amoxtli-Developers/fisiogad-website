import { ReactNode } from 'react';
import { Activity, Heart, Home, UserCheck, Repeat, Brain, BarChart3 } from 'lucide-react';
import React from 'react';

export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  treatments: string[];
  longDescription?: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: 'sports-injuries',
    icon: React.createElement(Activity, { className: "h-6 w-6 text-primary" }),
    title: 'Lesiones Deportivas',
    description: 'Tratamientos especializados para atletas y entusiastas del deporte para recuperarse de lesiones y mejorar el rendimiento.',
    longDescription: 'Nuestro programa de rehabilitación de lesiones deportivas está diseñado para que los atletas vuelvan a su nivel máximo de rendimiento de manera segura y rápida. Combinamos terapia manual, ejercicios específicos y equipos de última generación para tratar lesiones relacionadas con el deporte. Nuestros terapeutas entienden la biomecánica de varios deportes y pueden proporcionar protocolos de recuperación específicos.',
    treatments: [
      'Distensiones y desgarros musculares',
      'Esguinces articulares',
      'Codo de tenista/golfista',
      'Rodilla del corredor',
      'Pinzamientos de hombro',
      'Rehabilitación de LCA',
      'Lesiones del manguito rotador',
      'Periostitis tibial'
    ]
  },
  {
    id: 'daily-pain',
    icon: React.createElement(Heart, { className: "h-6 w-6 text-primary" }),
    title: 'Lesiones por Actividad Diaria',
    description: 'Alivio del dolor causado por actividades cotidianas, mala postura o movimientos repetitivos.',
    longDescription: 'Las actividades cotidianas y los estilos de vida modernos pueden provocar diversos problemas musculoesqueléticos. Nuestro enfoque para tratar las lesiones por actividad diaria se centra tanto en el alivio inmediato del dolor como en la prevención a largo plazo. Analizamos tus patrones de movimiento diario y la ergonomía para identificar las causas raíz de tu malestar y desarrollar soluciones sostenibles.',
    treatments: [
      'Dolor de espalda y cuello',
      'Corrección de postura',
      'Lesiones por esfuerzo repetitivo',
      'Malestar relacionado con el trabajo',
      'Síndrome de cuello tecnológico',
      'Síndrome del túnel carpiano',
      'Manejo del dolor de ciática',
      'Alivio del dolor de artritis'
    ]
  },
  {
    id: 'home-therapy',
    icon: React.createElement(Home, { className: "h-6 w-6 text-primary" }),
    title: 'Servicios a Domicilio',
    description: 'Equipos y tratamientos profesionales de fisioterapia llevados directamente a tu hogar para máxima comodidad.',
    longDescription: 'Nuestro servicio de fisioterapia a domicilio te brinda la experiencia de una clínica en tu casa. Llegamos con todo el equipo profesional necesario, desde máquinas de ultrasonido hasta dispositivos de electroterapia, camillas de masaje y herramientas de ejercicio. El tratamiento en tu propio entorno nos permite adaptar las recomendaciones a tu situación de vida específica y rutinas diarias.',
    treatments: [
      'Configuración personalizada para el hogar',
      'Provisión de equipos',
      'Ambiente cómodo',
      'Sin necesidad de desplazamientos',
      'Horarios flexibles',
      'Participación familiar en el cuidado',
      'Adaptaciones para el entorno del hogar',
      'Misma calidad que las visitas a clínica'
    ]
  },
  {
    id: 'follow-up',
    icon: React.createElement(Repeat, { className: "h-6 w-6 text-primary" }),
    title: 'Cuidado Continuo',
    description: 'Planes de tratamiento continuos con seguimientos regulares para asegurar una recuperación y bienestar a largo plazo.',
    longDescription: 'La recuperación es un proceso, no un evento único. Nuestros programas de cuidado continuo aseguran que tu progreso continúe mucho después de la fase inicial de tratamiento. Hacemos seguimiento de tus mejoras, ajustamos tu plan de tratamiento según sea necesario, y proporcionamos apoyo continuo para prevenir recaídas y promover un funcionamiento óptimo.',
    treatments: [
      'Seguimiento del progreso',
      'Ajustes del tratamiento',
      'Estrategias de prevención',
      'Planes de mantenimiento',
      'Chequeos digitales',
      'Programas de ejercicio a largo plazo',
      'Reevaluaciones periódicas',
      'Coaching de bienestar'
    ]
  },
  {
    id: 'custom-treatment',
    icon: React.createElement(UserCheck, { className: "h-6 w-6 text-primary" }),
    title: 'Tratamientos Personalizados',
    description: 'Enfoques de fisioterapia adaptados diseñados específicamente para tu cuerpo, condición y objetivos de recuperación.',
    longDescription: 'No hay dos cuerpos o lesiones iguales, por eso nunca usamos un enfoque estándar. Nuestros planes de tratamiento personalizados comienzan con una evaluación integral de tu condición, historial médico, estilo de vida y objetivos. A partir de ahí, elaboramos un programa terapéutico único que aborda tus necesidades específicas y se adapta a medida que avanzas.',
    treatments: [
      'Evaluación personalizada',
      'Programas de ejercicios a medida',
      'Técnicas adaptativas',
      'Planes orientados a objetivos',
      'Integración al estilo de vida',
      'Enfoques multimodales',
      'Ajustes basados en el progreso',
      'Cronogramas de recuperación individuales'
    ]
  },
  {
    id: 'neurological-rehab',
    icon: React.createElement(Brain, { className: "h-6 w-6 text-primary" }),
    title: 'Rehabilitación Neurológica',
    description: 'Atención especializada para condiciones que afectan al sistema nervioso, mejorando la movilidad y calidad de vida.',
    longDescription: 'Nuestro programa de rehabilitación neurológica ayuda a pacientes con afecciones que involucran al cerebro, médula espinal y sistema nervioso. Nos enfocamos en mejorar la movilidad, reducir síntomas y aumentar la calidad de vida mediante técnicas terapéuticas especializadas dirigidas a las vías neuronales y la recuperación de la función motora.',
    treatments: [
      'Recuperación post-ictus',
      'Manejo de Parkinson',
      'Cuidado de esclerosis múltiple',
      'Equilibrio y coordinación',
      'Entrenamiento de la marcha',
      'Terapia de movimiento funcional',
      'Integración cognitivo-motora',
      'Capacitación en equipos adaptativos'
    ]
  },
  {
    id: 'performance-enhancement',
    icon: React.createElement(BarChart3, { className: "h-6 w-6 text-primary" }),
    title: 'Mejora del Rendimiento',
    description: 'Lleva tu rendimiento atlético o físico al siguiente nivel con entrenamiento y técnicas especializadas.',
    longDescription: 'Nuestro programa de mejora del rendimiento está diseñado para atletas e individuos activos que buscan optimizar sus capacidades físicas. Utilizando herramientas de evaluación avanzadas y metodologías basadas en evidencia, identificamos áreas de mejora e implementamos intervenciones específicas para aumentar la fuerza, flexibilidad, resistencia y rendimiento general.',
    treatments: [
      'Análisis biomecánico',
      'Entrenamiento específico para deportes',
      'Eficiencia de movimiento',
      'Estrategias de prevención de lesiones',
      'Optimización de la recuperación',
      'Pruebas de rendimiento',
      'Mejora de la movilidad',
      'Entrenamiento de fuerza funcional'
    ]
  }
];