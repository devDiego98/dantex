import { Cpu, ShieldCheck, Users } from "lucide-react";

import { SantexLabSectionFrame } from "./section-frame";

const bullets = [
  {
    text: "Squads senior con experiencia en producto, datos e ingeniería de IA.",
    icon: Users,
  },
  {
    text: "Marcos de gobernanza y seguridad alineados a estándares enterprise.",
    icon: ShieldCheck,
  },
  {
    text: "Arquitectura y MLOps pensados para evolucionar sin deuda técnica oculta.",
    icon: Cpu,
  },
];

export function SantexLabObjectivesSection() {
  return (
    <SantexLabSectionFrame className="border-b border-white/5 bg-[#010807] py-16 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-chakra text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Tus objetivos, potenciados por nuestra experiencia
          </h2>
          <ul className="mt-10 space-y-6">
            {bullets.map(({ text, icon: Icon }) => (
              <li key={text} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-300">
                  <Icon className="size-5" aria-hidden />
                </div>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80"
            alt="Equipo colaborando con notas en un tablero de cristal"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
            aria-hidden
          />
        </div>
      </div>
    </SantexLabSectionFrame>
  );
}
