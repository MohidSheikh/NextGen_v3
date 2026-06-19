import React, { useState } from "react";
import { motion } from "motion/react";

interface LogoProps {
  showText?: boolean;
  textLight?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  showText = true,
  textLight = false,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-3 select-none group/logo ${className}`}
      aria-label="NextGen Elevators - Elevating Your Journey"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Elevator Door Monogram Icon */}
      <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* External Lift Shaft Outer Geometric Accent Frame */}
          <rect
            x="4"
            y="3"
            width="24"
            height="26"
            className={`${textLight ? "stroke-slate-800" : "stroke-slate-200"}`}
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Premium Elevator Header Indicator Panel */}
          <rect
            x="6"
            y="4"
            width="20"
            height="3.5"
            className={`${textLight ? "fill-slate-800" : "fill-slate-100"}`}
            rx="0.5"
          />

          {/* Elevator Door Sturdy Metallic Frame */}
          <rect
            x="6"
            y="4"
            width="20"
            height="24"
            rx="1.5"
            className={`${textLight ? "stroke-slate-600" : "stroke-slate-800"}`}
            strokeWidth="2"
          />

          {/* Left Door Panel - Slides left on hover */}
          <motion.g
            animate={{ x: isHovered ? -2.5 : 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            {/* Left Door Plate bg */}
            <rect
              x="7"
              y="5"
              width="9"
              height="22"
              fill={textLight ? "#020617" : "#fafafa"}
            />
            {/* Center seam shadow border */}
            <line
              x1="15.5"
              y1="5"
              x2="15.5"
              y2="27"
              className={`${textLight ? "stroke-slate-800" : "stroke-slate-350"}`}
              strokeWidth="1"
            />
            {/* Monogram "N" - Left Stem */}
            <line
              x1="10"
              y1="9"
              x2="10"
              y2="23"
              className={`${textLight ? "stroke-slate-400" : "stroke-slate-800"}`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Monogram "N" - Left Diagonal segment */}
            <line
              x1="10"
              y1="9"
              x2="15.5"
              y2="17.25"
              className={`${textLight ? "stroke-slate-400" : "stroke-slate-800"}`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Right Door Panel - Slides right on hover */}
          <motion.g
            animate={{ x: isHovered ? 2.5 : 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            {/* Right Door Plate bg */}
            <rect
              x="16"
              y="5"
              width="9"
              height="22"
              fill={textLight ? "#020617" : "#fafafa"}
            />
            {/* Center seam shadow border */}
            <line
              x1="16.5"
              y1="5"
              x2="16.5"
              y2="27"
              className={`${textLight ? "stroke-slate-800" : "stroke-slate-350"}`}
              strokeWidth="1"
            />
            {/* Monogram "N" - Right Stem */}
            <line
              x1="22"
              y1="9"
              x2="22"
              y2="23"
              className={`${textLight ? "stroke-slate-400" : "stroke-slate-800"}`}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Monogram "N" - Right Diagonal segment */}
            <line
              x1="16.5"
              y1="18.75"
              x2="22"
              y2="23"
              className={`${textLight ? "stroke-slate-400" : "stroke-slate-800"}`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Upward red elevation indicator line/arrow - Glides on hover */}
          <g className="text-red-600">
            <motion.path
              d="M16 11.5 L16 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isHovered ? { y: [-1, -3, -1], opacity: [0.7, 1, 0.7] } : { y: 0, opacity: 0.9 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
            />
            <motion.path
              d="M13.5 9.5 L16 7 L18.5 9.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={isHovered ? { y: [-1, -3, -1], opacity: [0.7, 1, 0.7] } : { y: 0, opacity: 0.9 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
            />
          </g>

          {/* Symmetrical Elevator Control Indicators */}
          <circle cx="16" cy="15" r="0.5" className="fill-red-600" />
          <circle cx="16" cy="17" r="0.5" className={`${textLight ? "fill-slate-600" : "fill-slate-400"}`} />
        </svg>

        {/* Ambient indicator lights on sides of the lift frame indicating physical activity */}
        <span className={`absolute left-[5px] top-[14px] w-1 h-3 rounded-full transition-all duration-300 ${
          isHovered ? "bg-red-500 scale-y-125" : "bg-slate-400/40"
        }`} />
        <span className={`absolute right-[5px] top-[14px] w-1 h-3 rounded-full transition-all duration-300 ${
          isHovered ? "bg-red-500 scale-y-125" : "bg-slate-400/40"
        }`} />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-bold text-lg md:text-xl tracking-tight leading-none transition-colors duration-300 ${
              textLight
                ? "text-white group-hover/logo:text-red-500"
                : "text-slate-900 group-hover/logo:text-red-600"
            }`}
          >
            NextGen <span className="font-extrabold text-red-600 group-hover/logo:text-slate-900 dark:group-hover/logo:text-white transition-colors duration-300">Elevators</span>
          </span>
          <span
            className={`text-[9px] font-mono tracking-[0.16em] uppercase leading-none mt-1 transition-colors duration-300 ${
              textLight ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Elevating Your Journey
          </span>
        </div>
      )}
    </div>
  );
};
