import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  ArrowUpRight, 
  Plus,
  ChevronDown
} from "lucide-react";
import { PROJECTS } from "../data";
import ParticleBackground from "./ParticleBackground";

const PROJECT_DETAILS: Record<string, {
  image: string;
  subtitle: string;
  headline: string;
  specs: { label: string; value: string }[];
}> = {
  "proj-1": {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
    subtitle: "Residential Apartment Elevator Solution",
    headline: "Comfort, Style & Intelligent Safety Integration",
    specs: [
      { label: "City Location", value: "Lahore, Pakistan" },
      { label: "Transit Capacity", value: "8 Passengers (630 KG)" },
      { label: "Design Finish", value: "Hairline Steel & Luxury Wood" }
    ]
  },
  "proj-2": {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    subtitle: "Commercial Plaza Elevator Setup",
    headline: "High-Speed Duplex Transit Built For Continuous Traffic",
    specs: [
      { label: "City Location", value: "Karachi, Pakistan" },
      { label: "Transit Capacity", value: "12 Passengers (1000 KG)" },
      { label: "Gear Matrix", value: "Duplex Smart Flow Grouping" }
    ]
  },
  "proj-3": {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200",
    subtitle: "Hospital Elevator & Bed Lift Solutions",
    headline: "Absolute Precision Leveling and Stretcher Comfort",
    specs: [
      { label: "City Location", value: "Islamabad, Pakistan" },
      { label: "Transit Capacity", value: "1600 KG High-Grade Stretcher" },
      { label: "Door Profile", value: "1200mm Emergency Auto-Slide" }
    ]
  },
  "proj-4": {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    subtitle: "Hotel Passenger Glass Elevator",
    headline: "Bespoke Panoramic Moving Views Enhancing Aesthetics",
    specs: [
      { label: "City Location", value: "Rawalpindi, Pakistan" },
      { label: "Transit Capacity", value: "10 Passengers (800 KG)" },
      { label: "Glass Structure", value: "Scenic Tempered Safety Glass" }
    ]
  },
  "proj-5": {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    subtitle: "Heavy-Duty Warehouse Cargo Lift",
    headline: "Excellent Structural Integrity For Industrial Logistical Load",
    specs: [
      { label: "City Location", value: "Faisalabad, Pakistan" },
      { label: "Transit Capacity", value: "3000 KG Industrial Grade" },
      { label: "Platform Texture", value: "Rigid Anti-skid Chequered Steel" }
    ]
  },
  "proj-6": {
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200",
    subtitle: "Shopping Mall Escalator Installations",
    headline: "Silent Intelligent Microwave Energy-Saving Escalators",
    specs: [
      { label: "City Location", value: "Multan, Pakistan" },
      { label: "Transit Flow", value: "9,000 Passengers / Hour" },
      { label: "Energy Class", value: "Smart Microwave Auto-Eco Speed" }
    ]
  }
};

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section 
      id="projects" 
      className="relative py-16 md:py-24 bg-slate-950 text-white scroll-mt-[120px] md:scroll-mt-[150px] overflow-hidden"
      aria-label="Vertical mobility project categories we serve"
    >
      {/* Vertical mobility simulated Particle Background behind content */}
      <ParticleBackground variant="projects" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Core Portfolio Scope
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-4 tracking-tight">
            Project Types We Handle
          </h2>
          <p className="text-slate-400 text-base">
            Detailed configurations and technical solutions engineered for diverse building infrastructures across top metropolitan grids in Pakistan.
          </p>
        </div>

        {/* Projects Accordion for Desktop/Tablet */}
        <div className="hidden md:flex flex-row w-full h-[585px] gap-3 overflow-hidden select-none">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === activeIdx;
            const details = PROJECT_DETAILS[proj.id] || {
              image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
              subtitle: "Vertical Lift Systems",
              headline: "Custom Specialized Mobility Installations",
              specs: []
            };

            const encodedText = encodeURIComponent(
              `Hello NextGen Elevators! I am looking to inquire about solutions similar to your project example: "${proj.type} in ${proj.city}".`
            );
            const waQuery = `https://wa.me/923260523858?text=${encodedText}`;

            return (
              <motion.div
                key={proj.id}
                onClick={() => !isActive && setActiveIdx(idx)}
                layout="position"
                className={`relative flex-grow overflow-hidden rounded-md border text-left cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive 
                    ? "flex-[5] border-red-600 shadow-2xl shadow-red-950/20" 
                    : "flex-[0.6] min-w-[50px] max-w-[85px] bg-[#071A2F]/90 hover:bg-[#071A2F]/100 border-slate-800 hover:border-red-500 group"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    // ACTIVE DETAILED VIEW
                    <motion.div 
                      key="active-project"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 z-20"
                    >
                      {/* Background image & gradient overlay */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-100"
                        style={{ backgroundImage: `url(${details.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-10" />

                      {/* Active Header elements */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative z-20 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5 bg-red-600 px-3 py-1.5 rounded-sm">
                          <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                            {proj.serviceType}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-slate-700 px-3 py-1 rounded-sm">
                          <MapPin className="w-3.5 h-3.5 text-red-500" />
                          <span className="text-xs font-bold font-mono tracking-wide">{proj.city}</span>
                        </div>
                      </motion.div>

                      {/* Active Main Content block */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}
                        className="relative z-20 mt-auto max-w-2xl"
                      >
                        <span className="text-[10px] font-bold tracking-widest text-red-500 block uppercase mb-1">
                          {details.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight uppercase">
                          {proj.type}
                        </h3>
                        <h4 className="font-display font-medium text-base text-slate-300 mb-3 tracking-wide">
                          {details.headline}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                          {proj.desc}
                        </p>

                        {/* Specs Data Grid */}
                        {details.specs.length > 0 && (
                          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-5 mb-6 bg-slate-950/30 px-4 rounded-sm">
                            {details.specs.map((sp, sIdx) => (
                              <div key={sIdx} className="space-y-1">
                                <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">
                                  {sp.label}
                                </span>
                                <span className="text-xs font-bold text-white">
                                  {sp.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* User Actions */}
                        <div className="flex items-center gap-4">
                          <a
                            href={waQuery}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs font-display uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30 rounded-sm inline-flex items-center gap-2"
                          >
                            Discuss This Project
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                          <span className="text-[11px] font-mono text-slate-400">
                            Available Pakistan-Wide
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // INACTIVE VERTICAL TAB
                    <motion.div 
                      key="inactive-project-tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between items-center py-8 z-20"
                    >
                      {/* Circle Index or Accent strip */}
                      <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-red-500 transition-colors" />

                      {/* Project Category dynamic rotated Label */}
                      <div className="flex items-center justify-center flex-grow py-4">
                        <span 
                          className="font-display font-bold uppercase tracking-widest text-slate-300 text-xs whitespace-nowrap select-none group-hover:text-red-500 transition-colors rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {proj.city} — {proj.type.split(" ")[0]}
                        </span>
                      </div>

                      {/* Small interactive plus emblem */}
                      <div className="w-8 h-8 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-red-500 group-hover:bg-red-600 transition-all shadow-md">
                        <Plus className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion Stack */}
        <div className="block md:hidden space-y-3">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === activeIdx;
            const details = PROJECT_DETAILS[proj.id] || {
              image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
              subtitle: "Vertical Lift Systems",
              headline: "Custom Specialized Mobility Installations",
              specs: []
            };

            const encodedText = encodeURIComponent(
              `Hello NextGen Elevators! I am looking to inquire about solutions similar to your project example: "${proj.type} in ${proj.city}".`
            );
            const waQuery = `https://wa.me/923260523858?text=${encodedText}`;

            return (
              <div 
                key={proj.id}
                id={`project-mob-${idx}`}
                className="border border-slate-800 bg-[#071A2F]/40 rounded-md overflow-hidden transition-all duration-300"
              >
                {/* Header Tappable strip */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  className={`w-full py-4 px-5 flex items-center justify-between text-left select-none outline-none ${
                    isActive ? "bg-slate-900 border-b border-red-650" : "bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-red-600 rounded-sm text-[10px] font-mono uppercase font-bold text-white">
                      <span>{proj.city}</span>
                    </div>
                    <span className="font-display font-medium text-sm text-white capitalize tracking-tight">
                      {proj.type.replace(" Elevator", "").replace(" System", "")}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isActive ? "rotate-180 text-red-500" : ""
                  }`} />
                </button>

                 {/* Expanded container body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 32 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 space-y-4">
                        {/* Visual image */}
                        <div className="relative h-44 rounded-sm overflow-hidden flex items-end p-4">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${details.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                          
                          <div className="relative z-10">
                            <span className="text-[9px] font-bold text-red-500 tracking-widest uppercase block mb-0.5">
                              {proj.serviceType}
                            </span>
                            <h4 className="font-display font-bold text-base text-white leading-tight">
                              {proj.type}
                            </h4>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {proj.desc}
                        </p>

                        {/* Dynamic specs rows */}
                        {details.specs.length > 0 && (
                          <div className="space-y-2 border-t border-slate-800 pt-3">
                            {details.specs.map((sp, sIdx) => (
                              <div key={sIdx} className="flex justify-between items-center text-xs font-mono py-1 border-b border-slate-900/50">
                                <span className="text-slate-400 capitalize">{sp.label}:</span>
                                <span className="text-white font-bold text-right">{sp.value}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Actions Row */}
                        <div className="pt-2">
                          <a
                            href={waQuery}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full text-center py-2.5 bg-red-600 text-white font-medium text-xs font-display uppercase tracking-wider hover:bg-red-700 transition-colors rounded-sm inline-flex items-center justify-center gap-2 shadow-lg"
                          >
                            Book Site Survey
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

