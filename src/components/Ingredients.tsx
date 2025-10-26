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
    <section className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            A ciência por trás do crescimento 7x mais rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6 ativos concentrados que trabalham em sinergia para resultados visíveis
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 bg-gradient-to-br from-[#C62828] to-[#A61E1E] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {ingredient.name}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
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
      </div>
    </section>
  );
}
