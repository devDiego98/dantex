import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const experience = [
  "Innovación en pagos y préstamos",
  "Modernización de Banca y FinTechs",
  "Experiencia del cliente y finanzas personalizadas",
  "Finanzas seguras e impulsadas por IA",
] as const;

const valueProps = [
  {
    title: "Soluciones a medida",
    body: "Diseñamos soluciones tanto para organizaciones financieras como para compañías no financieras, impulsando su crecimiento.",
  },
  {
    title: "Delivery más rápido y potenciado con IA",
    body: "Ingeniería optimizada con IA que acelera procesos, disminuye costos y reduce el time-to-market.",
  },
  {
    title: "Experiencia comprobada",
    body: "Hemos creado plataformas para pagos, préstamos e inversiones, trabajando con fintechs, bancos y actores de distintas industrias.",
  },
  {
    title: "Seguridad y Compliance",
    body: "Protocolos de nivel bancario, detección de fraudes y cumplimiento regulatorio que garantizan los más altos estándares en cada proyecto.",
  },
  {
    title: "Impacto medido en resultados",
    body: "Con un 95% de retención, un 94% de lealtad y un NPS de 86, nuestro historial demuestra impacto real y medible para clientes en todo el mundo.",
  },
] as const;

export function FinanceExperienceSection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <motion.header className="space-y-4" {...fadeUp}>
          <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
            Experiencia en FinTech y Banca
          </h2>
          <p className="text-sm text-zinc-300">
            Sabemos cómo crear valor con enfoque estratégico.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
        >
          {experience.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sky-200">
                <Check className="size-4" aria-hidden />
              </span>
              <p className="font-chakra text-base font-semibold tracking-tight text-white">
                {item}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
        >
          {valueProps.map((v) => (
            <Card
              key={v.title}
              className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
            >
              <CardContent className="space-y-3 p-5 sm:p-6">
                <p className="font-chakra text-base font-semibold tracking-tight text-white">
                  {v.title}
                </p>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  {v.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

