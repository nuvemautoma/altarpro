import { useState, useEffect } from "react";
import { X, ShoppingBag } from "lucide-react";

const brazilianNames = [
  "Maria", "Ana", "Julia", "Patricia", "Fernanda", "Camila", "Amanda", "Bruna",
  "Leticia", "Carla", "Rafaela", "Luciana", "Cristina", "Renata", "Sandra",
  "Priscila", "Vanessa", "Aline", "Daniela", "Gabriela"
];

const brazilianCities = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Brasília, DF",
  "Salvador, BA", "Fortaleza, CE", "Curitiba, PR", "Recife, PE", "Porto Alegre, RS",
  "Manaus, AM", "Goiânia, GO", "Belém, PA", "Campinas, SP", "Guarulhos, SP",
  "São Bernardo, SP", "Florianópolis, SC", "Vitória, ES", "Maceió, AL"
];

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [customer, setCustomer] = useState({ name: "", location: "", time: "" });

  const generateNotification = () => {
    const name = brazilianNames[Math.floor(Math.random() * brazilianNames.length)];
    const location = brazilianCities[Math.floor(Math.random() * brazilianCities.length)];
    const minutes = Math.floor(Math.random() * 10) + 1;
    
    setCustomer({
      name: `${name} acabou de comprar!`,
      location,
      time: `há ${minutes} minutos`,
    });
    setIsVisible(true);

    setTimeout(() => setIsVisible(false), 5000);
  };

  useEffect(() => {
    const initialTimeout = setTimeout(generateNotification, 8000);
    const interval = setInterval(generateNotification, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 right-5 bg-card border border-primary/30 rounded-2xl p-4 shadow-2xl z-[100] max-w-xs animate-fade-in-up">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="font-bold text-foreground text-sm">{customer.name}</div>
          <div className="text-xs text-primary font-medium">Altar Pro</div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
        <span>{customer.location}</span>
        <span>{customer.time}</span>
      </div>
    </div>
  );
};