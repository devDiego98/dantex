import { useTranslation } from "react-i18next";
import { IndustryContactSection } from "@/pages/industry-shared/industry-contact-section";
import { IndustryNvidiaSection } from "@/pages/industry-shared/industry-nvidia-section";
import { FoodtechContentSections } from "@/pages/foodtech/sections/foodtech-content-sections";
import { FoodtechHeroSection } from "@/pages/foodtech/sections/foodtech-hero-section";

export function FoodtechPage() {
  const { t } = useTranslation();
  return (
    <main className="relative min-h-screen text-white">
      <FoodtechHeroSection />
      <FoodtechContentSections />
      <IndustryNvidiaSection
        accent="amber"
        description={t("pageNvidia.foodtech")}
      />
      <IndustryContactSection accent="amber" />
    </main>
  );
}
