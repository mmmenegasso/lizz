import { ChevronRight } from 'lucide-react';

export default function ProofCarousel() {
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials-section');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="challenge-steps" className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/bg-desafio.jpg)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Como funciona o Desafio 60 Dias
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Diferente de produtos "de prateleira", aqui você não apenas usa — você segue um protocolo guiado por 60 dias, com garantia total de satisfação.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-8 mb-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fase 1 — Estabilização da queda (primeiras semanas)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Com a aplicação mínima de 3x por semana, os ativos começam a agir direto no bulbo capilar, reduzindo a queda progressiva.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Muitas mulheres relatam notar menos fios no ralo, travesseiro e escova já nas primeiras semanas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fase 2 — Reativação do crescimento (após a estabilização)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com a raiz fortalecida, o protocolo entra na segunda etapa: acelerar o crescimento até 7x mais rápido, preenchendo áreas que estavam afinando.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fase 3 — Segurança e garantia
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                  Você segue o protocolo por 60 dias. Se não enxergar os resultados, devolvemos 100% do seu dinheiro.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Sem burocracia, sem letra miúda.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              onClick={scrollToTestimonials}
              className="btn-primary text-base sm:text-lg"
              aria-label="Ver depoimentos de outras mulheres"
            >
              Quero ver os depoimentos de outras mulheres
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
