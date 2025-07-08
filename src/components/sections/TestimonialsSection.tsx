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
        name: "Elvia Escobar",
        role: "Ama de casa",
        content:
            "Fui a rehabilitación por un dolor en la muñeca y desde la primera sesión sentí mucha mejoria, lo recomiendo",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 2,
        name: "Allberto Franco Pallas",
        role: "Cliente frecuente",
        content:
            "El lugar está super bonito, la atención es muy buena ya que son profesionales, les gusta su trabajo, salo contendo después de mi terapia, 100% recomendados!!!",
        rating: 5,
        image: "/placeholder-avatar.jpg",
    },
    {
        id: 3,
        name: "Sofía Bañuelos",
        role: "Jugadora de tocho",
        content:
            "Llevo varias sesiones con el equipo de Fisio GAD tras mi ruptura de ligamento cruzado anterior y no puedo estar más agradecida con todo lo que he avanzado. Las terapias han sido clave en mi recuperación y en mi regreso al tocho. Además, las sesiones de descarga muscular me han ayudado muchísimo en las temporadas. 100% recomendados!! Muy atentos y con el equipo necesario.",
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
