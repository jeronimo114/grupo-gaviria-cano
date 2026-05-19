"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const LOGOS: { id: string; label: string; render: () => React.ReactNode }[] = [
  {
    id: "360",
    label: "360 Colombia",
    render: () => <span className="font-serif italic text-[1.9rem] tracking-tight">360</span>,
  },
  {
    id: "cc",
    label: "CC Media Agency",
    render: () => (
      <span className="flex items-center gap-2">
        <span className="w-9 h-9 rounded-full border-[1.5px] border-current flex items-center justify-center font-semibold text-[15px] tracking-tight">CC</span>
        <span className="text-[10px] tracking-[0.22em] font-medium">MEDIA AGENCY</span>
      </span>
    ),
  },
  {
    id: "sdl",
    label: "SDL Consulting",
    render: () => (
      <span className="font-semibold text-[1.5rem] tracking-[0.06em]">SDL</span>
    ),
  },
  {
    id: "lead",
    label: "LEAD Advisors",
    render: () => (
      <span className="font-semibold text-[1.5rem] tracking-[0.12em]">L≡AD</span>
    ),
  },
];

export function CompaniesBanner() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section className="bg-paper-warm border-y border-border-soft">
      <div className="container-x py-8 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.22em] font-semibold text-muted whitespace-nowrap"
        >
          {t("hero.companies_label")}
        </motion.h3>

        <ul className="flex-1 flex flex-wrap items-center justify-around md:justify-between gap-x-10 gap-y-6 text-navy">
          {LOGOS.map((logo, i) => (
            <motion.li
              key={logo.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#empresas"
                aria-label={logo.label}
                className="group inline-flex items-center text-navy/80 hover:text-navy transition-all duration-300 hover:scale-[1.06] origin-center"
              >
                {logo.render()}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
