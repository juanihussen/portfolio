"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { useHover } from "./HoverContext";
import TypewriterText from "./TypewriterText";

const Programmer = dynamic(() => import("./Programmer"), { ssr: false });
const MiniCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

export default function FloatingCharacter() {
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { itemHover } = useHover();

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) { setShow(false); return; }
    const threshold = window.innerHeight * 0.9;
    const onScroll = () => {
      setShow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 250, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 250, opacity: 0, scale: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="fixed bottom-8 right-8 z-40"
        >
          <div className="relative">
            <AnimatePresence>
              {itemHover && (
                <motion.div
                  key={itemHover.description}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-4 pointer-events-none"
                >
                  <div className="relative px-5 py-3 rounded-2xl bg-vermilion border border-vermilion-200 shadow-lg max-w-[280px]">
                    <TypewriterText
                      text={itemHover.description}
                      speed={30}
                      className="text-sm font-bold text-white leading-relaxed"
                    />
                    <div className="absolute -bottom-1.5 right-8 w-3 h-3 rotate-45 bg-vermilion border-r border-b border-vermilion-200" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="w-40 h-56 md:w-48 md:h-64 rounded-2xl overflow-hidden card border-border shadow-lg">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center text-muted text-xs">
                    ...
                  </div>
                }
              >
                <MiniCanvas
                  camera={{ position: [0, 0.5, 2.7], fov: 45 }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: true, alpha: true }}
                >
                  <Programmer />
                </MiniCanvas>
              </Suspense>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
