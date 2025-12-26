import { Heart, ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Plante hoje a semente da fé
            <br />
            no coração do seu filho
          </h2>

          {/* Subtext */}
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            Não deixe as telas ocuparem o lugar que Deus deveria ter na vida da sua família. 
            Comece agora mesmo.
          </p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className="group w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto"
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