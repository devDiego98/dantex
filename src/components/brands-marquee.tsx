import type { CSSProperties, ReactNode } from "react";

type BrandsMarqueeProps = {
  items: readonly ReactNode[];
  className?: string;
  /** Seconds for one full loop (bigger = slower). */
  durationSeconds?: number;
  /** Left/right fade size as a percentage of the container width. */
  edgeFadePct?: number;
  /** Space between items (tailwind classes). */
  itemGapClassName?: string;
  /** Item wrapper classes (tailwind classes). */
  itemClassName?: string;
};

export function BrandsMarquee({
  items,
  className,
  durationSeconds = 55,
  edgeFadePct = 14,
  itemGapClassName = "gap-10 sm:gap-12",
  itemClassName = "shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-95",
}: BrandsMarqueeProps) {
  const fade = Math.max(0, Math.min(45, edgeFadePct));
  const mask = `linear-gradient(to right, transparent 0%, black ${fade}%, black ${
    100 - fade
  }%, transparent 100%)`;

  return (
    <div
      className={["brands-marquee relative w-full overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        } as CSSProperties
      }
    >
      <style>{`
        @keyframes brands-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .brands-marquee:hover .brands-marquee__track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={[
          "brands-marquee__track flex w-max items-center",
          itemGapClassName,
        ].join(" ")}
        style={
          {
            animation: `brands-marquee-scroll ${durationSeconds}s linear infinite`,
            willChange: "transform",
          } as CSSProperties
        }
        aria-label="Marcas"
      >
        {[...items, ...items].map((node, idx) => (
          <div key={idx} className={itemClassName}>
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}

