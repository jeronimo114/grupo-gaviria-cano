import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmpresaSubpage } from "@/components/empresas/EmpresaSubpage";
import { EMPRESAS, type EmpresaSlug } from "@/lib/empresas-data";

const SLUGS = Object.keys(EMPRESAS) as EmpresaSlug[];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const empresa = EMPRESAS[slug as EmpresaSlug];
  if (!empresa) return {};
  return {
    title: empresa.name,
    alternates: { canonical: `/empresas/${slug}` },
  };
}

export default async function EmpresaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const empresa = EMPRESAS[slug as EmpresaSlug];
  if (!empresa) notFound();

  return (
    <>
      <Header />
      <main>
        <EmpresaSubpage empresa={empresa} />
      </main>
      <Footer />
    </>
  );
}
