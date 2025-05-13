"use client"; // Required for Framer Motion and event handlers

import React from "react";
import { motion } from "framer-motion";
// Button component is now part of ContactInfoModal trigger
// import { Button } from "@/components/ui/button"; 
import { ArrowRight } from "lucide-react"; // Example icon
import ContactInfoModal from "@/components/landing/ContactInfoModal";

// Hero Section Component
export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Optional: Background Visual/Animation Placeholder */}
            <div className="absolute inset-0 z-0 opacity-10">
                {/* Placeholder for a subtle background pattern, animation, or image */}
                {/* Example: <div className="absolute inset-0 bg-[url('/path/to/your/background.svg')] bg-repeat opacity-5"></div> */}
            </div>

            <div className="relative z-10 text-center px-4 flex flex-col items-center"> {/* Centering content */}
                {/* Centered Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 md:mb-4" // Reduced margin below logo
                >
                    <img src="/IDC_logo1.png" alt="Company Logo" className="h-80 md:h-96 mx-auto" /> {/* Approx 1.5x larger and centered */}
                </motion.div>

                {/* Animated Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
                >
                    Implementación, Desarrollo y Asesoría en Sistemas Computacionales  {/* Placeholder USP */}
                </motion.h1>

                {/* Animated Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8"
                >
                    Desarrollamos Aplicaciones. Implementamos Procesos Digitales. {/* Placeholder Value Prop */}
                </motion.p>

                {/* Animated CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }} // Add hover effect
                    whileTap={{ scale: 0.95 }}   // Add tap effect
                >
                    <ContactInfoModal
                        triggerButtonText={
                            <>
                                Digitaliza tu Empresa
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                        }
                        triggerButtonVariant="default"
                        triggerButtonClassName="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3" // Matched size="lg" approx
                    />
                </motion.div>
            </div>

            {/* Optional: Subtle scroll down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                {/* Add a subtle arrow or chevron down icon here if desired */}
            </motion.div>
        </section>
    );
}
