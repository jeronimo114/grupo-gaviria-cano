"use client";

import { motion } from "motion/react";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { ColombiaFlag, UsaFlag } from "@/components/icons/Flags";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";
import type { TranslationKey } from "@/lib/i18n/translations";

const DIRECT: { key: TranslationKey; value: string; href: string; icon: React.ReactNode }[] = [
  {
    key: "contact.direct.email",
    value: "andres@grupogaviriacano.com",
    href: "mailto:andres@grupogaviriacano.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    key: "contact.direct.phone",
    value: "+57 305 228 7176",
    href: "tel:+573052287176",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "contact.direct.linkedin",
    value: "/company/grupo-gaviria-cano-sas",
    href: "https://www.linkedin.com/company/grupo-gaviria-cano-sas/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
  },
];

export function Contacto() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative bg-paper text-text overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g stroke="#4A8FD9" strokeWidth="0.4" fill="none">
            {[400, 420, 440, 460].map((y, i) => (
              <motion.path
                key={i}
                d={`M-100,${y} Q400,${y - 300} 1300,${y + 100}`}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 2.4, delay: i * 0.2 }}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container-x py-24 md:py-32 relative">
        <Reveal direction="up" className="max-w-[60ch] mb-14">
          <div className="eyebrow text-navy-light mb-4">{t("contact.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(32px,4vw,54px)] leading-[1.14] mb-5">
            <RichText html={t("contact.title")} />
          </h2>
          <p className="text-text/75 text-[clamp(15px,1.1vw,17px)] leading-relaxed">{t("contact.desc")}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14" stagger={0.08}>
          {DIRECT.map((d, i) => (
            <motion.a
              key={i}
              href={d.href}
              {...(d.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border-soft hover:border-navy-light/40 hover:shadow-[var(--shadow-sm-soft)] transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-paper text-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                {d.icon}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.22em] font-semibold text-muted">{t(d.key)}</span>
                <span className="block text-navy text-sm font-medium truncate">{d.value}</span>
              </span>
              <span aria-hidden className="text-navy/50 group-hover:text-navy transition-all duration-300 group-hover:translate-x-1">→</span>
            </motion.a>
          ))}
        </RevealStagger>

        <Reveal direction="up" delay={0.1}>
          <h3 className="font-serif text-navy text-[clamp(22px,2.2vw,30px)] mb-6">
            {t("contact.offices.title")}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <OfficeCard
              href="https://maps.google.com/?q=Carrera+43A+16A+Sur+38+Medellin"
              flag={<ColombiaFlag className="w-full h-full" />}
              city={t("office.medellin.city")}
              role={t("office.medellin.role")}
              addressKey={t("office.medellin.address")}
              phone="+57 305 228 7176"
            />
            <OfficeCard
              href="https://maps.google.com/?q=7801+NW+37th+Street+Doral+FL"
              flag={<UsaFlag className="w-full h-full" />}
              city={t("office.doral.city")}
              role={t("office.doral.role")}
              addressKey={t("office.doral.address")}
              phone="(305) 592 0839"
            />
          </div>

          <div className="bg-white rounded-2xl border border-border-soft p-5 max-w-md">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-muted mb-1">
              {t("contact.hours.label")}
            </div>
            <div className="text-navy text-sm font-medium">{t("contact.hours.value")}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OfficeCard({
  href,
  flag,
  city,
  role,
  addressKey,
  phone,
}: {
  href: string;
  flag: React.ReactNode;
  city: string;
  role: string;
  addressKey: string;
  phone: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="group flex gap-4 bg-white rounded-2xl border border-border-soft p-6 hover:border-navy-light/40 hover:shadow-[var(--shadow-sm-soft)] transition-all"
    >
      <span className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">{flag}</span>
      <div className="flex-1 min-w-0">
        <div className="font-serif text-navy text-[20px]">{city}</div>
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-navy-light mt-0.5">{role}</div>
        <p className="text-sm text-text/75 leading-relaxed mt-2.5">
          <RichText html={addressKey} />
        </p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-soft">
          <span className="text-sm text-muted font-medium">{phone}</span>
          <span aria-hidden className="text-navy/50 group-hover:text-navy transition-all duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}
