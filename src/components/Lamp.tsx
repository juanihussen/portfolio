"use client";

import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import { useTheme } from "./ThemeContext";
import t from "@/lib/translations";

export default function Lamp() {
  const { isDark, toggle } = useTheme();
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div className="fixed top-4 right-4 z-[70]">
      <button
        onClick={toggle}
        className="relative group cursor-pointer outline-none"
        aria-label={isDark ? tr.lamp.light : tr.lamp.dark}
      >
        <motion.div
          animate={{ rotate: isDark ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative"
        >
          <svg width="36" height="40" viewBox="0 0 36 40" className="drop-shadow-lg">
            {/* Glow when on */}
            {isDark && (
              <>
                <defs>
                  <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="18" cy="24" r="18" fill="url(#lampGlow)">
                  <animate attributeName="r" values="16;18;16" dur="3s" repeatCount="indefinite" />
                </circle>
              </>
            )}

            {/* Bell body */}
            <path
              d="M18 2 C10 2 5 12 5 22 L5 24 C5 26 7 28 9 30 L27 30 C29 28 31 26 31 24 L31 22 C31 12 26 2 18 2Z"
              fill={isDark ? "#fbbf24" : "#6b5b3e"}
              stroke={isDark ? "#f59e0b" : "#4a3f2e"}
              strokeWidth="1.5"
            />

            {/* Inner glow line */}
            {isDark && (
              <path
                d="M10 22 C10 14 14 6 18 6 C22 6 26 14 26 22"
                fill="none"
                stroke="#fef3c7"
                strokeWidth="1"
                opacity="0.5"
              />
            )}

            {/* Top knob */}
            <rect x="15" y="0" width="6" height="3" rx="1.5" fill="#4a3f2e" stroke="#6b5b3e" strokeWidth="0.8" />

            {/* Bottom rim */}
            <rect x="9" y="28" width="18" height="2" rx="1" fill={isDark ? "#f59e0b" : "#4a3f2e"} stroke={isDark ? "#d97706" : "#6b5b3e"} strokeWidth="0.5" />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}
