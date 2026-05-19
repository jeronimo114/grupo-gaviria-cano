"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/lib/i18n/RichText";

export function Intro() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-white">
      <div className="container-x py-24 md:py-36">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <Reveal direction="up">
            <div className="eyebrow text-navy-light sticky top-32">{t("intro.label")}</div>
          </Reveal>
          <div>
            <Reveal direction="up" delay={0.05}>
              <h2 className="font-serif text-navy text-[clamp(28px,3.6vw,46px)] leading-[1.18] max-w-[24ch]">
                <RichText html={t("intro.title")} />
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="mt-6 text-text/85 text-[clamp(15px,1.1vw,17px)] leading-relaxed max-w-[62ch]">
                {t("intro.p1")}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-5 text-text/85 text-[clamp(15px,1.1vw,17px)] leading-relaxed max-w-[62ch]">
                {t("intro.p2")}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <Link
                href="#empresas"
                className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-navy border-b-[1.5px] border-navy/90 hover:border-navy pb-1.5 transition-colors"
              >
                <span>{t("intro.cta")}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
