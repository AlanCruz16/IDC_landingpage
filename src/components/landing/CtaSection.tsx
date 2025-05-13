"use client";

import React from "react"; // useState removed as form is gone
import { motion } from "framer-motion";
// Zod, react-hook-form, and related UI components for form are removed
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// Button is used by ContactInfoModal, Dialog and related components are also part of ContactInfoModal
// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//     DialogClose,
// } from "@/components/ui/dialog";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Loader2 } from "lucide-react"; // Loader2 was for form submission
import { Mail, Phone } from "lucide-react"; // Mail and Phone icons are still used for direct links
import ContactInfoModal from "@/components/landing/ContactInfoModal"; // Import the new modal

// Form schema is removed
// const formSchema = z.object({ ... });

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

// CTA Section Component
export default function CtaSection() {
    // State for form submission and dialog control is removed as form is gone
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isDialogOpen, setIsDialogOpen] = useState(false);

    // react-hook-form initialization is removed
    // const form = useForm<z.infer<typeof formSchema>>({ ... });

    // onSubmit function is removed
    // async function onSubmit(values: z.infer<typeof formSchema>) { ... }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"> {/* Matched top and bottom padding */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="container mx-auto px-4 text-center"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Listo para empezar tu proyecto?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                    Contáctanos hoy mismo y descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
                </p>

                {/* Replaced Dialog with ContactInfoModal */}
                <motion.div
                    className="inline-block" // Keep button layout
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ContactInfoModal
                        triggerButtonText="Digitaliza tu Empresa"
                        triggerButtonVariant="secondary"
                        triggerButtonClassName="bg-white text-blue-700 hover:bg-slate-100 text-lg px-6 py-3" // Matched size="lg" approx
                    />
                </motion.div>

                {/* Contact Information Section remains */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">
                        Dagoberto Cruz x2
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto text-left">
                        {/* Column 1 */}
                        <div className="space-y-3">
                            <a href="mailto:alandago@hotmail.com" className="flex items-center hover:underline">
                                <Mail className="mr-2 h-5 w-5" />
                                alandago@hotmail.com
                            </a>
                            <a href="tel:6421076483" className="flex items-center hover:underline">
                                <Phone className="mr-2 h-5 w-5" />
                                642 107 6483
                            </a>
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-3">
                            <a href="mailto:Licdagobertocruz@hotmail.com" className="flex items-center hover:underline">
                                <Mail className="mr-2 h-5 w-5" />
                                Licdagobertocruz@hotmail.com
                            </a>
                            <a href="tel:6421166506" className="flex items-center hover:underline">
                                <Phone className="mr-2 h-5 w-5" />
                                642 116 6506
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
