import { FinanceContactSection } from "@/pages/finance/sections/finance-contact-section";
import { FinanceExperienceSection } from "@/pages/finance/sections/finance-experience-section";
import { FinanceHeroSection } from "@/pages/finance/sections/finance-hero-section";
import { FinanceNvidiaSection } from "@/pages/finance/sections/finance-nvidia-section";
import { FinanceServicesSection } from "@/pages/finance/sections/finance-services-section";
import { FinanceStoriesSection } from "@/pages/finance/sections/finance-stories-section";

export function FinancePage() {
  return (
    <main className="relative min-h-screen text-white">
      <FinanceHeroSection />
      <FinanceServicesSection />
      <FinanceStoriesSection />
      <FinanceExperienceSection />
      <FinanceNvidiaSection />
      <FinanceContactSection />
    </main>
  );
}

