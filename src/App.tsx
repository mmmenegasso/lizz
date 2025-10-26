import { useEffect } from 'react';
import FreeShippingBanner from './components/FreeShippingBanner';
import Hero from './components/Hero';
import PainIntro from './components/PainIntro';
import ProofCarousel from './components/ProofCarousel';
import Ingredients from './components/Ingredients';
import Challenge from './components/Challenge';
import OffersStrip from './components/OffersStrip';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const base = "https://CHECKOUT_DO_PRODUTOR/oferta?aff=SEU_ID";
    const keep = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "wbraid", "gbraid", "msclkid", "fbclid"];
    const kept = new URLSearchParams();

    keep.forEach(k => {
      const v = params.get(k);
      if (v) kept.set(k, v);
    });

    const finalUrl = kept.toString() ? `${base}&${kept.toString()}` : base;

    function markClick(id: string) {
      const el = document.getElementById(id);
      if (!el) return;
      el.setAttribute('href', finalUrl);
      el.setAttribute('target', '_blank');
      el.addEventListener('click', () => {
        if (window.fbq) {
          window.fbq('trackCustom', 'PresellCTAClick', Object.fromEntries(kept));
        }
      });
    }

    ['cta-hero', 'cta-challenge', 'cta-offer-60', 'cta-offer-90', 'cta-offer-150', 'cta-offer-30'].forEach(markClick);

    const whats = document.getElementById('cta-whats');
    if (whats) {
      const msg = encodeURIComponent("Oi! Quero saber qual é o melhor kit para o Desafio 60 Dias.");
      whats.setAttribute('href', `https://wa.me/55SEUNUMERO?text=${msg}`);
      whats.setAttribute('target', '_blank');
      whats.addEventListener('click', () => {
        if (window.fbq) {
          window.fbq('trackCustom', 'WhatsAppClick');
        }
      });
    }

    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <FreeShippingBanner />
      <Hero />
      <PainIntro />
      <ProofCarousel />
      <Ingredients />
      <Challenge />
      <OffersStrip />
      <FAQ />
      <Footer />
    </div>
  );
}

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export default App;
