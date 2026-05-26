"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const LOGOS: { id: string; label: string; src: string; w: number; h: number }[] = [
  { id: "360", label: "360 Radio", src: "/companies/360.png", w: 360, h: 192 },
  { id: "cc", label: "CC Media Agency", src: "/companies/cc.png", w: 360, h: 192 },
  { id: "sdl", label: "SDL Consulting", src: "/companies/sdl.png", w: 360, h: 192 },
  { id: "lead", label: "LEAD Advisors", src: "/companies/lead.png", w: 360, h: 192 },
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
                className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.06] origin-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={logo.w}
                  height={logo.h}
                  className="h-9 w-auto object-contain opacity-60 grayscale transition-[filter,opacity] duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
