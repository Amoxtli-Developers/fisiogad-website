"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/testimonials.css";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Corredora de Maratón",
        content:
            "Después de una grave lesión en la rodilla, temía no volver a correr. Los terapeutas de Fisiogad crearon un plan de recuperación personalizado, viniendo a mi casa tres veces por semana. ¡Seis meses después, completé mi maratón de regreso! No podría haberlo logrado sin ellos.",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        role: "Trabajador de Oficina",
        content:
            "Trabajar desde casa me causó un terrible dolor de espalda que los medicamentos de venta libre no podían aliviar. Las sesiones a domicilio con Fisiogad no solo aliviaron mi dolor, sino que me enseñaron ergonomía adecuada y ejercicios para prevenir futuros problemas. ¡Altamente recomendado!",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 3,
        name: "Emma Thompson",
        role: "Maestra Jubilada",
        content:
            "A mi edad, viajar a una clínica se estaba volviendo difícil. Tener fisioterapia profesional en casa ha sido un cambio de vida. Los terapeutas siempre son puntuales, profesionales y muy conocedores. ¡Mi movilidad ha mejorado enormemente!",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 4,
        name: "David Chen",
        role: "Entrenador de Baloncesto",
        content:
            "Como alguien que está activo a diario, las lesiones son parte de la vida. Lo que distingue a Fisiogad es su profundo conocimiento de las lesiones específicas del deporte y su compromiso de devolverte al juego de manera segura. ¡Su equipo también es de primera calidad!",
        rating: 4,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 5,
        name: "Olivia Garcia",
        role: "Nueva Mamá",
        content:
            "La recuperación posparto fue mucho más difícil de lo que esperaba. El equipo de Fisiogad diseñó un programa suave que respetó mi proceso de recuperación mientras fortalecía mi núcleo. Poder tener sesiones en casa mientras mi bebé dormía fue invaluable.",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
];

const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        // Ajustar altura al cargar el componente
        const updateHeight = () => {
            const swiperSlides = document.querySelectorAll(
                ".testimonials-swiper .swiper-slide"
            );
            let maxHeight = 0;

            // Reiniciar estilos para calcular la altura natural
            swiperSlides.forEach((slide) => {
                const slideElement = slide as HTMLElement;
                slideElement.style.height = "auto";
            });

            // Encontrar la altura máxima
            swiperSlides.forEach((slide) => {
                const slideElement = slide as HTMLElement;
                maxHeight = Math.max(maxHeight, slideElement.offsetHeight);
            });

            // Aplicar la altura máxima a todos los slides
            if (maxHeight > 0) {
                swiperSlides.forEach((slide) => {
                    const slideElement = slide as HTMLElement;
                    slideElement.style.height = `${maxHeight}px`;
                });
            }
        };

        // Actualizar después de cargar y cuando cambie el tamaño de ventana
        window.addEventListener("load", updateHeight);
        window.addEventListener("resize", updateHeight);

        // Ajuste inicial después de que el componente se monte
        const timer = setTimeout(updateHeight, 500);

        return () => {
            window.removeEventListener("load", updateHeight);
            window.removeEventListener("resize", updateHeight);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Lo que Dicen{" "}
                        <span className="text-primary">Nuestros Pacientes</span>
                    </h2>
                    <p className="text-text-light text-lg">
                        No te quedes solo con nuestra palabra. Esto es lo que
                        nuestros pacientes dicen sobre sus experiencias con los
                        servicios de fisioterapia a domicilio de Fisiogad.
                    </p>
                </motion.div>

                <div ref={ref} className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="testimonials-swiper"
                        onSwiper={(swiper) => {
                            // Actualizar altura después de que el swiper se inicialice
                            setTimeout(() => {
                                const swiperSlides = document.querySelectorAll(
                                    ".testimonials-swiper .swiper-slide"
                                );
                                let maxHeight = 0;

                                swiperSlides.forEach((slide) => {
                                    const slideElement = slide as HTMLElement;
                                    maxHeight = Math.max(
                                        maxHeight,
                                        slideElement.offsetHeight
                                    );
                                });

                                if (maxHeight > 0) {
                                    swiperSlides.forEach((slide) => {
                                        const slideElement =
                                            slide as HTMLElement;
                                        slideElement.style.height = `${maxHeight}px`;
                                    });
                                }
                            }, 100);
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide
                                key={testimonial.id}
                                className="h-auto"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isInView ? { opacity: 1, y: 0 } : {}
                                    }
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="bg-background-alt p-8 rounded-lg shadow-sm h-full flex flex-col testimonial-card"
                                >
                                    <div className="flex items-center mb-4">
                                        <div>
                                            <h3 className="font-bold">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-text-light">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${
                                                    i < testimonial.rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <div className="testimonial-content flex-grow">
                                        <p className="text-text-light mb-0">
                                            &quot;{testimonial.content}&quot;
                                        </p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
