"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import SocialSection from "@/components/SocialSection";
import FloatingCharacter from "@/components/FloatingCharacter";
import DetailModal from "@/components/DetailModal";
import ContactModal from "@/components/ContactModal";
import Lamp from "@/components/Lamp";
import LangToggle from "@/components/LangToggle";
import { useLang } from "@/components/LangContext";
import t from "@/lib/translations";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <main className="relative">
      <LangToggle />
      <Lamp />
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <SocialSection />
      <FloatingCharacter />
      <DetailModal />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-muted/50">
          <span>{tr.footer.copyright}</span>
          <span>{tr.footer.made}</span>
        </div>
      </footer>
    </main>
  );
}
