import { MessageSquareQuote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DantexLabSectionFrame } from "./dection-frame";

export function DantexLabContactSection() {
  return (
    <DantexLabSectionFrame
      id="contacto-lab"
      className="scroll-mt-28 py-16 sm:py-20"
    >
      <div className="overflow-hidden rounded-3xl border border-teal-500/25 bg-gradient-to-br from-teal-600/90 via-teal-800/80 to-[#020807] p-6 shadow-[0_0_80px_rgba(13,148,136,0.25)] sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="flex flex-col justify-center text-white">
            <h2 className="font-chakra text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Generemos soluciones de IA con impacto real
            </h2>
            <div className="mt-8 flex gap-4 rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MessageSquareQuote className="size-5" aria-hidden />
              </div>
              <p className="text-sm leading-relaxed text-teal-50/95">
                “El Lab nos ayudó a priorizar tres casos de uso con ROI claro y
                un prototipo que hoy está en piloto con clientes.”
              </p>
            </div>
          </div>

          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-zinc-300">
                Nombre
                <Input
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre"
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
                placeholder="Cuéntanos sobre tu iniciativa o reto"
                className="mt-1.5 w-full resize-y rounded-lg border border-white/15 bg-black/50 px-2.5 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus-visible:border-teal-400/50 focus-visible:ring-2 focus-visible:ring-teal-500/30"
              />
            </label>
            <Button
              type="submit"
              variant="secondary"
              className="mt-2 h-11 w-full rounded-lg border-0 bg-white text-sm font-semibold text-zinc-900 hover:bg-zinc-100 sm:w-auto sm:px-10"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </DantexLabSectionFrame>
  );
}
