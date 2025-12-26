import { Shield, Award, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Guarantee Box */}
        <div className="bg-gradient-trust rounded-3xl shadow-xl p-8 md:p-10 max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Garantia Incondicional de 7 Dias
          </h3>
          
          <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">
            Se você não ficar 100% satisfeita com o material, basta nos enviar um email 
            e devolvemos <strong className="text-foreground">todo o seu dinheiro</strong>. Sem perguntas, sem burocracia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Reembolso em até 7 dias úteis</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Award className="w-5 h-5 text-primary" />
              <span>Sem perguntas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};