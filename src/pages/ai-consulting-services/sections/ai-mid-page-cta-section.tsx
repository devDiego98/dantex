import { Button } from "@/components/ui/button";

export function AiMidPageCtaSection() {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-zinc-950/70 px-6 py-8 backdrop-blur-sm sm:flex-row sm:px-10">
        <p className="text-center text-lg font-medium text-white sm:text-left">
          ¿Listo para iniciar su recorrido con IA?
        </p>
        <Button className="shrink-0 rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-white/90">
          Contáctanos
        </Button>
      </div>
    </section>
  );
}
