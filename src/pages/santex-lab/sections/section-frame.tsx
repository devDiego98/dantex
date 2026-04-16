import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionFrameProps = {
  children: ReactNode;
  id?: string;
  /** Full-bleed background (viewport width). */
  className?: string;
  /** Inner column: at least 90% of viewport width, centered. */
  innerClassName?: string;
};

/**
 * Breaks out of the site layout max-width so section content can use ≥90vw.
 */
export function SantexLabSectionFrame({
  children,
  id,
  className,
  innerClassName,
}: SectionFrameProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative w-screen max-w-[100vw] ml-[calc(50%-50vw)]",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-[min(100%,90vw)] max-w-[1680px] px-4 sm:px-6 lg:px-8",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
