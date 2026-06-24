"use client";

import { motion } from "framer-motion";
import { useLang } from "./LangContext";
import { useHover } from "./HoverContext";
import TypewriterText from "./TypewriterText";
import t from "@/lib/translations";

export default function SpeechBubble() {
  const { lang } = useLang();
  const { hovered, itemHover } = useHover();
  const tr = t[lang];

  const sectionText = hovered
    ? ({ about: tr.hero.about, projects: tr.hero.projects, blog: tr.hero.blog, social: tr.hero.social } as Record<string, string>)[hovered]
    : null;

  const text = itemHover
    ? itemHover.description
    : sectionText ?? tr.hero.greeting;

  return (
    <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 pointer-events-none z-30">
      <motion.div
        key={text}
        initial={{ opacity: 0, y: 8, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.92 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative px-5 py-3 rounded-2xl bg-vermilion border border-vermilion-200 shadow-lg"
      >
        <span className="text-sm font-bold text-white whitespace-nowrap tracking-tight">
          <TypewriterText text={text} speed={40} />
        </span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-vermilion border-r border-b border-vermilion-200" />
      </motion.div>
    </div>
  );
}
