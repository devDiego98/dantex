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

const globalTech = [
  {
    title: "Inteligencia de Datos y Operaciones",
    body: "Transformamos datos fragmentados en valor. Generamos insights accionables y automatizamos procesos para monetizar los datos de fans de forma segura y en tiempo real.",
  },
  {
    title: "Tecnología de Rendimiento Aplicada",
    body: "Foco en la precisión. Creamos herramientas de rendimiento, desde seguimiento de atletas hasta retail. Nuestra IA entrega métricas profesionales a deportistas y usuarios.",
  },
  {
    title: "Infraestructura Escalable y en Tiempo Real",
    body: "Sistemas de alta confiabilidad para alta concurrencia. Diseñamos infraestructuras para estadios inteligentes y OTT, garantizando streaming fluido y engagement en eventos masivos.",
  },
  {
    title: "Plataformas de Entretenimiento de Próxima Generación",
    body: "Modernizamos sistemas heredados en núcleos ágiles. Desarrollamos e-commerce y membresías premium que potencian la UX y la fidelidad a largo plazo.",
  },
] as const;

const engineering = [
  {
    title: "IA Agéntica e IA Generativa",
    body: "Automatización de flujos de trabajo e hiper-personalización del fan journey.",
  },
  {
    title: "Modernización de Infra",
    body: "Migración de sistemas deportivos heredados a arquitecturas cloud-native sin interrumpir las operaciones en vivo.",
  },
  {
    title: "Estrategia Digital Unificada",
    body: "Alineación de integraciones con objetivos comerciales y operativos.",
  },
  {
    title: "Ingeniería de Alto Rendimiento",
    body: "Sistemas escalables para OTT, cloud gaming y transmisión global.",
  },
] as const;

const stories = [
  {
    title:
      "Cuando la innovación digital juega al nivel de los mejores del mundo",
    href: "",
  },
  {
    title:
      "Talleres y Dantex: Transformación Digital para la Eficiencia Institucional",
    href: "",
  },
] as const;

export function SportsEntertainmentContentSections() {
  return (
    <>
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <motion.div className="space-y-4" {...fadeUp}>
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
              Construimos la infraestructura digital que impulsa la industria
              del deporte moderno.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
              Desde experiencias en grandes estadios hasta herramientas de
              performance basadas en datos. Desarrollamos ecosistemas para la
              intensidad de la competencia en vivo y la complejidad de la
              industria global del entretenimiento.
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-200/90">
              The Dantex Way
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Tecnología para el deporte a escala global
            </h3>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-2">
          {globalTech.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
            >
              <Card className="h-full border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm">
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {c.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {c.body}
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
            <h3 className="font-chakra text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Impulsando plataformas deportivas de alto rendimiento
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
              Aseguramos que tu core digital sea resiliente, seguro y esté
              preparado para la próxima generación del entretenimiento.
            </p>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {engineering.map((e) => (
              <Card
                key={e.title}
                className="border-white/10 bg-zinc-950/55 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {e.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {e.body}
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
              Así se transforma el juego
            </h3>
            <a
              href=""
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-violet-200 hover:text-violet-100"
            >
              Explora Historias de Impacto{" "}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
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
                      Leer historia{" "}
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
