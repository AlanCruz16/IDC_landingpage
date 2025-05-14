import React from "react";
import Image from "next/image";

// Footer Component
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pb-4 md:pb-6 bg-slate-800 text-slate-400"> {/* Removed top padding */}
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <div className="mb-0"> {/* Reduced margin below the logo */}
                    <Image
                        src="/IDC_logo1.png"
                        alt="Company Logo"
                        width={500} // Provide base width for aspect ratio calculation
                        height={500} // Provide base height for aspect ratio calculation
                        className="h-80 md:h-96 w-auto mx-auto" // Responsive height, auto width, centered
                    />
                </div>

                {/* Copyright Text */}
                <p className="text-sm">
                    &copy; {currentYear} Informática Dirigida y Computadoras S.A. de C.V. Todos los derechos reservados.
                    {/* Optional: Add links like Privacy Policy or Terms */}
                    {/* | <a href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a> */}
                </p>
            </div>
        </footer>
    );
}
