import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function FinanceNvidiaSection() {
  return (
    <section className={cn(sectionPadding, "pb-6")}>
      <motion.div
        className="mx-auto grid w-full max-w-5xl gap-10 overflow-hidden rounded-3xl border border-sky-500/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-8 shadow-[0_0_80px_-20px_rgba(56,189,248,0.18)] sm:grid-cols-[auto_1fr] sm:gap-14 sm:p-12"
        {...fadeUp}
      >
        <div className="flex items-center justify-center">
          <div
            className="flex h-28 w-full max-w-[220px] items-center justify-center rounded-xl border border-white/10 bg-black/40 px-6 py-4 sm:h-36"
            aria-label="NVIDIA"
          >
            <span className="font-chakra text-3xl font-bold tracking-tight text-[#76B900] sm:text-4xl">
              NVIDIA
            </span>
          </div>
        </div>

        <div className="text-left">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Consultoría en IA con soporte de NVIDIA Connect
          </p>
          <h2 className="font-chakra text-2xl font-semibold text-white sm:text-3xl">
            Potencia tu ventaja competitiva con soluciones de IA a medida
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
            Mejora la eficiencia, reduce riesgos y acelera la transformación con
            soluciones de IA diseñadas para servicios financieros.
          </p>
          <div className="mt-7">
            <a
              href="/ai-consulting-services#ai-powered-ecosystem"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-sky-400/35 bg-black/30 text-sm font-medium text-white hover:bg-sky-500/10"
              )}
            >
              Descubre nuestro Ecosistema IA
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

