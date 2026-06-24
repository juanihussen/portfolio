"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import { useLang } from "./LangContext";
import SpeechBubble from "./SpeechBubble";
import t from "@/lib/translations";

const Programmer = dynamic(() => import("./Programmer"), { ssr: false });
const SceneCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

function Scene() {
  return (
    <>
      <Programmer />
    </>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const tr = t[lang];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const charY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-cream bg-[radial-gradient(#e5ddd5_0.5px,transparent_0.5px)] bg-[length:24px_24px]" />

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <div className="flex-1 flex items-center pt-20 md:pt-24 px-6 md:px-12 pb-12 md:pb-0">
          <div className="w-full max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-4 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[clamp(5rem,15vw,10rem)] md:text-[clamp(4rem,12vw,10rem)] font-black tracking-tight leading-[0.85] text-dark"
            >
              JUANI
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-center md:items-end justify-end"
            >
              <h2 className="text-[clamp(2.8rem,8vw,5rem)] md:text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight leading-[0.9] text-vermilion md:text-right">
                {tr.hero.fullStack}
                <br />
                <span className="text-dark">{tr.hero.developer}</span>
              </h2>
            </motion.div>
          </div>
        </div>

        <motion.div
          style={{ y: charY, opacity: heroOpacity }}
          className="flex-1 flex items-center justify-center relative px-6 pt-4 md:pt-0"
        >
          <div className="relative w-full max-w-[500px] h-[420px] md:h-[500px]">
            <SpeechBubble />
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                  Cargando...
                </div>
              }
            >
              <SceneCanvas
                camera={{ position: [0, 0.5, 3.8], fov: 38 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
              >
                <Scene />
              </SceneCanvas>
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pb-8 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-muted/50 tracking-[0.2em] uppercase">
              {tr.hero.scroll}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-7 rounded-full border border-dark/15 flex items-start justify-center p-1"
            >
              <motion.div className="w-[3px] h-[6px] rounded-full bg-dark/30" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
