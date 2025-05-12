import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ProcessSection from "@/components/landing/ProcessSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Render the sections in order */}
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
