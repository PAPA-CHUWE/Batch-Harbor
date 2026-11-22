"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ScrollTarget = string | number | Element;
type SmoothScrollContextValue = { scrollTo: (target: ScrollTarget, offset?: number) => void };

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  const scrollTo = useCallback((target: ScrollTarget, offset = 0) => {
    if (typeof window === "undefined") return;

    if (typeof target === "number") {
      window.scrollTo({ top: target + offset, behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }

    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  return <SmoothScrollContext.Provider value={{ scrollTo }}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) throw new Error("useSmoothScroll must be used inside SmoothScrollProvider");
  return context;
}
