"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PencilRuler, Code, Rocket } from "lucide-react"; // Example icons

// Define the structure for a process step
interface ProcessStep {
    icon: React.ElementType;
    title: string;
    description: string;
}

// Sample process steps
const steps: ProcessStep[] = [
    {
        icon: Search,
        title: "1. Discovery & Strategy",
        description: "We dive deep into your goals, audience, and requirements to build a solid foundation.",
    },
    {
        icon: PencilRuler,
        title: "2. Design & Prototyping",
        description: "Crafting intuitive user experiences and visually stunning designs tailored to your brand.",
    },
    {
        icon: Code,
        title: "3. Development & Testing",
        description: "Building your project with clean code, modern tech, and rigorous testing for quality.",
    },
    {
        icon: Rocket,
        title: "4. Deployment & Launch",
        description: "Seamlessly launching your project and providing support for a successful takeoff.",
    },
];

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

// New variants for alternating slide-in effect
const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 30, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4,
        }
    }
};

// Process Section Component
export default function ProcessSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                        Our Simple, Effective Process
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We follow a structured approach to ensure clarity, efficiency, and outstanding results every time.
                    </p>
                </motion.div>

                {/* Process Steps Grid/Flex */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6" // Grid layout
                // Or use Flex for a horizontal line effect on larger screens:
                // className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 relative"
                >
                    {steps.map((step, index) => (
                        // Add connector lines for flex layout if needed
                        <motion.div
                            key={index}
                            // Apply alternating variants based on index
                            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-5">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-800">{step.title}</h3>
                            <p className="text-slate-600 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
