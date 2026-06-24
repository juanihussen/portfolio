"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";
import { useHover } from "./HoverContext";
import t from "@/lib/translations";

const socials = [
  {
    name: "GitHub",
    icon: "GH",
    url: "https://github.com/juanihussen",
    hoverDesc: "social.github",
  },
  {
    name: "LinkedIn",
    icon: "LI",
    url: "https://www.linkedin.com/in/juanhussen",
    hoverDesc: "social.linkedin",
  },
];

export default function SocialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const { setItemHover } = useHover();
  const tr = t[lang];

  return (
    <section id="social" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-vermilion text-xs tracking-[0.2em] font-semibold uppercase mb-4 block">
            {tr.social.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight tracking-tight mb-10">
            {tr.social.heading} <span className="text-vermilion">{tr.social.headingAccent}</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                onMouseEnter={() =>
                  setItemHover({
                    type: "social",
                    description: tr.social[social.hoverDesc.split(".")[1] as keyof typeof tr.social] as string,
                  })
                }
                onMouseLeave={() => setItemHover(null)}
                className="card px-6 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="text-lg font-bold text-dark">{social.icon}</span>
                <span className="text-muted text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
