import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DantexLabAgileStagesSection } from "./sections/dantex-lab-agile-stages-section";
import { DantexLabCaseStudiesSection } from "./sections/dantex-lab-case-studies-section";
import { DantexLabContactSection } from "./sections/dantex-lab-contact-section";
import { DantexLabFaqSection } from "./sections/dantex-lab-faq-section";
import { DantexLabHeroSection } from "./sections/dantex-lab-hero-section";
import { DantexLabObjectivesSection } from "./sections/dantex-lab-objectives-section";
import { DantexLabPackagesSection } from "./sections/dantex-lab-packages-section";
import { DantexLabPartnersSection } from "./sections/dantex-lab-partners-section";

export function DantexLabPage() {
  return (
    <main className="relative flex flex-1 flex-col text-zinc-100">
      <DantexLabHeroSection />
      <DantexLabAgileStagesSection />
      <DantexLabObjectivesSection />
      <DantexLabPackagesSection />
      <DantexLabCaseStudiesSection />
      <DantexLabFaqSection />
      <DantexLabContactSection />
      <DantexLabPartnersSection />

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
