import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompaniesBanner } from "@/components/CompaniesBanner";
import { Intro } from "@/components/Intro";
import { Stats } from "@/components/Stats";
import { MarketTicker } from "@/components/MarketTicker";
import { Empresas } from "@/components/Empresas";
import { Audiences } from "@/components/Audiences";
import { Compromisos } from "@/components/Compromisos";
import { Valores } from "@/components/Valores";
import { News } from "@/components/News";
import { Empleo } from "@/components/Empleo";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompaniesBanner />
        <Intro />
        <Stats />
        <MarketTicker />
        <Empresas />
        <Audiences />
        <Compromisos />
        <Valores />
        <News />
        <Empleo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
