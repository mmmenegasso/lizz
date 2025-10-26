import { MessageCircle, Clock, Shield } from 'lucide-react';

export default function Support() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl"></div>
                <div className="relative w-full h-full rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-20 h-20 text-white" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Adicione foto de uma consultora com o produto aqui
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                <span className="text-emerald-700 font-semibold text-sm">SUPORTE DEDICADO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Tem dúvidas? Estamos aqui para ajudar
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Fale com uma especialista agora pelo WhatsApp e tire todas as suas dúvidas sobre
                qual kit é o ideal para você.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Atendimento humanizado</h3>
                    <p className="text-sm text-gray-600">
                      Consultoras especializadas prontas para ajudar você
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resposta rápida</h3>
                    <p className="text-sm text-gray-600">
                      Atendimento de segunda a sábado, das 8h às 20h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Orientação personalizada</h3>
                    <p className="text-sm text-gray-600">
                      Ajudamos você a escolher o melhor kit para suas necessidades
                    </p>
                  </div>
                </div>
              </div>

              <a
                id="cta-whats"
                className="btn-ghost"
                aria-label="Falar com especialista no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com especialista agora
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Clique no botão e será redirecionado para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
