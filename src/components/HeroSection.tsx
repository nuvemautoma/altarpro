import { Shield, Zap, Heart, BookOpen } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Compra 100% Segura" },
  { icon: Zap, label: "Acesso Imediato" },
  { icon: Heart, label: "Conteúdo Cristão" },
];

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <header className="bg-gradient-hero text-primary-foreground py-10 pb-16 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {trustBadges.map((badge) => (
            <div 
              key={badge.label}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium"
            >
              <badge.icon className="w-4 h-4" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Hero Text - Mobile First */}
          <div className="text-center lg:text-left order-1 animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Seu filho mais perto de{" "}
              <span className="text-gradient-gold">Deus</span>,
              <br className="hidden sm:block" />
              longe das telas vazias
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl opacity-95 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              O <strong>Altar Pro</strong> é um kit completo de atividades cristãs para você 
              criar momentos especiais de fé com seus filhos, sem depender de telas
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              {[
                "Atividades educativas com valores cristãos",
                "Momentos de qualidade em família",
                "Ensina sobre a Bíblia de forma divertida",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl animate-pulse-cta"
            >
              QUERO APRESENTAR JESUS AO MEU FILHO
            </button>

            <p className="text-sm opacity-80 mt-4">
              Garantia de 7 dias · Acesso imediato
            </p>
          </div>

          {/* Product Image */}
          <div className="relative flex items-center justify-center order-2">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
            <img
              src="https://i.ibb.co/G4jNRSF9/1.webp"
              alt="Kit Infantil Cristão Altar Pro"
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-3xl shadow-2xl object-cover animate-fade-in-up"
            />
          </div>
        </div>
      </div>
    </header>
  );
};