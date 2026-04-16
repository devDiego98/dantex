import { motion } from "framer-motion";
import { Briefcase, Cpu, LineChart, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Expertise técnica",
    body: "Arquitectos de ML, MLOps y software que han llevado modelos a escala en entornos regulados.",
    Icon: Cpu,
  },
  {
    title: "Enfoque en el negocio",
    body: "Priorizamos iniciativas por impacto: métricas claras, ownership y roadmap realista.",
    Icon: Briefcase,
  },
  {
    title: "Gobernanza y confianza",
    body: "Privacidad, seguridad y uso responsable de IA integrados desde el diseño, no como afterthought.",
    Icon: ShieldCheck,
  },
  {
    title: "Velocidad con rigor",
    body: "Ciclos cortos de validación con calidad de ingeniería: pruebas, observabilidad y rollback.",
    Icon: LineChart,
  },
] as const;

export function AiWhyUsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="font-chakra text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            ¿Por qué elegirnos para liderar su transformación digital?
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-zinc-400">
            Somos un partner de producto y tecnología: alineamos liderazgo
            ejecutivo, equipos de datos y squads de entrega para que la IA deje
            de ser un experimento aislado y se convierta en capacidad
            recurrente del negocio.
          </p>
        </motion.div>

        <ul className="space-y-8">
          {features.map(({ title, body, Icon }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-4 border-b border-white/10 pb-8 last:border-0 last:pb-0"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-300">
                <Icon className="size-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-chakra text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
