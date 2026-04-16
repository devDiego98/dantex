import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function EnergyStorySection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <motion.header
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          {...fadeUp}
        >
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Historia destacada
            </p>
            <h2 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              De la operación a los resultados reales
            </h2>
          </div>
          <a
            href="https://dantexgroup.com/es/stories-of-impact"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-fit rounded-full border-white/20 bg-black/30 text-sm font-medium text-white hover:bg-white/10"
            )}
          >
            Descubre más historias
          </a>
        </motion.header>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
        >
          <Card className="overflow-hidden border-white/10 bg-zinc-950/55 ring-1 ring-white/5 backdrop-blur-sm">
            <CardContent className="p-0">
              <a
                href="https://dantexgroup.com/es/stories-of-impact/tera-50-faster-routing-and-real-time-control-for-fuel-transportation"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative grid gap-0 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80"
                      alt=""
                      className="h-56 w-full object-cover sm:h-full"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-6 sm:p-7">
                    <p className="text-sm font-medium leading-snug text-zinc-200">
                      TERA: Ruteo 50% más rápido y control en tiempo real para
                      el transporte de combustible
                    </p>
                    <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs font-semibold text-zinc-400">
                      <span>Leer historia</span>
                      <ExternalLink
                        className="size-4 text-zinc-500 transition-colors group-hover:text-zinc-300"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
