import { Check, ShieldAlert, BadgeInfo } from "lucide-react";
import { AMC_PLANS } from "../data";

export default function MaintenancePlans() {
  return (
    <section 
      id="maintenance" 
      className="py-14 md:py-20 bg-white scroll-mt-[120px] md:scroll-mt-[150px]"
      aria-label="Annual Maintenance Contracts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Preventive Care
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3 mb-4">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ensure long-term passenger safety, prevent sudden technical shutdowns, and protect expensive lift electronics. Choose an AMC plan that matches your daily passenger traffic.
          </p>
        </div>

        {/* 3-Column AMC Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {AMC_PLANS.map((plan) => {
            const encodedText = encodeURIComponent(
              `Hello NextGen Elevators! I would like to Discuss the Maintenance Contract Plan: ${plan.name} (${plan.trafficType}) for my building.`
            );
            const waLink = `https://wa.me/923260523858?text=${encodedText}`;

            return (
              <div 
                key={plan.id}
                className={`flex flex-col rounded-sm p-8 border hover:translate-y-[-4px] transition-all duration-300 relative ${
                  plan.popular 
                    ? "bg-slate-900 text-white border-slate-950 shadow-xl scale-102 z-10" 
                    : "bg-white text-slate-900 border-slate-200 shadow-md"
                }`}
              >
                {/* Popular Highlight Tag */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-0.5 rounded-none shadow-sm">
                    Most Popular
                  </span>
                )}

                {/* Card Title Header */}
                <div className="mb-6">
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-none ${
                    plan.popular ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}>
                    {plan.trafficType}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mt-4 mb-2 uppercase tracking-tight">
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${plan.popular ? "text-slate-300" : "text-slate-500"} leading-relaxed`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Visual Accent/Price Line replacement */}
                <div className={`py-4 border-y my-3 ${
                  plan.popular ? "border-slate-800" : "border-slate-150"
                }`}>
                  <span className="text-[10px] uppercase tracking-wider font-bold block text-slate-400 font-mono">
                    Plan Costing
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight">Customized Quote</span>
                    <span className="text-[10px] text-slate-400 font-mono">Based on Stops</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8 flex-1 py-4">
                  {plan.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3 animate-fade-in">
                      <div className={`w-4 h-4 rounded-none flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? "bg-red-600 text-white" : "bg-slate-900 text-white"
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={`text-xs leading-normal ${
                        plan.popular ? "text-slate-200" : "text-slate-600"
                      }`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Discuss CTA - Direct messaging Link */}
                <div className="mt-auto">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full text-center block font-bold py-4 px-6 rounded-sm text-xs uppercase tracking-wider transition-all shadow-md focus:outline-none ${
                      plan.popular
                        ? "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-lg shadow-red-900/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200"
                    }`}
                  >
                    Discuss This Plan
                  </a>
                  
                  <div className="flex items-center gap-1.5 justify-center mt-4 text-[11px] text-slate-400 font-mono">
                    <BadgeInfo className="w-3.5 h-3.5 stroke-slate-400" />
                    <span>Free lift safety audit included</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* emergency alert banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-sm bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-sm bg-slate-800 text-red-500 flex items-center justify-center shrink-0 border border-slate-700">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base uppercase tracking-tight">
                Immediate Urgent Lift Emergency?
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl leading-normal">
                Our emergency response unit handles immediate elevator outages, technical breakdowns, and dispatch rescues in Karachi, Lahore & Islamabad.
              </p>
            </div>
          </div>
          <a
            href="tel:03260523858"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-sm text-xs sm:text-sm font-bold font-mono tracking-wider shrink-0 whitespace-nowrap focus:outline-none shadow-lg shadow-red-900/30 transition-transform hover:scale-105"
          >
            📞 CALL OUT: 03260523858
          </a>
        </div>

      </div>
    </section>
  );
}
