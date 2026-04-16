import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AiContactSection() {
  return (
    <section className="pb-8 pt-10 sm:pb-12 sm:pt-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-teal-500/25 bg-gradient-to-br from-teal-600/85 via-teal-900/75 to-[#020807] p-6 shadow-[0_0_80px_rgba(13,148,136,0.2)] sm:p-10 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:p-12">
        <div className="mb-10 flex flex-col justify-center text-white lg:mb-0">
          <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos sobre su próximo proyecto
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-teal-50/90">
            Cuéntenos su contexto y le respondemos con próximos pasos y un
            enfoque inicial sin compromiso.
          </p>
          <div className="mt-8 space-y-3 text-sm text-teal-50/95">
            <a
              href="mailto:contacto@santexgroup.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              contacto@santexgroup.com
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md sm:p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-medium text-zinc-300">
              Nombre
              <Input
                name="name"
                autoComplete="name"
                placeholder="Su nombre"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
            <label className="block text-xs font-medium text-zinc-300">
              Empresa
              <Input
                name="company"
                autoComplete="organization"
                placeholder="Empresa"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
          </div>
          <label className="block text-xs font-medium text-zinc-300">
            Email
            <Input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="nombre@empresa.com"
              className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
            />
          </label>
          <label className="block text-xs font-medium text-zinc-300">
            Mensaje
            <textarea
              name="message"
              rows={4}
              placeholder="Objetivos, plazos o restricciones que debamos conocer"
              className="mt-1.5 w-full resize-y rounded-lg border border-white/15 bg-black/50 px-2.5 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus-visible:border-teal-400/50 focus-visible:ring-2 focus-visible:ring-teal-500/30"
            />
          </label>
          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              className="rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
