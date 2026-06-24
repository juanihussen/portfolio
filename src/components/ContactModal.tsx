"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LangContext";

const EMAIL = "juanihussen@gmail.com";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      //
    }
  };

  const t = (() => {
    if (lang === "es")
      return {
        title: "Contacto",
        subtitle: "Escribime a mi mail y te respondo a la brevedad",
        copy: "Copiar",
        copied: "✓ Copiado",
        or: "o",
        open: "Abrir en tu mail",
      };
    return {
      title: "Contact",
      subtitle: "Drop me an email and I'll get back to you shortly",
      copy: "Copy",
      copied: "✓ Copied",
      or: "or",
      open: "Open in your mail app",
    };
  })();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-lg flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="card w-full max-w-md p-8 md:p-10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-dark tracking-tight">
                {t.title}
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-cream-200 text-dark/60 hover:bg-dark hover:text-white transition-all text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-muted/70 mb-6">{t.subtitle}</p>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-cream/50">
              <span className="text-dark font-mono text-sm font-semibold truncate">
                {EMAIL}
              </span>
              <button
                onClick={handleCopy}
                className="ml-auto shrink-0 px-4 py-2 rounded-lg bg-vermilion text-white text-xs font-bold hover:brightness-110 transition-all"
              >
                {copied ? t.copied : t.copy}
              </button>
            </div>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted/40 font-medium">{t.or}</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="block w-full py-3 rounded-xl bg-inverse text-white text-sm font-bold hover:brightness-125 transition-all text-center"
            >
              {t.open} →
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
