import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  /**
   * Use `className="group"` on the hover container to trigger animation.
   */
  lineClassName?: string;
};

export function SampleLinesSvg({
  className,
  lineClassName,
  ...props
}: Props) {
  const baseLineClassName =
    "fill-none stroke-zinc-500 opacity-80 " +
    "[stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2] " +
    "[stroke-dasharray:220] [stroke-dashoffset:220] " +
    "transition-[stroke,stroke-dashoffset,opacity] duration-[2200ms] ease-out " +
    "group-hover:opacity-100 group-hover:stroke-white group-hover:[stroke-dashoffset:0]";

  const finalLineClassName = lineClassName
    ? `${baseLineClassName} ${lineClassName}`
    : baseLineClassName;

  return (
    <svg
      viewBox="0 0 220 120"
      className={className}
      role="img"
      aria-label="Sample animated line SVG"
      {...props}
    >
      <path className={finalLineClassName} d="M12 22 H92" />
      <path className={finalLineClassName} d="M20 40 H150" />
      <path className={finalLineClassName} d="M28 58 H198" />
      <path className={finalLineClassName} d="M36 76 H142" />
      <path className={finalLineClassName} d="M44 94 H108" />
    </svg>
  );
}
