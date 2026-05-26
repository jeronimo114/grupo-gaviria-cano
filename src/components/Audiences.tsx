"use client";

import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

const CELLS: { num: string; title: TranslationKey; desc: TranslationKey }[] = [
  { num: "01", title: "audience.1.title", desc: "audience.1.desc" },
  { num: "02", title: "audience.2.title", desc: "audience.2.desc" },
  { num: "03", title: "audience.3.title", desc: "audience.3.desc" },
  { num: "04", title: "audience.4.title", desc: "audience.4.desc" },
];

export function Audiences() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-x py-24 md:py-32">
        <Reveal direction="up" className="max-w-[60ch] mb-14">
          <div className="eyebrow text-navy-light mb-4">{t("audience.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(28px,3.4vw,46px)] leading-[1.18]">
            <RichText html={t("audience.title")} />
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border-soft" stagger={0.1}>
          {CELLS.map((c, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={`group relative py-10 px-6 border-b border-border-soft ${
                i < CELLS.length - 1 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "sm:border-r lg:border-r" : "sm:border-r-0 lg:border-r"} hover:bg-paper-warm transition-colors duration-500`}
            >
              <div className="font-serif text-navy-light/40 text-[44px] leading-none mb-5 group-hover:text-navy-light transition-colors duration-500">
                {c.num}
              </div>
              <h3 className="font-serif text-navy text-[22px] mb-3">{t(c.title)}</h3>
              <p className="text-sm text-text/75 leading-relaxed">{t(c.desc)}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-navy group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
