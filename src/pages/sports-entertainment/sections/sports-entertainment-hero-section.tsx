import { motion } from "framer-motion";
import { Radio, Trophy, Tv } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { HERO_VIDEOS } from "@/lib/site-videos";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const highlights = [
  { label: "Fans & engagement", icon: Radio },
  { label: "Alto rendimiento", icon: Trophy },
  { label: "OTT & entretenimiento", icon: Tv },
] as const;

export function SportsEntertainmentHeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEOS.sports}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/95" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          {...fadeUp}
          className="font-chakra mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/85"
        >
          Industrias · Deportes &amp; Entretenimiento
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="font-chakra mb-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.4rem] md:leading-tight"
        >
          Game-Changing tech para experiencias más conectadas
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mb-9 max-w-2xl text-pretty text-base text-zinc-200 sm:text-lg"
        >
          Potencia el engagement de los fans, optimiza el rendimiento y abre
          nuevas oportunidades de negocio.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-white/90",
            )}
          >
            Potencia tu juego
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {highlights.map((h) => (
            <span
              key={h.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-sm"
            >
              <h.icon className="size-4 text-violet-200/90" aria-hidden />
              {h.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
