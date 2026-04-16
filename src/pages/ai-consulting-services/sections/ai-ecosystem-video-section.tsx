import { motion } from "framer-motion";
import { Play } from "lucide-react";

const POSTER =
  "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=1200&q=80";

export function AiEcosystemVideoSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-chakra text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Nuestro Ecosistema de IA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-zinc-400 sm:text-lg">
            Un conjunto integrado de capacidades, herramientas y prácticas para
            llevar modelos generativos y analíticos avanzados a producción con
            calidad y cumplimiento.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_40px_120px_-60px_rgba(45,212,191,0.35)]">
            <img
              src={POSTER}
              alt=""
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
              <button
                type="button"
                className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
                aria-label="Reproducir video"
              >
                <Play className="ml-1 size-9 fill-white" />
              </button>
              <p className="font-chakra text-xl font-semibold text-white drop-shadow-md sm:text-2xl">
                AI-Powered Ecosystem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
