import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function EnergyHeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/energy.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/95" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          {...fadeUp}
          className="font-chakra mb-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-[3.4rem] md:leading-tight"
        >
          Tecnología inteligente para
          <br className="hidden sm:block" /> una energía más inteligente
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="mb-9 max-w-2xl text-pretty text-base text-zinc-200 sm:text-lg"
        >
          Software de precisión para un futuro sostenible.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants(),
              "rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-white/90"
            )}
          >
            Impulsa tu evolución
          </a>
        </motion.div>
      </div>
    </section>
  );
}

