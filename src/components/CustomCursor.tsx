import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);

  // Position and transition references for high-performance zero-re-render animation
  const targetX = useRef(0);
  const targetY = useRef(0);
  
  const currentXInner = useRef(0);
  const currentYInner = useRef(0);
  const currentXOuter = useRef(0);
  const currentYOuter = useRef(0);

  const targetScaleInner = useRef(1);
  const currentScaleInner = useRef(1);
  const targetScaleOuter = useRef(1);
  const currentScaleOuter = useRef(1);

  const targetOpacity = useRef(0);
  const currentOpacity = useRef(0);

  const hasEntered = useRef(false);
  const rafId = useRef<number | null>(null);

  // Easing factors
  const positionEaseInner = 0.28; // Inner dot reacts very quickly for responsive feeling
  const positionEaseOuter = 0.14; // Outer ring floats elegantly behind with cinematic lag/trail
  const scaleEase = 0.16;
  const opacityEase = 0.15;

  useEffect(() => {
    const checkMobile = () => {
      const mobileWidth = window.innerWidth < 768;
      const touchCapable = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(mobileWidth || touchCapable);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
      targetOpacity.current = 1;

      if (!hasEntered.current) {
        currentXInner.current = e.clientX;
        currentYInner.current = e.clientY;
        currentXOuter.current = e.clientX;
        currentYOuter.current = e.clientY;
        hasEntered.current = true;
      }

      // Check hover in real-time for any clickable elements matching user guidelines
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-cursor='button'], .cursor-pointer"
        );
        
        if (isClickable) {
          targetScaleInner.current = 1.8;   // Scale from 1 to around 1.8
          targetScaleOuter.current = 1.45;  // Scale from 1 to around 1.45
        } else {
          targetScaleInner.current = 1.0;
          targetScaleOuter.current = 1.0;
        }
      }
    };

    const handleMouseLeave = () => {
      targetOpacity.current = 0;
    };

    const handleMouseEnter = () => {
      targetOpacity.current = 1;
    };

    // Attach listeners on window and document level
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const animateCursor = () => {
      // 1. Position Interpolation with premium trailing factor differences
      currentXInner.current += (targetX.current - currentXInner.current) * positionEaseInner;
      currentYInner.current += (targetY.current - currentYInner.current) * positionEaseInner;

      currentXOuter.current += (targetX.current - currentXOuter.current) * positionEaseOuter;
      currentYOuter.current += (targetY.current - currentYOuter.current) * positionEaseOuter;

      // 2. Scale Interpolation
      currentScaleInner.current += (targetScaleInner.current - currentScaleInner.current) * scaleEase;
      currentScaleOuter.current += (targetScaleOuter.current - currentScaleOuter.current) * scaleEase;

      // 3. Opacity Interpolation
      currentOpacity.current += (targetOpacity.current - currentOpacity.current) * opacityEase;

      const outerEl = document.getElementById("global-cursor-outer");
      const innerEl = document.getElementById("global-cursor-inner");

      // Set visibility and coordinates strictly via direct DOM reference to bypass Virtual DOM completely
      if (outerEl) {
        if (currentOpacity.current < 0.01) {
          outerEl.style.opacity = "0";
        } else {
          outerEl.style.opacity = currentOpacity.current.toString();
          // Center-offset outer ring: half of w-9 h-9 is 18px
          outerEl.style.transform = `translate3d(${currentXOuter.current - 18}px, ${currentYOuter.current - 18}px, 0) scale(${currentScaleOuter.current})`;
        }
      }

      if (innerEl) {
        if (currentOpacity.current < 0.01) {
          innerEl.style.opacity = "0";
        } else {
          innerEl.style.opacity = currentOpacity.current.toString();
          // Center-offset inner dot: half of w-2 h-2 is 4px
          innerEl.style.transform = `translate3d(${currentXInner.current - 4}px, ${currentYInner.current - 4}px, 0) scale(${currentScaleInner.current})`;
        }
      }

      rafId.current = requestAnimationFrame(animateCursor);
    };

    rafId.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glow Ring (z-index: 9998, pointer-events-none, sizes approximately 36px) */}
      <div
        id="global-cursor-outer"
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998] border border-red-650/30 bg-red-650/[0.04] transition-colors duration-250 ease-out"
        style={{
          opacity: 0,
          transform: "translate3d(-100px, -100px, 0)",
          boxShadow: "0 0 14px rgba(227, 24, 55, 0.12)",
        }}
      />

      {/* Inner Spot Dot (z-index: 9999, pointer-events-none, sizes approximately 8px) */}
      <div
        id="global-cursor-inner"
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-[#E31837]"
        style={{
          opacity: 0,
          transform: "translate3d(-100px, -100px, 0)",
          boxShadow: "0 0 8px rgba(227, 24, 55, 0.65)",
        }}
      />
    </>
  );
}
