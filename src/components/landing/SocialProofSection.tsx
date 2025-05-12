"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react"; // For ratings

// Define the structure for a testimonial
interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company?: string; // Optional
    rating?: number; // Optional rating (e.g., 1-5)
}

// Sample testimonial data
const testimonials: Testimonial[] = [
    {
        quote: "Working with this team was a game-changer. Our new website looks incredible and performs flawlessly. Lead generation has increased by 40%!",
        name: "Jane Doe",
        title: "Marketing Director",
        company: "Tech Solutions Inc.",
        rating: 5,
    },
    {
        quote: "They understood our vision perfectly and delivered a complex web application on time and within budget. Highly recommended!",
        name: "John Smith",
        title: "CEO",
        company: "Innovate Startups",
        rating: 5,
    },
    {
        quote: "The level of professionalism and technical expertise is outstanding. They transformed our outdated e-commerce platform into a modern sales machine.",
        name: "Alice Green",
        title: "E-commerce Manager",
        company: "Online Retail Co.",
        rating: 4,
    },
];

// Placeholder client logos (replace with actual image paths/components)
const clientLogos = [
    { name: "Client Logo 1", placeholder: "bg-slate-300" },
    { name: "Client Logo 2", placeholder: "bg-slate-300" },
    { name: "Client Logo 3", placeholder: "bg-slate-300" },
    { name: "Client Logo 4", placeholder: "bg-slate-300" },
    { name: "Client Logo 5", placeholder: "bg-slate-300" },
];

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


// Social Proof Section Component
export default function SocialProofSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
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
                        Trusted by Businesses Like Yours
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. See what our clients have to say about our work.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} // Add hover scale effect
                        >
                            <Card className="h-full flex flex-col bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <CardContent className="pt-6 flex flex-col flex-grow">
                                    {testimonial.rating && (
                                        <div className="flex mb-3">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < testimonial.rating! ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-slate-700 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                                    <div className="mt-auto">
                                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500">
                                            {testimonial.title}
                                            {testimonial.company && `, ${testimonial.company}`}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Client Logos Section (Optional) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold text-slate-700 mb-6">
                        Powering Success For Leading Companies
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {clientLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants} // Reuse item variant for simple fade-in
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Add hover scale effect
                                className={`h-10 w-24 md:h-12 md:w-32 ${logo.placeholder} rounded flex items-center justify-center text-xs text-slate-500`}
                                title={logo.name} // Tooltip for accessibility
                            >
                                {/* Replace with <Image /> component */}
                                {logo.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
