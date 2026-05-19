"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

const ACTIONS: { title: TranslationKey; sub: TranslationKey; href: string }[] = [
  { title: "careers.1.title", sub: "careers.1.sub", href: "#contacto" },
  { title: "careers.2.title", sub: "careers.2.sub", href: "#contacto" },
  { title: "careers.3.title", sub: "careers.3.sub", href: "#contacto" },
];

export function Empleo() {
  const { t } = useLanguage();

  return (
    <section id="empleo" className="bg-paper-warm border-t border-border-soft">
      <div className="container-x py-24 md:py-32">
        <Reveal direction="up">
          <article className="relative bg-navy text-white rounded-[28px] overflow-hidden p-10 md:p-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center isolate">
            <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
              <svg viewBox="0 0 600 400" preserveAspectRatio="xMaxYMid slice" className="w-full h-full">
                <g stroke="#4A8FD9" strokeWidth="0.6" fill="none">
                  {[0, 50, 100, 150, 200, 250].map((d, i) => (
                    <motion.path
                      key={i}
                      d={`M600,${d} Q${300 + d * 0.2},${200 + d * 0.4} -100,${500 + d}`}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 2.4, delay: i * 0.18 }}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_0%_50%,rgba(31,79,135,0.45),transparent)]" />

            <div>
              <div className="eyebrow text-blue-line mb-4">{t("careers.eyebrow")}</div>
              <h2 className="font-serif text-white text-[clamp(30px,3.6vw,52px)] leading-[1.14] mb-6 max-w-[20ch]">
                <RichText html={t("careers.title")} />
              </h2>
              <p className="text-white/75 text-[15px] leading-relaxed max-w-[52ch]">{t("careers.desc")}</p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <RevealStagger className="flex flex-col gap-3" stagger={0.1}>
                {ACTIONS.map((a, i) => (
                  <motion.a
                    key={i}
                    href={a.href}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="group flex items-center justify-between gap-6 p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    <div>
                      <div className="font-serif text-white text-[18px] leading-tight">{t(a.title)}</div>
                      <div className="text-white/55 text-xs mt-1">{t(a.sub)}</div>
                    </div>
                    <span aria-hidden className="text-2xl text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1.5">→</span>
                  </motion.a>
                ))}
              </RevealStagger>
              <Reveal direction="up" delay={0.35}>
                <Link
                  href="/politica"
                  className="group inline-flex items-center gap-2 mt-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-blue-line hover:text-white transition-colors"
                >
                  <span>{t("careers.policyLink")}</span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
