import { Clock, Smartphone, Shrink, Check, Star, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Atividades Rápidas",
    description: "Apenas 10-15 minutinhos por dia. Perfeito para a rotina corrida.",
  },
  {
    icon: Smartphone,
    title: "Fácil de Usar",
    description: "Você não precisa preparar nada. Só abrir e fazer junto com seu filho.",
  },
  {
    icon: Shrink,
    title: "Conteúdo Pronto",
    description: "Tudo pensado por especialistas em educação cristã infantil.",
  },
];

const benefits = [
  "Kit de colorir com histórias bíblicas",
  "Cartões de oração para crianças",
  "Certificado de participação infantil",
  "Material de alfabetização cristã",
  "Desafio Bíblico de 7 dias",
  "App educativo que ensina a orar",
];

interface WhyChooseSectionProps {
  onCtaClick: () => void;
}

export const WhyChooseSection = ({ onCtaClick }: WhyChooseSectionProps) => {
  return (
    <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-10 relative z-10 pt-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            Você não precisa saber ensinar.{" "}
            <span className="text-gradient-gold">Nós já preparamos tudo.</span>
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Você só precisa estar presente. O Altar Pro cuida do resto.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card text-foreground p-6 rounded-2xl shadow-xl text-center hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Diferencial Badge */}
        <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            O grande diferencial
          </span>
        </div>

        {/* Diferencial Section */}
        <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Conteúdo que{" "}
            <span className="text-gradient-gold">gera constância natural</span>
          </h3>
          <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto">
            Seu filho vai QUERER fazer as atividades todos os dias. E você vai ver a transformação acontecer.
          </p>
        </div>

        {/* Benefits List */}
        <div className="bg-card text-foreground rounded-3xl p-8 md:p-10 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "550ms" }}>
          <h4 className="text-lg font-bold text-center text-foreground mb-6">
            O que você recebe no Kit:
          </h4>
          <div className="space-y-4">
            {benefits.map((item, index) => (
              <div key={item} className="flex items-center gap-3" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <button
            onClick={onCtaClick}
            className="group bg-gradient-gold text-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto animate-pulse-gold"
          >
            VER PLANOS E PREÇOS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
