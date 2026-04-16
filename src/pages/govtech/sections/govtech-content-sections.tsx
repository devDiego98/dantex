import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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

const strategy = [
  {
    title: "Consultoría y diseño estratégico",
    body: "Acompañamos a gobiernos y entidades públicas a definir su roadmap digital, desde la planificación hasta la implementación completa. Nos enfocamos en iniciativas que generen impacto, transparencia y eficiencia real sin perder foco en la seguridad de la información.",
  },
  {
    title: "Desarrollo de plataformas y aplicaciones a medida",
    body: "Creamos soluciones digitales específicas para la gestión pública, la participación ciudadana y los servicios en línea. Combinamos tecnología avanzada con diseño centrado en las personas para simplificar procesos y mejorar la experiencia del usuario.",
  },
  {
    title:
      "Integración tecnológica, datos inteligentes y seguridad garantizada",
    body: "Unificamos sistemas, fuentes de datos y servicios públicos en ecosistemas interoperables y seguros. Conectamos APIs, bases de datos, sensores y plataformas para impulsar la toma de decisiones basada en evidencia.",
  },
  {
    title: "Modernización de sistemas",
    body: "Digitalizamos procesos y renovamos infraestructuras tecnológicas para acelerar la gestión pública. Reemplazamos sistemas obsoletos con soluciones ágiles y escalables, preparadas para el futuro digital y diseñadas con foco en la protección de datos.",
  },
] as const;

const stories = [
  {
    title:
      "Córdoba Govtech: Conectando innovación emprendedora con desafíos públicos reales",
    href: "https://dantexgroup.com/es/stories-of-impact/cordoba-govtech-bridging-startups-and-public-sector-challenges",
  },
  {
    title:
      "KOGA: Transformación pública con mentalidad startup e innovación abierta",
    href: "https://dantexgroup.com/es/stories-of-impact/koga-driving-public-sector-transformation-through-a-startup-mindset-and-open-innovation",
  },
  {
    title: "LEGALIA: Inteligencia Artificial al servicio del derecho",
    href: "https://dantexgroup.com/es/stories-of-impact/legalia-artificial-intelligence-empowering-the-practice-of-law",
  },
] as const;

const benefits = [
  {
    title: "Eficiencia operativa optimizada",
    body: "Menos tiempo administrativo gracias a la automatización de procesos, permitiendo que el personal se enfoque en la prestación de servicios.",
  },
  {
    title: "Transparencia y confianza pública",
    body: "Mayor confianza ciudadana mediante acceso a datos en tiempo real y herramientas de rendición de cuentas.",
  },
  {
    title: "Reducción de costos",
    body: "Optimización presupuestaria con plataformas que reducen los costos por transacción y el mantenimiento a largo plazo.",
  },
  {
    title: "Experiencia ciudadana premium",
    body: "Interfaces rápidas e intuitivas que elevan los servicios públicos al nivel de las mejores aplicaciones privadas.",
  },
  {
    title: "Infraestructura preparada para el futuro",
    body: "Soluciones listas para integrar tecnologías avanzadas como IA, IoT y ecosistemas de ciudades inteligentes.",
  },
] as const;

export function GovtechContentSections() {
  return (
    <>
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <motion.div className="space-y-4" {...fadeUp}>
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
              Los gobiernos del futuro se construyen con datos seguros y
              decisiones inteligentes. Unimos tecnología y propósito para
              transformar la gestión pública.
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
              The Dantex Way
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Nuestra estrategia para la transformación digital
            </h3>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-2">
          {strategy.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
            >
              <Card className="h-full border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm">
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {s.body}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              From Potential to Impact
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Transformando la gestión pública a la velocidad de la innovación
            </h3>
            <a
              href="https://dantexgroup.com/es/stories-of-impact"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100"
            >
              Descubre más historias{" "}
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

      <section className={sectionPadding}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8"
            {...fadeUp}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
              Ecosistema de transformación
            </p>
            <h3 className="font-chakra mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Formación para liderar el cambio
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Junto a Incutex, capacitamos equipos de gobierno para acelerar la
              adopción de IA y escalar soluciones govtech de alto impacto.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-4 text-center" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Yes, It&apos;s Possible
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Reinventando los servicios públicos con soluciones GovTech
            </h3>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mx-auto rounded-full border-cyan-400/40 bg-black/30 text-sm font-medium text-white hover:bg-cyan-500/10"
              )}
            >
              Comienza ahora
            </a>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {b.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {b.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8"
            {...fadeUp}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Collaboration in Action
            </p>
            <h3 className="font-chakra mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Alianza con AI League para la innovación pública
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              A través de nuestra colaboración con AI League for Good, unimos
              fuerzas con expertos, instituciones y organismos públicos para
              explorar cómo la inteligencia artificial puede abordar desafíos
              reales del sector público.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              Desde workshops hasta webinars, creamos espacios de aprendizaje y
              co-creación enfocados en la gobernanza inteligente, la innovación
              sostenible y los servicios centrados en la ciudadanía.
            </p>
            <a
              href="https://aileagueforgood.ai/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-6 inline-flex items-center gap-2 rounded-full border-white/20 bg-black/30 text-sm font-medium text-white hover:bg-white/10"
              )}
            >
              Conoce más <ExternalLink className="size-4" aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
