import { Shield, Lock, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#8B0000] to-[#B22222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Compra Segura</h3>
              <p className="text-sm text-white/80">
                Site protegido com certificado SSL
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Privacidade Protegida</h3>
              <p className="text-sm text-white/80">
                Seus dados estão 100% seguros
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Garantia 60 Dias</h3>
              <p className="text-sm text-white/80">
                Compra sem risco, reembolso garantido
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-white/90 text-center">
              © {currentYear} S.O.S Crescimento - Lizz Ante Professional. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/80 font-medium">Formas de pagamento:</p>
              <img
                src="/pagamento-icone-soscrescimento.webp"
                alt="Formas de pagamento aceitas"
                className="h-24"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-white/70 text-center leading-relaxed">
            Os resultados podem variar de pessoa para pessoa. As informações contidas neste site não substituem
            orientação médica profissional. Consulte sempre um especialista antes de iniciar qualquer tratamento.
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
          </p>
        </div>
      </div>
    </footer>
  );
}
