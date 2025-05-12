"use client"; // Required for potential client-side interactions like animations

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, LayoutTemplate, CloudDownload, Wrench, CheckCircle } from "lucide-react"; // Added CheckCircle

// Define the structure for a service item
interface ServiceItem {
    icon: React.ElementType;
    title: string;
    description: string;
    benefit: string; // Focus on the benefit
}

// Sample service data
const services: ServiceItem[] = [
    {
        icon: LayoutTemplate,
        title: "Prácticas de Diseño Moderno",
        description: "Diseño funcional y centrado en el usuario.",
        benefit: "Faciliadad de Uso y Navegación",
    },
    {
        icon: Code,
        title: "Desarrollo Personalizado",
        description: "Software a la medida de tus necesidades.",
        benefit: "Soluciona tu Problema con Software",
    },
    {
        icon: CloudDownload,
        title: "Libre de Proceses Anticuados",
        description: "Sistema web para acceder desde cualquier lugar.",
        benefit: "Simplifica la Administración",
    },
    {
        icon: Wrench,
        title: "Soporte Técnico en Línea",
        description: "Cambios, mejoras y solución de errores online.",
        benefit: "Sin Paros en tu Empresa",
    },
];

// List of software capabilities for the scrolling animation
const softwareCapabilities: string[] = [
    "Catálogo de Clientes",
    "Control de Inventario",
    "Gestión de Ventas",
    "Administración de Compras",
    "Gestión de Proveedores",
    "Catálogo de Productos",
    "Historial de Ventas",
    "Procesamiento de Pedidos",
    "Gestión de Empleados",
    "Control de Gastos",
    "Reportes y Análisis",
    "Ticketing",
    "Punto de Venta",
    "Calendario de Citas",
    "Cotizaciones",
    "Mensajes Automáticos",
    "Recordatorios Automáticos",
    "Bases de Datos",
    "Migración de Datos",
    "Integración Sistema Existente",
];

// Animation variants for staggering children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger animation of child cards
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Services Section Component
export default function ServicesSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible" // Trigger animation when in view
                    viewport={{ once: true, amount: 0.2 }} // Adjust viewport settings as needed
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                        Digitaliza tu Empresa {/* Section Headline */}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Deja el papel. Deja Excel. Administra tu empresa desde tu computadora, tu celular, o tu tablet. {/* Section Subheadline */}
                    </p>
                </motion.div>

                {/* New Row: Video on Left, Scrolling List on Right */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 my-12 md:my-16 items-center">
                    {/* Video Section (Left) - Updated Width */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full md:w-[70%]" // Explicit 70% width
                    >
                        <video
                            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" // Test video URL
                            autoPlay
                            loop
                            muted
                            playsInline // Important for mobile playback
                            className="rounded-lg shadow-lg w-full" // Removed max-w and mx-auto
                        >
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                    {/* Infinite Scrolling List Section (Right) - Updated Width, Title Moved, Styling Changed */}
                    <div className="w-full md:w-[30%] flex flex-col items-center md:items-start"> {/* Explicit 30% width and flex container for title */}
                        <h3 className="text-xl font-semibold text-slate-700 mb-4 text-center md:items-start">Alcance de Desarrollo</h3> {/* Title remains here */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full h-64 md:h-80 overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" // Added gradient mask
                        >
                            <motion.ul
                                className="absolute top-0 left-0 w-full"
                                animate={{
                                    translateY: ["0%", "-50%"], // Animate from start to the point where the duplicated list starts
                                }}
                                transition={{
                                    duration: 20, // Adjust duration for speed (longer = slower)
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {/* Duplicate the list for seamless looping */}
                                {[...softwareCapabilities, ...softwareCapabilities].map((capability, index) => (
                                    <li key={index} className="flex items-center text-slate-600 py-2"> {/* Removed px-4 and border */}
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                                        <span>{capability}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </div>
                </div> {/* Closing tag for the flex row */}

                {/* Grid for Service Cards (Remains below) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="items-center">
                                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-slate-800">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-slate-600 mb-3">{service.description}</CardDescription>
                                    <p className="font-medium text-blue-700">{service.benefit}</p> {/* Benefit highlighted */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div> {/* Closing tag for the container div */}
        </section>
    );
}
