import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Building, 
  HeartPulse, 
  Boxes, 
  TrendingUp, 
  Maximize2, 
  Wrench, 
  RefreshCw,
  ArrowRight,
  Plus,
  ChevronDown
} from "lucide-react";
import { SERVICES } from "../data";
import ParticleBackground from "./ParticleBackground";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User: User,
  Building: Building,
  HeartPulse: HeartPulse,
  Boxes: Boxes,
  TrendingUp: TrendingUp,
  Maximize2: Maximize2,
  Wrench: Wrench,
  RefreshCw: RefreshCw
};

const SERVICE_DETAILS: Record<string, {
  image: string;
  subtitle: string;
  highlight: string;
  specs: { label: string; value: string }[];
}> = {
  "passenger-elevators": {
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
    subtitle: "Ultra-Smooth High-Rise Transit Solutions",
    highlight: "PASSENGER MOBILITY",
    specs: [
      { label: "Optimal Capacity", value: "450 KG to 1600 KG" },
      { label: "Suited Buildings", value: "Residential Bungalows & Apartments" },
      { label: "Key Technology", value: "PM Gearless Traction & SafeBrakes" }
    ]
  },
  "commercial-elevators": {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200",
    subtitle: "Heavy-Duty High-Traffic Business Flow",
    highlight: "COMMERCIAL PLAZAS",
    specs: [
      { label: "Optimal Capacity", value: "1000 KG to 2500 KG" },
      { label: "Suited Buildings", value: "Corporate Blocks & Shopping Hubs" },
      { label: "Key Technology", value: "Intelligent Grouping & Traffic Dispatch" }
    ]
  },
  "hospital-elevators": {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
    subtitle: "Spacious Lifts with Ultimate Patient Comfort",
    highlight: "MEDICAL & HEALTHCARE",
    specs: [
      { label: "Optimal Capacity", value: "1250 KG to 2000 KG" },
      { label: "Suited Buildings", value: "Hospitals, Clinics & Rehab Centers" },
      { label: "Key Technology", value: "Precise Floor Leveling Safety (±2mm)" }
    ]
  },
  "cargo-lifts": {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    subtitle: "Extremely Heavy-Capacity Freight Logistics",
    highlight: "INDUSTRIAL FREIGHT",
    specs: [
      { label: "Optimal Capacity", value: "1000 KG to 5000+ KG" },
      { label: "Suited Buildings", value: "Manufacturing Plants & Textile Mills" },
      { label: "Key Technology", value: "Anti-skid Platform & Dual Cable Suspension" }
    ]
  },
  "escalators": {
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200",
    subtitle: "Advanced Constant Flow Public Elevating",
    highlight: "RETAIL TRANZIT",
    specs: [
      { label: "Flow Velocity", value: "Up to 9,000 Passengers / Hour" },
      { label: "Suited Buildings", value: "Airports, Multi-Tier Markets & Stations" },
      { label: "Key Technology", value: "Intelligent Speed Controls & Step LEDs" }
    ]
  },
  "moving-walkways": {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    subtitle: "High-Safety Inclined & Horizontal Conveying",
    highlight: "MASS INFRASTRUCTURE",
    specs: [
      { label: "Belt Scale Speed", value: "0.5 Meters / Second Comfort Speed" },
      { label: "Suited Buildings", value: "Hypermarkets & International Terminals" },
      { label: "Key Technology", value: "Slip-resistant Grooves & Dual Combplates" }
    ]
  },
  "elevator-maintenance": {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    subtitle: "Systematic Preventive Inspections & Diagnostics",
    highlight: "MAINTENANCE & AMC",
    specs: [
      { label: "Visit Cadence", value: "Monthly Rigorous Preventive Checkups" },
      { label: "Suited Buildings", value: "All Active Multi-Story Buildings" },
      { label: "Key Technology", value: "24/7 Priority Emergency Support Unit" }
    ]
  },
  "elevator-modernization": {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    subtitle: "Total Upgrades for Outdated Lift Architecture",
    highlight: "MODERNIZATION KITS",
    specs: [
      { label: "Upgraded Matrix", value: "VVVF Inverters & Smart Microprocessors" },
      { label: "Suited Buildings", value: "Older Residential & Commercial Sectors" },
      { label: "Key Technology", value: "Automatic Rescue Devices (ARD) Built-In" }
    ]
  }
};

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const triggerAnchorScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-16 md:py-24 bg-slate-900 text-white scroll-mt-[120px] md:scroll-mt-[150px] overflow-hidden"
      aria-label="Interactive Vertical Mobility Services"
    >
      {/* Interactive Particle Background behind content */}
      <ParticleBackground variant="services" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Expert Solutions
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Show premium elevator solutions for residential, commercial, hospital, industrial, and public-use environments across Pakistan.
          </p>
        </div>

        {/* Accordion Container for Desktop/Tablet */}
        <div className="hidden md:flex flex-row w-full h-[580px] gap-3 overflow-hidden select-none">
          {SERVICES.map((service, idx) => {
            const isActive = idx === activeIdx;
            const IconComponent = iconMap[service.iconName] || User;
            const details = SERVICE_DETAILS[service.id] || {
              image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
              subtitle: "Vertical Transport Solutions",
              highlight: "ELEVATOR SYSTEM",
              specs: []
            };

            const waLink = `https://wa.me/923260523858?text=Hello%20NextGen%20Elevators%2C%20I%20am%20interested%20in%20obtaining%2520a%2520quote%2520for%3A%20${encodeURIComponent(service.title)}`;

            // Inactive styles and Active styles
            return (
              <motion.div
                key={service.id}
                id={`service-panel-${idx}`}
                onClick={() => !isActive && setActiveIdx(idx)}
                layout="position"
                className={`relative flex-grow overflow-hidden rounded-md border text-left cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive 
                    ? "flex-[5] border-red-600 shadow-2xl shadow-red-950/20" 
                    : "flex-[0.6] min-w-[50px] max-w-[80px] bg-[#071A2F]/60 backdrop-blur-[8px] hover:bg-[#071A2F]/85 border-white/5 hover:border-red-500 group"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    // ACTIVE EXPANDED PANEL
                    <motion.div 
                      key="active-panel"
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

                      {/* Active Header (Z-30 for foreground) */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="relative z-20 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center text-white shadow-lg">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-widest text-red-500 block uppercase">
                              {details.highlight}
                            </span>
                            <h3 className="font-display font-bold text-xl text-white">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>

                      {/* Active Content Body */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}
                        className="relative z-20 mt-auto max-w-2xl"
                      >
                        <h4 className="font-display font-medium text-lg text-slate-205 mb-2 tracking-tight">
                          {details.subtitle}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        {/* Mini spec bullet grids */}
                        {details.specs.length > 0 && (
                          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-5 mb-6">
                            {details.specs.map((sp, sIdx) => (
                              <div key={sIdx} className="space-y-1">
                                <span className="text-[11px] font-mono text-slate-400 uppercase block tracking-wider">
                                  {sp.label}
                                </span>
                                <span className="text-xs font-bold text-white font-sans">
                                  {sp.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Call-to-actions */}
                        <div className="flex items-center gap-4">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2.5 bg-red-600 text-white font-medium text-xs font-display uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30 rounded-sm inline-flex items-center gap-2"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerAnchorScroll("contact");
                            }}
                            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white text-xs font-medium font-display uppercase tracking-wider transition-all rounded-sm"
                          >
                            Direct Inquiry
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // INACTIVE VERTICAL TAB
                    <motion.div 
                      key="inactive-tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-between items-center py-8 z-20"
                    >
                      {/* Tiny Indicator Stripe */}
                      <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-red-500 transition-colors" />

                      {/* Rotated text */}
                      <div className="flex items-center justify-center flex-grow py-4">
                        <span 
                          className="font-display font-bold uppercase tracking-widest text-[#cbd5e1] text-xs whitespace-nowrap select-none group-hover:text-red-500 transition-colors rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* Small action trigger element */}
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

        {/* Mobile Accordion (Stacked lists + Collapsible grids) */}
        <div className="block md:hidden space-y-3">
          {SERVICES.map((service, idx) => {
            const isActive = idx === activeIdx;
            const IconComponent = iconMap[service.iconName] || User;
            const details = SERVICE_DETAILS[service.id] || {
              image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
              subtitle: "Vertical Transport solutions",
              highlight: "ELEVATOR SYSTEM",
              specs: []
            };

            const waLink = `https://wa.me/923260523858?text=Hello%20NextGen%20Elevators%2C%20I%20am%20interested%20in%20obtaining%2520a%2520quote%2520for%3A%20${encodeURIComponent(service.title)}`;

            return (
              <div 
                key={service.id}
                id={`service-mob-${idx}`}
                className="border border-white/5 bg-[#071A2F]/50 backdrop-blur-[8px] rounded-md overflow-hidden transition-all duration-300 shadow-lg shadow-black/10"
              >
                {/* Header Switch Tappable Box */}
                <button
                  type="button"
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  className={`w-full py-4 px-5 flex items-center justify-between text-left select-none outline-none ${
                    isActive ? "bg-slate-950 border-b border-red-650" : "bg-slate-950/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center text-white ${
                      isActive ? "bg-red-600" : "bg-slate-800"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-display font-medium text-sm text-white uppercase tracking-tight">
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isActive ? "rotate-180 text-red-500" : ""
                  }`} />
                </button>

                {/* Vertical Expansion Box */}
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
                        {/* Visual Card panel */}
                        <div className="relative h-44 rounded-sm overflow-hidden flex items-end p-4">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${details.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                          
                          <div className="relative z-10">
                            <span className="text-[9px] font-bold text-red-500 tracking-widest uppercase block mb-0.5">
                              {details.highlight}
                            </span>
                            <h4 className="font-display font-bold text-base text-white leading-tight">
                              {details.subtitle}
                            </h4>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {service.desc}
                        </p>

                        {/* Spec List */}
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

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full text-center py-2.5 bg-red-650 text-white font-medium text-xs font-display uppercase tracking-wider hover:bg-red-700 transition-colors rounded-sm inline-flex items-center justify-center gap-2"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => triggerAnchorScroll("contact")}
                            className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-medium font-display uppercase tracking-wider transition-all rounded-sm"
                          >
                            Site Consultation
                          </button>
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

