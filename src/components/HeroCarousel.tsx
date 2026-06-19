import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HERO_SLIDES } from "../data";
import HeroMouseGlow from "./HeroMouseGlow";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval triggers every 4 seconds for a premium, highly responsive user experience
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleViewServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const headerOffset = 120; // safe offset after header transition
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero-banner"
      className="relative bg-slate-950 overflow-hidden w-full min-h-[calc(100vh-var(--header-total-height))] pt-[var(--header-total-height)] pb-16 sm:pb-20 md:pb-28 flex items-center transition-all duration-350"
      style={{ contentVisibility: "auto" }}
      aria-label="NextGen Elevators Premium Hero Section"
    >
      {/* Absolute Full-Bleed Background Images Layer with Ken Burns Zoom & Linear Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Dark industrial linear overlays for pristine typography contrast */}
            <div className="absolute inset-0 bg-slate-950/60 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10" />
            
            {/* Elegant slow scale zoom for Ken Burns active effect */}
            {index === activeIndex ? (
              <motion.img
                src={slide.image}
                alt={slide.alt}
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full h-full object-cover object-center origin-center"
                referrerPolicy="no-referrer"
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center origin-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {/* Premium Interactive Mouse Highlight Spotlight Glow Effect Component */}
      <HeroMouseGlow />

      {/* Foreground Content Framed Container */}
      <div className="relative z-30 w-full py-2 sm:py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-left text-white">
            
            {/* Dynamic Animated Text Block synchronized with active background */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Badge Certification */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E31837] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3.5 sm:mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-100" />
                  <span className="font-mono text-[9px] sm:text-[10px]">
                    Pakistan's Premier Lift Engineers
                  </span>
                </div>

                {/* Subtitle Tagline */}
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#E31837] font-extrabold mb-2 leading-none">
                  {HERO_SLIDES[activeIndex].subtitle}
                </p>

                {/* Primary Display Heading */}
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] sm:leading-none text-white mb-4 uppercase">
                  {HERO_SLIDES[activeIndex].title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Core Brand Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl font-sans font-normal opacity-90">
              NextGen Elevators engineers robust, secure, and silent vertical transit systems. From elegant panoramic lift cabins to microprocessor controller setups with dynamic Automatic Rescue Devices, we elevate experiences in Pakistan.
            </p>

            {/* Precise Call-to-Actions (Optimized to wrap/stack cleanly on mobile) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/923260523858"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#E31837] hover:bg-[#C9142F] text-white font-bold text-center px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-none shadow-md shadow-red-950/10 hover:shadow-black/10 transition-all duration-300 text-[10px] sm:text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2 border border-transparent"
                id="cta-request-quote"
              >
                REQUEST QUOTE
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/923260523858?text=I%20want%20to%2520book%2520a%2520site%2520survey%2520for%2520elevator."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white hover:text-[#071A2F] text-white font-bold text-center px-5 sm:px-6 py-3.5 sm:py-4.5 rounded-none border border-white/25 hover:border-white transition-all duration-300 text-[10px] sm:text-xs tracking-widest uppercase inline-flex items-center justify-center gap-2"
                id="cta-site-survey"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E31837] group-hover:text-inherit" />
                Site Survey
              </a>

              <button
                onClick={handleViewServices}
                className="w-full sm:w-auto text-center text-slate-400 hover:text-[#E31837] hover:underline font-bold py-3 px-4 transition-all text-xs tracking-wider uppercase font-mono focus:outline-none"
                id="btn-focus-verticals"
              >
                Focus Verticals
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
