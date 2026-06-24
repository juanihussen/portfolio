"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LangContext";
import { useHover } from "./HoverContext";
import t from "@/lib/translations";

const navItems = [
  { label: "nav.about", href: "#about", section: "about" as const },
  { label: "nav.projects", href: "#projects", section: "projects" as const },
  { label: "nav.blog", href: "#blog", section: "blog" as const },
  { label: "nav.social", href: "#social", section: "social" as const },
];

export default function Navbar({ onContactClick }: { onContactClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const { setHovered } = useHover();
  const tr = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
          aria-label="Menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 rounded-full bg-dark block"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 rounded-full bg-dark block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 rounded-full bg-dark block"
          />
        </button>

        <a href="#" className="hidden md:block text-lg font-bold tracking-tight text-dark">
          Juani<span className="text-vermilion">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={item.href}
              onMouseEnter={() => setHovered(item.section)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-xs tracking-widest font-semibold text-muted hover:text-dark transition-colors duration-200"
            >
              {tr.nav[item.label.split(".")[1] as keyof typeof tr.nav] as string}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="px-5 py-2 bg-inverse text-white text-xs tracking-widest font-semibold rounded-full hover:brightness-125 transition-all duration-200"
          >
            {tr.nav.contact}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
          >
            <div onClick={closeMenu} className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative mx-4 mt-2 card p-4 flex flex-col gap-2 shadow-xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.section}
                  href={item.href}
                  onClick={closeMenu}
                  onMouseEnter={() => setHovered(item.section)}
                  onMouseLeave={() => setHovered(null)}
                  className="px-4 py-3 text-sm tracking-widest font-semibold text-dark hover:text-vermilion hover:bg-cream-200 rounded-lg transition-all"
                >
                  {tr.nav[item.label.split(".")[1] as keyof typeof tr.nav] as string}
                </a>
              ))}
              <hr className="border-border my-1" />
              <button
                onClick={() => { closeMenu(); onContactClick?.(); }}
                className="mx-2 mt-1 px-5 py-2.5 bg-inverse text-white text-sm tracking-widest font-semibold rounded-full text-center hover:brightness-125 transition-all"
              >
                {tr.nav.contact}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
