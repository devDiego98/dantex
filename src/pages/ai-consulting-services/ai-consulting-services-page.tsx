import { AiCaseStudySection } from "./sections/ai-case-study-section";
import { AiConsultingHeroSection } from "./sections/ai-consulting-hero-section";
import { AiContactSection } from "./sections/ai-contact-section";
import { AiEcosystemVideoSection } from "./sections/ai-ecosystem-video-section";
import { AiLogoCloudSection } from "./sections/ai-logo-cloud-section";
import { AiMidPageCtaSection } from "./sections/ai-mid-page-cta-section";
import { AiPartnerSection } from "./sections/ai-partner-section";
import { AiServicesGridSection } from "./sections/ai-services-grid-section";
import { AiWhyUsSection } from "./sections/ai-why-us-section";

export function AiConsultingServicesPage() {
  return (
    <main className="flex flex-1 flex-col text-foreground">
      <AiConsultingHeroSection />
      <AiEcosystemVideoSection />
      <AiServicesGridSection />
      <AiMidPageCtaSection />
      <AiPartnerSection />
      <AiLogoCloudSection />
      <AiWhyUsSection />
      <AiCaseStudySection />
      <AiContactSection />
    </main>
  );
}
