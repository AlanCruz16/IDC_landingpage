import React from "react";

// Footer Component
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pb-4 md:pb-6 bg-slate-800 text-slate-400"> {/* Removed top padding */}
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <div className="mb-0"> {/* Reduced margin below the logo */}
                    <img src="/IDC_logo1.png" alt="Company Logo" className="h-80 md:h-96 mx-auto" /> {/* Match Hero section size */}
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
