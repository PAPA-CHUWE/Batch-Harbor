"use client";

import { useEffect, useRef, type DependencyList } from "react";
import { useReducedMotion } from "./use-reduced-motion";

/** Owns an imperative animation setup and its cleanup for one DOM element. */
export function useGsap<T extends HTMLElement>(
  setup: (element: T, reducedMotion: boolean) => void | (() => void),
  dependencies: DependencyList = [],
) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return setup(element, reducedMotion);
    // The caller controls re-initialization through dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...dependencies]);

  return ref;
}
