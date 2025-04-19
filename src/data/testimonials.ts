export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sara Jiménez',
    role: 'Corredora de Maratón',
    content: 'Después de una grave lesión en la rodilla, estaba preocupada de no poder correr nunca más. Los terapeutas de Fisiogad crearon un plan de recuperación personalizado, viniendo a mi casa tres veces por semana. Seis meses después, completé mi maratón de regreso. ¡No podría haberlo hecho sin ellos!',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 2,
    name: 'Miguel Rodríguez',
    role: 'Oficinista',
    content: 'Trabajar desde casa me produjo un terrible dolor de espalda que los medicamentos de venta libre no podían aliviar. Las sesiones a domicilio con Fisiogad no solo aliviaron mi dolor sino que me enseñaron la ergonomía adecuada y ejercicios para prevenir problemas futuros. ¡Altamente recomendado!',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 3,
    name: 'Emma Torres',
    role: 'Profesora Jubilada',
    content: 'A mi edad, viajar a una clínica se estaba volviendo difícil. Tener fisioterapia profesional en casa ha cambiado mi vida. Los terapeutas siempre son puntuales, profesionales y muy conocedores. ¡Mi movilidad ha mejorado enormemente!',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 4,
    name: 'David Chávez',
    role: 'Entrenador de Baloncesto',
    content: 'Como alguien que está activo a diario, las lesiones son parte de la vida. Lo que diferencia a Fisiogad es su profunda comprensión de las lesiones específicas del deporte y su compromiso para hacerte volver al juego de forma segura. ¡Su equipo también es de primera calidad!',
    rating: 4,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 5,
    name: 'Olivia García',
    role: 'Madre Primeriza',
    content: 'La recuperación posparto fue mucho más difícil de lo que esperaba. El equipo de Fisiogad diseñó un programa suave que respetaba mi proceso de recuperación mientras fortalecía mi core. Poder tener sesiones en casa mientras mi bebé dormía fue invaluable.',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Trabajador de Construcción',
    content: 'Mi trabajo es físicamente exigente y he tenido mi parte de lesiones. Lo que me impresionó fue cómo entendieron las demandas específicas de mi trabajo y adaptaron ejercicios que no solo me sanarían, sino que me harían más fuerte para mi labor.',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 7,
    name: 'Sophia Martinez',
    role: 'Instructora de Yoga',
    content: 'Incluso como profesional del fitness, me encontré con una lesión en el hombro que estaba afectando mi enseñanza. Los terapeutas de Fisiogad no solo entendieron la biomecánica involucrada, sino que trabajaron conmigo para mantener mi práctica mientras sanaba. Atención verdaderamente excepcional.',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  },
  {
    id: 8,
    name: 'Robert Kim',
    role: 'Ciudadano Senior',
    content: 'Después de mi reemplazo de cadera, la idea de viajar a terapia física era desalentadora. Tener a los terapeutas viniendo a mi casa marcó toda la diferencia. Adaptaron los ejercicios a mis muebles y espacio vital, haciendo la recuperación mucho más fácil.',
    rating: 5,
    image: '/placeholder-avatar.jpg'
  }
];