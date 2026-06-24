"use client";

import { useState, useEffect, useRef } from "react";

export default function TypewriterText({
  text,
  speed = 35,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const prevRef = useRef(text);
  const idxRef = useRef(0);

  useEffect(() => {
    if (text !== prevRef.current) {
      prevRef.current = text;
      idxRef.current = 0;
      setDisplayed("");
    }

    if (idxRef.current < text.length) {
      const timer = setInterval(() => {
        idxRef.current++;
        setDisplayed(text.slice(0, idxRef.current));
        if (idxRef.current >= text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    } else {
      setDisplayed(text);
    }
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-white/80 ml-0.5 animate-pulse" />
      )}
    </span>
  );
}
