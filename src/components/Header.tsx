import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo } from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Modernization", href: "#modernization" },
    { name: "Maintenance", href: "#maintenance" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Monitor scroll for header adjustments
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manage body scroll lock when mobile drawer opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Robust active section intersection observer
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observerOptions = {
      root: null,
      rootMargin: "-28% 0px -68% 0px", // High-precision central scanning slice
      threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      let candidateId = activeSection;
      let maxRatio = -1;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          candidateId = entry.target.id;
        }
      });

      if (candidateId) {
        setActiveSection(candidateId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionElements.forEach((el) => observer.observe(el));

    // Scroll fallback helper specifically catering to window boundaries
    const handleScrollBoundary = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 120) {
        setActiveSection("");
        return;
      }

      // If hitting base line limits, Contact section is active
      if (window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 75) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScrollBoundary, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBoundary);
    };
  }, [activeSection]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Small timeout to allow drawer close transition to finish
      setTimeout(() => {
        const navbarHeader = document.getElementById("navbar-header");
        const headerOffset = navbarHeader ? navbarHeader.offsetHeight : 116; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Optimistically set active state immediately
        if (targetId !== "home") {
          setActiveSection(targetId);
        } else {
          setActiveSection("");
        }
      }, 50);
    }
  };

  return (
    <>
      <div id="home" className="h-0 pointer-events-none" />
      <header
        id="navbar-header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Layer 1: Top Black Utility Bar */}
        <div className="w-full bg-slate-950 text-white h-[var(--topbar-height)] flex items-center border-b border-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            {/* Left side: Contact coords & support metadata */}
            <div className="flex items-center gap-1.5 md:gap-4 ml-0 sm:ml-2">
              <a
                href="tel:03260523858"
                className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-slate-200 hover:text-red-500 transition-colors"
                aria-label="Call NextGen Elevators Support Unit"
              >
                <Phone className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                <span className="text-[10px] uppercase text-slate-400 font-sans tracking-normal hidden xs:inline">Contact:</span>{" "}
                03260523858
              </a>

              {/* Vertical divider */}
              <span className="hidden sm:inline w-[1px] h-3 bg-slate-800" />

              <span className="hidden sm:inline text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                Pakistan-Wide Elevator Services
              </span>
            </div>

            {/* Right side: regional badge */}
            <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="uppercase tracking-widest hidden sm:inline">Official Engineering Grid</span>
              <span className="inline sm:hidden font-sans uppercase text-[8px] tracking-wider text-red-500 font-bold">Grid Active</span>
            </div>
          </div>
        </div>

        {/* Layer 2: Main White Navigation Header */}
        <div
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-[#071A2F]/80 backdrop-blur-[8px] shadow-lg shadow-black/20 border-b border-white/5 h-[64px] md:h-[72px]"
              : "bg-white border-b border-slate-100 h-[var(--navbar-height)]"
          } flex items-center px-4 sm:px-6 lg:px-8`}
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            {/* Left side: Premium Lift Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="focus:outline-none shrink-0"
              aria-label="NextGen Elevators - Elevating Your Journey"
            >
              <Logo showText={true} textLight={scrolled} className="scale-90 sm:scale-100 origin-left" />
            </a>

            {/* Center: Premium Desktop Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-x-6 xl:gap-x-8 ${scrolled ? "text-white" : "text-slate-900"}`}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative py-1.5 text-[11px] xl:text-[12px] font-mono font-extrabold tracking-widest uppercase transition-colors duration-250 ${
                      isActive 
                        ? "text-[#E31837] after:w-full after:left-0" 
                        : (scrolled 
                            ? "text-slate-200 hover:text-[#E31837] after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0" 
                            : "text-slate-800 hover:text-[#E31837] after:w-0 after:left-1/2 hover:after:w-full hover:after:left-0")
                    } after:absolute after:bottom-0 after:h-[1.8px] after:bg-[#E31837] after:transition-all after:duration-350`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right side: Strong red CTA button & Mobile hamburger */}
            <div className="flex items-center gap-x-4">
              {/* REQUEST QUOTE red command button */}
              <a
                href="https://wa.me/923260523858"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-[#E31837] hover:bg-slate-900 text-white px-6 py-4.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md shadow-red-900/10 hover:shadow-slate-900/10 hover:translate-y-[-1px]"
              >
                REQUEST QUOTE
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Mobile Drawer Trigger Button */}
              <button
                onClick={() => setIsOpen(true)}
                className={`lg:hidden p-2.5 rounded-none focus:outline-none transition-all duration-300 ${
                  scrolled
                    ? "text-white hover:text-[#E31837] hover:bg-white/10"
                    : "text-slate-800 hover:text-red-650 hover:bg-slate-50"
                }`}
                aria-label="Open Mobile Drawer Menu"
                aria-expanded={isOpen}
              >
                <Menu className="w-5.5 h-5.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hamburger Menu Side Drawer (Slides LEFT TO RIGHT) */}
      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark solid premium blurred overlay behind drawer */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-[#071A2F]/55 backdrop-blur-[2px] transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Drawer Panel: Slide out from the LEFT */}
        <div
          className={`absolute top-0 bottom-0 left-0 w-[82vw] max-w-[360px] h-screen bg-white shadow-2xl border-r border-[#E5E7EB] flex flex-col z-[100] transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header with Logo and Close - Compact Height ~82px */}
          <div className="h-[82px] px-5 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 bg-white">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="focus:outline-none"
              aria-label="NextGen Elevators - Elevating Your Journey"
            >
              <Logo showText={true} className="scale-90 origin-left" />
            </a>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-500 hover:text-[#E31837] rounded-sm border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none"
              aria-label="Close Mobile Drawer Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-none">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Modernization", href: "#modernization" },
              { name: "Maintenance", href: "#maintenance" },
              { name: "Projects", href: "#projects" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = (link.href === "#home" && activeSection === "") || (activeSection === linkId);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between h-[50px] px-4 text-xs font-mono font-extrabold tracking-widest uppercase border-l-3 transition-all duration-200 ${
                    isActive
                      ? "text-[#E31837] bg-[#FFF1F3] border-[#E31837]"
                      : "text-[#071A2F] hover:text-[#E31837] border-transparent hover:bg-[#F8FAFC]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Drawer Footer Call To Action Box (Compact, Lightweight & Elegant) */}
          <div className="shrink-0 border-t border-[#E5E7EB] bg-white p-4">
            <div className="flex justify-between items-end mb-3 px-1">
              <div className="text-left">
                <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase block">Contact Number</span>
                <a
                  href="tel:03260523858"
                  className="text-sm font-mono font-bold text-[#071A2F] hover:text-[#E31837] transition-colors"
                >
                  03260523858
                </a>
              </div>
              <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">Pakistan-Wide Services</span>
            </div>
            
            <a
              href="https://wa.me/923260523858"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full h-12 bg-[#E31837] hover:bg-[#C9142F] text-white text-xs font-mono font-bold tracking-widest uppercase transition-colors rounded-sm shadow-sm"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

