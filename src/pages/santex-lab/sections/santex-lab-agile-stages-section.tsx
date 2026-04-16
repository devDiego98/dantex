import { SantexLabSectionFrame } from "./section-frame";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  PrototypeIcon,
  ScaleIcon,
  ValidationIcon,
  ViabilityIcon,
  VisionIcon,
} from "@/svgs/agile-stages-icons";

const stages = [
  {
    step: "01",
    title: "Visión estratégica",
    body: "Alineamos la estrategia de IA con los objetivos del negocio y evaluamos preparación en liderazgo, datos, talento y cultura.",
    note: "¿No sabes si tu empresa está lista para adoptar IA? Esta fase da claridad para iniciar con foco y avanzar hacia una estrategia sólida.",
    icon: VisionIcon,
  },
  {
    step: "02",
    title: "Análisis de viabilidad",
    body: "Identifica y prioriza casos de uso de alto impacto. Validamos oportunidades, estado de datos, compatibilidad técnica y proyección de retorno.",
    note: "Cuando todo parece prioridad, cuesta saber por dónde empezar. Te ayudamos a enfocarte en lo valioso y factible ahora.",
    icon: ViabilityIcon,
  },
  {
    step: "03",
    title: "Prototipo",
    body: "Construimos un MVP en semanas para validar con usuarios reales, métricas y guardrails de calidad.",
    note: "Reducimos incertidumbre rápido: prototipos que aprenden, miden y muestran valor sin comprometer la operación.",
    icon: PrototypeIcon,
  },
  {
    step: "04",
    title: "Validación",
    body: "Iteramos con feedback de stakeholders, tests y observabilidad para endurecer el producto antes de escalar.",
    note: "Aseguramos performance, seguridad y experiencia antes de invertir en operación y despliegue.",
    icon: ValidationIcon,
  },
  {
    step: "05",
    title: "Escala",
    body: "Estandarizamos MLOps, gobierno y operación para crecer sin fricción, con equipos internos o squads Santex.",
    note: "Pasamos de “funciona” a “funciona siempre”: monitoreo, costos, compliance y mejora continua.",
    icon: ScaleIcon,
  },
];

export function SantexLabAgileStagesSection() {
  return (
    <SantexLabSectionFrame className="border-b border-white/5 bg-[#020a09] py-14 sm:py-16 min-h-[100svh]">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300/80">
          CÓMO PODEMOS TRABAJAR JUNTOS
        </p>
        <h2 className="font-chakra mx-auto mb-8 max-w-3xl text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:mb-10">
          Cinco Etapas:{" "}
          <span className="text-white/85">Ágiles y modulares</span>
        </h2>
      </div>

      <div className="relative">
        <button
          type="button"
          className="stages-prev pointer-events-auto absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/80 backdrop-blur-sm transition hover:border-white/20 hover:text-white lg:flex size-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          className="stages-next pointer-events-auto absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/80 backdrop-blur-sm transition hover:border-white/20 hover:text-white lg:flex size-10"
          aria-label="Siguiente"
        >
          <ChevronRight className="size-5" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{ prevEl: ".stages-prev", nextEl: ".stages-next" }}
          pagination={{ clickable: true }}
          spaceBetween={18}
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 3.05, spaceBetween: 22 },
          }}
          className="stages-swiper h-[calc(50svh-12rem)] sm:h-[calc(80svh-13rem)]"
        >
          {stages.map(({ step, title, body, note, icon: Icon }) => (
            <SwiperSlide key={title} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/40 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-white/20 sm:p-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(70% 60% at 20% 10%, rgba(45,212,191,0.16), transparent 55%), radial-gradient(55% 50% at 80% 15%, rgba(34,211,238,0.10), transparent 60%)",
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex size-20 items-center justify-center rounded-full border border-white/10 bg-black/35 text-teal-200 shadow-inner shadow-black/40">
                      <Icon className="stage-icon size-14 text-white/80" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.22em] text-zinc-500">
                      {step}
                    </span>
                  </div>

                  <h3 className="font-chakra text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300/80 sm:text-[15px]">
                    {body}
                  </p>
                  <p className="mt-5 text-sm italic leading-relaxed text-zinc-400/80">
                    {note}
                  </p>
                </div>

                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .stages-swiper .swiper-pagination {
          bottom: 0.25rem;
        }
        .stages-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.22);
          opacity: 1;
          width: 6px;
          height: 6px;
          margin: 0 6px !important;
          transition: transform 200ms ease, background 200ms ease;
        }
        .stages-swiper .swiper-pagination-bullet-active {
          background: rgba(45,212,191,0.85);
          transform: scale(1.2);
        }

        /* Stroke styling: grey base, neon draw on hover. */
        .stage-icon-base {
          stroke: rgba(161, 161, 170, 0.75); /* zinc-400-ish */
        }
        .stage-icon-anim {
          stroke: #519292; /* teal-400-ish */
          stroke-dasharray: 140;
          stroke-dashoffset: 140;
          opacity: 0;
          filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.35));
        }
        .stages-swiper .group:hover .stage-icon-anim {
          opacity: 1;
          animation: stage-draw 1200ms ease-out forwards;
        }
        @keyframes stage-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .stage-icon-anim { stroke-dashoffset: 0; opacity: 1; }
          .stages-swiper .group:hover .stage-icon-anim { animation: none; }
        }
      `}</style>
    </SantexLabSectionFrame>
  );
}
