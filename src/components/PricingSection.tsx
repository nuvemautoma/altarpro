import { Sun, Crown, Check, Clock, Trophy, Sparkles, Gift, ArrowRight } from "lucide-react";

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
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Limited Offer Alert */}
        <div className="bg-gradient-danger text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto w-fit mb-8 font-semibold text-sm animate-pulse">
          <Clock className="w-4 h-4" />
          <span>⚡ OFERTA LIMITADA - Válida apenas hoje {formattedDate}</span>
        </div>

        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Escolha o plano ideal para sua família
          </h2>
          <p className="text-muted-foreground text-lg">
            Investimento único · Acesso vitalício · Sem mensalidades
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
              className="group block w-full bg-gradient-cta text-white py-4 rounded-2xl font-bold text-center hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-cta flex items-center justify-center gap-2"
            >
              QUERO O ALTAR PRO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-muted-foreground text-sm mt-4">
              ⭐ +500 famílias já escolheram este plano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};