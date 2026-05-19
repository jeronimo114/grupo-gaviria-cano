"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLAnchorElement>("a[href]");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      // Only handle in-page anchors (#section or /#section while already on /)
      const hashOnly = href.startsWith("#") && href.length > 1;
      const isOnHomeWithAbsHash =
        href.startsWith("/#") && href.length > 2 && window.location.pathname === "/";
      if (!hashOnly && !isOnHomeWithAbsHash) return;

      const selector = hashOnly ? href : href.slice(1);
      const el = document.querySelector(selector);
      if (!el) return;
      e.preventDefault();
      history.replaceState(null, "", selector);
      lenis.scrollTo(el as HTMLElement, { offset: -84, duration: 1.3 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
