"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useHover } from "./HoverContext";

export default function DetailModal() {
  const { detailItem, setDetailItem } = useHover();

  return (
    <AnimatePresence>
      {detailItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setDetailItem(null)}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            key={detailItem.title}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full max-w-5xl max-h-[90vh] card border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Browser-style top bar */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-cream-200/50 shrink-0">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setDetailItem(null)}
                  className="w-3.5 h-3.5 rounded-full bg-vermilion hover:brightness-110 transition-all"
                />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/60" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/60" />
              </div>
              {detailItem.url && (
                <div className="flex-1 flex items-center justify-center">
                  <a
                    href={detailItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-1.5 bg-white/80 rounded-full text-xs text-muted/80 hover:text-dark transition-colors max-w-md truncate"
                  >
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    <span className="truncate">{detailItem.url}</span>
                  </a>
                </div>
              )}
              <div className="w-14" />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              {detailItem.image && (
                <div className="mb-8 rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src={detailItem.image}
                    alt={detailItem.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {detailItem.tags && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {detailItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-medium rounded-md bg-cream-200 text-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {detailItem.date && (
                <div className="flex items-center gap-2 text-xs text-muted/70 mb-3">
                  <span>{detailItem.date}</span>
                  {detailItem.read && (
                    <>
                      <span>·</span>
                      <span>{detailItem.read}</span>
                    </>
                  )}
                </div>
              )}

              <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight mb-6">
                {detailItem.title}
              </h2>

              <p className="text-muted leading-relaxed mb-6">
                {detailItem.description}
              </p>

              {detailItem.url && (
                <a
                  href={detailItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-inverse text-white text-sm font-semibold hover:brightness-125 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Visitar sitio
                </a>
              )}

              {detailItem.content ? (
                <div
                  className="text-muted text-sm leading-relaxed border-t border-border pt-6 mt-8 [&>p]:mb-4"
                  dangerouslySetInnerHTML={{
                    __html: detailItem.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .split(/\n{2,}/)
                      .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
                      .join(""),
                  }}
                />
              ) : (
                <div className="text-center py-12 border-t border-border mt-8">
                  <p className="text-sm text-muted/50 italic">
                    Más contenido próximamente...
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
