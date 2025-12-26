import { Sun, Crown, Check, Clock, Trophy, Sparkles, Gift, ArrowRight, Star, Shield, Lock, BadgeCheck } from "lucide-react";

const luzFeatures = [
  "Kit Infantil Cristão Completo",
  "Alfabetização Infantil",
  "Cartões de Orações Kids",
  "Certificado para Crianças",
  "Suporte por E-mail",
  "Garantia de 7 Dias",
  "Direito de Revenda",
];

const altarProFeatures = [
  "TUDO do Plano LUZ +",
  "App Educativo - Ensina a Orar",
  "Cartões Bíblicos",
  "Desafio Bíblico 7 Dias",
  "Suporte Prioritário",
  "Direito de Revenda",
];

export const PricingSection = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <section id="pricing" className="py-16 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-10 relative z-10 pt-8">
        {/* Special Offer Badge */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <span className="bg-white text-primary px-5 py-2 rounded-full flex items-center gap-2 font-bold text-sm shadow-lg">
            <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
            Oferta Especial
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            Não deixe para amanhã o que pode{" "}
            <span className="text-gradient-gold">transformar a vida do seu filho(a) hoje!</span>
          </h2>
          <p className="text-lg opacity-90">
            Tudo que você precisa para criar uma rotina com Deus
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Plano LUZ */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Sun className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-foreground">Plano LUZ</h3>
              </div>
              <span className="text-muted-foreground text-sm">Ideal para começar</span>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="text-5xl font-extrabold text-foreground">12,90</span>
              </div>
              
              {/* Discount Badge */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="line-through text-muted-foreground text-sm">De R$ 19,90</span>
                <div className="bg-success/15 text-success px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-bold">
                  <Gift className="w-4 h-4" />
                  <span>35% OFF</span>
                </div>
              </div>
              
              <p className="text-primary font-semibold mt-3">Pagamento único · Acesso vitalício</p>
            </div>

            <div className="space-y-3 mb-8">
              {luzFeatures.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/y2dp3os_680781"
              className="block w-full bg-gradient-cta-secondary text-white py-4 rounded-2xl font-bold text-center hover:scale-105 transition-transform shadow-lg"
            >
              COMEÇAR AGORA
            </a>
          </div>

          {/* Plano ALTAR PRO */}
          <div className="bg-card rounded-3xl p-8 shadow-2xl border-2 border-primary relative md:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            {/* Best Seller Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-white py-2 px-5 rounded-full text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-lg">
              <Trophy className="w-4 h-4" />
              MAIS VENDIDO
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mb-6 mt-3">
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">ALTAR PRO</h3>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <span className="text-muted-foreground text-sm">Conteúdo completo</span>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="text-5xl font-extrabold text-foreground">13,97</span>
              </div>
              
              {/* Discount Badge */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="line-through text-muted-foreground text-sm">De R$ 29,90</span>
                <div className="bg-primary/15 text-primary px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-bold">
                  <Gift className="w-4 h-4" />
                  <span>53% OFF</span>
                </div>
              </div>
              
              <p className="text-primary font-semibold mt-3">Pagamento único · Acesso vitalício</p>
            </div>

            <div className="space-y-3 mb-8">
              {altarProFeatures.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/rs6wvr9"
              className="group block w-full bg-gradient-gold text-foreground py-4 rounded-2xl font-bold text-center hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-gold flex items-center justify-center gap-2"
            >
              QUERO O ALTAR PRO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-muted-foreground text-sm mt-4">
              +500 famílias já escolheram este plano
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-2 text-white/90">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <BadgeCheck className="w-5 h-5" />
            <span className="text-sm font-medium">Satisfação Garantida</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Lock className="w-5 h-5" />
            <span className="text-sm font-medium">Privacidade Protegida</span>
          </div>
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