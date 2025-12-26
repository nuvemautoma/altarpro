import { Palette, Heart, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Livros de Colorir Bíblicos",
    description: "Desenhos de histórias da Bíblia para colorir e aprender",
    gradient: "bg-gradient-benefit-purple",
  },
  {
    icon: Heart,
    title: "Cartões de Oração",
    description: "Ensina as crianças a conversar com Deus de forma simples",
    gradient: "bg-gradient-benefit-pink",
  },
  {
    icon: BookOpen,
    title: "Devocional Infantil",
    description: "Atividades diárias para crescer na fé em família",
    gradient: "bg-gradient-benefit-blue",
  },
  {
    icon: Users,
    title: "Para Toda a Família",
    description: "Material perfeito para células, escola dominical e casa",
    gradient: "bg-gradient-benefit-green",
  },
];

interface WhyChooseSectionProps {
  onCtaClick: () => void;
}

export const WhyChooseSection = ({ onCtaClick }: WhyChooseSectionProps) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Conheça o Altar Pro
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para
            <br />
            <span className="text-primary">educar seus filhos na fé</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um kit completo de atividades cristãs desenvolvido especialmente 
            para fortalecer a fé das crianças de forma divertida
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background p-6 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-5 animate-float`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-trust rounded-3xl p-8 md:p-10 max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            O que seu filho vai aprender:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Histórias bíblicas de forma lúdica",
              "Como fazer suas próprias orações",
              "Valores cristãos para a vida",
              "Conexão mais profunda com Deus",
              "Coordenação e criatividade",
              "Disciplina espiritual desde cedo",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <button
            onClick={onCtaClick}
            className="group bg-gradient-cta text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto"
          >
            VER PLANOS E PREÇOS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};