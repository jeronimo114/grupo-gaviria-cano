"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RichText } from "@/lib/i18n/RichText";

// US stock-exchange symbols — indices + blue chips. Mirrors the original
// "Datos del mercado por TradingView" band, reconnected to the US market.
const SYMBOLS = [
  { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
  { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
  { proName: "FOREXCOM:DJI", title: "Dow 30" },
  { description: "Apple", proName: "NASDAQ:AAPL" },
  { description: "Microsoft", proName: "NASDAQ:MSFT" },
  { description: "Amazon", proName: "NASDAQ:AMZN" },
  { description: "Alphabet", proName: "NASDAQ:GOOGL" },
  { description: "NVIDIA", proName: "NASDAQ:NVDA" },
  { description: "Meta", proName: "NASDAQ:META" },
  { description: "Tesla", proName: "NASDAQ:TSLA" },
  { description: "JPMorgan", proName: "NYSE:JPM" },
];

export function MarketTicker() {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset between re-inits (e.g. language change) to avoid duplicate widgets.
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: lang,
    });
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [lang]);

  return (
    <section id="mercado" className="bg-paper-warm border-y border-border-soft">
      <div className="container-x py-16 md:py-20">
        <Reveal direction="up" className="max-w-[55ch] mb-8">
          <div className="eyebrow text-navy-light mb-4">{t("market.eyebrow")}</div>
          <h2 className="font-serif text-navy text-[clamp(24px,3vw,40px)] leading-[1.18]">
            <RichText html={t("market.title")} />
          </h2>
        </Reveal>

        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget" />
        </div>

        <p className="mt-6 text-xs text-muted/80 italic">{t("market.note")}</p>
      </div>
    </section>
  );
}
