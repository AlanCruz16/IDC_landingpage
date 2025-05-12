"use client"; // Required for potential client-side interactions like animations

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, LayoutTemplate, ShoppingCart, Wrench } from "lucide-react"; // Example icons

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
        title: "Modern Web Design",
        description: "Visually stunning, user-centric designs.",
        benefit: "Captivate Your Audience",
    },
    {
        icon: Code,
        title: "Custom Development",
        description: "Tailored solutions built with cutting-edge tech.",
        benefit: "Achieve Your Unique Goals",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "Scalable online stores that convert.",
        benefit: "Boost Your Online Sales",
    },
    {
        icon: Wrench,
        title: "Maintenance & Support",
        description: "Reliable support to keep your site running smoothly.",
        benefit: "Ensure Peak Performance",
    },
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

                {/* Added video element with animation (restored motion wrapper) */}
                <motion.div
                    variants={itemVariants} // Use existing item variants for consistency
                    className="my-8 md:my-12" // Add margin top/bottom
                >
                    <video
                        src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" // Test video URL
                        autoPlay
                        loop
                        muted
                        playsInline // Important for mobile playback
                        className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" // Styling
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Grid for Service Cards */}
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
            </div>
        </section>
    );
}
