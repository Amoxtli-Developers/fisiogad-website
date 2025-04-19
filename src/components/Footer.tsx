"use client";

import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import * as Separator from "@radix-ui/react-separator";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-alt text-text pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-display">
                            Fisiogad
                        </h3>
                        <p className="mb-4 text-text-light">
                            Servicios profesionales de fisioterapia que vienen a
                            ti. Tratamientos personalizados para todas las
                            partes del cuerpo y condiciones.
                        </p>
                        <div className="flex space-x-4 text-primary">
                            <Link
                                href="#"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-display">
                            Enlaces Rápidos
                        </h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="#hero"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                Inicio
                            </Link>
                            <Link
                                href="#services"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                Servicios
                            </Link>
                            <Link
                                href="#about"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                Nosotros
                            </Link>
                            <Link
                                href="#testimonials"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                Testimonios
                            </Link>
                            <Link
                                href="#contact"
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                Contacto
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-display">
                            Contáctanos
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-start">
                                <MapPin
                                    size={20}
                                    className="text-primary mt-1 mr-3 flex-shrink-0"
                                />
                                <span className="text-text-light">
                                    Calle Terapia 123, Distrito Médico, Ciudad
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone
                                    size={20}
                                    className="text-primary mr-3 flex-shrink-0"
                                />
                                <span className="text-text-light">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Mail
                                    size={20}
                                    className="text-primary mr-3 flex-shrink-0"
                                />
                                <span className="text-text-light">
                                    contacto@fisiogad.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator.Root className="h-px bg-gray-200 my-8" />

                <div className="flex justify-between items-center text-text-light text-sm">
                    <p>
                        &copy; {currentYear} Fisiogad. Todos los derechos
                        reservados.
                    </p>
                    <span>
                        Desarrollado por{" "}
                        <a
                            href="https://www.amoxtli.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Amoxtli Web Developers
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
