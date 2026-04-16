import { motion } from "framer-motion";
import { Lock, Radio, ShieldCheck, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const items = [
  {
    title: "IoT Industrial y Conectividad",
    body: "Integración de sensores y dispositivos de campo con arquitecturas de nube centralizadas para el monitoreo en tiempo real.",
    icon: Radio,
  },
  {
    title: "IA Agéntica para Energía",
    body: "Despliegue de agentes de IA autónomos para optimizar los cronogramas de mantenimiento y los patrones de consumo energético.",
    icon: Sparkles,
  },
  {
    title: "Seguridad Industrial e ISO",
    body: "Implementación de procesos certificados bajo la norma ISO 27001 para proteger la infraestructura energética crítica y los datos sensibles.",
    icon: ShieldCheck,
  },
  {
    title: "Cumplimiento y Resiliencia",
    body: "Implementación de soluciones diseñadas para cumplir con los más altos estándares de seguridad y regulación en infraestructura crítica.",
    icon: Lock,
  },
] as const;

export function EnergyEngineeringSection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto w-full max-w-5xl">
        <motion.header className="mb-8 space-y-3" {...fadeUp}>
          <h2 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
            Ingeniería confiable, segura y escalable
          </h2>
        </motion.header>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
        >
          {items.map((it) => (
            <Card
              key={it.title}
              className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
            >
              <CardContent className="space-y-3 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {it.title}
                  </p>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-teal-200">
                    <it.icon className="size-4" aria-hidden />
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  {it.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

