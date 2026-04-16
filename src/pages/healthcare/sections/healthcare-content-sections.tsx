import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const trustPillars = [
  {
    title: "Seguridad y Cumplimiento",
    body: "Seguridad certificada ISO 27001. Experiencia en HIPAA (Privacidad) y construcción de infraestructura lista para validación GxP/FDA.",
  },
  {
    title: "Data Science & AI",
    body: "Modelos de IA ética diseñados para desbloquear valor de Datos del Mundo Real (RWD) no estructurados, registros médicos y bases de datos de investigación.",
  },
  {
    title: "Dominio de Cloud Agnostic",
    body: "Experiencia en AWS, Microsoft Azure y Google Cloud, optimizando arquitecturas para rendimiento y escalabilidad en entornos de salud.",
  },
  {
    title: "Legacy Modernization",
    body: "Transformación de sistemas heredados (monolíticos) en arquitecturas escalables y nativas de la nube sin interrumpir operaciones críticas en curso.",
  },
] as const;

const stories = [
  {
    title: "Una forma más inteligente de manejar condiciones crónicas en niños",
    href: "https://dantexgroup.com/es/stories-of-impact/a-smarter-way-to-manage-chronic-conditions-in-children",
  },
  {
    title:
      "Gobernanza en Cloud y gestión de costos con AWS Control Tower y Terraform",
    href: "https://dantexgroup.com/es/stories-of-impact/scaling-cloud-governance-with-aws-control-tower-and-terraform",
  },
  {
    title:
      "Second Brain: El Asistente de IA para Decisiones Más Inteligentes y Rápidas",
    href: "https://dantexgroup.com/es/stories-of-impact/second-brain-the-ai-assistant-for-smarter-faster-decision-making",
  },
] as const;

export function HealthcareContentSections() {
  return (
    <>
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <motion.div className="space-y-4" {...fadeUp}>
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
              Acortamos la distancia entre el avance científico y la
              recuperación.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
              Diseñamos ecosistemas que conectan Life Science &amp; Pharma con
              Salud, asegurando un flujo de datos seguro del laboratorio al
              paciente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3" {...fadeUp}>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Para proveedores de salud y prestadores
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
              Experiencias digitales centradas en el paciente para la prestación
              de cuidados modernos.
            </p>
          </motion.header>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <Card className="border-white/10 bg-zinc-950/55 ring-1 ring-white/5 backdrop-blur-sm">
              <CardContent className="space-y-4 p-5 sm:p-6">
                <p className="font-chakra text-base font-semibold tracking-tight text-white">
                  Interoperabilidad e Integración
                </p>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  Rompe los silos. Conectamos sistemas EHR, LIS y facturación
                  con estándares HL7 y FHIR para un flujo de datos seguro, en
                  tiempo real y con integridad de pagos.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Soluciones de Experiencia del Paciente",
                    "Operaciones y Gestión de Miembros",
                    "EHR",
                    "Billing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3" {...fadeUp}>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Para Pharma y Life Sciences
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
              Acelera la innovación y maximiza el impacto en el mercado con
              ingeniería ágil e infraestructura lista para GxP.
            </p>
          </motion.header>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <Card className="border-white/10 bg-zinc-950/55 ring-1 ring-white/5 backdrop-blur-sm">
              <CardContent className="space-y-3 p-5 sm:p-6">
                <p className="font-chakra text-base font-semibold tracking-tight text-white">
                  Aceleración de Datos Clínicos
                </p>
                <p className="text-[13px] leading-relaxed text-zinc-300">
                  Acelera tus ensayos clínicos con IA generativa. Automatizamos
                  la ingesta y el análisis de datos médicos complejos para
                  obtener resultados más rápidos.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Engagement Comercial y del Paciente",
                    "Visibilidad de la Cadena de Valor",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3" {...fadeUp}>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ingeniería de Confianza en un Mundo Regulado
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
              Las industrias críticas requieren una ingeniería crítica. Nuestras
              capacidades centrales se aplican en todo el espectro de la salud.
            </p>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {trustPillars.map((p) => (
              <Card
                key={p.title}
                className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {p.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {p.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              From Potential to Impact
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Descubre cómo Dantex impulsa la transformación en salud
            </h3>
            <a
              href="https://dantexgroup.com/es/stories-of-impact"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-rose-200 hover:text-rose-100"
            >
              Explora Historias de Impacto{" "}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {stories.map((s) => (
              <a key={s.href} href={s.href} className="group block">
                <Card className="h-full border-white/10 bg-zinc-950/55 ring-1 ring-white/5 backdrop-blur-sm transition-colors group-hover:border-white/20">
                  <CardContent className="flex h-full flex-col justify-between gap-6 p-5 sm:p-6">
                    <p className="font-chakra text-sm font-semibold tracking-tight text-white">
                      {s.title}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-white">
                      Descubre el impacto{" "}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
