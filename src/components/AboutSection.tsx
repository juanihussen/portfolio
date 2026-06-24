"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";
import { useHover } from "./HoverContext";
import t from "@/lib/translations";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const { setDetailItem, setItemHover } = useHover();
  const tr = t[lang];

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-vermilion text-xs tracking-[0.2em] font-semibold uppercase mb-4 block">
            {tr.about.title}
          </span>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight tracking-tight mb-6">
              {tr.about.heading1}
              <br />
              <span className="text-vermilion">{tr.about.heading2}</span>
            </h2>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              {tr.about.description}
            </p>
          </div>

          <div className="relative border-l-2 border-cream-200 pl-8 space-y-10">
            {tr.experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-vermilion border-[3px] border-cream" />
                <div
                  onClick={() =>
                    setDetailItem({
                      type: "experience",
                      title: `${exp.role} · ${exp.company}`,
                      description: `${exp.period}${exp.detailDesc ? ` · ${exp.detailDesc}` : ""}`,
                      tags: exp.tags,
                      content: exp.content,
                      image: exp.image,
                    })
                  }
                  onMouseEnter={() =>
                    setItemHover({ type: "experience", description: exp.hoverDesc })
                  }
                  onMouseLeave={() => setItemHover(null)}
                  className="card p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-dark font-bold text-lg">{exp.role}</h3>
                      <p className="text-vermilion font-semibold text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted/60 whitespace-nowrap font-mono">{exp.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
