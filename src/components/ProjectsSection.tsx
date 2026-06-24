"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LangContext";
import { useHover } from "./HoverContext";
import t from "@/lib/translations";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const { setItemHover, setDetailItem } = useHover();
  const tr = t[lang];

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-vermilion text-xs tracking-[0.2em] font-semibold uppercase mb-4 block">
            {tr.projects.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight tracking-tight mb-10">
            {tr.projects.heading} <span className="text-vermilion">{tr.projects.headingAccent}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr.projectsList.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                onMouseEnter={() =>
                  setItemHover({ type: "project", description: project.hoverDesc })
                }
                onMouseLeave={() => setItemHover(null)}
                onClick={() =>
                  setDetailItem({
                    type: "project",
                    title: project.title,
                    description: project.desc,
                    tags: project.tags,
                    content: project.content,
                    url: project.title === "Trust Group" || project.title === "Trust Group" ? "https://trustgrouparq.com" : undefined,
                    image: project.title === "Trust Group" || project.title === "Trust Group" ? "/trust-landing.png" : undefined,
                  })
                }
                className="card p-6 cursor-pointer group transition-all duration-300"
              >
                <h3 className="text-dark font-bold text-lg mb-2 group-hover:text-vermilion transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-medium rounded-md bg-cream-200 text-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
