import type { ReactNode } from "react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ReviewItem = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  logo?: ReactNode;
};

type ReviewsCarouselProps = {
  items: readonly ReviewItem[];
  className?: string;
  /** When true, automatically advances every intervalMs. */
  autoplay?: boolean;
  intervalMs?: number;
};

const quoteClass =
  "text-balance text-lg leading-relaxed text-white/85 sm:text-xl";

function ReviewLogoBlock({ item }: { item: ReviewItem }) {
  return (
    <div className="mb-8 flex items-center justify-center">
      <div
        className={cn(
          "transition-[filter,opacity,transform] duration-300",
          "opacity-80",
          "filter brightness-[0.85] saturate-[0.9]",
          "group-hover:opacity-100 group-hover:brightness-[1.25] group-hover:saturate-[1.1]"
        )}
      >
        {item.logo ? (
          item.logo
        ) : (
          <div className="flex items-center gap-2 text-white/90">
            <span className="text-3xl font-semibold tracking-tight">rbi</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
              restaurant brands international
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewQuoteBlock({ item }: { item: ReviewItem }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <blockquote className={quoteClass}>“{item.quote}”</blockquote>
      <div className="mt-10">
        <p className="text-sm font-medium text-white/80 sm:text-base">
          {item.author}
        </p>
        {(item.role || item.company) && (
          <p className="mt-1 text-xs text-white/45 sm:text-sm">
            {[item.role, item.company].filter(Boolean).join(" @ ")}
          </p>
        )}
      </div>
    </div>
  );
}

export function ReviewsCarousel({
  items,
  className,
  autoplay = false,
  intervalMs = 6500,
}: ReviewsCarouselProps) {
  const safeItems = items ?? [];
  const [active, setActive] = useState(0);
  const activeItem = safeItems[active];
  const [bodyMinHeightPx, setBodyMinHeightPx] = useState(0);
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const measureLayerRef = useRef<HTMLDivElement>(null);

  const updateBodyMinHeight = useCallback(() => {
    const layer = measureLayerRef.current;
    if (!layer) return;
    const slides = layer.querySelectorAll<HTMLElement>("[data-measure-slide]");
    let max = 0;
    slides.forEach((el) => {
      max = Math.max(max, Math.ceil(el.getBoundingClientRect().height));
    });
    if (max > 0) {
      setBodyMinHeightPx((prev) => (prev === max ? prev : max));
    }
  }, []);

  useLayoutEffect(() => {
    updateBodyMinHeight();
    const card = cardRef.current;
    if (!card || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(() => {
      updateBodyMinHeight();
    });
    ro.observe(card);
    return () => ro.disconnect();
  }, [safeItems, updateBodyMinHeight]);

  function goTo(next: number) {
    if (safeItems.length === 0) return;
    const n = ((next % safeItems.length) + safeItems.length) % safeItems.length;
    setActive(n);
  }

  function goPrev() {
    goTo(active - 1);
  }

  function goNext() {
    goTo(active + 1);
  }

  useEffect(() => {
    if (!autoplay) return;
    if (safeItems.length <= 1) return;
    if (reduceMotion) return;
    const id = window.setInterval(() => goNext(), intervalMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, intervalMs, safeItems.length, reduceMotion, active]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, safeItems.length]);

  if (safeItems.length === 0 || !activeItem) return null;

  return (
    <section
      ref={containerRef}
      tabIndex={0}
      className={cn(
        "relative mx-auto w-full max-w-5xl outline-none",
        className
      )}
      aria-roledescription="carousel"
      aria-label="Reseñas"
    >
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071314] p-8 shadow-[0_0_110px_-55px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-12"
      >
        {/* Ambient glass + subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.65]"
          style={{
            background:
              "radial-gradient(110% 90% at 50% 10%, rgba(255,255,255,0.10), transparent 62%), radial-gradient(100% 90% at 50% 100%, rgba(45,212,191,0.10), transparent 62%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.25) 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />

        {/* Measure tallest slide (logo + quote + attribution) without affecting layout */}
        <div
          ref={measureLayerRef}
          className="pointer-events-none absolute left-8 right-8 top-8 z-0 opacity-0 sm:left-12 sm:right-12 sm:top-12"
          style={{ height: 0, overflow: "visible" }}
          aria-hidden
        >
          {safeItems.map((item) => (
            <div
              key={item.id}
              data-measure-slide
              className="absolute left-0 right-0 top-0"
            >
              <ReviewLogoBlock item={item} />
              <ReviewQuoteBlock item={item} />
            </div>
          ))}
        </div>

        <div
          className="relative z-[1]"
          style={
            bodyMinHeightPx > 0
              ? { minHeight: `${bodyMinHeightPx}px` }
              : undefined
          }
        >
          <ReviewLogoBlock item={activeItem} />

          <div className="mx-auto max-w-3xl text-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={quoteClass}
              >
                “{activeItem.quote}”
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10">
              <p className="text-sm font-medium text-white/80 sm:text-base">
                {activeItem.author}
              </p>
              {(activeItem.role || activeItem.company) && (
                <p className="mt-1 text-xs text-white/45 sm:text-sm">
                  {[activeItem.role, activeItem.company]
                    .filter(Boolean)
                    .join(" @ ")}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        {safeItems.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className={cn(
                "absolute left-4 top-1/2 z-10 -translate-y-1/2",
                "flex size-11 items-center justify-center rounded-full",
                "border border-white/10 bg-black/35 text-white/70 backdrop-blur-md",
                "transition-colors hover:bg-white/5 hover:text-white/90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              className={cn(
                "absolute right-4 top-1/2 z-10 -translate-y-1/2",
                "flex size-11 items-center justify-center rounded-full",
                "border border-white/10 bg-black/35 text-white/70 backdrop-blur-md",
                "transition-colors hover:bg-white/5 hover:text-white/90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
              )}
              aria-label="Siguiente"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>

            <div className="relative z-[1] mt-10 flex items-center justify-center gap-2">
              {safeItems.map((it, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-[transform,background-color,opacity]",
                      isActive
                        ? "bg-amber-300/80 opacity-100"
                        : "bg-white/20 opacity-70 hover:bg-white/30",
                      isActive ? "scale-100" : "scale-90"
                    )}
                    aria-label={`Ir a la reseña ${i + 1}`}
                    aria-current={isActive ? "true" : undefined}
                  />
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

