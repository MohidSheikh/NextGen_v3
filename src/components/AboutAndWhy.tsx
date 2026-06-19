import { Shield, Sparkles, Compass, Cpu, Zap, HeartHandshake, UserCheck, Eye } from "lucide-react";
import { WHY_CHOOSE_US_POINTS } from "../data";

// Type-safe direct rendering of matching icons for Why Choose Us
const iconMap = [
  Shield, // Safe installation process
  UserCheck, // Skilled technical team
  Cpu, // Quality components
  Zap, // Fast response
  HeartHandshake, // Maintenance support
  Sparkles, // Modern designs
  Compass, // Pakistan-wide project handling
  Eye // Transparent consultation
];

export default function AboutAndWhy() {
  return (
    <section 
      id="about" 
      className="py-14 md:py-20 bg-white scroll-mt-[120px] md:scroll-mt-[150px]"
      aria-label="About NextGen Elevators and Core Value Propositions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid for About NextGen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Text Column: About Us */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1 mb-6">
              About NextGen Elevators
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                NextGen Elevators provides reliable and modern elevator solutions across Pakistan. The company serves homes, apartments, commercial plazas, hospitals, shopping malls, hotels, schools, warehouses, and industrial sites.
              </p>
              <p className="text-slate-500 text-sm md:text-base">
                Our approach blends sound micro-controller mechanics with premium cabin designs. We focus on absolute passenger safety and energy conservation. By establishing swift regional technical grids, we guarantee high-efficiency installation, proactive inspection rhythms, and prompt technical diagnostics whenever you need them.
              </p>
            </div>

            {/* Micro Tag List */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Homes & Villas",
                "Apartment Complexes",
                "Hospital Bed Elevators",
                "Industrial Freight Lifts",
                "Shopping Mall Escalators",
                "High-Rise Commercial Plazas"
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono font-medium px-3 py-1.5 bg-slate-50 text-slate-600 rounded-sm border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Accent Card / Quick Pitch */}
          <div className="lg:col-span-4 lg:col-start-9 bg-slate-900 p-8 sm:p-10 rounded-sm text-white relative overflow-hidden shadow-lg border border-slate-800">
            {/* Geometric architectural grid background line (minimalist) */}
            <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 pointer-events-none flex">
              <div className="w-1/3 border-r border-slate-500 h-full"></div>
              <div className="w-1/3 border-r border-slate-500 h-full"></div>
            </div>
            
            <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold">
              Pakistan Technical Hub
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl mt-2 mb-4 leading-none text-white">
              Karachi to Islamabad
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              From compact hydraulic residential lifts to robust variable-frequency traction elevators, we custom-engineer equipment based on your building's precise structural framework.
            </p>

            <div className="border-t border-slate-800 pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-red-600 shrink-0 rounded-none transform rotate-45" />
                <span className="text-xs font-mono text-slate-200">ISO-compliant engineering parameters</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-red-600 shrink-0 rounded-none transform rotate-45" />
                <span className="text-xs font-mono text-slate-200">Emergency Automatic Rescue Devices (ARD)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-red-600 shrink-0 rounded-none transform rotate-45" />
                <span className="text-xs font-mono text-slate-200">Expert on-site measurements and safety audits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Segment */}
        <div id="why-choose-us" className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
              Why NextGen
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-2 mb-4">
              Our Structural Advantages & Customer Benefits
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Choosing the right elevator partner determines your building's safety, longevity, and overall value.
            </p>
          </div>

          {/* Grid representing the 8 custom advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US_POINTS.map((benefit, idx) => {
              const IconComp = iconMap[idx] || Shield;
              return (
                <div 
                  key={benefit.title}
                  className="bg-white p-6 border border-slate-200 rounded-sm hover:border-slate-400 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col group"
                >
                  <div className="w-8 h-8 rounded-sm bg-slate-900 text-white group-hover:bg-red-600 flex items-center justify-center mb-4 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-2 uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
