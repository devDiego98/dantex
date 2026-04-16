"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { DantexLabSectionFrame } from "./dection-frame";

const faqs = [
  {
    q: "¿Cuánto dura un engagement típico del Lab?",
    a: "Depende del paquete: desde dos semanas de sprint hasta programas de varios meses con entregas quincenales y gobernanza compartida.",
  },
  {
    q: "¿Trabajan con nuestro stack y proveedor de nube?",
    a: "Sí. Integramos con AWS, Azure y GCP, y respetamos políticas de identidad, redes y secretos de tu organización.",
  },
  {
    q: "¿Cómo protegen datos sensibles y propiedad intelectual?",
    a: "Usamos acuerdos de confidencialidad, ambientes aislados cuando aplica, y opciones de procesamiento sin retención según el caso de uso.",
  },
  {
    q: "¿Qué necesitamos preparar antes de la primera sesión?",
    a: "Un sponsor de negocio, acceso a documentación de producto/datos de alto nivel, y una lista priorizada de preguntas o hipótesis.",
  },
];

export function DantexLabFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <DantexLabSectionFrame className="border-b border-white/5 bg-[#020a09] py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="font-chakra text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Respuestas a tus preguntas estratégicas
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Transparencia desde el primer día: alcance, riesgos y expectativas
            realistas sobre lo que la IA puede aportar a tu negocio.
          </p>
        </div>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/30">
          {faqs.map(({ q, a }, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={q} className="group px-4 py-0 sm:px-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center gap-3 py-4 text-left text-sm font-medium text-white sm:text-base"
                >
                  <span className="flex-1 pr-2">{q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-teal-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p
                    className={`min-h-0 pb-4 text-sm leading-relaxed text-zinc-400 transition-all duration-300 ease-out ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-1 opacity-0"
                    }`}
                  >
                    {a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DantexLabSectionFrame>
  );
}
