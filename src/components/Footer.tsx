import React from "react";
import { MapPin, Phone, ArrowUp, Mail } from "lucide-react";
import { Logo } from "./Logo";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
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
    <footer className="bg-[#071A2F] text-slate-100 pt-20 pb-12 relative overflow-hidden">
      
      {/* Visual top border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns - 4 Column Layout perfectly balanced across breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-900/60">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-5">
            <a 
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="inline-block focus:outline-none focus:ring-1 focus:ring-red-600 rounded-sm"
              aria-label="NextGen Elevators - Elevating Your Journey"
            >
              <Logo showText={true} textLight={true} />
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Premium elevator, escalator, lift, and vertical mobility systems designed for safe and efficient operations across residential, commercial, and medical projects in Pakistan.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#E31837] animate-pulse" />
              <span>Technical Grid Active</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E31837] font-bold border-l-2 border-[#E31837] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "About", id: "about" },
                { label: "Modernization", id: "modernization" },
                { label: "Maintenance", id: "maintenance" },
                { label: "Projects", id: "projects" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-slate-300 hover:text-[#E31837] hover:underline underline-offset-4 decoration-[#E31837] transition-all text-xs sm:text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Lift Services */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E31837] font-bold border-l-2 border-[#E31837] pl-3">
              Lift Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {[
                "Passenger Elevators",
                "Commercial Elevators",
                "Hospital Bed Lifts",
                "Cargo / Goods Lifts",
                "Mall Escalator Units",
                "Moving Walkways",
                "Annual Inspections",
                "Cabin Retrofits"
              ].map((serv) => (
                <li key={serv} className="hover:text-[#E31837] transition-colors select-none cursor-default">
                  {serv}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Matrix */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#E31837] font-bold border-l-2 border-[#E31837] pl-3">
              Contact Matrix
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block uppercase tracking-wider font-mono text-slate-500">Contact Number</span>
                  <a href="tel:03260523858" className="text-slate-200 hover:text-[#E31837] font-mono font-semibold block mt-0.5 transition-colors">
                    03260523858
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block uppercase tracking-wider font-mono text-slate-500">Coverage Location</span>
                  <span className="text-slate-200 block mt-0.5 font-medium leading-relaxed">
                    Pakistan-wide supply and technical dispatch
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] block uppercase tracking-wider font-mono text-slate-500">Inquiry Email</span>
                  <a href="mailto:info@nextgenelevators.com" className="text-slate-200 hover:text-[#E31837] font-mono block mt-0.5 transition-colors">
                    info@nextgenelevators.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
            &copy; {new Date().getFullYear()} NextGen Elevators. All rights reserved. 
            <span className="block md:inline md:ml-2 text-slate-400 border-t md:border-t-0 md:border-l border-slate-900 pt-1 md:pt-0 md:pl-2">
              Made with precision for modern building shafts in Pakistan.
            </span>
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-[#071A2F] border border-slate-800 hover:border-[#E31837] text-white hover:text-[#E31837] hover:scale-105 transition-all duration-350 focus:outline-none cursor-pointer rounded-sm shadow-md"
            aria-label="Scroll back to the top of the webpage"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
