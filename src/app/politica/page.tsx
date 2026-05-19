import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolicyHero } from "@/components/policy/PolicyHero";
import { PolicyContent, PolicyCTA } from "@/components/policy/PolicyContent";

export const metadata: Metadata = {
  title: "Política de empleo y tratamiento de información",
  description:
    "Política de empleo, confidencialidad y tratamiento de datos personales de Grupo Gaviria Cano S.A.S.",
  alternates: { canonical: "/politica" },
};

export default function PoliticaPage() {
  return (
    <>
      <Header />
      <main>
        <PolicyHero />
        <PolicyContent />
        <PolicyCTA />
      </main>
      <Footer />
    </>
  );
}
