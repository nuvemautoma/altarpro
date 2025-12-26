import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como recebo o material?",
    answer:
      "Após a confirmação do pagamento, você recebe imediatamente um email com o link de acesso. Todo o material é digital e pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer:
      "Sim! Com o acesso vitalício, você pode imprimir quantas cópias precisar para uso pessoal, familiar, na igreja ou escola dominical.",
  },
  {
    question: "Qual a faixa etária indicada?",
    answer:
      "O material foi desenvolvido para crianças de 3 a 12 anos, com atividades de diferentes níveis de complexidade para cada idade.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim! Todo o conteúdo pode ser acessado diretamente pelo celular ou tablet. Você também pode baixar e imprimir se preferir.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias para testar. Se não gostar ou achar que não serve para sua família, basta nos enviar um email e devolvemos 100% do seu dinheiro.",
  },
];

interface FAQSectionProps {
  onCtaClick: () => void;
}

export const FAQSection = ({ onCtaClick }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Tire suas dúvidas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <button
            onClick={onCtaClick}
            className="bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            TIREI MINHAS DÚVIDAS - QUERO COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
};