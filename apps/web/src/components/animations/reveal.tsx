"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export function Reveal({ children, className = "", delay = 0, threshold = 0.15 }: RevealProps) {
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
    }, { threshold });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return <div ref={ref} data-visible={visible} style={{ transitionDelay: `${delay}ms` }} className={`transform-gpu transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${ready && !visible ? "translate-y-5 opacity-0" : "translate-y-0 opacity-100"} ${className}`}>{children}</div>;
}
