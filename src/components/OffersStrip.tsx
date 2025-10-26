import { ChevronRight, Star, Zap, Award, Truck } from 'lucide-react';

const offers = [
  {
    id: 'offer-60',
    days: 60,
    title: 'Kit Inicial',
    icon: Zap,
    badge: '💪 Ideal para começar',
    description: 'Perfeito para testar e ver os primeiros resultados visíveis',
    features: [
      'Primeiros resultados em 2-3 semanas',
      'Redução visível da queda',
      'Ideal para testar o método'
    ],
    recommended: false
  },
  {
    id: 'offer-90',
    days: 90,
    title: 'Kit Transformação',
    icon: Star,
    badge: '⭐ MAIS POPULAR',
    description: 'Resultados consistentes e duradouros. Escolha de 9 em cada 10 clientes',
    features: [
      'Resultados profundos e duradouros',
      'Crescimento acelerado',
      'Melhor custo-benefício'
    ],
    recommended: true
  },
  {
    id: 'offer-150',
    days: 150,
    title: 'Kit Completo',
    icon: Award,
    badge: '🏆 Máximos resultados',
    description: 'Transformação completa com resultados surpreendentes',
    features: [
      'Transformação completa garantida',
      'Volume e densidade máximos',
      'Economia de até 40%'
    ],
    recommended: false
  }
];

export default function OffersStrip() {
  return (
    <section id="offers-section" className="bg-gradient-to-b from-[#C62828] to-[#8B1A1A] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Recupere seus cabelos em casa — escolha o kit ideal e participe do Desafio 60 Dias!
          </h2>
          <p className="text-lg text-yellow-400 max-w-2xl mx-auto font-semibold">
            Todos os kits incluem frete grátis + garantia total de satisfação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  offer.recommended
                    ? 'ring-2 ring-[#C62828] transform lg:scale-105 z-10'
                    : 'z-0'
                } ${offer.days === 60 || offer.days === 90 || offer.days === 150 ? '' : 'card p-6'}`}
              >
                {offer.days === 60 ? (
                  <a
                    href="https://app.monetizze.com.br/r/AFK22668887?u=c&pl=VS132224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/kit60d.png"
                      alt="Kit 60 dias"
                      className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                ) : offer.days === 90 ? (
                  <a
                    href="https://app.monetizze.com.br/r/AFK22668887?u=c&pl=PR132225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/kit90d.png"
                      alt="Kit 90 dias"
                      className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                ) : offer.days === 150 ? (
                  <a
                    href="https://app.monetizze.com.br/r/AFK22668887?u=c&pl=WG274410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/kit150d.png"
                      alt="Kit 150 dias"
                      className="w-full h-auto rounded-2xl cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </a>
                ) : (
                  <>
                    {offer.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full px-4">
                        <div className="badge-gold text-center py-2 shadow-lg w-full">
                          {offer.badge}
                        </div>
                      </div>
                    )}

                    {!offer.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          {offer.badge}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {offer.days} dias
                      </h3>
                      <p className="text-sm font-semibold text-gray-700">{offer.title}</p>
                    </div>

                    <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                      {offer.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-1.5"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-center gap-2 mb-4 text-blue-600">
                      <Truck className="w-5 h-5" />
                      <span className="text-sm font-semibold">Frete grátis</span>
                    </div>

                    <a
                      id={`cta-${offer.id}`}
                      className={`w-full ${
                        offer.recommended ? 'btn-primary' : 'btn-ghost'
                      }`}
                      aria-label={`Quero o kit de ${offer.days} dias`}
                    >
                      {offer.recommended ? 'Quero o mais popular' : 'Escolher este kit'}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center max-w-6xl mx-auto">
          <div className="card p-4 bg-white">
            <p className="text-sm text-[#C62828] leading-relaxed mb-1">
              <span className="font-bold">Dica:</span> A maioria das nossas clientes
              escolhe o kit de 90 dias para garantir resultados profundos e duradouros com o melhor
              custo-benefício.
            </p>
            <p className="text-sm text-[#C62828] italic">
              Promoção válida somente até hoje às 23h59 ou enquanto durarem os estoques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
