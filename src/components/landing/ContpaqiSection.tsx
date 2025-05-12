"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Using CheckCircle for consistency

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
        }
    }
};

// Data for the section
const statements = [
    "Venta, Implementación y Capacitación de toda la gama de Sistemas Contpaq i®",
    "Asesoria y Soporte sobre el Uso y Explotación de los Sistemas Contpaq i®.",
    "Diseño de Reportes especiales de la información contenida en los sistemas Contpaq i®"
];

const logos = [
    { src: "/Contpaqi Contabilidad.png", alt: "Contpaqi Contabilidad Logo", width: 180, height: 60 },
    { src: "/contpaqi_submarca_nomina.png", alt: "Contpaqi Nóminas Logo", width: 180, height: 60 },
    { src: "/contpaqi_xml_en_linea.png", alt: "Contpaqi XML en Línea Logo", width: 180, height: 60 },
];

export default function ContpaqiSection() {
    return (
        <section className="py-16 md:py-24 bg-white"> {/* Alternating background */}
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                        Distribuidor Asociado Certificado Contpaq i®
                    </h2>
                </motion.div>

                {/* Content Area: Logos and Statements */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="flex flex-col md:flex-row gap-12 items-center justify-center" // Centering content
                >
                    {/* Logos Column/Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-6 md:w-1/3" // Adjust width as needed
                    >
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="object-contain" // Ensure logos scale nicely
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Statements Column/Section */}
                    <motion.div
                        variants={itemVariants}
                        className="md:w-2/3 space-y-4" // Adjust width and add spacing
                    >
                        {statements.map((statement, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants} // Apply item animation to each statement
                                className="flex items-start text-lg text-slate-600"
                            >
                                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{statement}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
