import { Shield, Zap, Heart, Star } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <header className="bg-gradient-hero text-primary-foreground py-10 pb-16 min-h-[80vh] flex flex-col items-center">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Logo/Brand */}
        <div className="text-center mb-6 animate-fade-in-up">
          <img
            src="https://i.ibb.co/G4jNRSF9/1.webp"
            alt="Altar Pro - Kit Infantil Cristão"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl shadow-xl object-cover mb-4"
          />
          <h2 className="text-xl md:text-2xl font-bold text-white/90">ALTAR PRO</h2>
          <p className="text-sm text-white/80">Crescendo com Jesus todos os dias!</p>
        </div>

        {/* Age Badge */}
        <div className="flex justify-center mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="bg-white text-primary px-5 py-2 rounded-full flex items-center gap-2 font-semibold text-sm shadow-lg">
            <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
            Para crianças de 2 a 10 anos
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            Descubra como dedicar tempo a Deus com seu filho,{" "}
            <span className="text-gradient-gold">mesmo na correria do dia a dia!</span>
          </h1>
          <p className="text-base md:text-lg opacity-95 max-w-xl mx-auto leading-relaxed">
            Com o Kit Infantil Cristão, você encontrará uma solução prática para 
            integrar Deus na rotina familiar.
          </p>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
            <img
              src="https://i.ibb.co/G4jNRSF9/1.webp"
              alt="Kit Infantil Cristão - Material Completo"
              className="relative w-72 md:w-96 rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-gradient-gold text-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl animate-pulse-gold"
          >
            QUERO APRESENTAR JESUS AO MEU FILHO
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Garantia 7 Dias</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Acesso Imediato</span>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <p className="text-white/85 text-base italic max-w-md mx-auto">
            "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele."
          </p>
          <p className="text-white font-bold mt-2">Provérbios 22:6</p>
        </div>
      </div>
    </header>
  );
};
