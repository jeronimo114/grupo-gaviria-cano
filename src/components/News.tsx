"use client";

import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

type Article = {
  cat: TranslationKey;
  title: TranslationKey;
  date: TranslationKey;
  pattern: "waves" | "circles" | "chart";
};

const ARTICLES: Article[] = [
  { cat: "news.1.cat", title: "news.1.title", date: "news.1.date", pattern: "waves" },
  { cat: "news.2.cat", title: "news.2.title", date: "news.2.date", pattern: "circles" },
  { cat: "news.3.cat", title: "news.3.title", date: "news.3.date", pattern: "chart" },
];

function Pattern({ kind }: { kind: Article["pattern"] }) {
  if (kind === "waves") {
    return (
      <svg viewBox="0 0 400 225" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <g stroke="#4A8FD9" strokeWidth="0.5" fill="none">
          {[200, 210, 220, 230].map((y, i) => (
            <motion.path
              key={i}
              d={`M0,${y} Q200,${y - 100} 400,${y - 20}`}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.4, delay: i * 0.18 }}
            />
          ))}
        </g>
      </svg>
    );
  }
  if (kind === "circles") {
    return (
      <svg viewBox="0 0 400 225" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <g stroke="#4A8FD9" strokeWidth="0.5" fill="none">
          <motion.circle cx="100" cy="100" r="60" opacity="0.4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8 }} />
          <motion.circle cx="200" cy="120" r="80" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.2 }} />
          <motion.circle cx="320" cy="80" r="50" opacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, delay: 0.4 }} />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      <g stroke="#4A8FD9" strokeWidth="0.5" fill="none">
        <motion.path
          d="M50,180 L100,80 L150,120 L200,40 L250,100 L300,60 L350,90"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.4 }}
        />
        <line x1="0" y1="200" x2="400" y2="200" opacity="0.3" />
      </g>
    </svg>
  );
}

export function News() {
  const { t } = useLanguage();

  return (
    <section id="noticias" className="bg-white">
      <div className="container-x py-24 md:py-32">
        <Reveal direction="up" className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-[50ch]">
            <div className="eyebrow text-navy-light mb-4">{t("news.eyebrow")}</div>
            <h2 className="font-serif text-navy text-[clamp(28px,3.4vw,46px)] leading-[1.16]">
              <RichText html={t("news.title")} />
            </h2>
          </div>
          <a
            href="https://grupogaviriacano.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-navy border-b-[1.5px] border-navy pb-1.5"
          >
            <span>{t("news.viewAll")}</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {ARTICLES.map((a, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-paper-warm border border-border-soft hover:shadow-[var(--shadow-soft)] transition-shadow duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(135deg,#0a2540,#143963)]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Pattern kind={a.pattern} />
                </motion.div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-navy-light">{t(a.cat)}</div>
                <h3 className="font-serif text-navy text-[20px] leading-[1.3] mt-3 mb-4 flex-1">
                  {t(a.title)}
                </h3>
                <div className="text-xs text-muted">{t(a.date)}</div>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
