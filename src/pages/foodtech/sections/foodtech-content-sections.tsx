import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

const solutions = [
  {
    title: "Pedidos y pagos inteligentes",
    body: "Experiencias de compra sin fricción y con personalización basada en IA. Pagos móviles seguros e integración con POS que mejoran la satisfacción del cliente e incrementan los ingresos.",
  },
  {
    title: "Integraciones",
    body: "Unifica tu sistema con integraciones robustas entre plataformas de delivery, POS, programas de fidelización y soluciones ERP, garantizando escalabilidad y eficiencia operativa.",
  },
  {
    title: "IA y automatización",
    body: "Chatbots con inteligencia artificial, analítica predictiva y herramientas de automatización para optimizar flujos en cocina, reducir tiempos de espera y mejorar la toma de decisiones operativas.",
  },
  {
    title: "Gestión de inventario y datos",
    body: "Visibilidad en tiempo real del stock, automatización de la reposición y menos desperdicio con insights basados en datos que optimizan la cadena de suministro y la operación del inventario.",
  },
  {
    title: "Kiosk y soluciones self-service",
    body: "Mejora la experiencia del cliente y aumenta el valor promedio de los pedidos con quioscos interactivos diseñados para un autoservicio rápido y eficiente en restaurantes de comida rápida.",
  },
  {
    title: "Soluciones para sistemas de franquicias",
    body: "Impulsa a los operadores de franquicias con tecnología que estandariza procesos, mejora el seguimiento del rendimiento y garantiza la consistencia entre locales.",
  },
  {
    title: "UX/UI y Calidad",
    body: "Experiencias digitales fluidas con diseño centrado en el usuario, pruebas rigurosas y optimización del rendimiento para garantizar accesibilidad y engagement.",
  },
] as const;

const stories = [
  {
    title:
      "Cómo Dantex transformó el análisis de datos para el quinto operador de comida rápida más grande del mundo",
    href: "https://dantexgroup.com/es/stories-of-impact/how-dantex-transformed-data-insights-for-the-world-s-fifth-largest-fast-food-operator",
  },
  {
    title:
      "Optimizando la disposición de la tienda y la seguridad alimentaria con reconocimiento de video impulsado por IA",
    href: "https://dantexgroup.com/es/stories-of-impact/optimizing-store-layouts-and-food-safety-with-ai-powered-video-recognition",
  },
  {
    title:
      "Firehouse recurre a Dantex para pagos más seguros, inteligentes y sin interrupciones",
    href: "https://dantexgroup.com/es/stories-of-impact/firehouse-turns-to-dantex-for-safer-smarter-and-seamless-payments",
  },
] as const;

const drivers = [
  {
    title: "Adopción acelerada de IA",
    body: "Acompañamos a equipos de operaciones y producto a incorporar IA en flujos reales de restaurante, con foco en valor medible.",
  },
  {
    title: "Reducción de desperdicio",
    body: "Automatizar inventario y pronósticos de demanda ayuda a minimizar mermas y costos de insumos.",
  },
  {
    title: "Incremento en ventas",
    body: "Pedidos digitales, personalización y pagos fluidos impulsan conversión y ticket promedio.",
  },
] as const;

export function FoodtechContentSections() {
  return (
    <>
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.div className="space-y-4 text-center" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Yes, It&apos;s Possible
            </p>
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Nuestra visión en acción
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-base text-zinc-300">
              Aumenta la productividad de tu negocio y la eficiencia operativa
              de tu restaurante con Dantex.
            </p>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mx-auto rounded-full border-amber-400/40 bg-black/30 text-sm font-medium text-white hover:bg-amber-500/10"
              )}
            >
              Saber más
            </a>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <motion.header className="space-y-3" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              The Dantex Way
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Soluciones para restaurantes
            </h3>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {solutions.map((s) => (
              <Card
                key={s.title}
                className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {s.body}
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
              Descubre cómo ayudamos a marcas líderes a acelerar su crecimiento
            </h3>
            <a
              href="https://dantexgroup.com/es/stories-of-impact"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-amber-200 hover:text-amber-100"
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
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="space-y-3 text-center" {...fadeUp}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Rebel tech for audacious solvers
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              ¿Por qué quienes lideran ya están invirtiendo en tecnología?
            </h3>
          </motion.header>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {drivers.map((d) => (
              <Card
                key={d.title}
                className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {d.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {d.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
