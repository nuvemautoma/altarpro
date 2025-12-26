import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ProductsGallery } from "@/components/ProductsGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { PurchaseNotification } from "@/components/PurchaseNotification";

const Index = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <PurchaseNotification />
      <HeroSection onCtaClick={scrollToPricing} />
      <TrustBadges />
      <ProblemSection />
      <WhyChooseSection onCtaClick={scrollToPricing} />
      <ProductsGallery onCtaClick={scrollToPricing} />
      <TestimonialsSection />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <GuaranteeSection />
      <FAQSection onCtaClick={scrollToPricing} />
      <FinalCtaSection onCtaClick={scrollToPricing} />
      <Footer />
    </main>
  );
};

export default Index;