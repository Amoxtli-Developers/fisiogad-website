"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import {
    Heart,
    Activity,
    Home,
    UserCheck,
    ArrowRight,
    Repeat,
} from "lucide-react";
import Image from "next/image";
import sport from "@/assets/services/sport.jpg";
import daily from "@/assets/services/daily.jpg";
import home from "@/assets/services/home.jpg";
import followup from "@/assets/services/follow.jpg";
import "@/styles/services.css";
import custom from "@/assets/services/custom.jpg";

const services = [
    {
        id: "sports-injuries",
        icon: <Activity className="h-6 w-6" />,
        title: "Lesiones Deportivas",
        description:
            "Tratamientos especializados para atletas y entusiastas del deporte para recuperarse de lesiones y mejorar el rendimiento.",
        treatments: [
            "Distensiones y desgarros musculares",
            "Esguinces articulares",
            "Codo de tenista/golfista",
            "Rodilla del corredor",
            "Pinzamientos de hombro",
        ],
        image: sport,
    },
    {
        id: "daily-pain",
        icon: <Heart className="h-6 w-6" />,
        title: "Dolores de Actividad Diaria",
        description:
            "Alivio del dolor causado por actividades cotidianas, mala postura o movimientos repetitivos.",
        treatments: [
            "Dolor de espalda y cuello",
            "Corrección postural",
            "Lesiones por esfuerzo repetitivo",
            "Molestias relacionadas con el trabajo",
            "Síndrome de cuello tecnológico",
        ],
        image: daily,
    },

    {
        id: "home-therapy",
        icon: <Home className="h-6 w-6" />,
        title: "Servicios a Domicilio",
        description:
            "Equipos y tratamientos de fisioterapia profesional llevados directamente a tu hogar para máxima comodidad.",
        treatments: [
            "Configuración personalizada en casa",
            "Provisión de equipos",
            "Entorno cómodo",
            "Sin necesidad de viajar",
            "Horarios flexibles",
        ],
        image: home,
    },
    {
        id: "follow-up",
        icon: <Repeat className="h-6 w-6" />,
        title: "Cuidado Continuo",
        description:
            "Planes de tratamiento continuos con seguimientos regulares para garantizar una recuperación y bienestar a largo plazo.",
        treatments: [
            "Monitoreo del progreso",
            "Ajustes en el tratamiento",
            "Estrategias de prevención",
            "Planes de mantenimiento",
            "Seguimientos digitales",
        ],
        image: followup,
    },
    {
        id: "custom-treatment",
        icon: <UserCheck className="h-6 w-6" />,
        title: "Tratamientos Personalizados",
        description:
            "Enfoques de fisioterapia diseñados específicamente para tu cuerpo, condición y objetivos de recuperación.",
        treatments: [
            "Evaluación personalizada",
            "Programas de ejercicios a medida",
            "Técnicas adaptativas",
            "Planes orientados a objetivos",
            "Integración en el estilo de vida",
        ],
        image: custom,
    },
];

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="services" className="py-20 md:py-32 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Nuestros Servicios{" "}
                        <span className="text-primary">Profesionales</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-text-light text-lg"
                    >
                        Ofrecemos tratamientos integrales de fisioterapia
                        adaptados a tus necesidades específicas, tratando cada
                        parte del cuerpo y articulación con atención
                        especializada.
                    </motion.p>
                </div>

                <Tabs.Root defaultValue="sports-injuries" className="w-full">
                    <Tabs.List
                        className="flex flex-wrap justify-center gap-2 mb-12"
                        aria-label="Services"
                    >
                        {services.map((service, index) => (
                            <Tabs.Trigger
                                key={service.id}
                                value={service.id}
                                className="group px-4 py-2 rounded-md text-text-light data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-200"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="text-primary group-data-[state=active]:text-background transition-colors duration-200">
                                        {service.icon}
                                    </div>
                                    <span>{service.title}</span>
                                </div>
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>

                    <div ref={ref}>
                        {services.map((service) => (
                            <Tabs.Content
                                key={service.id}
                                value={service.id}
                                className="focus:outline-none"
                            >
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isInView ? "show" : "hidden"}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch service-container"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="order-2 md:order-1 h-full flex"
                                    >
                                        <div className="bg-background-alt p-8 rounded-lg w-full flex flex-col service-content-card">
                                            <div className="mb-4 text-primary">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-text-light mb-4 text-sm">
                                                {service.description}
                                            </p>

                                            <h4 className="text-base font-bold mb-2">
                                                Los tratamientos incluyen:
                                            </h4>
                                            <ul className="space-y-1 mb-6 flex-grow treatment-list">
                                                {service.treatments.map(
                                                    (treatment, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start text-sm"
                                                        >
                                                            <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                                            <span>
                                                                {treatment}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="order-1 md:order-2 h-full flex"
                                    >
                                        <div className="md:aspect-w-3 md:aspect-h-3 aspect-w-4 aspect-h-2 bg-gradient-to-tr from-primary-light to-secondary-light rounded-lg flex items-center justify-center overflow-hidden w-full h-full service-image-container">
                                            {service.image ? (
                                                <Image
                                                    src={service.image}
                                                    alt={`Tratamiento de ${service.title}`}
                                                    className="w-full h-full object-cover service-image"
                                                    width={400}
                                                    height={400}
                                                    priority
                                                />
                                            ) : (
                                                <div className="text-background text-center p-8 md:p-12">
                                                    <span className="block text-xl md:text-2xl font-bold mb-2">
                                                        Imagen de Muestra
                                                    </span>
                                                    <span className="block opacity-80 text-sm">
                                                        Tratamiento de{" "}
                                                        {service.title}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </Tabs.Content>
                        ))}
                    </div>
                </Tabs.Root>
            </div>
        </section>
    );
};

export default ServicesSection;
