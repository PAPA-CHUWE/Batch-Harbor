"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type StaggerProps = { children: ReactNode; className?: string; delayStep?: number };

export function Stagger({ children, className = "", delayStep = 100 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    setReady(true);
    if (reducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return <div ref={ref} data-stagger-visible={ready ? visible : undefined} style={{ "--stagger-delay": `${delayStep}ms` } as CSSProperties} className={`stagger-children ${className}`}>{children}</div>;
}
