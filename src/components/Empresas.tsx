"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

type EmpresaCard = {
  id: string;
  name: string;
  tagKey: TranslationKey;
  descKey: TranslationKey;
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
  href: string;
  external?: boolean;
};

const CARDS: EmpresaCard[] = [
  {
    id: "360",
    name: "360 Radio",
    tagKey: "empresas.360.tag",
    descKey: "empresas.360.desc",
    logoSrc: "/companies/360.png",
    logoAlt: "360 Radio",
    logoW: 1524,
    logoH: 802,
    href: "https://360radio.com.co/",
    external: true,
  },
  {
    id: "cc",
    name: "CC Media Agency",
    tagKey: "empresas.cc.tag",
    descKey: "empresas.cc.desc",
    logoSrc: "/companies/cc.png",
    logoAlt: "CC Media Agency",
    logoW: 360,
    logoH: 192,
    href: "/empresas/cc",
  },
  {
    id: "sdl",
    name: "SDL Consulting",
    tagKey: "empresas.sdl.tag",
    descKey: "empresas.sdl.desc",
    logoSrc: "/companies/sdl.png",
    logoAlt: "SDL Consulting",
    logoW: 360,
    logoH: 192,
    href: "/empresas/sdl",
  },
  {
    id: "lead",
    name: "LEAD Advisors",
    tagKey: "empresas.lead.tag",
    descKey: "empresas.lead.desc",
    logoSrc: "/companies/lead.png",
    logoAlt: "LEAD Advisors",
    logoW: 360,
    logoH: 192,
    href: "/empresas/lead",
  },
];

export function Empresas() {
  const { t } = useLanguage();

  return (
    <section id="empresas" className="bg-paper-warm border-t border-border-soft">
      <div className="container-x py-24 md:py-32">
        <Reveal direction="up" className="max-w-[68ch] mb-12 md:mb-16">
          <div className="eyebrow text-navy-light mb-4">{t("empresas.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(32px,4vw,52px)] leading-[1.16]">
            <RichText html={t("empresas.title")} />
          </h2>
          <p className="mt-5 text-text/80 text-[clamp(15px,1.1vw,17px)] leading-relaxed">{t("empresas.subtitle")}</p>
        </Reveal>

        <Reveal direction="up" delay={0.05} className="mb-7">
          <article className="group relative bg-white rounded-2xl overflow-hidden border border-border-soft p-8 md:p-12 grid md:grid-cols-[1fr_1.8fr] gap-8 md:gap-14 items-center shadow-[var(--shadow-sm-soft)] hover:shadow-[var(--shadow-soft)] transition-shadow duration-500">
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(60%_100%_at_0%_50%,rgba(46,125,233,0.08),transparent)]" />
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/logo-color.png"
                alt="Grupo Gaviria Cano"
                width={520}
                height={200}
                className="w-full max-w-[260px] h-auto"
              />
            </div>
            <div>
              <div className="eyebrow text-navy-light mb-3">{t("empresas.master.tag")}</div>
              <h3 className="font-serif text-navy text-[clamp(24px,2.6vw,34px)] leading-[1.2] mb-3">Grupo Gaviria Cano</h3>
              <p className="text-text/80 text-[15px] leading-relaxed mb-5">{t("empresas.master.desc")}</p>
              <Link
                href="#nosotros"
                className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-navy hover:text-navy-mid transition-colors"
              >
                <span>{t("empresas.master.link")}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
          {CARDS.map((c) => {
            const cardInner = (
              <article className="group relative flex flex-col h-full bg-white rounded-2xl border border-border-soft p-7 hover:border-navy-light/40 hover:shadow-[var(--shadow-soft)] transition-all duration-500">
                <div className="h-16 flex items-center">
                  <Image
                    src={c.logoSrc}
                    alt={c.logoAlt}
                    width={c.logoW}
                    height={c.logoH}
                    className="h-12 w-auto object-contain object-left"
                  />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.22em] font-semibold text-navy-light">
                  {t(c.tagKey)}
                </div>
                <h3 className="font-serif text-navy text-[22px] leading-tight mt-2 mb-3">{c.name}</h3>
                <p className="text-sm text-text/75 leading-relaxed flex-1">{t(c.descKey)}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-navy">
                  <span>{t("empresas.visit")}</span>
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </article>
            );
            return (
              <motion.div
                key={c.id}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                {c.external ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} (sitio externo)`} className="block h-full">
                    {cardInner}
                  </a>
                ) : (
                  <Link href={c.href} aria-label={c.name} className="block h-full">
                    {cardInner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
