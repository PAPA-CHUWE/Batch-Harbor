"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type AnimatedTextProps = { text: string; className?: string; delayStep?: number };

export function AnimatedText({ text, className = "", delayStep = 35 }: AnimatedTextProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <span className={className}>{text}</span>;

  return <span aria-label={text} className={`animated-text ${className}`}>
    <span aria-hidden="true">{Array.from(text).map((character, index) => <span key={`${character}-${index}`} style={{ animationDelay: `${index * delayStep}ms` }}>{character === " " ? "\u00a0" : character}</span>)}</span>
  </span>;
}
