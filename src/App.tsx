import React, { useState } from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import TrustStats from "./components/TrustStats";
import Services from "./components/Services";
import AboutAndWhy from "./components/AboutAndWhy";
import Modernization from "./components/Modernization";
import MaintenancePlans from "./components/MaintenancePlans";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { ScrollReveal } from "./components/ScrollReveal";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-rose-600 selection:text-white pb-0">
      {/* Elevator-Door Preloader Overlay */}
      {showPreloader && (
        <Preloader
          onComplete={() => {
            setShowPreloader(false);
          }}
        />
      )}

      {/* Premium Dynamic Global Cursor Dot */}
      <CustomCursor />

      {/* 1. Header Navigation */}
      <Header />

      {/* Main Sections Wrapper */}
      <main className="relative">
        {/* 2. Hero Image Carousel with CTA links & headlines */}
        <HeroCarousel />

        {/* 3. Compact Trust Statistics & support badges */}
        <ScrollReveal yOffset={15} duration={0.5}>
          <TrustStats />
        </ScrollReveal>

        {/* 4. Service category grid cards */}
        <ScrollReveal delay={0.1}>
          <Services />
        </ScrollReveal>

        {/* 5. Company context & Why Choose Us points */}
        <ScrollReveal>
          <AboutAndWhy />
        </ScrollReveal>

        {/* 6. Mechanical lift modernisation systems */}
        <ScrollReveal>
          <Modernization />
        </ScrollReveal>

        {/* 7. AMC maintenance annual contract structures */}
        <ScrollReveal>
          <MaintenancePlans />
        </ScrollReveal>

        {/* 8. Regional locations & Project portfolios handled */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* 9. Interactive FAQ Accordions */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        {/* 10. Multi-field Quotation contact form mapping to WhatsApp triggers */}
        <ScrollReveal yOffset={40}>
          <ContactForm />
        </ScrollReveal>
      </main>

      {/* 11. Corporate detailed brand footer */}
      <Footer />
    </div>
  );
}

