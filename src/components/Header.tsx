"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ColombiaFlag, UsaFlag } from "@/components/icons/Flags";
import type { Lang } from "@/lib/i18n/translations";

const NAV_LINKS: { id: string; key: "nav.about" | "nav.companies" | "nav.values" | "nav.news" | "nav.careers" }[] = [
  { id: "#nosotros", key: "nav.about" },
  { id: "#empresas", key: "nav.companies" },
  { id: "#valores", key: "nav.values" },
  { id: "#noticias", key: "nav.news" },
  { id: "#empleo", key: "nav.careers" },
];

export function Header() {
  const { lang, setLang, labels, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0.85, 1]);
  const padY = useTransform(scrollY, [0, 80], [22, 12]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        paddingTop: reduce ? undefined : padY,
        paddingBottom: reduce ? undefined : padY,
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color] duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-[#0a2540]/80 border-b border-white/10"
          : "bg-[#0a2540]/40 backdrop-blur-sm"
      }`}
    >
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,37,64,0.95),rgba(10,37,64,0.85))]" />
      <div className="container-x flex items-center justify-between gap-6">
        <Link href="#hero" className="flex items-center group" aria-label="Grupo Gaviria Cano">
          <Image
            src="/logo.png"
            alt="Grupo Gaviria Cano"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.id}
              href={l.id}
              className="relative text-white/75 hover:text-white transition-colors py-2 group"
            >
              <span>{t(l.key)}</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="flex items-center gap-2 text-white/90 hover:text-white text-xs font-semibold tracking-wider uppercase px-3 py-2 rounded-full border border-white/15 hover:border-white/30 transition-colors"
            >
              <span className="w-4 h-4 rounded-full overflow-hidden inline-block">
                {lang === "es" ? <ColombiaFlag className="w-full h-full" /> : <UsaFlag className="w-full h-full" />}
              </span>
              <span className="hidden sm:inline">{labels[lang]}</span>
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▾</motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                  role="listbox"
                  className="absolute right-0 top-full mt-2 min-w-[180px] bg-white rounded-xl shadow-[0_12px_36px_rgba(10,37,64,0.18)] overflow-hidden border border-black/5"
                >
                  {(["es", "en"] as Lang[]).map((code) => (
                    <li key={code}>
                      <button
                        role="option"
                        aria-selected={lang === code}
                        onClick={() => {
                          setLang(code);
                          setOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                          lang === code
                            ? "bg-paper text-navy font-semibold"
                            : "text-text hover:bg-paper-warm"
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full overflow-hidden inline-block flex-shrink-0">
                          {code === "es" ? <ColombiaFlag className="w-full h-full" /> : <UsaFlag className="w-full h-full" />}
                        </span>
                        <span>{labels[code]}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy text-xs font-semibold uppercase tracking-wider hover:bg-paper-warm transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
