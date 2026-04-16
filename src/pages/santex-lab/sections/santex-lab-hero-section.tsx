import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

import { SantexLabSectionFrame } from "./section-frame";
import { EngineeringOrb3D } from "@/components/engineering-orb-3d";

export function SantexLabHeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      // Slow idle rotation: values in [-1, 1] drive the orb shader rotation.
      mouseX.set(Math.sin(t * 0.45) * 0.65);
      mouseY.set(Math.cos(t * 0.38) * 0.55);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mouseX, mouseY]);

  return (
    <SantexLabSectionFrame
      className="border-b border-teal-500/10 bg-[#010807] pb-16 pt-28 sm:pb-24 sm:pt-32"
      innerClassName="w-full max-w-none px-0"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <img
            src="/man_holding_orb.jpg"
            alt=""
            className="absolute inset-y-0 right-0 h-full w-full object-cover object-[78%_45%] opacity-60 saturate-[1.05] contrast-[1.08]"
            style={{
              WebkitMaskImage:
                "radial-gradient(closest-side at 78% 52%, rgba(0,0,0,1) 36%, rgba(0,0,0,0.9) 54%, rgba(0,0,0,0) 86%)",
              maskImage:
                "radial-gradient(closest-side at 65% 52%, rgb(0, 0, 0) 37%, rgba(0, 0, 0, 0.9) 45%, rgba(0, 0, 0, 0) 110%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010807] via-[#010807]/70 to-transparent" />

          <div
            className="absolute left-[52%] top-[56%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          >
            <div className="relative w-[9.5rem] sm:w-[11rem] lg:w-[12rem] animate-[orb-float_7s_ease-in-out_infinite]">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_42%_42%,rgba(45,212,191,0.28),transparent_62%)] blur-[60px]" />
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(94,234,212,0.55),transparent_55%)] blur-[42px]" />
              <EngineeringOrb3D
                mouseX={mouseX}
                mouseY={mouseY}
                lineScale={0.62}
              />
            </div>
          </div>
        </div>

        <div
          className="absolute -top-32 left-1/2 h-[min(70vw,520px)] w-[min(120vw,900px)] -translate-x-1/2 rounded-full bg-teal-500/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-400/90">
            SANTEX LAB
          </p>
          <h1 className="font-chakra text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl">
            Tus ideas, están estratégicas y tienen un gran escalamiento
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-zinc-400">
            Acompañamos a equipos líderes a convertir visión en productos de IA
            con rigor, velocidad y gobernanza.
          </p>
          <div className="mt-8">
            <a
              href="#contacto-lab"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mt-8 inline-flex h-10 rounded-lg border border-white/15 bg-teal-500 px-6 text-sm font-semibold text-zinc-900 transition-all duration-300 ease-out hover:border-emerald-300/70 hover:bg-white hover:text-black hover:shadow-[0_14px_34px_rgba(16,185,129,0.45)]"
              )}
            >
              Hablemos de tus ideas
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orb-float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); filter: saturate(1.05); }
          50% { transform: translate3d(0, -10px, 0) scale(1.03); filter: saturate(1.15); }
        }
      `}</style>
    </SantexLabSectionFrame>
  );
}
