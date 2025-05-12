"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose, // Import DialogClose
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react"; // For loading state

// Define the form schema using Zod
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }).max(500, {
        message: "Message must not exceed 500 characters.",
    }),
});

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

// CTA Section Component
export default function CtaSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Control dialog state

    // Initialize react-hook-form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // Handle form submission
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        console.log("Form Submitted:", values); // Placeholder for actual submission

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        form.reset(); // Reset form fields
        setIsDialogOpen(false); // Close the dialog on successful submission

        // Optional: Show a success message/toast here
        alert("Thank you! Your message has been sent.");
    }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="container mx-auto px-4 text-center"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Ready to Start Your Project?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                    Let's discuss how we can bring your vision to life. Get in touch today for a free consultation and quote.
                </p>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    {/* Wrap DialogTrigger with motion.div for animation */}
                    <motion.div
                        className="inline-block" // Keep button layout
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <DialogTrigger asChild>
                            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-slate-100">
                                Request a Free Quote
                            </Button>
                        </DialogTrigger>
                    </motion.div>
                    <DialogContent className="sm:max-w-[480px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Get Your Free Quote</DialogTitle>
                            <DialogDescription>
                                Fill out the form below, and we'll get back to you shortly to discuss your project.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project..."
                                                    className="resize-none"
                                                    rows={5}
                                                    {...field}
                                                    disabled={isSubmitting}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    {/* Add DialogClose for the Cancel button */}
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline" disabled={isSubmitting}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </motion.div>
        </section>
    );
}
