"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ParallaxProps = { children: ReactNode; className?: string; speed?: number };

export function Parallax({ children, className = "", speed = 0.12 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
        element.style.setProperty("--parallax-offset", `${distanceFromCenter * -speed}px`);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reducedMotion, speed]);

  return <div ref={ref} className={`parallax-layer ${className}`}>{children}</div>;
}
