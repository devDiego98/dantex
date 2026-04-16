import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const CASE_IMG =
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80";

export function AiCaseStudySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="font-chakra text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cómo ayudamos a una empresa líder a industrializar su copiloto
            interno
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-zinc-400">
            Unificamos fuentes de conocimiento, definimos políticas de uso y
            desplegamos un asistente conectado a sistemas transaccionales,
            reduciendo tiempo de respuesta en soporte y acelerando onboarding
            de equipos remotos.
          </p>
          <Button
            variant="outline"
            className="mt-8 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Ver caso de éxito
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:max-h-[480px] lg:max-h-none lg:min-h-[360px]"
        >
          <img
            src={CASE_IMG}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, rgba(45,212,191,0.35), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.25), transparent 45%)",
            }}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
