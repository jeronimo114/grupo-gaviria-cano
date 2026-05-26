import type { TranslationKey } from "@/lib/i18n/translations";

export type EmpresaSlug = "cc" | "sdl" | "lead";

export type EmpresaData = {
  slug: EmpresaSlug;
  name: string;
  tagKey: TranslationKey;
  introKey: TranslationKey;
  body1Key: TranslationKey;
  body2Key: TranslationKey;
  logoSrc: string;
  logoAlt: string;
  logoW: number;
  logoH: number;
};

export const EMPRESAS: Record<EmpresaSlug, EmpresaData> = {
  cc: {
    slug: "cc",
    name: "CC Media Agency",
    tagKey: "empresas.cc.tag",
    introKey: "empresas.cc.subpage.intro",
    body1Key: "empresas.cc.subpage.body1",
    body2Key: "empresas.cc.subpage.body2",
    logoSrc: "/companies/cc.png",
    logoAlt: "CC Media Agency",
    logoW: 360,
    logoH: 192,
  },
  sdl: {
    slug: "sdl",
    name: "SDL Consulting",
    tagKey: "empresas.sdl.tag",
    introKey: "empresas.sdl.subpage.intro",
    body1Key: "empresas.sdl.subpage.body1",
    body2Key: "empresas.sdl.subpage.body2",
    logoSrc: "/companies/sdl.png",
    logoAlt: "SDL Consulting",
    logoW: 360,
    logoH: 192,
  },
  lead: {
    slug: "lead",
    name: "LEAD Advisors",
    tagKey: "empresas.lead.tag",
    introKey: "empresas.lead.subpage.intro",
    body1Key: "empresas.lead.subpage.body1",
    body2Key: "empresas.lead.subpage.body2",
    logoSrc: "/companies/lead.png",
    logoAlt: "LEAD Advisors",
    logoW: 360,
    logoH: 192,
  },
};
