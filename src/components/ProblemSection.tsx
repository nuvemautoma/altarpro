import { Smartphone, AlertCircle, HeartCrack, Sparkles } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Excesso de telas",
    description: "Seu filho passa horas em conteúdos que não agregam nada à vida dele",
  },
  {
    icon: AlertCircle,
    title: "Falta de conteúdo cristão",
    description: "É difícil encontrar material infantil que ensine valores bíblicos",
  },
  {
    icon: HeartCrack,
    title: "Distância da fé",
    description: "As crianças crescem sem conhecer as histórias e ensinamentos de Jesus",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Você não está sozinha
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Você sente que seu filho está se{" "}
            <span className="text-primary">afastando de Deus?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de mães cristãs enfrentam os mesmos desafios todos os dias
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <p className="text-lg text-foreground font-medium">
            Mas existe uma solução simples e acessível...
          </p>
        </div>
      </div>
    </section>
  );
};