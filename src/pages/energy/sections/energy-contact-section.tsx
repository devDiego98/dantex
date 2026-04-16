import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const pillars = [
  "Programa Connect",
  "Innovación",
  "Calidad y seguridad",
  "Compromiso sostenible",
] as const;

export function EnergyContactSection() {
  return (
    <section id="contact" className={sectionPadding}>
      <motion.div
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-teal-500/25 bg-gradient-to-br from-teal-700/60 via-teal-950/65 to-black p-6 shadow-[0_0_90px_rgba(13,148,136,0.18)] sm:p-10 lg:p-12"
        {...fadeUp}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="text-white">
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Generemos soluciones con impacto real
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-teal-50/90">
              Completa el formulario para conectar con nuestro equipo.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-teal-50/90">
              Un especialista del equipo Dantex se pondrá en contacto para
              conocer tus necesidades y explorar oportunidades de colaboración.
            </p>

            <ul className="mt-8 grid gap-2.5 text-sm text-teal-50/95 sm:grid-cols-2">
              {pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-zinc-200">
                Nombre
                <Input
                  name="firstName"
                  autoComplete="given-name"
                  className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
                />
              </label>
              <label className="block text-xs font-medium text-zinc-200">
                Apellido
                <Input
                  name="lastName"
                  autoComplete="family-name"
                  className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
                />
              </label>
            </div>
            <label className="block text-xs font-medium text-zinc-200">
              Rol
              <Input
                name="role"
                autoComplete="organization-title"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
            <label className="block text-xs font-medium text-zinc-200">
              Email
              <Input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
            <label className="block text-xs font-medium text-zinc-200">
              Cuéntanos sobre tu proyecto
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full resize-y rounded-lg border border-white/15 bg-black/50 px-2.5 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus-visible:border-teal-400/50 focus-visible:ring-2 focus-visible:ring-teal-500/30"
              />
            </label>
            <div className="flex justify-end pt-1">
              <Button
                type="submit"
                className="rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Conecta con nuestro equipo
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
