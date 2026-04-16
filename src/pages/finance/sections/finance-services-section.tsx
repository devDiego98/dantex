import { motion } from "framer-motion";
import {
  Building2,
  CloudCog,
  CreditCard,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

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
    title: "Portales de adquisición de clientes",
    body: "Atrae con simulaciones, herramientas y contenido a medida que generan confianza y apoyan decisiones informadas.",
    icon: Users,
  },
  {
    title: "Soluciones de onboarding",
    body: "Onboarding seguro y automatizado con validación de identidad, evaluaciones de riesgo y cumplimiento integrado en cada proceso.",
    icon: ShieldCheck,
  },
  {
    title: "Desarrollo de producto end-to-end",
    body: "Diseña, personaliza y lanza productos financieros a escala con plataformas en la nube y arquitecturas de microservicios.",
    icon: Sparkles,
  },
  {
    title: "Operaciones financieras seguras",
    body: "Protege transacciones con protocolos sólidos, detección de fraudes y gestión de accesos en todos los sistemas.",
    icon: CreditCard,
  },
  {
    title: "Operaciones optimizadas y eficientes",
    body: "Moderniza arquitecturas, automatiza procesos de back-office y refuerza la resiliencia para un rendimiento rentable.",
    icon: CloudCog,
  },
  {
    title: "Gestión del ciclo de vida del cliente",
    body: "Ofrece experiencias fluidas de la adquisición a la retención con plataformas y engagement impulsado por IA.",
    icon: Building2,
  },
  {
    title: "De estrategia de datos a IA a escala",
    body: "Convierte datos en impacto con análisis y modelos de IA/ML implementados en entornos de producción.",
    icon: FileSearch,
  },
] as const;

export function FinanceServicesSection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <motion.header className="space-y-4" {...fadeUp}>
          <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
            Desde billeteras digitales hasta plataformas de préstamos, la IA
            transformó las finanzas. Con Dantex escala de manera segura e innova
            más rápido.
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-200/90">
            The Dantex Way
          </p>
          <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
            Servicios Financieros
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
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sky-200">
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
