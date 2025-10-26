import { ChevronRight, Heart, Star } from 'lucide-react';

export default function Hero() {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-[linear-gradient(180deg,#C62828_0%,#A61E1E_100%)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <img
              src="/logo-lizzante-oficial.webp"
              alt="Lizz Ante Professional"
              className="h-20 sm:h-24 lg:h-28 mb-10 mx-auto lg:mx-0"
            />
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-tight mb-6">
              Participe do <span className="text-yellow-400 whitespace-nowrap">Desafio 60 Dias.</span> Recupere a <span className="text-yellow-400">força</span> e o <span className="text-yellow-400">volume</span> do seu cabelo
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Um tratamento com 7 ativos concentrados que agem direto na raiz dos fios.
              <br />
              Resultados visíveis, aprovados por especialistas — e 100% garantidos.
            </p>

            <p className="text-base sm:text-lg text-yellow-400 font-semibold mb-2 max-w-2xl mx-auto lg:mx-0">
              Entre no desafio → siga o tratamento → veja os resultados
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 max-w-2xl mx-auto lg:mx-0">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <p className="text-base sm:text-lg text-white/90 font-semibold">
                Se não gostar, seu dinheiro volta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={scrollToOffers}
                className="btn-primary text-base sm:text-lg"
                aria-label="Participar do Desafio 60 Dias"
              >
                Quero começar meu Desafio 60 Dias agora!
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-base text-white/90 mb-4">
              <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-bold">Frete grátis + garantia total de satisfação.</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md lg:max-w-xl mx-auto relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8">
                <img
                  src="/kit-sombra.png"
                  alt="S.O.S Crescimento - Kit Completo"
                  className="w-full h-full object-contain drop-shadow-2xl scale-110 lg:scale-125"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F7F7] to-transparent"></div>
    </section>
  );
}
