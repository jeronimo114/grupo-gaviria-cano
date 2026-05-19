"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Counter } from "@/components/ui/Counter";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

type Stat = {
  prefix?: string;
  suffix?: string;
  target: number;
  key: TranslationKey;
};

const STATS: Stat[] = [
  { prefix: "+", target: 13, key: "stats.s1" },
  { target: 4, key: "stats.s2" },
  { prefix: "+", target: 12, key: "stats.s3" },
  { prefix: "+", suffix: "%", target: 19, key: "stats.s4" },
  { prefix: "+", suffix: "%", target: 62, key: "stats.s5" },
  { suffix: "+", target: 6, key: "stats.s6" },
];

export function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", reduce ? "-10%" : "20%"]);

  return (
    <section ref={ref} className="relative bg-paper text-navy overflow-hidden isolate">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g stroke="#4A8FD9" strokeWidth="0.5" fill="none">
            {[0, 20, 40, 60, 80, 100].map((d, i) => (
              <motion.path
                key={i}
                d={`M-100,${400 + d} Q400,${100 + d} 1300,${500 + d}`}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      <div className="container-x py-24 md:py-32 relative">
        <Reveal direction="up" className="max-w-[60ch] mb-14 md:mb-20">
          <div className="eyebrow text-navy-light mb-4">{t("stats.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(28px,3.4vw,44px)] leading-[1.18]">
            <RichText html={t("stats.title")} />
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-14" stagger={0.1}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative border-l border-navy/15 pl-6"
            >
              <div className="font-serif text-navy text-[clamp(46px,6vw,84px)] leading-none flex items-baseline">
                {s.prefix && <span className="text-navy-light text-[0.45em] mr-1.5 -translate-y-3 inline-block">{s.prefix}</span>}
                <Counter to={s.target} />
                {s.suffix && <span className="text-navy-light text-[0.45em] ml-1 -translate-y-3 inline-block">{s.suffix}</span>}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.18em] font-semibold text-muted">
                <RichText html={t(s.key)} />
              </div>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal direction="up" delay={0.1} className="mt-14 max-w-[70ch] text-xs text-muted/80 italic">
          {t("stats.note")}
        </Reveal>
      </div>
    </section>
  );
}
