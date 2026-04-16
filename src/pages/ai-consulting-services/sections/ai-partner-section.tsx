import { motion } from "framer-motion";

export function AiPartnerSection() {
  return (
    <section className="py-16 sm:py-20">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-8 shadow-[0_0_80px_-20px_rgba(16,185,129,0.25)] sm:grid-cols-[auto_1fr] sm:gap-14 sm:p-12 lg:p-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-center">
          <div
            className="flex h-28 w-full max-w-[220px] items-center justify-center rounded-xl border border-white/10 bg-black/40 px-6 py-4 sm:h-36"
            aria-label="NVIDIA"
          >
            <span className="font-chakra text-3xl font-bold tracking-tight text-[#76B900] sm:text-4xl">
              NVIDIA
            </span>
          </div>
        </div>
        <div className="text-left">
          <h2 className="font-chakra text-2xl font-semibold text-white sm:text-3xl">
            Empoderando la IA con tecnología de vanguardia
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
            Combinamos nuestra experiencia en producto y datos con plataformas
            de aceleración y entrenamiento líderes en la industria. Así
            acortamos el camino desde experimentación hasta inferencia en
            producción, con infraestructura preparada para cargas exigentes y
            equipos que dominan el stack completo.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
