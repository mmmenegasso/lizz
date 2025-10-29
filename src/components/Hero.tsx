import { ChevronRight, Heart, Star } from 'lucide-react';

export default function Hero() {
  const scrollToChallenge = () => {
    const challengeSection = document.getElementById('challenge-steps');
    if (challengeSection) {
      challengeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              Você já tentou vários produtos para queda de cabelo… e nada realmente funcionou?
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              Isso é mais comum do que parece. A maioria das fórmulas age só na superfície do fio, e por isso os resultados somem ou nunca aparecem.
            </p>

            <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              <span className="text-yellow-400 font-bold">No Desafio 60 Dias</span>, o foco não é "maquiar" o cabelo — é tratar a raiz com 7 ativos concentrados que reduzem a queda e aceleram o crescimento, com garantia total.
            </p>

            <p className="text-base sm:text-lg text-yellow-400 font-semibold mb-2 max-w-2xl mx-auto lg:mx-0">
              Entre no desafio → siga o protocolo → veja os resultados
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 max-w-2xl mx-auto lg:mx-0">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <p className="text-base sm:text-lg text-white/90 font-semibold">
                Se não funcionar pra você, <span className="text-yellow-400">devolvemos 100% do seu dinheiro</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={scrollToChallenge}
                className="btn-primary text-base sm:text-lg"
                aria-label="Ver como funciona o Desafio"
              >
                Quero ver como funciona o Desafio
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-base text-white/90 mb-4">
              <span>Frete grátis + garantia total de satisfação.</span>
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
