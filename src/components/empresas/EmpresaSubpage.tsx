"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { EmpresaData } from "@/lib/empresas-data";

export function EmpresaSubpage({ empresa }: { empresa: EmpresaData }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <>
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
            className="mb-8"
          >
            <Link
              href="/#empresas"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-blue-line hover:text-white transition-colors"
            >
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span>{t("empresas.subpage.back")}</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl px-8 py-7 inline-flex items-center justify-center shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={empresa.logoSrc}
                alt={empresa.logoAlt}
                width={empresa.logoW}
                height={empresa.logoH}
                priority
                className="h-16 md:h-20 w-auto object-contain"
              />
            </motion.div>

            <div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="eyebrow text-blue-line mb-4"
              >
                {t(empresa.tagKey)}
              </motion.div>

              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-white text-[clamp(36px,5vw,64px)] leading-[1.08]"
              >
                {empresa.name}
              </motion.h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-7 max-w-[58ch] text-white/80 text-[clamp(15px,1.15vw,18px)] leading-relaxed"
              >
                {t(empresa.introKey)}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Reveal direction="up">
                <div className="eyebrow text-navy-light">{t("empresas.subpage.about")}</div>
                <h2 className="font-serif text-navy text-[clamp(24px,2.4vw,32px)] leading-[1.15] mt-3">
                  {empresa.name}
                </h2>
              </Reveal>
            </aside>

            <div className="space-y-6 max-w-[64ch]">
              <Reveal direction="up" delay={0.05}>
                <p className="text-text/85 text-[clamp(15px,1.05vw,17px)] leading-relaxed">
                  {t(empresa.body1Key)}
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <p className="text-text/85 text-[clamp(15px,1.05vw,17px)] leading-relaxed">
                  {t(empresa.body2Key)}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm border-t border-border-soft">
        <div className="container-x py-20 md:py-24">
          <Reveal direction="up">
            <div className="bg-navy text-white rounded-3xl px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center isolate relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(31,79,135,0.6),transparent)]" />
              <div>
                <h3 className="font-serif text-white text-[clamp(24px,2.8vw,36px)] leading-[1.15] mb-3">
                  {t("empresas.subpage.cta.title")}
                </h3>
                <p className="text-white/75 text-[15px] leading-relaxed max-w-[52ch]">
                  {t("empresas.subpage.cta.desc")}
                </p>
              </div>
              <div className="md:justify-self-end">
                <Link
                  href="/#contacto"
                  className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-paper-warm transition-colors"
                >
                  <span>{t("empresas.subpage.cta.button")}</span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
