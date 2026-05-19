"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="container-x py-16 md:py-20">
        <Reveal direction="up">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-14 pb-14 border-b border-white/10">
            <div>
              <Link href="#hero" aria-label="Grupo Gaviria Cano" className="inline-block mb-6">
                <Image
                  src="/logo-light.png"
                  alt="Grupo Gaviria Cano"
                  width={360}
                  height={140}
                  className="h-9 w-auto opacity-90"
                />
              </Link>
              <p className="text-white/65 text-sm leading-relaxed max-w-[42ch]">{t("footer.brand")}</p>
            </div>

            <FooterCol title={t("footer.companies")} links={[
              { href: "#empresas", label: "360 Colombia" },
              { href: "#empresas", label: "CC Media Agency" },
              { href: "#empresas", label: "SDL Consulting" },
              { href: "#empresas", label: "LEAD Advisors" },
            ]} />

            <FooterCol title={t("footer.group")} links={[
              { href: "#nosotros", label: t("nav.about") },
              { href: "#valores", label: t("nav.values") },
              { href: "#noticias", label: t("nav.news") },
              { href: "#empleo", label: t("nav.careers") },
            ]} />

            <FooterCol title={t("footer.contactTitle")} links={[
              { href: "#contacto", label: t("footer.writeUs") },
              { href: "#contacto", label: t("footer.offices") },
              { href: "#empleo", label: t("footer.openings") },
              { href: "#", label: t("footer.press") },
            ]} />
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[11px] text-white/55 uppercase tracking-[0.14em]">
          <div>{t("footer.copyright")}</div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-navy transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
          <div>{t("footer.policy")}</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-serif text-white text-[15px] mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.href}
              className="group inline-flex items-center text-sm text-white/65 hover:text-white transition-colors"
            >
              <span>{l.label}</span>
              <span aria-hidden className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
