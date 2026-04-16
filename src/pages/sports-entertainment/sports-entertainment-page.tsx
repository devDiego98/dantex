import { IndustryContactSection } from "@/pages/industry-shared/industry-contact-section";
import { IndustryNvidiaSection } from "@/pages/industry-shared/industry-nvidia-section";
import { SportsEntertainmentContentSections } from "@/pages/sports-entertainment/sections/sports-entertainment-content-sections";
import { SportsEntertainmentHeroSection } from "@/pages/sports-entertainment/sections/sports-entertainment-hero-section";

export function SportsEntertainmentPage() {
  return (
    <main className="relative min-h-screen text-white">
      <SportsEntertainmentHeroSection />
      <SportsEntertainmentContentSections />
      <IndustryNvidiaSection
        accent="violet"
        description="Aprovecha la IA para simplificar operaciones, potenciar el engagement de los fans e impulsar sistemas de alto rendimiento en la industria del deporte y el entretenimiento."
      />
      <IndustryContactSection accent="violet" />
    </main>
  );
}
