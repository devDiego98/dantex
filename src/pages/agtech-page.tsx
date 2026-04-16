import { motion } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HERO_VIDEOS } from "@/lib/site-videos";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function AnimatedStrokeFrame({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement | null>;
}) {
  const dashLength = 520;
  const [size, setSize] = useState({ width: 1020, height: 485 });

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const updateFromRect = (rect: DOMRectReadOnly) => {
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      setSize((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { width, height }
      );
    };

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      updateFromRect(entry.contentRect);
    });

    observer.observe(node);
    updateFromRect(node.getBoundingClientRect());

    return () => observer.disconnect();
  }, [targetRef]);

  const rx = Math.max(
    0,
    Math.min(24, Math.floor(size.width / 10), Math.floor(size.height / 10))
  );

  return (
    <motion.svg
      viewBox={`0 0 ${size.width} ${size.height}`}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <motion.rect
        x="0"
        y="0"
        width={size.width}
        height={size.height}
        rx={rx}
        stroke="url(#agtech-stroke)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray={dashLength}
        initial={{ strokeDashoffset: dashLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 2.4,
          ease: [0.22, 1, 0.36, 1],
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <defs>
        <linearGradient
          id="agtech-stroke"
          x1="0"
          y1="0"
          x2={Math.round(size.width * 0.55)}
          y2={Math.round(size.height * 0.65)}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5eead4" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#22c55e" stopOpacity="0.7" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function AgtechPage() {
  const contactFrameRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen text-white">
      {/* Fullscreen hero with background video */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEOS.agtech}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/95" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
          <p className="font-chakra mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-teal-200/80">
            Industrias · Agricultura
          </p>
          <h1 className="font-chakra mb-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.4rem] md:leading-tight">
            Datos, IA y automatización
            <br className="hidden sm:block" /> para producir mejor en cada
            ciclo.
          </h1>
          <p className="mb-9 max-w-2xl text-pretty text-base text-zinc-200 sm:text-lg">
            Conectamos sensores, maquinaria, imágenes satelitales y sistemas de
            gestión para tomar decisiones basadas en evidencia en todo el ciclo
            productivo.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button className="rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-white/90">
              Agenda una conversación
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/35 bg-black/30 text-sm font-medium text-white hover:bg-white/10"
            >
              Ver casos de uso
            </Button>
          </div>
        </div>
      </section>

      {/* Problema / oportunidad */}
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
          <motion.div className="flex-1 space-y-4" {...fadeUp}>
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/80">
              ¿Dónde estás hoy?
            </p>
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
              ¿Tu operación agrícola ya genera datos,
              <br className="hidden md:block" /> pero todavía no genera
              decisiones mejores?
            </h2>
          </motion.div>

          <motion.div
            className="flex-1 space-y-4 text-base text-zinc-300 sm:text-[15px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            <p>
              Muchas organizaciones ya cuentan con históricos de rinde,
              aplicaciones, clima y logística, pero esos datos viven en silos o
              planillas que nadie consulta a tiempo.
            </p>
            <p>
              En Dantex ayudamos a conectar esas fuentes, diseñar modelos
              simples de predicción y llevar insights accionables al lugar donde
              se toman las decisiones: el lote, el equipo de planificación y la
              dirección del negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards de resultados */}
      <section className={`${sectionPadding} pt-6`}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="max-w-3xl space-y-3" {...fadeUp}>
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/80">
              Impacto en el campo
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
              Lo que buscamos destrabar en tu operación agrícola.
            </h3>
          </motion.header>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {[
              {
                title: "Visibilidad diaria",
                body: "Paneles que muestran rinde, humedad y estado de cada lote sin abrir planillas.",
              },
              {
                title: "Menos desperdicio",
                body: "Aplicaciones de insumos más precisas, basadas en datos históricos y pronósticos.",
              },
              {
                title: "Operación predecible",
                body: "Alertas tempranas ante desvíos en riego, logística o clima.",
              },
              {
                title: "Estrategia con evidencia",
                body: "Simulaciones de escenarios para decidir inversiones campaña a campaña.",
              },
            ].map((card) => (
              <Card
                key={card.title}
                className="border-white/10 bg-zinc-950/50 text-left ring-1 ring-white/5 backdrop-blur-sm"
              >
                <CardContent className="space-y-3 p-4 sm:p-5">
                  <p className="font-chakra text-sm font-semibold tracking-tight text-white">
                    {card.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {card.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Banda con imagen satelital */}
      <section className={`${sectionPadding} pb-8`}>
        <motion.div
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black/60"
          {...fadeUp}
        >
          <div className="relative flex flex-col overflow-hidden md:flex-row">
            <div className="relative h-60 w-full md:h-auto md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1200&q=80"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="relative flex w-full flex-1 flex-col justify-center gap-4 p-6 sm:p-8">
              <p className="font-chakra text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300/80">
                Datos que se ven
              </p>
              <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-[1.6rem]">
                De imágenes satelitales a decisiones de manejo por ambiente.
              </h3>
              <p className="max-w-xl text-sm text-zinc-300">
                Traducimos índices como NDVI, humedad y temperatura de suelo en
                recomendaciones concretas de manejo, integradas a tus sistemas
                actuales.
              </p>
              <Button
                variant="outline"
                className="mt-1 w-fit rounded-full border-teal-400/60 bg-black/40 text-xs font-medium uppercase tracking-[0.26em] text-teal-200 hover:bg-teal-500/15"
              >
                Explorar cómo lo hacemos
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Soluciones y partners */}
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row">
          <motion.div className="flex-1 space-y-4" {...fadeUp}>
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/80">
              Soluciones agtech
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
              Casos de uso que construimos con nuestros clientes.
            </h3>
            <ul className="mt-2 space-y-3 text-sm text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-100">
                  Tableros de rinde y variabilidad:
                </span>{" "}
                consolidan datos de años anteriores para definir ambientes y
                densidades.
              </li>
              <li>
                <span className="font-semibold text-zinc-100">
                  Modelos de pronóstico de producción:
                </span>{" "}
                combinan clima, suelos y manejo para anticipar resultados.
              </li>
              <li>
                <span className="font-semibold text-zinc-100">
                  Monitoreo de maquinaria y logística:
                </span>{" "}
                seguimiento en tiempo real para reducir tiempos muertos.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 space-y-5"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
              Ecosistema tecnológico
            </p>
            <Card className="border-white/15 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-sky-500/15 text-left shadow-[0_0_60px_rgba(15,118,110,0.35)]">
              <CardContent className="space-y-3 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300/90">
                  Alianzas
                </p>
                <p className="font-chakra text-lg font-semibold tracking-tight text-white">
                  Trabajamos con los principales proveedores de nube, datos y
                  hardware en el agro.
                </p>
                <p className="text-sm text-zinc-200/90">
                  Integramos tu stack existente (ERP, plataformas de campo,
                  proveedores de imágenes) sin forzar migraciones innecesarias.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-zinc-100">
                  <span className="rounded-full bg-black/40 px-3 py-1">
                    NVIDIA
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1">
                    AWS
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1">
                    Sentinel / Landsat
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1">
                    IoT &amp; sensores
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className={sectionPadding}>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <motion.header className="max-w-3xl space-y-3" {...fadeUp}>
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/80">
              Forma de trabajo
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
              De un piloto concreto a una plataforma que escala.
            </h3>
          </motion.header>

          <motion.ol
            className="grid gap-4 md:grid-cols-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            {[
              {
                step: "01",
                title: "Diagnóstico con tu equipo",
                body: "Entendemos datos disponibles, decisiones críticas y restricciones de campo.",
              },
              {
                step: "02",
                title: "Piloto medible",
                body: "Definimos un caso de uso, un área de prueba y métricas claras de éxito.",
              },
              {
                step: "03",
                title: "Escalamiento responsable",
                body: "Llevamos la solución a más hectáreas y equipos, con foco en adopción.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="relative overflow-hidden rounded-2xl border border-white/12 bg-zinc-950/70 p-5 backdrop-blur-sm"
              >
                <p className="font-chakra text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">
                  Paso {item.step}
                </p>
                <p className="mt-2 font-chakra text-base font-semibold tracking-tight">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Contacto con frame animado */}
      <section className={`${sectionPadding} pt-10 pb-24`}>
        <div className="mx-auto w-full max-w-5xl">
          <motion.div className="mb-8 max-w-2xl space-y-3" {...fadeUp}>
            <p className="font-chakra text-xs font-semibold uppercase tracking-[0.3em] text-teal-300/80">
              Conversemos
            </p>
            <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
              ¿Listo para explorar un caso de uso en tu operación?
            </h3>
            <p className="text-sm text-zinc-300">
              Cuéntanos brevemente sobre tu cultivo, región y desafíos actuales.
              Un equipo especializado en agtech te responde en menos de 2 días
              hábiles.
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/80 p-[1px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            <div
              ref={contactFrameRef}
              className="relative grid gap-8 rounded-[1.4rem] bg-gradient-to-br from-emerald-500/15 via-black to-sky-500/10 p-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:p-8"
            >
              <AnimatedStrokeFrame targetRef={contactFrameRef} />
              <div className="space-y-4">
                <p className="font-chakra text-sm font-semibold tracking-tight text-white">
                  Agenda una llamada con nuestro equipo de agtech.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-zinc-300">
                      Nombre y apellido
                    </p>
                    <Input
                      placeholder="María Gómez"
                      className="h-10 border-white/20 bg-black/40 text-sm text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-zinc-300">
                      Rol en la organización
                    </p>
                    <Input
                      placeholder="Responsable de producción, CEO, etc."
                      className="h-10 border-white/20 bg-black/40 text-sm text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-zinc-300">
                      Email de contacto
                    </p>
                    <Input
                      type="email"
                      placeholder="tu@empresa.com"
                      className="h-10 border-white/20 bg-black/40 text-sm text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-medium text-zinc-300">
                      País y región
                    </p>
                    <Input
                      placeholder="Argentina · Córdoba, Brasil · Mato Grosso, etc."
                      className="h-10 border-white/20 bg-black/40 text-sm text-white placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-zinc-300">
                    ¿Qué te gustaría explorar?
                  </p>
                  <textarea
                    placeholder="Contanos sobre tus cultivos, hectáreas, tecnologías actuales y desafíos que querés resolver."
                    className="min-h-[96px] w-full resize-y rounded-lg border border-white/20 bg-black/40 px-2.5 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-teal-500/20"
                  />
                </div>
                <Button className="mt-2 w-full rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-white/90 sm:w-auto">
                  Enviar mensaje
                </Button>
                <p className="text-[11px] text-zinc-400">
                  Al enviar este formulario aceptas ser contactado por nuestro
                  equipo para coordinar la siguiente conversación.
                </p>
              </div>

              <div className="space-y-5 text-sm text-zinc-200">
                <p className="font-chakra text-sm font-semibold tracking-tight text-white">
                  Qué puedes esperar de la primera llamada.
                </p>
                <ul className="space-y-3 text-sm text-zinc-200/90">
                  <li>
                    • Revisión rápida de tu contexto y tecnologías actuales.
                  </li>
                  <li>
                    • Identificación de 1–2 casos de uso con impacto medible.
                  </li>
                  <li>• Próximos pasos claros y tiempos estimados.</li>
                </ul>
                <div className="rounded-2xl border border-emerald-400/40 bg-black/40 p-4 text-xs text-zinc-200">
                  <p className="font-chakra mb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                    Tiempo estimado
                  </p>
                  <p className="font-semibold text-white">
                    45 minutos para entender tu operación y definir un piloto
                    viable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
