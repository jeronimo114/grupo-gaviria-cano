"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "32%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const titleWords = (t("hero.title").match(/<em>[^<]+<\/em>|<br\s*\/?>|[^<]+/g) || []).filter(Boolean);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-screen flex items-end overflow-hidden bg-navy-deep text-white isolate"
    >
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 -z-10"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_30%,rgba(10,37,64,0.45)_0%,rgba(6,26,48,0.9)_60%,#061a30_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,48,0.35)_0%,rgba(6,26,48,0)_30%,rgba(6,26,48,0.55)_85%,rgba(6,26,48,0.95)_100%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative pb-20 pt-40 lg:pt-48 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow text-white/80 mb-6"
          >
            {t("hero.eyebrow")}
          </motion.div>

          <h1 className="font-serif text-white text-[clamp(40px,6vw,84px)] leading-[1.06] tracking-tight max-w-[18ch]">
            {titleWords.map((token, i) => {
              if (/^<br/i.test(token)) return <br key={i} />;
              const isEm = /^<em>/i.test(token);
              const text = token.replace(/<\/?em>/gi, "");
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.95,
                    delay: 0.35 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${isEm ? "italic text-blue-line/90" : "text-white"}`}
                  style={{ marginRight: text.endsWith(" ") ? 0 : "0.18em" }}
                >
                  {text.trim() || " "}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-7 max-w-[58ch] text-white/75 text-[clamp(15px,1.2vw,18px)] leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#empresas"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-navy font-semibold text-sm tracking-wide hover:bg-paper-warm transition-colors"
            >
              <span>{t("hero.cta1")}</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/60 transition-colors"
            >
              <RichText html={t("hero.cta2")} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="hidden lg:flex flex-col items-end gap-3 pb-2"
        >
          <div className="relative w-full max-w-[280px]">
            <Image
              src="/logo.png"
              alt="Grupo Gaviria Cano"
              width={400}
              height={120}
              className="w-full h-auto brightness-0 invert opacity-95"
              priority
            />
          </div>
          <div className="text-white/55 text-xs tracking-[0.18em] uppercase">grupogaviriacano.com</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
      >
        <span className="block w-px h-8 bg-white/30">
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 1.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            style={{ originY: 0 }}
            className="block w-px h-full bg-white"
          />
        </span>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
