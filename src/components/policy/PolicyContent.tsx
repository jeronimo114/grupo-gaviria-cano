"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { TranslationKey } from "@/lib/i18n/translations";

const SECTIONS: {
  num: string;
  title: TranslationKey;
  paragraphs: TranslationKey[];
}[] = [
  { num: "01", title: "policy.sec1.title", paragraphs: ["policy.sec1.p1", "policy.sec1.p2", "policy.sec1.p3"] },
  { num: "02", title: "policy.sec2.title", paragraphs: ["policy.sec2.p1", "policy.sec2.p2"] },
  { num: "03", title: "policy.sec3.title", paragraphs: ["policy.sec3.p1", "policy.sec3.p2"] },
  { num: "04", title: "policy.sec4.title", paragraphs: ["policy.sec4.p1", "policy.sec4.p2"] },
];

export function PolicyContent() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <RevealStagger className="flex flex-col gap-2" stagger={0.06}>
              {SECTIONS.map((s) => (
                <motion.a
                  key={s.num}
                  href={`#sec-${s.num}`}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="group flex items-start gap-3 py-2 text-sm text-text/70 hover:text-navy transition-colors"
                >
                  <span className="font-serif text-navy-light text-[15px] mt-px">{s.num}</span>
                  <span className="border-b border-transparent group-hover:border-navy transition-colors pb-0.5">
                    {t(s.title)}
                  </span>
                </motion.a>
              ))}
            </RevealStagger>
          </aside>

          <div>
            {SECTIONS.map((s, i) => (
              <article
                key={s.num}
                id={`sec-${s.num}`}
                className={`scroll-mt-32 ${i > 0 ? "mt-16 pt-16 border-t border-border-soft" : ""}`}
              >
                <Reveal direction="up">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-serif text-navy-light text-[28px] leading-none">{s.num}</span>
                    <h2 className="font-serif text-navy text-[clamp(24px,2.6vw,34px)] leading-[1.18]">
                      {t(s.title)}
                    </h2>
                  </div>
                </Reveal>
                <div className="space-y-5 max-w-[64ch]">
                  {s.paragraphs.map((p, j) => (
                    <Reveal key={j} direction="up" delay={0.05 + j * 0.05}>
                      <p className="text-text/85 text-[clamp(15px,1.05vw,17px)] leading-relaxed">{t(p)}</p>
                    </Reveal>
                  ))}
                </div>
              </article>
            ))}

            <Reveal direction="up" delay={0.1} className="mt-16 pt-10 border-t border-border-soft">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-muted">
                {t("policy.lastUpdate")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PolicyCTA() {
  const { t } = useLanguage();
  return (
    <section className="bg-paper-warm border-t border-border-soft">
      <div className="container-x py-20 md:py-24">
        <Reveal direction="up">
          <div className="bg-navy text-white rounded-3xl px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-[1.5fr_1fr] gap-8 items-center isolate relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(31,79,135,0.6),transparent)]" />
            <div>
              <h3 className="font-serif text-white text-[clamp(24px,2.8vw,36px)] leading-[1.15] mb-3">
                {t("policy.cta.title")}
              </h3>
              <p className="text-white/75 text-[15px] leading-relaxed max-w-[52ch]">{t("policy.cta.desc")}</p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href="/#contacto"
                className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-paper-warm transition-colors"
              >
                <span>{t("policy.cta.button")}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
