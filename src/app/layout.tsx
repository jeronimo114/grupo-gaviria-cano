import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LenisProvider } from "@/lib/motion/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Gaviria Cano — Casa matriz de inversiones",
    template: "%s · Grupo Gaviria Cano",
  },
  description:
    "Casa matriz de inversiones en comunicaciones, consultoría y asesoría a empresas privadas y gobiernos. Medellín · Doral.",
  metadataBase: new URL("https://grupogaviriacano.com"),
  openGraph: {
    title: "Grupo Gaviria Cano",
    description:
      "Más de tres décadas invirtiendo en el desarrollo de Colombia. Portafolio de empresas en comunicaciones, consultoría y asesoría.",
    type: "website",
    locale: "es_CO",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-text">
        <LanguageProvider>
          <LenisProvider>{children}</LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
