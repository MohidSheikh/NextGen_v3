import { ArrowUpRight, Check } from "lucide-react";
import { MODERNIZATION_POINTS } from "../data";

export default function Modernization() {
  return (
    <section 
      id="modernization" 
      className="py-14 md:py-20 bg-slate-50 scroll-mt-[120px] md:scroll-mt-[150px]"
      aria-label="Elevator Modernization & Upfits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pitch Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
              System Upgrades
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3 mb-6">
              Turn Your Erratic, Old Lift into a Modern, Silent Engine
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              Is your building's old elevator experiencing frequent breakdowns, continuous leveling mismatches, high heating bills, or jerky rides? Don't spend millions executing complete shaft replacements.
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Our specialized modernization packages fit seamlessly into existing concrete wells. We replace vulnerable contact circuits with microprocessor modules and deploy Automatic Rescue Devices so building tenants are never inconvenienced again.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-md flex flex-col gap-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-tight text-slate-900 mb-2">
              Why Modernize?
            </h3>
            
            <div className="space-y-3.5">
              {[
                { bold: "40% Energy Cut", text: "VVVF drives lower daily electrical draw" },
                { bold: "Zero Trapping Risks", text: "Automatic emergency leveling lowers liabilities" },
                { bold: "Tenant Happiness", text: "Silent movements increase building real estate rent values" },
                { bold: "Fast Inspections", text: "Modern equipment conforms strictly to lift certifications" }
              ].map((item, id) => (
                <div key={id} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-red-650 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                    <Check className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <span className="text-slate-700 text-sm">
                    <strong className="text-slate-900 font-semibold">{item.bold}:</strong> {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-150 pt-6 mt-2">
              <a
                href="https://wa.me/923260523858?text=Hello%20NextGen%20Elevators%2C%20I%20want%20to%20discuss%20modernizing%20an%20old%20elevator%20system."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-sm shadow-lg shadow-red-200/50 hover:shadow-red-300/60 hover:translate-y-[-1px] transition-all text-sm inline-flex items-center justify-center gap-1.5 focus:outline-none"
              >
                Discuss Lift Upgrade
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 8 Modernization Points Layout - Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODERNIZATION_POINTS.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-sm p-6 border border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 border border-slate-200 bg-slate-50 px-2 py-0.5">
                  0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 mt-4 mb-2 uppercase tracking-tight">
                  {pt.title}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-normal">
                  {pt.desc}
                </p>
              </div>
              <div className="border-t border-slate-150 pt-4 mt-4">
                <a
                  href={`https://wa.me/923260523858?text=Hello%20NextGen%20Elevators%2C%20I%20want%20to%20inquire%20specifically%20about%3A%20${encodeURIComponent(pt.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-700 hover:text-red-600 transition-colors focus:outline-none inline-flex items-center gap-1"
                >
                  Inquire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
