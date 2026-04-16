import { Lightbulb, Rocket, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DantexLabSectionFrame } from "./dection-frame";

const packages = [
  {
    name: "Discovery Venture",
    highlight: false,
    icon: Lightbulb,
    points: [
      "Taller de alineación y mapa de oportunidades",
      "Assessment de datos y riesgos",
      "Documento ejecutivo de próximos pasos",
    ],
  },
  {
    name: "AI Sprint",
    highlight: true,
    icon: Rocket,
    points: [
      "Prototipo funcional en semanas, no meses",
      "Diseño de prompts, evaluación y trazabilidad",
      "Demo con métricas de calidad y adopción",
    ],
  },
  {
    name: "AI Innovation Hub",
    highlight: false,
    icon: Sparkles,
    points: [
      "Co-création con tu equipo de producto",
      "Roadmap multi-release y capacitación",
      "Opción de handover o extensión Dantex",
    ],
  },
];

export function DantexLabPackagesSection() {
  return (
    <DantexLabSectionFrame className="border-b border-white/5 bg-[#020a09] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-chakra text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Paquetes inteligentes para definir tu próximo movimiento en IA
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          Elige el ritmo y profundidad adecuados para tu contexto: desde
          claridad estratégica hasta un hub de innovación continuo.
        </p>
        <a
          href="#contacto-lab"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 inline-flex h-10 rounded-lg border border-white/15 bg-white px-6 text-sm font-semibold text-zinc-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:rotate-1 hover:border-emerald-300/70 hover:bg-teal-500 hover:text-white hover:shadow-[0_14px_34px_rgba(16,185,129,0.45)]"
          )}
        >
          Ver todos los paquetes
        </a>
      </div>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {packages.map(({ name, highlight, icon: Icon, points }) => (
          <article
            key={name}
            className={
              highlight
                ? "flex flex-col rounded-2xl border border-teal-400/40 bg-gradient-to-b from-teal-400 to-teal-600 p-6 text-[#03110f] shadow-[0_0_48px_rgba(45,212,191,0.25)] lg:-translate-y-1 lg:shadow-[0_0_64px_rgba(45,212,191,0.35)]"
                : "flex flex-col rounded-2xl border border-teal-500/15 bg-black/45 p-6 backdrop-blur-sm"
            }
          >
            <div
              className={
                highlight
                  ? "mb-4 flex size-10 items-center justify-center rounded-lg bg-black/15 text-[#03110f]"
                  : "mb-4 flex size-10 items-center justify-center rounded-lg border border-teal-500/25 bg-teal-500/10 text-teal-300"
              }
            >
              <Icon className="size-5" aria-hidden />
            </div>
            <h3
              className={
                highlight
                  ? "font-chakra text-lg font-bold"
                  : "font-chakra text-lg font-semibold text-white"
              }
            >
              {name}
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed">
              {points.map((p) => (
                <li
                  key={p}
                  className={
                    highlight
                      ? "flex gap-2 text-[#042a26]"
                      : "flex gap-2 text-zinc-400"
                  }
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current opacity-70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </DantexLabSectionFrame>
  );
}
