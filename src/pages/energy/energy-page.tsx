import { EnergyContactSection } from "@/pages/energy/sections/energy-contact-section";
import { EnergyEngineeringSection } from "@/pages/energy/sections/energy-engineering-section";
import { EnergyHeroSection } from "@/pages/energy/sections/energy-hero-section";
import { EnergyNvidiaSection } from "@/pages/energy/sections/energy-nvidia-section";
import { EnergyOperationsSection } from "@/pages/energy/sections/energy-operations-section";
import { EnergyStorySection } from "@/pages/energy/sections/energy-story-section";

export function EnergyPage() {
  return (
    <main className="relative min-h-screen text-white">
      <EnergyHeroSection />
      <EnergyOperationsSection />
      <EnergyEngineeringSection />
      <EnergyStorySection />
      <EnergyNvidiaSection />
      <EnergyContactSection />
    </main>
  );
}
