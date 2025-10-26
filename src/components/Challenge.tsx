import { Shield, Clock, CheckCircle, ChevronRight } from 'lucide-react';

export default function Challenge() {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-10">
              <img
                src="/selo.png"
                alt="Risco Zero"
                className="w-40 h-40 object-contain drop-shadow-lg"
              />
            </div>

            <div className="card p-8 sm:p-12 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 border-2 border-emerald-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4 mt-12">
                  Desafio 60 Dias
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Participe do desafio: use como indicado e, se não amar os resultados,
                  <span className="font-bold text-emerald-600"> devolvemos 100% do seu dinheiro</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Clock className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Use por 60 dias</h3>
                  <p className="text-sm text-gray-600">Siga o protocolo completo</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-md flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Veja os resultados</h3>
                  <p className="text-sm text-gray-600">Transformação visível</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Shield className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Garantia total</h3>
                  <p className="text-sm text-gray-600">Reembolso sem burocracia</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Por que oferecemos essa garantia?</h4>
                <p className="text-gray-700 leading-relaxed text-center">
                  Porque temos <span className="font-semibold text-[#C62828]">absoluta confiança</span> na
                  eficácia do nosso tratamento. Milhares de mulheres já transformaram seus cabelos com o
                  S.O.S Crescimento, e sabemos que você também terá resultados incríveis.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={scrollToOffers}
                  className="btn-primary text-lg"
                  aria-label="Começar com garantia total"
                >
                  Quero começar com garantia total
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Compra 100% segura • Sem compromisso • Risco zero
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              A garantia é válida dentro do prazo de 60 dias a partir da data de compra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
