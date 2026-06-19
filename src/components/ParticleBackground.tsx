import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface ParticleBackgroundProps {
  variant: "services" | "projects";
}

export default function ParticleBackground({ variant }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    // Set canvas dimensions with high-density display (Retina) support
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      
      initParticles(rect.width, rect.height);
    };

    // Calculate dynamic particle counts based on viewport size
    const getParticleCount = (width: number) => {
      if (width < 640) return 25;   // Mobile
      if (width < 1024) return 50;  // Tablet
      return 80;                    // Desktop
    };

    // Initialize particles based on style variant
    const initParticles = (width: number, height: number) => {
      particles = [];
      const count = getParticleCount(width);
      
      const themeColors = {
        red: "227, 24, 55",     // #E31837
        blue: "37, 99, 235",    // #2563EB
        steel: "148, 163, 184", // steel-blue / slate-400
        white: "255, 255, 255", // white
      };

      for (let i = 0; i < count; i++) {
        const sizeRand = Math.random();
        const radius = variant === "projects" 
          ? sizeRand * 1.5 + 0.8  // Sleeker vertical dust
          : sizeRand * 2.2 + 1.0; // Standard organic dots

        // Assign colors proportionally to matching the brand
        let colorString = themeColors.steel;
        const colorRand = Math.random();
        if (colorRand < 0.35) {
          colorString = themeColors.red;
        } else if (colorRand < 0.65) {
          colorString = themeColors.blue;
        } else if (colorRand < 0.8) {
          colorString = themeColors.white;
        }

        // Velocity settings
        let vx = 0;
        let vy = 0;

        if (variant === "projects") {
          // Projects: upward mobility (upward drift) representing lift travel
          vx = (Math.random() - 0.5) * 0.15;
          vy = -(Math.random() * 0.45 + 0.15); // always negative (upward)
        } else {
          // Services: gentle random organic drift
          vx = (Math.random() - 0.5) * 0.35;
          vy = (Math.random() - 0.5) * 0.35;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx,
          vy,
          radius,
          color: colorString,
          alpha: Math.random() * 0.35 + 0.15, // Soft elegant transparency
        });
      }
    };

    // Main animation loop
    let lastTime = 0;
    const fpsInterval = 1000 / 60; // Max 60 FPS target

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Simple frame rate limiter to save CPU/GPU overhead
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);

      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      // Clear with sub-pixel preservation and layout overlay matching sections
      ctx.clearRect(0, 0, width, height);

      // Disable interactions for mobile layout metrics
      const isInteractive = width >= 1024;

      // Step & Draw Particles
      particles.forEach((p) => {
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;

        // Apply hover/cursor reaction (Desktop only)
        if (isInteractive && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 185) {
            // Gentle magnetic attraction to mimic user control flow
            const force = (185 - dist) / 1800;
            p.x += (dx / dist) * force * 15;
            p.y += (dy / dist) * force * 15;
          }
        }

        // Boundary checks / looping
        if (variant === "projects") {
          // Vertical reuse loop (re-emerge from bottom)
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        } else {
          // Bounce or wrap limits for organic layout
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw Connection Lines
      const maxDistance = variant === "projects" ? 110 : 155; // Slightly shorter lines for vertical shaft grid
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            // Line opacity diminishes as distance increases
            const alphaFactor = (maxDistance - dist) / maxDistance;
            const lineAlpha = variant === "projects" 
              ? alphaFactor * 0.04  // Extremely faint structural verticality
              : alphaFactor * 0.08; // Delicate web alignment for services section

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Mix particle colors or default to soft theme steel/blue lines
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = variant === "projects" ? 0.6 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Live Cursor Connection Trace (Desktop only)
      if (isInteractive && mouse.active && variant === "services") {
        particles.forEach((p) => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            const alphaFactor = (140 - dist) / 140;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(227, 24, 55, ${alphaFactor * 0.12})`; // Beautiful warm branding feedback
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
    };

    // Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= rect.height) {
        const spawnCount = Math.floor(Math.random() * 8) + 10; // Spawns 10-17 subtle particles
        const themeColors = {
          red: "227, 24, 55",     // #E31837
          blue: "37, 99, 235",    // #2563EB
          steel: "148, 163, 184", // steel-blue / slate-400
          white: "255, 255, 255", // white
        };

        for (let i = 0; i < spawnCount; i++) {
          const sizeRand = Math.random();
          const radius = variant === "projects" 
            ? sizeRand * 1.5 + 1.0
            : sizeRand * 2.2 + 1.2;

          let colorString = themeColors.steel;
          const colorRand = Math.random();
          if (colorRand < 0.45) {
            colorString = themeColors.red;
          } else if (colorRand < 0.75) {
            colorString = themeColors.blue;
          } else {
            colorString = themeColors.white;
          }

          // Random direction explosion velocity
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.5 + 0.8;
          const vx = Math.cos(angle) * speed;
          let vy = Math.sin(angle) * speed;

          if (variant === "projects") {
            // Give slightly more upward bias
            vy = -Math.abs(vy) - 0.3;
          }

          particles.push({
            x: clickX,
            y: clickY,
            vx,
            vy,
            radius,
            color: colorString,
            alpha: Math.random() * 0.5 + 0.35, // brighter burst that naturally fades
          });
        }

        // Limit maximum particle count dynamically to preserve responsiveness & high frame rates
        const maxParticles = 180;
        if (particles.length > maxParticles) {
          particles.splice(0, particles.length - maxParticles);
        }
      }
    };

    const parent = canvas.parentElement;
    
    // Initial size and event attachments
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
      parent.addEventListener("click", handleMouseClick);
    }

    // Start rendering cycle
    animationFrameId = requestAnimationFrame(animate);

    // Unmount and resource release safety
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
        parent.removeEventListener("click", handleMouseClick);
      }
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-100 transition-opacity duration-1000"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
