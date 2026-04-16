import type { CSSProperties } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function GlassPanel({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-2xl border border-white/15 bg-gradient-to-br from-white/12 to-white/[0.02] shadow-[0_0_60px_rgba(45,212,191,0.15)] backdrop-blur-md",
        className
      )}
      style={style}
      aria-hidden
    />
  );
}

export function AiConsultingHeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(13,148,136,0.45),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(6,182,212,0.2),transparent_50%)]" />
      </div>

      <GlassPanel className="right-[-8%] top-[12%] h-48 w-36 rotate-12 sm:right-[2%] sm:h-64 sm:w-44" />
      <GlassPanel className="right-[4%] top-[38%] h-40 w-52 -rotate-6 opacity-80 sm:right-[12%]" />
      <GlassPanel className="right-[-4%] top-[58%] h-56 w-40 rotate-[18deg] opacity-70 sm:right-[6%]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.5fr)] lg:items-center">
        <motion.div {...fadeUp} className="text-left">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-300/90">
            Servicios
          </p>
          <h1 className="font-chakra text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Consultoría en Innovación e IA
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Diseñamos e implementamos soluciones de IA que escalan con su
            negocio: desde estrategia y gobernanza hasta integración en productos
            y operaciones, con foco en valor medible y adopción segura.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-white/90">
              Contáctanos
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Ver casos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
