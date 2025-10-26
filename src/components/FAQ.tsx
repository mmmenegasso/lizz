import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'O produto é original e aprovado pela ANVISA?',
    answer: 'Sim! O S.O.S Crescimento é 100% original, desenvolvido pela Lizz Ante Professional e aprovado pela ANVISA. Trabalhamos apenas com produtos autênticos e seguros.'
  },
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'A maioria das clientes nota redução significativa da queda em 2 a 3 semanas. Resultados mais profundos, como crescimento acelerado e volume, aparecem entre 30 e 60 dias de uso contínuo.'
  },
  {
    question: 'Como funciona a garantia de 60 dias?',
    answer: 'É simples: use o produto conforme as instruções por até 60 dias. Se não ficar satisfeita com os resultados, devolvemos 100% do seu investimento, sem perguntas ou burocracia.'
  },
  {
    question: 'Qual kit devo escolher?',
    answer: 'Recomendamos o kit de 90 dias para resultados consistentes e duradouros. É o mais escolhido pelas nossas clientes e oferece o melhor custo-benefício. Para casos mais avançados, o kit de 150 dias garante transformação completa.'
  },
  {
    question: 'O tratamento tem efeitos colaterais?',
    answer: 'O S.O.S Crescimento é formulado com ativos naturais e científicos, testado dermatologicamente. É seguro para uso contínuo e não apresenta efeitos colaterais quando usado conforme as instruções.'
  },
  {
    question: 'Posso usar se estiver grávida ou amamentando?',
    answer: 'Sempre recomendamos consultar seu médico antes de iniciar qualquer tratamento durante a gravidez ou amamentação, mesmo com produtos naturais.'
  },
  {
    question: 'Como faço para acompanhar meu pedido?',
    answer: 'Após a confirmação da compra, você receberá um código de rastreamento por e-mail. Você pode acompanhar o status do seu pedido em tempo real. Também oferecemos suporte via WhatsApp para qualquer dúvida.'
  },
  {
    question: 'A compra é segura?',
    answer: 'Absolutamente! Utilizamos os mais avançados protocolos de segurança para proteger seus dados. Sua compra é 100% segura e seus dados pessoais são totalmente protegidos.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o tratamento
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-xl mx-auto card p-8 bg-gradient-to-br from-white to-green-50">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nossa equipe está pronta para te ajudar! Fale diretamente conosco pelo WhatsApp.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5519989621975&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20SOS%20Crescimento!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
