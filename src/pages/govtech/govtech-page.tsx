import { useTranslation } from "react-i18next";
import { GovtechContentSections } from "@/pages/govtech/sections/govtech-content-sections";
import { GovtechHeroSection } from "@/pages/govtech/sections/govtech-hero-section";
import { IndustryContactSection } from "@/pages/industry-shared/industry-contact-section";
import { IndustryNvidiaSection } from "@/pages/industry-shared/industry-nvidia-section";

export function GovtechPage() {
  const { t } = useTranslation();
  return (
    <main className="relative min-h-screen text-white">
      <GovtechHeroSection />
      <GovtechContentSections />
      <IndustryNvidiaSection
        accent="slate"
        description={t("pageNvidia.govtech")}
      />
      <IndustryContactSection accent="slate" />
    </main>
  );
}
