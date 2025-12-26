import { Heart, ArrowRight, Sparkles } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            Plante hoje a semente da fé
            <br />
            <span className="text-gradient-gold">no coração do seu filho</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Não deixe as telas ocuparem o lugar que Deus deveria ter na vida da sua família. 
            Comece agora mesmo.
          </p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className="group w-full sm:w-auto bg-gradient-gold text-foreground px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto animate-pulse-gold"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust note */}
          <p className="text-sm opacity-80 mt-6">
            Acesso imediato · Garantia de 7 dias · Pagamento seguro
          </p>
        </div>
      </div>
    </section>
  );
};
