import React, { useEffect, useState, useRef } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [shouldRender, setShouldRender] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    // Prevent body scrolling while showing the preloader
    document.body.style.overflow = "hidden";

    const finishPreloader = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      document.body.style.overflow = "";
      onComplete();
      setShouldRender(false);
    };

    // Set a timeout to notify completion and unmount the component after exactly 3200ms
    const timer = setTimeout(() => {
      finishPreloader();
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      id="nextgen-preloader"
      role="dialog"
      aria-label="Loading NextGen Elevators website"
      aria-busy="true"
      className="nextgen-preloader-overlay fixed inset-0 z-[99999] overflow-hidden bg-transparent pointer-events-auto select-none"
    >
      {/* LEFT METAL ELEVATOR DOOR PANEL */}
      <div
        className="nextgen-door-left absolute left-0 top-0 bottom-0 w-1/2 h-full border-r border-slate-700/60"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(7,26,47,0.06)), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 2px), linear-gradient(to right, #94a3b8 0%, #cbd5e1 25%, #f8fafc 55%, #cbd5e1 80%, #cbd5e1 98%, #475569 100%)",
        }}
      >
        {/* Subtle Vertical Reflection Highlight */}
        <div className="absolute top-0 bottom-0 left-1/3 w-[1.5px] bg-white/30 blur-[0.5px]" />
        <div className="absolute top-0 bottom-0 right-4 w-16 bg-gradient-to-r from-transparent to-black/20 pointer-events-none" />
      </div>

      {/* RIGHT METAL ELEVATOR DOOR PANEL */}
      <div
        className="nextgen-door-right absolute right-0 top-0 bottom-0 w-1/2 h-full border-l border-slate-700/60"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(7,26,47,0.06)), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 2px), linear-gradient(to right, #475569 0%, #cbd5e1 2%, #cbd5e1 20%, #f8fafc 45%, #cbd5e1 75%, #94a3b8 100%)",
        }}
      >
        {/* Subtle Vertical Reflection Highlight */}
        <div className="absolute top-0 bottom-0 right-1/3 w-[1.5px] bg-white/30 blur-[0.5px]" />
        <div className="absolute top-0 bottom-0 left-4 w-16 bg-gradient-to-l from-transparent to-black/20 pointer-events-none" />
      </div>

      {/* RED GLOWING CENTER SEAM ACCENT */}
      <div
        className="nextgen-center-seam absolute top-0 bottom-0 left-1/2 -ml-[1.5px] w-[3px] bg-[#E31837] z-10"
      />

      {/* CENTER PREMIUM BRANDED INFO PANEL (GLASSMORPHISM CARD) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div
          className="nextgen-center-panel w-[80vw] max-w-[380px] p-5 sm:p-6 bg-[#F8FAFC]/90 backdrop-blur-md border border-white/70 rounded-sm text-center shadow-[0_20px_50px_-10px_rgba(7,26,47,0.25)] pointer-events-auto animate-none"
        >
          {/* Tech subtle radial grids */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-sm"
            style={{
              backgroundImage: `radial-gradient(#071a2f 1.5px, transparent 1.5px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top meta row */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-5 font-mono text-[9px] tracking-wider text-slate-500 uppercase">
            <span>SYSTEM ONLINE // NEXTGEN MOBILITY</span>
            <span className="text-[#E31837] flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 bg-[#E31837] rounded-full animate-ping" />
              ACTIVE
            </span>
          </div>

          {/* Brand typography */}
          <div className="mb-3">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500 block mb-0.5">
              NextGen Mobility Partner
            </span>
            <h2 className="text-xl sm:text-2xl font-mono text-[#071A2F] font-black tracking-wide uppercase leading-none">
              NEXTGEN <span className="text-[#E31837]">ELEVATORS</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-[9px] sm:text-[10px] text-[#071A2F]/80 font-mono tracking-[0.22em] uppercase mb-6">
            Elevating Your Journey
          </p>

          {/* Level Status Indicator block */}
          <div className="flex justify-between items-center bg-[#071A2F] border-l-4 border-[#E31837] px-3.5 py-3 rounded-none font-mono text-[11px] text-[#F8FAFC]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#E31837] font-bold text-xs">▲</span>
              <span className="text-slate-300 font-medium">STATUS</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">LEVEL 0</span>
              <span className="text-[#E31837] font-bold tracking-widest animate-pulse">DEPARTURE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
