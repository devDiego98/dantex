import type { CSSProperties, ReactNode } from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cubicBezier } from "motion-utils";
import {
  CheckCircle2,
  GitCommitHorizontal,
  Grid2X2,
  MessageCircle,
  MessagesSquare,
  Play,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { BrandsMarquee } from "@/components/brands-marquee";
import { EngineeringOrb3D } from "@/components/engineering-orb-3d";
import { MarbleConnector } from "@/components/marble-connector";
import {
  ReviewsCarousel,
  type ReviewItem,
} from "@/components/reviews-carousel";
import { VideoUnderVideoSection } from "@/components/video-under-video-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const services = [
  {
    title: "Consultoría",
    description:
      "Estrategia técnica y de producto alineada a tus objetivos de negocio.",
  },
  {
    title: "Diseño y Cálculo",
    description: "Modelado, simulación y validación con rigor de ingeniería.",
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Entregas predecibles con visibilidad y métricas en tiempo real.",
  },
  {
    title: "Mantenimiento",
    description: "Operación continua, observabilidad y mejora incremental.",
  },
  {
    title: "Análisis de Datos",
    description:
      "De métricas a decisiones: pipelines, dashboards y analítica avanzada.",
  },
];

const reviews: readonly ReviewItem[] = [
  {
    id: "rbi-1",
    quote:
      "El equipo de líderes siempre está disponible para ayudarnos en todo. Además, el equipo técnico es muy sólido y comprometido con nuestros proyectos.",
    author: "Bruno Tadayoshi Mendes Doy",
    role: "Director de Ingeniería",
    company: "Restaurant Brands International",
    logo: (
      <div className="flex items-center justify-center gap-3">
        <span className="text-[44px] font-semibold leading-none tracking-tight text-white">
          rbi
        </span>
        <span className="max-w-[12rem] text-left text-[10px] font-medium uppercase leading-snug tracking-[0.22em] text-white/60">
          restaurant
          <br />
          brands
          <br />
          international
        </span>
      </div>
    ),
  },
  {
    id: "rbi-2",
    quote:
      "La colaboración fue fluida desde el día uno: claridad, velocidad y una ejecución impecable. Se sienten como una extensión del equipo.",
    author: "Líder de Tecnología",
    role: "Engineering Manager",
    company: "Enterprise",
  },
  {
    id: "rbi-3",
    quote:
      "Excelente nivel técnico y foco en resultados. Cada entrega venía con visibilidad del impacto y una comunicación impecable.",
    author: "Director de Producto",
    role: "Head of Product",
    company: "Retail",
  },
] as const;

const howItWorksSteps = [
  {
    id: "01",
    title: "Cada commit es analizado por nuestro modelo de IA",
    body: "Escanea cada cambio para entender qué se modificó y por qué.",
    variant: "commit" as const,
    commitLine: "Feat: add lazy loading to dashboard widgets",
    author: "María",
  },
  {
    id: "02",
    title: "Se considera la arquitectura, pruebas, tickets y notas de release",
    body: "El modelo cruza cada commit con la arquitectura, tareas relacionadas, resultados de testing y documentación.",
    variant: "tags" as const,
    tags: [
      "#frontend",
      "#release-notes",
      "#ticket-2987",
      "#architecture",
      "#feature",
      "#performance",
    ],
  },
  {
    id: "03",
    title: "Medición y mejora con señales de impacto",
    body: "Cada iteración se evalúa con métricas claras para reducir retrabajo y priorizar lo que importa al negocio.",
    variant: "impact" as const,
    score: 80,
  },
];

const HOW_IT_WORKS_TAGS_STEP_INDEX = howItWorksSteps.findIndex(
  (s) => s.variant === "tags"
);
const howItWorksTagsList: readonly string[] =
  howItWorksSteps[HOW_IT_WORKS_TAGS_STEP_INDEX]?.variant === "tags"
    ? howItWorksSteps[HOW_IT_WORKS_TAGS_STEP_INDEX].tags
    : [];
const HOW_IT_WORKS_TAG_ORBIT_COUNT = Math.max(1, howItWorksTagsList.length);

/** Tags fly to center one-by-one, then marble becomes glow, then ring + counter. */
const HOW_IT_WORKS_TAG_ABSORB_STAGGER_S = 0.1;
const HOW_IT_WORKS_TAG_ABSORB_MOVE_S = 0.5;
const HOW_IT_WORKS_TAGS_ABSORB_END_S =
  (HOW_IT_WORKS_TAG_ORBIT_COUNT - 1) * HOW_IT_WORKS_TAG_ABSORB_STAGGER_S +
  HOW_IT_WORKS_TAG_ABSORB_MOVE_S;
const HOW_IT_WORKS_MARBLE_TO_LIGHT_S = 0.72;
/** Progress arc + 1→80 counter (slow). */
const HOW_IT_WORKS_IMPACT_RING_PROGRESS_S = 2.65;
const HOW_IT_WORKS_IMPACT_RING_EASE = [0.22, 1, 0.36, 1] as const;
const HOW_IT_WORKS_IMPACT_RING_EASE_FN = cubicBezier(
  HOW_IT_WORKS_IMPACT_RING_EASE[0],
  HOW_IT_WORKS_IMPACT_RING_EASE[1],
  HOW_IT_WORKS_IMPACT_RING_EASE[2],
  HOW_IT_WORKS_IMPACT_RING_EASE[3]
);
const HOW_IT_WORKS_IMPACT_STEP_INDEX = howItWorksSteps.findIndex(
  (s) => s.variant === "impact"
);

function tagOrbitMotion(
  index: number,
  total: number
): Record<string, string | number> {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const rPct = 54;
  const x = 50 + rPct * Math.cos(angle);
  const y = 50 + rPct * Math.sin(angle);
  return {
    left: `${x}%`,
    top: `${y}%`,
    x: "-50%",
    y: "-50%",
    opacity: 1,
    scale: 1,
  };
}

function GrainOverlay() {
  const noise = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,${noise}")`,
      }}
      aria-hidden
    />
  );
}

function EngineeringHeroOrb({
  mouseX,
  mouseY,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const spring = { stiffness: 120, damping: 22, mass: 0.35 };
  const springX = useSpring(mouseX, spring);
  const springY = useSpring(mouseY, spring);

  const orbTx = useTransform(springX, [-1, 1], [22, -22]);
  const orbTy = useTransform(springY, [-1, 1], [18, -18]);
  const glowTx = useTransform(springX, [-1, 1], [-22, 22]);
  const glowTy = useTransform(springY, [-1, 1], [-16, 16]);

  return (
    <div className="relative flex min-h-[min(52vw,22rem)] w-full items-center justify-center sm:min-h-[22rem] lg:min-h-[26rem]">
      <motion.div
        className="pointer-events-none absolute inset-[-35%] rounded-full bg-[radial-gradient(circle_at_42%_42%,rgba(45,212,191,0.35),transparent_62%)] blur-[80px]"
        style={{ x: glowTx, y: glowTy }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-[-18%] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(94,234,212,0.65),transparent_52%)] blur-[48px]"
        style={{ x: glowTx, y: glowTy }}
        aria-hidden
      />
      <motion.div
        className="relative mx-auto w-full max-w-[min(92vw,30rem)] transform-gpu will-change-transform sm:max-w-[26rem] lg:max-w-[30rem]"
        style={{
          x: orbTx,
          y: orbTy,
        }}
      >
        <EngineeringOrb3D mouseX={mouseX} mouseY={mouseY} />
      </motion.div>
    </div>
  );
}

function EngineeringHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
    mouseX.set(Math.max(-1, Math.min(1, nx)));
    mouseY.set(Math.max(-1, Math.min(1, ny)));
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.section
      ref={sectionRef}
      className="relative left-1/2 z-0 mb-20 w-screen min-h-[100dvh] -translate-x-1/2 snap-center snap-always overflow-x-hidden overflow-y-visible border-b border-white/5 bg-gradient-to-br from-[#004d4d] via-[#003535] to-[#001818]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_70%_35%,rgba(45,212,191,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_80%,rgba(0,80,80,0.45),transparent_50%)]"
        aria-hidden
      />
      <GrainOverlay />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid flex-1 items-center gap-12 overflow-visible lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.p
              variants={staggerItem}
              className="mb-4 text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90"
            >
              Lo que hacemos
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="font-chakra mb-6 text-left text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]"
            >
              Ingeniería Optimizada con IA
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mb-10 max-w-lg text-left text-base leading-relaxed text-white/85 sm:text-lg"
            >
              Integra expertos, IA y métricas transparentes para lograr
              resultados concretos.
            </motion.p>
            <motion.div variants={staggerItem}>
              <a
                href="#contacto"
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-transparent bg-white px-8 text-sm font-semibold text-[#0f766e] shadow-lg shadow-black/20 transition-colors hover:bg-white/95"
              >
                Descubre lo que puedes lograr
              </a>
            </motion.div>
          </motion.div>

          <div className="relative flex min-h-0 min-w-0 justify-center overflow-visible py-4 sm:py-6">
            <EngineeringHeroOrb mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FloatingBadge({
  children,
  className,
  delay = 0,
  style,
  still = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  /** No floating animation (for static 3D stacks). */
  still?: boolean;
}) {
  const classes = cn(
    "rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-200 shadow-lg backdrop-blur-md sm:text-xs",
    className
  );
  if (still) {
    return (
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={classes}
      style={style}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function ImpactHaloRing({
  score,
  className,
  introAnimationDelay = 0,
}: {
  score: number;
  className?: string;
  /** Seconds before the progress arc begins (keeps in sync with marble exit). */
  introAnimationDelay?: number;
}) {
  const rawId = useId().replace(/:/g, "");
  const gradId = `impact-ring-grad-${rawId}`;
  const vb = 100;
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(100, Math.max(0, score)) / 100;
  const [centerScoreVisible, setCenterScoreVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setCenterScoreVisible(false);
    });
    return () => cancelAnimationFrame(id);
  }, [score, introAnimationDelay]);

  return (
    <div
      className={cn(
        "relative flex aspect-square w-[min(82vmin,320px)] items-center justify-center sm:w-[min(78vmin,340px)]",
        className
      )}
    >
      {/* Tight neon core — sits inside the ring with clear margin to the stroke */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(42%,7.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full sm:w-[min(40%,8rem)]"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(204,255,251,0.95) 0%, rgba(45,212,191,0.55) 28%, rgba(13,148,136,0.2) 52%, transparent 68%)",
          boxShadow:
            "0 0 10px 2px rgba(94,234,212,0.85), 0 0 28px 6px rgba(45,212,191,0.45), 0 0 52px 10px rgba(13,148,136,0.2), inset 0 0 14px rgba(255,255,255,0.35)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-[4%] rounded-full border border-teal-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        aria-hidden
      />
      <svg
        viewBox={`0 0 ${vb} ${vb}`}
        className="relative z-[1] h-full w-full -rotate-90"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        <circle
          cx={vb / 2}
          cy={vb / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2.5"
        />
        <motion.circle
          cx={vb / 2}
          cy={vb / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="3.25"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - pct) }}
          transition={{
            duration: HOW_IT_WORKS_IMPACT_RING_PROGRESS_S,
            delay: introAnimationDelay,
            ease: HOW_IT_WORKS_IMPACT_RING_EASE,
          }}
          onAnimationComplete={() => {
            setCenterScoreVisible(true);
          }}
        />
      </svg>
      {centerScoreVisible ? (
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.22,
            ease: HOW_IT_WORKS_IMPACT_RING_EASE,
          }}
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ opacity: [0.82, 1, 0.82] }}
            transition={{
              duration: 2.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <p
              className="relative z-[2] font-mono text-[clamp(2.75rem,11vmin,4rem)] font-semibold tabular-nums tracking-tight text-white"
              style={{ textShadow: "0 0 48px rgba(45,212,191,0.5)" }}
            >
              {score}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}

function HowItWorksScrollySection() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [playedTagsStep, setPlayedTagsStep] = useState(false);
  const [impactLoaderN, setImpactLoaderN] = useState(1);
  const [impactLoaderVisible, setImpactLoaderVisible] = useState(false);

  useEffect(() => {
    function pickActiveStep() {
      const mid = window.innerHeight * 0.5;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < howItWorksSteps.length; i++) {
        const el = stepRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const center = (r.top + r.bottom) / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      setActive((prev) => (prev === best ? prev : best));
    }

    window.addEventListener("scroll", pickActiveStep, { passive: true });
    window.addEventListener("resize", pickActiveStep);
    pickActiveStep();
    return () => {
      window.removeEventListener("scroll", pickActiveStep);
      window.removeEventListener("resize", pickActiveStep);
    };
  }, []);

  useEffect(() => {
    if (active !== HOW_IT_WORKS_TAGS_STEP_INDEX) return undefined;
    const id = requestAnimationFrame(() => {
      setPlayedTagsStep(true);
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  const impactRingIntroDelayS = useMemo(() => {
    if (active !== HOW_IT_WORKS_IMPACT_STEP_INDEX) return 0;
    return playedTagsStep
      ? HOW_IT_WORKS_TAGS_ABSORB_END_S + HOW_IT_WORKS_MARBLE_TO_LIGHT_S
      : HOW_IT_WORKS_MARBLE_TO_LIGHT_S;
  }, [active, playedTagsStep]);

  useEffect(() => {
    if (active !== HOW_IT_WORKS_IMPACT_STEP_INDEX) {
      const resetId = requestAnimationFrame(() => {
        setImpactLoaderN(1);
        setImpactLoaderVisible(false);
      });
      return () => cancelAnimationFrame(resetId);
    }

    const delayMs = impactRingIntroDelayS * 1000;
    const progressMs = HOW_IT_WORKS_IMPACT_RING_PROGRESS_S * 1000;

    let tickRaf = 0;
    let delayTimer = 0;

    const mountId = requestAnimationFrame(() => {
      setImpactLoaderVisible(false);
      setImpactLoaderN(1);

      delayTimer = window.setTimeout(() => {
        setImpactLoaderVisible(true);
        setImpactLoaderN(1);

        const barStart = performance.now();

        function tick(now: number) {
          const u = Math.min(1, (now - barStart) / progressMs);
          const p = HOW_IT_WORKS_IMPACT_RING_EASE_FN(u);
          const n = Math.min(80, Math.max(1, Math.round(1 + p * 79)));
          setImpactLoaderN(n);
          if (u < 1) {
            tickRaf = requestAnimationFrame(tick);
          } else {
            setImpactLoaderN(80);
            setImpactLoaderVisible(false);
          }
        }

        tickRaf = requestAnimationFrame(tick);
      }, delayMs);
    });

    return () => {
      cancelAnimationFrame(mountId);
      cancelAnimationFrame(tickRaf);
      window.clearTimeout(delayTimer);
    };
  }, [active, impactRingIntroDelayS]);

  const step = howItWorksSteps[active];
  const marblePhaseDelayS =
    active === HOW_IT_WORKS_IMPACT_STEP_INDEX && playedTagsStep
      ? HOW_IT_WORKS_TAGS_ABSORB_END_S
      : 0;
  const showTagOrbit =
    howItWorksTagsList.length > 0 &&
    (step.variant === "tags" || (step.variant === "impact" && playedTagsStep));

  return (
    <section
      id="como-funciona"
      className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-24 text-left"
      style={
        {
          "--how-it-works-steps": howItWorksSteps.length,
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 30px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1380px] px-4 pt-14 sm:px-6 lg:px-10">
        <motion.div className={cn("mb-12 snap-center lg:mb-16")} {...fadeUp}>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
            Un proceso transparente para medir el impacto
          </p>
          <h2 className="font-chakra text-3xl font-semibold text-white sm:text-4xl lg:text-[2.35rem]">
            Cómo funciona
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-white/5 via-white/12 to-white/5 lg:block"
            aria-hidden
          />

          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 lg:gap-0">
            {/* Tall track so sticky lasts for the full timeline (not just one viewport). */}
            <div className="relative flex min-h-0 justify-center self-stretch lg:min-h-[calc(var(--how-it-works-steps)_*_100dvh)] lg:block">
              <div
                className="flex w-full max-w-md flex-col items-center justify-center lg:sticky lg:top-0 lg:h-[100dvh] lg:min-h-[100dvh] lg:w-full lg:max-w-none lg:py-6"
                aria-live="polite"
                aria-label={`Paso ${step.id}: ${step.title}`}
              >
                <div className="relative aspect-square w-full max-w-[min(100%,440px)] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#000000] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:max-w-[min(100%,480px)] sm:rounded-[2rem] lg:aspect-auto lg:max-w-[min(100%,520px)] lg:min-h-[min(70dvh,580px)]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.14]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.025) 10px, rgba(255,255,255,0.025) 11px), repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.025) 10px, rgba(255,255,255,0.025) 11px)",
                    }}
                    aria-hidden
                  />

                  <div className="relative flex min-h-[300px] flex-col items-center justify-center p-6 sm:min-h-[340px] sm:p-8 lg:min-h-[min(72dvh,560px)]">
                    <div className="relative flex w-full max-w-[min(100%,460px)] items-center justify-center sm:max-w-[min(100%,500px)]">
                      {showTagOrbit ? (
                        <div className="pointer-events-none absolute z-20 aspect-square w-[148%] max-w-[min(118vw,520px)] sm:w-[75%]">
                          {howItWorksTagsList.map((tag, i) => {
                            const n = howItWorksTagsList.length;
                            const isImpact = step.variant === "impact";
                            return (
                              <motion.span
                                key={tag}
                                className="absolute whitespace-nowrap rounded-full border border-teal-500/40 bg-black/80 px-2.5 py-1 text-[10px] font-medium text-teal-300/95 shadow-md backdrop-blur-sm sm:text-[11px]"
                                initial={false}
                                animate={
                                  isImpact
                                    ? {
                                        left: "50%",
                                        top: "50%",
                                        x: "-50%",
                                        y: "-50%",
                                        opacity: 0,
                                        scale: 0.4,
                                      }
                                    : tagOrbitMotion(i, n)
                                }
                                transition={
                                  isImpact
                                    ? {
                                        delay:
                                          i * HOW_IT_WORKS_TAG_ABSORB_STAGGER_S,
                                        duration:
                                          HOW_IT_WORKS_TAG_ABSORB_MOVE_S,
                                        ease: [0.45, 0, 0.2, 1] as const,
                                      }
                                    : {
                                        duration: 0.38,
                                        ease: [0.22, 1, 0.36, 1] as const,
                                      }
                                }
                              >
                                {tag}
                              </motion.span>
                            );
                          })}
                        </div>
                      ) : null}

                      <div className="relative flex size-[min(88vw,380px)] items-center justify-center sm:size-[min(82vmin,420px)] lg:size-[min(78vmin,440px)]">
                        <motion.div
                          className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center"
                          initial={false}
                          animate={{
                            opacity: step.variant === "impact" ? 1 : 0,
                            scale: step.variant === "impact" ? 1 : 0.92,
                          }}
                          transition={{
                            opacity:
                              step.variant === "impact"
                                ? {
                                    delay: impactRingIntroDelayS,
                                    duration: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                  }
                                : {
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                            scale:
                              step.variant === "impact"
                                ? {
                                    delay: impactRingIntroDelayS,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                  }
                                : {
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                          }}
                        >
                          {step.variant === "impact" ? (
                            <ImpactHaloRing
                              score={step.score}
                              introAnimationDelay={impactRingIntroDelayS}
                            />
                          ) : null}
                        </motion.div>

                        <motion.div
                          className="relative z-10 flex origin-center items-center justify-center will-change-transform"
                          initial={false}
                          animate={{
                            opacity: 1,
                            scale:
                              step.variant === "tags"
                                ? 1.78
                                : step.variant === "impact"
                                ? playedTagsStep
                                  ? 1.58
                                  : 1.14
                                : 1,
                          }}
                          transition={{
                            scale:
                              step.variant === "impact"
                                ? {
                                    type: "tween",
                                    delay: marblePhaseDelayS,
                                    duration: HOW_IT_WORKS_MARBLE_TO_LIGHT_S,
                                    ease: [0.45, 0, 0.2, 1],
                                  }
                                : {
                                    type: "tween",
                                    duration: 0.48,
                                    ease: [0.45, 0, 0.55, 1],
                                  },
                          }}
                        >
                          <div className="relative scale-[2.75] min-[400px]:scale-[2.95] sm:scale-[3.2] lg:scale-[3.55]">
                            <motion.div
                              className="relative z-[2]"
                              initial={false}
                              animate={{
                                opacity: step.variant === "impact" ? 0 : 1,
                              }}
                              transition={{
                                opacity:
                                  step.variant === "impact"
                                    ? {
                                        delay: marblePhaseDelayS,
                                        duration:
                                          HOW_IT_WORKS_MARBLE_TO_LIGHT_S * 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                      }
                                    : {
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                              }}
                            >
                              <MarbleConnector
                                className="relative flex justify-center py-2"
                                showConnectorLine={false}
                              />
                            </motion.div>
                            <motion.div
                              className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
                              initial={false}
                              animate={{
                                opacity: step.variant === "impact" ? 1 : 0,
                              }}
                              transition={{
                                opacity:
                                  step.variant === "impact"
                                    ? {
                                        delay:
                                          marblePhaseDelayS +
                                          HOW_IT_WORKS_MARBLE_TO_LIGHT_S * 0.28,
                                        duration:
                                          HOW_IT_WORKS_MARBLE_TO_LIGHT_S * 0.72,
                                        ease: [0.22, 1, 0.36, 1],
                                      }
                                    : { duration: 0.2 },
                              }}
                              aria-hidden
                            >
                              <div
                                className="absolute aspect-square w-[min(38%,6.75rem)] rounded-full sm:w-[min(36%,7.25rem)]"
                                style={{
                                  background:
                                    "radial-gradient(circle at 50% 45%, rgba(204,255,251,0.88) 0%, rgba(45,212,191,0.5) 32%, rgba(13,148,136,0.18) 55%, transparent 72%)",
                                  boxShadow:
                                    "0 0 8px 2px rgba(94,234,212,0.75), 0 0 24px 5px rgba(45,212,191,0.4), inset 0 0 12px rgba(255,255,255,0.28)",
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>

                        {step.variant === "impact" && impactLoaderVisible ? (
                          <div
                            className="pointer-events-none absolute inset-0 z-[12] flex items-center justify-center"
                            aria-hidden
                          >
                            <span
                              className="font-mono text-[clamp(2.25rem,9vmin,3.25rem)] font-semibold tabular-nums tracking-tight text-white/92"
                              style={{
                                textShadow:
                                  "0 0 36px rgba(45,212,191,0.45), 0 0 72px rgba(13,148,136,0.35)",
                              }}
                            >
                              {impactLoaderN}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {step.variant === "commit" ? (
                        <motion.div
                          key="commit-overlay"
                          className="absolute left-1/2 top-[58%] z-20 w-[90%] max-w-md -translate-x-1/2 sm:top-[60%]"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{
                            duration: 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <div className="rounded-xl border border-white/12 bg-black/65 px-4 py-3 shadow-2xl backdrop-blur-md">
                            <p className="truncate text-sm font-medium text-white/90">
                              {step.commitLine}
                            </p>
                            <div className="mt-3 flex items-center justify-end gap-2 border-t border-white/[0.06] pt-2.5">
                              <span className="text-xs text-zinc-400">
                                By {step.author}
                              </span>
                              <span
                                className="inline-block size-8 shrink-0 rounded-full bg-gradient-to-br from-amber-200/90 via-teal-400 to-teal-800 ring-1 ring-white/15"
                                aria-hidden
                              />
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {howItWorksSteps.map((s, i) => (
                <div
                  key={s.id}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative flex min-h-[100dvh] snap-center flex-col justify-center border-t border-white/[0.06] py-14 pl-1 sm:py-16 lg:border-t-0 lg:py-0 lg:pl-16 lg:pr-6 xl:pl-24"
                >
                  <div
                    className={cn(
                      "absolute left-0 top-1/2 z-10 hidden size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-black transition-[border-color,box-shadow] duration-500 lg:block",
                      active === i
                        ? "border-teal-400 shadow-[0_0_22px_rgba(45,212,191,0.55)]"
                        : "border-white/70 shadow-[0_0_0_4px_rgba(3,8,6,0.95)]"
                    )}
                    aria-hidden
                  />
                  <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-amber-200/90">
                    {s.id}
                  </p>
                  <h3 className="font-chakra mb-4 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-lg text-base leading-relaxed text-zinc-400">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ImpactScoreVideoItem = {
  id: "matriz" | "commits" | "evolucion" | "feedback";
  label: string;
  src: string;
};

const impactScoreVideos: readonly ImpactScoreVideoItem[] = [
  {
    id: "matriz",
    label: "Matriz de Desempeño",
    src: "/videos/matriz-de-desempeno.mp4",
  },
  {
    id: "commits",
    label: "Análisis de Commits",
    src: "/videos/analisis-de-commits.mp4",
  },
  {
    id: "evolucion",
    label: "Evolución Profesional",
    src: "/videos/evolucion-profesional.mp4",
  },
  {
    id: "feedback",
    label: "Feedback con IA",
    src: "/videos/feedback-con-ia.mp4",
  },
] as const;

function ImpactScoreVideoShowcase() {
  const [activeId, setActiveId] = useState<ImpactScoreVideoItem["id"]>(
    impactScoreVideos[0]?.id ?? "matriz"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const videoContainerFadeMask = useMemo((): CSSProperties => {
    const mask =
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)";
    return {
      WebkitMaskImage: mask,
      maskImage: mask,
    };
  }, []);

  useEffect(() => {
    for (const v of impactScoreVideos) {
      const el = videoRefs.current[v.id];
      el?.load();
    }
  }, []);

  async function pauseAll() {
    for (const v of impactScoreVideos) {
      const el = videoRefs.current[v.id];
      if (!el) continue;
      try {
        el.pause();
      } catch {
        // ignore
      }
    }
  }

  async function playActive() {
    const el = videoRefs.current[activeId];
    if (!el) return;
    await pauseAll();
    try {
      await el.play();
      setIsPlaying(true);
      setHasEnded(false);
    } catch {
      setIsPlaying(false);
    }
  }

  function switchVideo(nextId: ImpactScoreVideoItem["id"]) {
    setActiveId(nextId);
    setIsPlaying(false);
    setHasEnded(false);
    requestAnimationFrame(() => {
      for (const v of impactScoreVideos) {
        const el = videoRefs.current[v.id];
        if (!el) continue;
        el.pause();
        el.currentTime = 0;
      }
    });
  }

  const tabIconById = useMemo(() => {
    return {
      matriz: Grid2X2,
      commits: GitCommitHorizontal,
      evolucion: TrendingUp,
      feedback: MessagesSquare,
    } satisfies Record<
      ImpactScoreVideoItem["id"],
      React.ComponentType<{ className?: string }>
    >;
  }, []);

  return (
    <motion.section
      className="relative mb-32 snap-center overflow-visible rounded-3xl border border-white/10 bg-zinc-950/50 p-8 backdrop-blur-sm sm:p-10"
      {...fadeUp}
    >
      {/* Full-width sunrise glow that overflows onto the page */}
      <div
        className="pointer-events-none absolute  bottom-200 z-0 h-[300vh] w-[600%] "
        style={{
          transform: "translateX(-45%) translateY(30%)",
          background:
            "radial-gradient(60% 55% at 50% 100%, rgba(94,234,212,0.62) 0%, rgba(45,212,191,0.22) 34%, rgba(0,0,0,0) 72%), radial-gradient(90% 80% at 50% 100%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 62%)",
          filter: "blur(1px)",
          mixBlendMode: "screen",
        }}
        aria-hidden
      />

      {/* Brighter ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.75]"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 10%, rgba(94,234,212,0.18), transparent 62%), radial-gradient(70% 60% at 15% 55%, rgba(255,255,255,0.08), transparent 58%), radial-gradient(70% 70% at 85% 65%, rgba(45,212,191,0.12), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1]">
        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">
          Soluciones
        </p>
        <h2 className="font-chakra mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
          Software de última generación
        </h2>

        <div className="mx-auto mb-6 flex w-full max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {impactScoreVideos.map((v) => {
            const isActive = v.id === activeId;
            const Icon = tabIconById[v.id];
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => switchVideo(v.id)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-md border px-4 text-[12px] font-semibold tracking-wide",
                  "shadow-sm backdrop-blur-md transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 focus-visible:ring-offset-0",
                  isActive
                    ? "border-teal-300/35 bg-teal-400/20 text-white shadow-[0_0_0_1px_rgba(94,234,212,0.10)_inset]"
                    : "border-white/10 bg-black/35 text-white/75 hover:bg-white/5 hover:text-white/90"
                )}
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full border",
                    isActive
                      ? "border-white/15 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/80"
                  )}
                  aria-hidden
                >
                  <Icon className="size-3.5" />
                </span>
                {v.label}
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto w-full max-w-5xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_90px_-45px_rgba(94,234,212,0.35)]"
            style={videoContainerFadeMask}
          >
            <div className="relative aspect-[16/9] w-full">
              {impactScoreVideos.map((v) => {
                const isActive = v.id === activeId;
                return (
                  <video
                    key={v.id}
                    ref={(el) => {
                      videoRefs.current[v.id] = el;
                    }}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover",
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    )}
                    preload="auto"
                    playsInline
                    controls={false}
                    onEnded={() => {
                      setIsPlaying(false);
                      setHasEnded(true);
                    }}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => {
                      setIsPlaying(true);
                      setHasEnded(false);
                    }}
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                );
              })}

              {/* Overlay gradients */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                aria-hidden
              />

              {/* Custom play overlay */}
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={playActive}
                  className={cn(
                    "absolute inset-0 z-10 flex items-center justify-center",
                    "bg-black/10 transition-colors hover:bg-black/15",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
                  )}
                  aria-label={
                    hasEnded ? "Reproducir de nuevo" : "Reproducir video"
                  }
                >
                  <span
                    className={cn(
                      "group flex size-14 items-center justify-center rounded-xl",
                      "border border-white/12 bg-black/55 backdrop-blur-md",
                      "shadow-[0_18px_55px_-30px_rgba(0,0,0,0.95)]",
                      "transition-transform duration-200 group-hover:scale-[1.03]"
                    )}
                    aria-hidden
                  >
                    <Play
                      className="ml-0.5 size-6 text-white/90"
                      fill="currentColor"
                    />
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function EngineeringPage() {
  useEffect(() => {
    document.documentElement.classList.add("engineering-scroll-snap");
    return () => {
      document.documentElement.classList.remove("engineering-scroll-snap");
    };
  }, []);

  const brandItems = useMemo(
    () => [
      "Trivent",
      "Titleist",
      "Energizer",
      "ICON",
      "Coca‑Cola",
      "ESPN",
      "Swiss Medical",
      "GE Aerospace",
      "Toyota",
    ],
    []
  );

  return (
    <div className="flex w-full flex-1 flex-col pb-16">
      <EngineeringHero />

      <section className="mb-24 snap-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-chakra mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
            Impacto con nuestras soluciones
          </h3>

          <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-5 shadow-[0_30px_90px_-70px_rgba(94,234,212,0.45)] backdrop-blur-sm sm:px-8">
            <BrandsMarquee
              durationSeconds={70}
              edgeFadePct={16}
              items={brandItems.map((name) => (
                <span
                  key={name}
                  className="select-none whitespace-nowrap text-sm font-semibold tracking-wide text-white/60 sm:text-base"
                >
                  {name}
                </span>
              ))}
              itemGapClassName="gap-10 sm:gap-14"
              itemClassName="shrink-0 grayscale opacity-80 transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <motion.section
        className="max-w-6xl mx-auto mb-24 snap-center text-left"
        {...fadeUp}
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
          The Santex Way
        </p>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-chakra max-w-xl text-3xl font-semibold text-white sm:text-4xl">
            Enfoque de Impacto
          </h2>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent sm:ml-8 sm:block" />
        </div>

        <div className="relative flex flex-col">
          <motion.article className="group relative top-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/40 backdrop-blur-sm sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10">
            <div
              className="relative mb-6 aspect-[4/3] lg:mb-0"
              style={{
                transform: "perspective(5000px) rotateX(-20deg) rotateY(40deg)",
              }}
            >
              <div className="relative h-full w-full will-change-transform">
                {/* Image plane (clipped) */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <div
                    className="absolute -inset-40 bg-teal-500/25 blur-3xl"
                    aria-hidden
                  />
                  <img
                    src="/fast_delivery.avif"
                    alt="Delivery potenciado con IA"
                    className="relative h-full w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
                    aria-hidden
                  />
                </div>

                <FloatingBadge
                  className="absolute  text-center right-6 top-12 flex flex-col items-center justify-center"
                  still
                  style={{
                    height: "120px",
                    transform: "translateZ(58px) rotateY(10deg) rotateX(-6deg)",
                  }}
                >
                  <p className="text-lg">SOC 2</p>{" "}
                  <p className="!text-xs !text-gray-500">Compliant</p>
                </FloatingBadge>
                <FloatingBadge
                  className="absolute left-6 bottom-8"
                  still
                  style={{
                    transform: "translateZ(58px) rotateY(10deg) rotateX(-6deg)",
                  }}
                >
                  HIPAA Compliant
                </FloatingBadge>

                {/* Large glass panel (overflows image) */}
                <div
                  className="absolute -right-14 top-1/2 w-[52%] -translate-y-1/2 rounded-2xl border border-white/12 bg-white/7  py-9 text-white shadow-[0_50px_110px_-60px_rgba(0,0,0,0.82)] backdrop-blur-xl"
                  style={{
                    transform: "translateZ(70px) rotateY(12deg) rotateX(-8deg)",
                  }}
                >
                  <div className="flex justify-center items-center gap-3 text-[1.35rem] font-medium text-white/90">
                    <CheckCircle2
                      className="size-6 text-white/70"
                      aria-hidden
                    />
                    Verified
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 20% 25%, rgba(255,255,255,0.16), transparent 55%), radial-gradient(90% 90% at 80% 15%, rgba(45,212,191,0.14), transparent 60%)",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                <Sparkles className="size-4" aria-hidden />
                Delivery aumentado
              </p>
              <h3 className="font-chakra mb-4 text-2xl font-semibold text-white sm:text-3xl">
                Delivery más rápido y potenciado con IA
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Combina equipos de ingeniería con copilots, QA automatizado y
                analítica predictiva para reducir retrabajo y acelerar
                resultados.
              </p>
            </div>
          </motion.article>

          <MarbleConnector className="relative flex justify-center py-2" />

          <motion.article
            className="group relative bottom-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-xl shadow-black/40 backdrop-blur-sm sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:[direction:rtl]"
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div
              className="relative mb-6 aspect-[4/3] lg:mb-0"
              style={{
                transform:
                  "perspective(5000px) rotateX(-20deg) rotateY(-40deg)",
              }}
            >
              <div className="relative h-full w-full will-change-transform">
                {/* Image plane (clipped) */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <div
                    className="absolute -inset-40 bg-teal-500/25 blur-3xl"
                    aria-hidden
                  />
                  <img
                    src="/motion_picture.avif"
                    alt="Panel de métricas y ciudad en movimiento"
                    className="relative h-full w-full object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
                    aria-hidden
                  />
                </div>

                <FloatingBadge
                  className="absolute left-6 top-8"
                  still
                  style={{
                    transform:
                      "translateZ(58px) rotateY(-10deg) rotateX(-6deg)",
                  }}
                >
                  Score: 80
                </FloatingBadge>

                {/* Large glass panel (overflows image) */}
                <div
                  className="absolute -left-14 top-1/2 w-[56%] -translate-y-1/2 overflow-hidden rounded-2xl border border-white/12 bg-white/7 px-5 py-6 text-white shadow-[0_50px_110px_-60px_rgba(0,0,0,0.82)] backdrop-blur-xl"
                  style={{
                    transform:
                      "translateZ(70px) rotateY(-12deg) rotateX(-8deg)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Impact
                    </p>
                    <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white/80">
                      Score: 80
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                    <img
                      src="/graph.svg"
                      alt=""
                      className="h-24 w-full object-cover opacity-90"
                      aria-hidden
                    />
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 80% 25%, rgba(255,255,255,0.16), transparent 55%), radial-gradient(90% 90% at 20% 15%, rgba(45,212,191,0.14), transparent 60%)",
                    }}
                    aria-hidden
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center [direction:ltr]">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                <Target className="size-4" aria-hidden />
                Desarrollo orientado al impacto
              </p>
              <h3 className="font-chakra mb-4 text-2xl font-semibold text-white sm:text-3xl">
                Medimos el valor entregado, commit por commit
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Cada cambio de código se evalúa por su profundidad técnica e
                impacto en el negocio, para que tu proyecto avance con
                propósito.
              </p>
            </div>
          </motion.article>
        </div>
      </motion.section>

      <HowItWorksScrollySection />

      <motion.section
        className="relative mb-20 snap-center px-4 sm:px-0"
        {...fadeUp}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          aria-hidden
        />
        <motion.div
          className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-teal-900/70 via-teal-950/70 to-black/80 p-10 text-left shadow-[0_0_90px_-30px_rgba(45,212,191,0.45)] backdrop-blur-xl sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              background:
                "radial-gradient(120% 120% at 12% 18%, rgba(45,212,191,0.18), transparent 52%), radial-gradient(90% 90% at 88% 14%, rgba(255,255,255,0.10), transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative grid gap-10 md:grid-cols-[0.9fr,1.6fr] md:items-start md:gap-14">
            <div>
              <h3 className="font-chakra text-3xl font-semibold text-white sm:text-4xl">
                Qué obtienes
              </h3>
            </div>

            <div className="md:border-l md:border-white/10 md:pl-12">
              <ul className="divide-y divide-white/10 text-sm text-zinc-100/90 sm:text-base">
                {[
                  "Identificar a los héroes ocultos",
                  "Feedback objetivo y sin sesgos",
                  "Alertas tempranas sobre deuda técnica",
                  "Benchmarks de velocidad y calidad entre equipos",
                  "Claridad sobre el ROI, desde el esfuerzo hasta el impacto",
                ].map((line) => (
                  <li key={line} className="flex gap-4 py-4">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-teal-300/80"
                      aria-hidden
                    />
                    <span className="text-zinc-100/85">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <ImpactScoreVideoShowcase />
      <VideoUnderVideoSection />

      <motion.section className="relative z-[1] mb-24 snap-center" {...fadeUp}>
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
          Reseñas
        </p>
        <h2 className="font-chakra mb-10 text-center text-2xl font-semibold text-white sm:text-3xl">
          Lo que dicen nuestros clientes
        </h2>
        <ReviewsCarousel items={reviews} />
      </motion.section>

      <motion.section
        className="relative z-[1] mb-20 snap-center mt-[16rem] max-w-6xl mx-auto"
        {...fadeUp}
      >
        <h2 className="font-chakra mb-8 text-center text-2xl font-semibold text-white sm:text-3xl">
          Nuestros servicios de ingeniería
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition-colors hover:border-teal-500/35 hover:bg-teal-950/20"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-300">
                <Sparkles className="size-4" />
              </div>
              <h3 className="font-chakra mb-2 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-16 grid snap-center gap-10 rounded-3xl border border-white/10 bg-zinc-950/40 px-6 py-12 text-center sm:grid-cols-3 sm:px-10"
        {...fadeUp}
      >
        {[
          { n: "100+", l: "Proyectos entregados" },
          { n: "50+", l: "Especialistas" },
          { n: "10+", l: "Industrias" },
        ].map((stat) => (
          <div key={stat.l}>
            <p className="font-chakra text-4xl font-semibold text-white sm:text-5xl">
              {stat.n}
            </p>
            <p className="mt-2 text-sm text-zinc-400">{stat.l}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        id="contacto"
        className="snap-center scroll-mt-28 rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-900/70 via-[#0a1f1c] to-black p-8 sm:p-12 max-w-6xl mx-auto"
        {...fadeUp}
      >
        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/90">
          ¿Estás listo?
        </p>
        <h2 className="font-chakra mx-auto mb-10 max-w-3xl text-center text-2xl font-semibold leading-snug text-white sm:text-3xl">
          ¿Tienes un proyecto en mente? Hablemos de tus ideas
        </h2>
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Contáctanos
            </p>
            <p className="text-lg text-zinc-200">
              Cuéntanos qué necesitas y te respondemos en breve.
            </p>
          </div>
          <form
            className="grid gap-3 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none"
            />
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="rounded-full bg-white px-6 text-zinc-900 hover:bg-white/90"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </motion.section>

      <motion.a
        href="#contacto"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 transition-transform hover:scale-105"
        aria-label="Abrir contacto"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle className="size-6" />
      </motion.a>
    </div>
  );
}
