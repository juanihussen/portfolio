"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";
import t from "@/lib/translations";

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section id="blog" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-vermilion text-xs tracking-[0.2em] font-semibold uppercase mb-4 block">
            {tr.blog.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight tracking-tight mb-10">
            {tr.blog.heading} <span className="text-vermilion">{tr.blog.headingAccent}</span>
          </h2>
          <div className="card p-12 text-center">
            <p className="text-muted/50 text-lg font-medium">
              {tr.blog.comingSoon}
            </p>
            <p className="text-muted/30 text-sm mt-2">
              {tr.blog.comingSoonDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
