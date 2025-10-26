import { ChevronRight } from 'lucide-react';

export default function ProofCarousel() {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/bg-desafio.jpg)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Como funciona o Desafio 60 Dias
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-semibold leading-relaxed">
            É simples: você segue o tratamento por 2 meses, acompanha os resultados e, se não estiver satisfeita, recebe seu dinheiro de volta.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="space-y-8 mb-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  ①
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Comece seu desafio
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Adquira o Kit S.O.S Crescimento e receba no conforto da sua casa com frete grátis.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  ②
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Siga o tratamento
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Use o shampoo, tônico e máscara conforme as instruções.<br />
                  Os 7 ativos concentrados agem direto na raiz, fortalecendo e estimulando o crescimento.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  ③
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Veja os resultados
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Em poucas semanas, você começa a notar menos queda e fios mais fortes e cheios.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  ④
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Garantia de 60 dias
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Se não estiver 100% satisfeita, devolvemos todo o valor investido, sem burocracia.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              onClick={scrollToOffers}
              className="btn-primary text-base sm:text-lg"
              aria-label="Começar o Desafio 60 Dias"
            >
              Quero começar meu Desafio 60 Dias agora!
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
