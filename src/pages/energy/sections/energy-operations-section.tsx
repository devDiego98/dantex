import { motion } from "framer-motion";
import { Cpu, LineChart, Route, Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const cards = [
  {
    title: "Operaciones Inteligentes y Automatización",
    body: "Construimos el puente entre los activos físicos y los sistemas digitales. Al automatizar flujos de trabajo complejos en Bioenergía y Petróleo y Gas, garantizamos una transparencia total y visibilidad en tiempo real, permitiendo decisiones más rápidas basadas en datos que reducen el riesgo operativo.",
    icon: Cpu,
  },
  {
    title: "Analítica Predictiva y Estrategia",
    body: "Aprovecha los datos de campo para eliminar los tiempos de inactividad. Nuestra Analítica Predictiva transforma la información aislada en inteligencia accionable, empoderando a los líderes del sector energético para tomar decisiones operativas críticas con absoluta precisión y coraje técnico.",
    icon: LineChart,
  },
  {
    title: "Optimización de la Cadena de Suministro y Logística",
    body: "La eficiencia energética es un desafío logístico. Aprovechando nuestra experiencia en la distribución de biocombustibles y logística de biomasa, diseñamos cadenas de suministro trazables que optimizan el movimiento de recursos desde el origen hasta la entrega final.",
    icon: Route,
  },
  {
    title: "Modernización del Núcleo Digital",
    body: "Evolucionamos la infraestructura heredada para la próxima era energética. Migramos sistemas monolíticos a plataformas escalables y nativas de la nube, asegurando que su núcleo digital sea lo suficientemente resiliente para respaldar la transición hacia las energías renovables y nuevos modelos de negocio.",
    icon: Wrench,
  },
] as const;

export function EnergyOperationsSection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <motion.header className="space-y-4" {...fadeUp}>
          <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
            Cerrando la brecha entre los activos y el conocimiento. La
            inteligencia es el combustible de la energía moderna.
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
            The Dantex Way
          </p>
          <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
            Impulsando el futuro de las operaciones energéticas
          </h3>
        </motion.header>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
        >
          {cards.map((c) => (
            <Card
              key={c.title}
              className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
            >
              <CardContent className="space-y-3 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {c.title}
                  </p>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-teal-200">
                    <c.icon className="size-4" aria-hidden />
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  {c.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
