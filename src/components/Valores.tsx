"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

const VALORES: { num: TranslationKey; title: TranslationKey; desc: TranslationKey }[] = [
  { num: "values.1.num", title: "values.1.title", desc: "values.1.desc" },
  { num: "values.2.num", title: "values.2.title", desc: "values.2.desc" },
  { num: "values.3.num", title: "values.3.title", desc: "values.3.desc" },
  { num: "values.4.num", title: "values.4.title", desc: "values.4.desc" },
];

export function Valores() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", reduce ? "-10%" : "10%"]);

  return (
    <section ref={ref} id="valores" className="relative bg-navy text-white overflow-hidden isolate">
      <motion.div style={{ x: bgX }} className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g stroke="#4A8FD9" strokeWidth="0.6" fill="none">
            {[0, 50, 100, 150, 200, 250].map((d, i) => (
              <motion.path
                key={i}
                d={`M800,${d} Q${400 + d * 0.4},${300 + d * 0.6} -100,${700 + d}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 2.6, delay: i * 0.18 }}
              />
            ))}
          </g>
        </svg>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(31,79,135,0.4),transparent)]" />

      <div className="container-x py-24 md:py-36 relative">
        <Reveal direction="up" className="max-w-[60ch] mb-14">
          <div className="eyebrow text-blue-line mb-4">{t("values.eyebrow")}</div>
          <h2 className="font-serif text-white text-[clamp(30px,3.6vw,50px)] leading-[1.16]">
            <RichText html={t("values.title")} />
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10" stagger={0.1}>
          {VALORES.map((v, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative bg-navy p-8 hover:bg-navy-mid transition-colors duration-500"
            >
              <div className="text-blue-line/70 text-xs uppercase tracking-[0.22em] font-semibold mb-6 group-hover:text-blue-line transition-colors">
                {t(v.num)}
              </div>
              <h3 className="font-serif text-white text-[26px] leading-tight mb-4">{t(v.title)}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{t(v.desc)}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-line group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
