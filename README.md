# Grupo Gaviria Cano — Sitio web

Sitio corporativo de Grupo Gaviria Cano, casa matriz de inversiones en comunicaciones, consultoría y asesoría.

## Stack

- **Next.js 16** (App Router, Turbopack, RSC)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (con design tokens en `@theme`)
- **Motion** (Framer Motion) para animaciones de componentes
- **GSAP** disponible para timelines complejos
- **Lenis** para scroll suave
- **Source Serif 4** + **Inter** (next/font)

## Estructura

```
src/
├── app/                  # App Router, layout y página principal
│   ├── globals.css       # Tokens de diseño + base styles
│   ├── layout.tsx        # Fuentes, providers (i18n, Lenis)
│   └── page.tsx          # Composición de secciones
├── components/
│   ├── Header.tsx        # Nav sticky con language switcher
│   ├── Hero.tsx          # Video bg + parallax + title animado
│   ├── CompaniesBanner.tsx
│   ├── Intro.tsx
│   ├── Stats.tsx         # Contadores con easeOutCubic
│   ├── Empresas.tsx
│   ├── Audiences.tsx
│   ├── Compromisos.tsx
│   ├── Valores.tsx
│   ├── News.tsx          # Patterns SVG animados
│   ├── Empleo.tsx
│   ├── Contacto.tsx      # Form con floating labels
│   ├── Footer.tsx
│   ├── icons/Flags.tsx
│   └── ui/
│       ├── Reveal.tsx    # Wrapper Framer Motion para scroll reveal
│       └── Counter.tsx   # Contador animado
└── lib/
    ├── i18n/
    │   ├── translations.ts       # ES/EN completo
    │   ├── LanguageProvider.tsx  # Context + persistencia en localStorage
    │   └── RichText.tsx          # Tokenizer seguro para <em> y <br>
    └── motion/
        └── LenisProvider.tsx     # Scroll suave global
```

## Comandos

```bash
npm install      # Instala dependencias
npm run dev      # Inicia dev server en http://localhost:3000
npm run build    # Build de producción
npm start        # Sirve el build
npm run lint     # Linting
```

## Notas

- El sitio detecta el idioma del navegador la primera visita; el usuario puede cambiarlo desde el switcher (persistencia en `localStorage` bajo la clave `gaviria-lang`).
- El video de fondo del Hero se sirve desde `/public/hero-bg.{webm,mp4}` con parallax cinemático vía `useScroll` + `useTransform`.
- Todas las animaciones respetan `prefers-reduced-motion`.
- El sitio está optimizado para SEO con metadatos en `app/layout.tsx` (Open Graph incluido).
