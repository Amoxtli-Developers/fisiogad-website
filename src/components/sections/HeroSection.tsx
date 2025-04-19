"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "@/assets/hero.jpg";

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="pt-32 pb-20 md:pt-40 md:pb-32 relative bg-background-alt"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text">
                            Fisioterapia Profesional{" "}
                            <span className="text-primary">A Domicilio</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-light mb-8 max-w-lg">
                            Tratamientos personalizados para lesiones
                            deportivas, dolores por actividades diarias y
                            rehabilitación utilizando equipo profesional y
                            cuidado continuo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="btn-primary">
                                Agendar una Sesión
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                <span>Explorar Servicios</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src={hero}
                                    alt="Fisioterapeuta atendiendo a un paciente"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Markers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 py-8 px-6 bg-background rounded-lg shadow-md"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">
                                5+
                            </p>
                            <p className="text-text-light">
                                Años de Experiencia
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">
                                1000+
                            </p>
                            <p className="text-text-light">
                                Pacientes Satisfechos
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">
                                15+
                            </p>
                            <p className="text-text-light">
                                Tipos de Tratamientos
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary mb-2">
                                24/7
                            </p>
                            <p className="text-text-light">
                                Soporte Disponible
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
