"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ReactNode } from "react";

export function PageTransition({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <div className={`${reducedMotion ? "" : "page-enter"} ${className}`}>{children}</div>;
}
