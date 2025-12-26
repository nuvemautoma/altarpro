import { Shield, Zap, BookOpen, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Não gostou? Devolvemos seu dinheiro",
  },
  {
    icon: BookOpen,
    title: "Conteúdo 100% Cristão",
    description: "Baseado em valores bíblicos",
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Receba na hora após a compra",
  },
  {
    icon: Lock,
    title: "Pagamento Seguro",
    description: "Seus dados estão protegidos",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-10 bg-gradient-trust">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{badge.title}</h3>
              <p className="text-muted-foreground text-xs">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};