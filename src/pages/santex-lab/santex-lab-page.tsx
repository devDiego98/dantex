import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SantexLabAgileStagesSection } from "./sections/santex-lab-agile-stages-section";
import { SantexLabCaseStudiesSection } from "./sections/santex-lab-case-studies-section";
import { SantexLabContactSection } from "./sections/santex-lab-contact-section";
import { SantexLabFaqSection } from "./sections/santex-lab-faq-section";
import { SantexLabHeroSection } from "./sections/santex-lab-hero-section";
import { SantexLabObjectivesSection } from "./sections/santex-lab-objectives-section";
import { SantexLabPackagesSection } from "./sections/santex-lab-packages-section";
import { SantexLabPartnersSection } from "./sections/santex-lab-partners-section";

export function SantexLabPage() {
  return (
    <main className="relative flex flex-1 flex-col text-zinc-100">
      <SantexLabHeroSection />
      <SantexLabAgileStagesSection />
      <SantexLabObjectivesSection />
      <SantexLabPackagesSection />
      <SantexLabCaseStudiesSection />
      <SantexLabFaqSection />
      <SantexLabContactSection />
      <SantexLabPartnersSection />

      <a
        href="#contacto-lab"
        aria-label="Abrir chat"
        className={cn(
          buttonVariants({ variant: "default", size: "icon-lg" }),
          "fixed bottom-6 right-6 z-50 size-12 rounded-full border border-teal-400/40 bg-teal-500 text-[#021312] shadow-[0_0_28px_rgba(45,212,191,0.45)] hover:bg-teal-400 sm:bottom-8 sm:right-8 [&_svg]:size-6"
        )}
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
