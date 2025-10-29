import { Sparkles, Leaf, Shield, Zap, Droplet, Heart } from 'lucide-react';

const ingredients = [
  {
    icon: Sparkles,
    name: 'Biotina',
    benefit: 'Estimula o crescimento e fortalece a estrutura do fio desde a raiz'
  },
  {
    icon: Leaf,
    name: 'Bardana + Bambu',
    benefit: 'Combate a queda e revitaliza o couro cabeludo'
  },
  {
    icon: Shield,
    name: 'Queratina Hidrolisada',
    benefit: 'Reconstrói fios danificados e aumenta a resistência'
  },
  {
    icon: Zap,
    name: 'Cafeína',
    benefit: 'Ativa a circulação no bulbo capilar, acelerando o crescimento'
  },
  {
    icon: Droplet,
    name: 'Óleo de Rícino',
    benefit: 'Nutre profundamente e previne a quebra dos fios'
  },
  {
    icon: Heart,
    name: 'Pantenol (Pró-Vitamina B5)',
    benefit: 'Hidrata e dá volume, deixando os fios mais densos'
  }
];

export default function Ingredients() {
  return (
    <section className="bg-gradient-to-br from-[#C62828] to-[#A61E1E] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            A ciência por trás do crescimento 7x mais rápido
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            7 ativos concentrados que trabalham em sinergia para resultados visíveis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 bg-white border-4 border-white hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C62828] to-[#A61E1E] flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {ingredient.benefit}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto flex justify-center">
          <img
            src="/baner-anvisa.webp"
            alt="Produtos Autorizados e Certificados pela ANVISA"
            className="hidden sm:block w-full max-w-3xl h-auto"
          />
          <img
            src="/banner-anvisa-mobile.webp"
            alt="Produtos Autorizados e Certificados pela ANVISA"
            className="block sm:hidden w-full max-w-sm h-auto"
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
              Por que o SOS Crescimento funciona quando outros produtos não funcionaram
            </h3>

            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              A maioria dos produtos para queda atua só na superfície do fio — deixando a raiz enfraquecida e a queda volta.
              <br />
              <span className="font-semibold">O protocolo do Desafio 60 Dias trabalha na origem do problema, em 3 pilares:</span>
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#C62828] mb-3">
                  1) Estabiliza a raiz antes de estimular o crescimento
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  A combinação de 7 ativos age direto no bulbo capilar, reduzindo a queda progressiva antes de iniciar a fase de crescimento.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#C62828] mb-3">
                  2) Estímulo contínuo — não é efeito temporário
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Aplicado pelo menos 3x por semana, o couro cabeludo recebe sinais repetidos de reativação, o que promove crescimento sustentado, e não apenas um "up" momentâneo.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#C62828] mb-3">
                  3) Segurança e formulação liberada pela ANVISA
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  O protocolo foi desenvolvido dentro dos padrões exigidos e possui liberação da ANVISA, garantindo uso seguro durante o desafio.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-800 text-center mt-8 leading-relaxed font-medium">
              Por isso tantas mulheres que "já tinham tentado de tudo" só viram resultado real quando mudaram da <span className="line-through text-gray-500">tentativa isolada</span> → para um <span className="text-[#C62828] font-bold">protocolo guiado</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
