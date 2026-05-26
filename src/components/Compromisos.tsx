"use client";

import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import { ColombiaFlag } from "@/components/icons/Flags";
import type { TranslationKey } from "@/lib/i18n/translations";

const ICONS = {
  diversity: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  sustainability: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  education: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

const FEATURES: { icon: React.ReactNode; title: TranslationKey; desc: TranslationKey }[] = [
  { icon: ICONS.diversity, title: "compromise.1.title", desc: "compromise.1.desc" },
  { icon: ICONS.sustainability, title: "compromise.2.title", desc: "compromise.2.desc" },
  { icon: ICONS.education, title: "compromise.3.title", desc: "compromise.3.desc" },
];

export function Compromisos() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper-warm border-t border-border-soft">
      <div className="container-x py-24 md:py-32">
        <Reveal direction="up" className="max-w-[60ch] mb-14">
          <div className="eyebrow text-navy-light mb-4">{t("compromise.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(28px,3.4vw,46px)] leading-[1.18]">
            <RichText html={t("compromise.title")} />
          </h2>
          <p className="mt-5 text-text/75 text-[clamp(15px,1.05vw,17px)] leading-relaxed">{t("compromise.subtitle")}</p>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <article className="relative bg-white rounded-2xl border border-border-soft p-8 md:p-14 mb-7 overflow-hidden shadow-[var(--shadow-sm-soft)]">
            <div className="absolute -top-12 -right-12 w-72 h-72 opacity-[0.06] pointer-events-none">
              <ColombiaFlag className="w-full h-full" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start max-w-[80ch]">
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0"
              >
                <ColombiaFlag className="w-full h-full" />
              </motion.div>
              <div>
                <div className="eyebrow text-navy-light mb-3">{t("compromise.feature.eyebrow")}</div>
                <h3 className="font-serif text-navy text-[clamp(22px,2.4vw,32px)] leading-[1.2] mb-5">
                  <RichText html={t("compromise.feature.title")} />
                </h3>
                <p className="text-text/80 text-[15px] leading-relaxed">{t("compromise.feature.desc")}</p>
              </div>
            </div>
          </article>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
          {FEATURES.map((f, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-2xl border border-border-soft p-8 hover:border-navy-light/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-paper text-navy flex items-center justify-center mb-5 group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="font-serif text-navy text-[20px] mb-3">{t(f.title)}</h3>
              <p className="text-sm text-text/75 leading-relaxed">{t(f.desc)}</p>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
