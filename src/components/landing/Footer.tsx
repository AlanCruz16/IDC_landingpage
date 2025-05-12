import React from "react";
import Image from 'next/image'; // Import Next.js Image component for optimization

// Footer Component
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 md:py-12 bg-slate-800 text-slate-400"> {/* Increased padding a bit */}
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <div className="mb-4"> {/* Add margin below the logo */}
                    <Image
                        src="/IDC_logo1.png"
                        alt="Company Logo"
                        width={100} // Specify a base width
                        height={24} // Specify a base height (adjust aspect ratio as needed)
                        className="mx-auto h-6 md:h-8" // Adjust height and centering
                    />
                </div>

                {/* Copyright Text */}
                <p className="text-sm">
                    &copy; {currentYear} Your Company Name. All rights reserved.
                    {/* Optional: Add links like Privacy Policy or Terms */}
                    {/* | <a href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</a> */}
                </p>
            </div>
        </footer>
    );
}
