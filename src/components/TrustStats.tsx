import React, { useEffect, useRef, useState } from "react";
import { ShieldAlert, MapPin, CheckCircle2, Wrench, ArrowUpCircle } from "lucide-react";
import { motion, useInView, animate } from "motion/react";
import { TRUST_STATS } from "../data";

// Type-safe icon direct rendering dictionary
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert: ShieldAlert,
  MapPin: MapPin,
  CheckCircle2: CheckCircle2,
  Wrench: Wrench,
  ArrowUpCircle: ArrowUpCircle
};

interface CountUpTextProps {
  value: string;
}

/**
 * Parses numeric sequences from static data representations and performs 
 * elegant high-performance decimal counting progress on view entrance.
 */
function CountUpText({ value }: CountUpTextProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const textRef = useRef<HTMLSpanElement>(null);
  const isElementInView = useInView(textRef, { once: true, margin: "-30px" });

  useEffect(() => {
    const numberMatch = value.match(/(\d+)/);
    if (!numberMatch || !isElementInView) {
      setDisplayValue(value);
      return;
    }

    const parsedTarget = parseInt(numberMatch[1], 10);
    const valuePrefix = value.substring(0, numberMatch.index);
    const valueSuffix = value.substring(numberMatch.index! + numberMatch[1].length);

    const controls = animate(0, parsedTarget, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier feel
      onUpdate: (latest) => {
        setDisplayValue(`${valuePrefix}${Math.round(latest)}${valueSuffix}`);
      },
      onComplete: () => {
        setDisplayValue(value); // assert perfect final precise static state
      }
    });

    return () => {
      controls.stop();
    };
  }, [value, isElementInView]);

  return <span ref={textRef}>{displayValue}</span>;
}

export default function TrustStats() {
  return (
    <section 
      className="relative mt-8 md:-mt-14 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Trust and Reliability Indicators"
    >
      {/* Dynamic Grid conforming stack requirements precisely with layout transition support */}
      <div className="bg-white rounded-sm shadow-xl border border-slate-200 p-5 md:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {TRUST_STATS.map((stat, index) => {
          const IconComponent = iconMap[stat.iconName] || CheckCircle2;
          return (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.55, 
                ease: [0.16, 1, 0.3, 1], 
                delay: index * 0.08 
              }}
              className="flex flex-col bg-slate-50 border border-slate-200/60 rounded-sm p-4 hover:bg-slate-100/80 hover:border-[#E31837]/35 hover:shadow-xs transition-all duration-250 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-sm bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <IconComponent className="w-4.5 h-4.5 text-[#E31837]" />
                </div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                  <CountUpText value={stat.value} />
                </div>
              </div>
              <div className="mt-1">
                <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-900 mb-1 leading-tight">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
