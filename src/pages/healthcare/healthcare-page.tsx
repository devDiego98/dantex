import { useTranslation } from "react-i18next";
import { HealthcareContentSections } from "@/pages/healthcare/sections/healthcare-content-sections";
import { HealthcareHeroSection } from "@/pages/healthcare/sections/healthcare-hero-section";
import { IndustryContactSection } from "@/pages/industry-shared/industry-contact-section";
import { IndustryNvidiaSection } from "@/pages/industry-shared/industry-nvidia-section";

export function HealthcarePage() {
  const { t } = useTranslation();
  return (
    <main className="relative min-h-screen text-white">
      <HealthcareHeroSection />
      <HealthcareContentSections />
      <IndustryNvidiaSection
        accent="rose"
        description={t("pageNvidia.healthcare")}
      />
      <IndustryContactSection accent="rose" />
    </main>
  );
}
