"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import WhatsappIcon from "@/components/icons/WhatsappIcon"; // Custom WhatsApp Icon

interface ContactPerson {
    name: string;
    email: string;
    phone: string;
    whatsappNumber: string; // Full number with country code for wa.me link
}

const contactDetails: ContactPerson[] = [
    {
        name: "Dagoberto Cruz",
        email: "alandago@hotmail.com",
        phone: "642 107 6483",
        whatsappNumber: "5216421076483",
    },
    {
        name: "Dagoberto Cruz",
        email: "Licdagobertocruz@hotmail.com",
        phone: "642 116 6506",
        whatsappNumber: "5216421166506",
    },
];

interface ContactInfoModalProps {
    triggerButtonText: React.ReactNode; // Changed from string to React.ReactNode
    triggerButtonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    triggerButtonClassName?: string;
}

export default function ContactInfoModal({
    triggerButtonText,
    triggerButtonVariant = "default",
    triggerButtonClassName,
}: ContactInfoModalProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={triggerButtonVariant} className={triggerButtonClassName}>
                    {triggerButtonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center">Información de Contacto</DialogTitle>
                    <DialogDescription className="text-center">
                        Ponte en contacto con nosotros a través de cualquiera de estos medios.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {contactDetails.map((contact, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-800">
                            <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-100">{contact.name}</h3>
                            <div className="space-y-2">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span>{contact.email}</span>
                                </a>
                                <a
                                    href={`tel:${contact.phone.replace(/\s/g, "")}`} // Remove spaces for tel link
                                    className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>{contact.phone}</span>
                                </a>
                                <a
                                    href={`https://wa.me/${contact.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                                >
                                    <WhatsappIcon className="h-5 w-5" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <DialogFooter className="sm:justify-center">
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cerrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
