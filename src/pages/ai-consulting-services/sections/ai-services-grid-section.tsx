import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Retail",
    description:
      "Personalización, demanda y operaciones de tienda potenciadas con modelos en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80",
    href: "#",
  },
  {
    title: "Salud",
    description:
      "Asistentes clínicos, triage y analítica asistida respetando privacidad y normativa.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=80",
    href: "#",
  },
  {
    title: "Finanzas",
    description:
      "Detección de fraude, scoring y automatización documental con trazabilidad.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80",
    href: "#",
  },
  {
    title: "Industria",
    description:
      "Mantenimiento predictivo, visión por computador y gemelos digitales conectados.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&q=80",
    href: "#",
  },
] as const;

const item = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export function AiServicesGridSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-chakra text-3xl font-semibold text-white sm:text-4xl">
            Integrando IA en…
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Casos de uso concretos donde aceleramos resultados con equipos
            multidisciplinarios.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              {...item}
              transition={{ ...item.transition, delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 shadow-[0_25px_70px_-50px_rgba(0,0,0,0.8)] backdrop-blur-sm transition hover:border-teal-500/25"
            >
              <a href={card.href} className="flex flex-1 flex-col text-left">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-chakra text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300 transition group-hover:gap-2">
                    Saber más
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
