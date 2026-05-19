"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";

export function PolicyHero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-navy-deep text-white overflow-hidden isolate pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g stroke="#4A8FD9" strokeWidth="0.6" fill="none">
            {[0, 50, 100, 150, 200, 250].map((d, i) => (
              <motion.path
                key={i}
                d={`M800,${d} Q${400 + d * 0.4},${300 + d * 0.6} -100,${700 + d}`}
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(31,79,135,0.45),transparent)]" />

      <div className="container-x relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-blue-line hover:text-white transition-colors"
          >
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>{t("policy.back")}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-blue-line mb-5"
        >
          {t("policy.eyebrow")}
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-white text-[clamp(36px,5vw,72px)] leading-[1.08] max-w-[18ch]"
        >
          <RichText html={t("policy.title")} />
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 max-w-[60ch] text-white/80 text-[clamp(15px,1.15vw,18px)] leading-relaxed"
        >
          {t("policy.intro")}
        </motion.p>
      </div>
    </section>
  );
}
