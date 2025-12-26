import { BookPlus, Frown, XCircle, Clock, HeadphonesIcon, Angry, Star } from "lucide-react";

const painPoints = [
  {
    icon: BookPlus,
    text: '"Eu não sei ensinar a Bíblia."',
  },
  {
    icon: Frown,
    text: '"Meu filho não presta atenção."',
  },
  {
    icon: XCircle,
    text: '"Já tentei outros devocionais e não funcionou."',
  },
  {
    icon: Angry,
    text: '"Tenho medo de não criar uma base cristã sólida."',
  },
  {
    icon: Clock,
    text: '"Quando vejo, o dia acabou e não fizemos nada."',
  },
  {
    icon: HeadphonesIcon,
    text: '"A culpa de não conseguir me acompanha todos os dias."',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Você se identifica com alguma dessas frases?
          </h2>
          <p className="text-muted-foreground text-lg">
            Se sim, você não está sozinho(a).
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {painPoints.map((point, index) => (
            <div
              key={point.text}
              className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground font-bold text-lg leading-snug">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-6 md:p-8 text-center">
            <p className="text-destructive font-extrabold text-xl md:text-2xl leading-relaxed">
              Se você se identificou com pelo menos uma dessas frases, esse kit é para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
