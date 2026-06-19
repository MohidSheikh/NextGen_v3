import React, { useEffect, useRef, useState } from "react";

export default function HeroMouseGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Position references for smooth interpolation (easing)
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const currentOpacity = useRef(0);
  const targetOpacity = useRef(0);
  const hasEntered = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if mobile or touch interface
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const element = glowRef.current;
    if (!element) return;

    // Retrieve parent container automatically
    const parent = element.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetX.current = x;
      targetY.current = y;

      if (!hasEntered.current) {
        currentX.current = x;
        currentY.current = y;
        hasEntered.current = true;
      }
    };

    const handleMouseEnter = () => {
      targetOpacity.current = 1;
    };

    const handleMouseLeave = () => {
      targetOpacity.current = 0;
    };

    // Attach event listeners to the parent section
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Dynamic animation frame loop for buttery smooth high-frame-rate trailing
    const updateGlow = () => {
      // Gentle spring-like tracking smooth movement (lerp)
      currentX.current += (targetX.current - currentX.current) * 0.075;
      currentY.current += (targetY.current - currentY.current) * 0.075;

      // Opacity fade transition
      currentOpacity.current += (targetOpacity.current - currentOpacity.current) * 0.09;

      if (glowRef.current) {
        if (currentOpacity.current < 0.005) {
          glowRef.current.style.opacity = "0";
        } else {
          glowRef.current.style.opacity = currentOpacity.current.toString();
          
          // NextGen Elevators Premium Colors Dynamic Composer
          // Base Gradient: Crimson Red (#E31837), Steel Blue (#2563EB), Soft White Glow & Deep Navy integration
          glowRef.current.style.backgroundImage = `
            radial-gradient(
              circle at ${currentX.current}px ${currentY.current}px,
              rgba(227, 24, 55, 0.18) 0px,
              rgba(37, 99, 235, 0.12) 110px,
              rgba(255, 255, 255, 0.08) 190px,
              transparent 360px
            ),
            radial-gradient(
              circle at ${currentX.current}px ${currentY.current}px,
              rgba(255, 255, 255, 0.12),
              transparent 280px
            )
          `.trim();
        }
      }

      rafId.current = requestAnimationFrame(updateGlow);
    };

    rafId.current = requestAnimationFrame(updateGlow);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  if (isMobile) {
    // Subtle static ambient glow overlay for mobile matching brand color scheme
    return (
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-100 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(227, 24, 55, 0.08) 0%, rgba(37, 99, 235, 0.04) 60%, transparent 100%)"
        }}
        id="hero-mobile-glow"
      />
    );
  }

  // Dynamic Desktop spotlight
  return (
    <div
      ref={glowRef}
      className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 ease-out mix-blend-screen"
      style={{ opacity: 0 }}
      id="hero-desktop-glow"
    />
  );
}
