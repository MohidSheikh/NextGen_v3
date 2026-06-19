import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Keep first open by default for helpful context

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq" 
      className="py-14 md:py-20 bg-white scroll-mt-[120px] md:scroll-mt-[150px]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Help Grid
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900 mt-2 mb-4 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Clear, straightforward answers about our elevator supply, mechanical services, custom timelines, and site policies in Pakistan.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`border rounded-sm overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-slate-800 bg-slate-50/50 shadow-sm" 
                    : "border-slate-200 hover:border-slate-400 bg-white"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-display font-bold text-slate-900 uppercase tracking-tight group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className={`w-4.5 h-4.5 shrink-0 transition-colors ${
                      isOpen ? "text-red-600" : "text-slate-400 group-hover:text-slate-600"
                    }`} />
                    <span className="text-xs sm:text-sm leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-slate-900 text-white border-slate-900 rotate-180" : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                  }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 32 }}
                      className="border-t border-slate-200 overflow-hidden"
                    >
                      <div className="p-5 md:p-6 text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line bg-white">
                        {faq.a}
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
