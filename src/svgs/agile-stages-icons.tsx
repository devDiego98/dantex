import type { SVGProps } from "react";

type StageIconProps = SVGProps<SVGSVGElement> & {
  strokeClassName?: string;
};

const baseStroke =
  "fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]";

function strokeClassName(extra?: string) {
  return extra ? `${baseStroke} ${extra}` : baseStroke;
}

type DualPathProps = {
  d: string;
  className?: string;
};

function DualPath({ d, className }: DualPathProps) {
  return (
    <>
      <path className={strokeClassName(`stage-icon-base ${className ?? ""}`)} d={d} />
      <path className={strokeClassName(`stage-icon-anim ${className ?? ""}`)} d={d} />
    </>
  );
}

export function VisionIcon({ strokeClassName: extra, ...props }: StageIconProps) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Visión estratégica" {...props}>
      <DualPath d="M20 6C11.7 6 5 12.7 5 21s6.7 15 15 15 15-6.7 15-15S28.3 6 20 6Z" />
      <DualPath d="M20 12v10l7 4" />
      <DualPath d="M12 7l-4 4" />
      <DualPath d="M28 7l4 4" />
    </svg>
  );
}

export function ViabilityIcon({
  strokeClassName: extra,
  ...props
}: StageIconProps) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Análisis de viabilidad" {...props}>
      <DualPath d="M17 33H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
      <DualPath d="M12 14h8" />
      <DualPath d="M12 19h10" />
      <DualPath d="M12 24h6" />
      <DualPath d="M26.5 26.5l6.5 6.5" />
      <DualPath d="M28 28a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" />
    </svg>
  );
}

export function PrototypeIcon({
  strokeClassName: extra,
  ...props
}: StageIconProps) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Prototipo" {...props}>
      <DualPath d="M14 6h12" />
      <DualPath d="M16 6v4l-4 6a9 9 0 0 0 8 13h0a9 9 0 0 0 8-13l-4-6V6" />
      <DualPath d="M14 22h12" />
      <DualPath d="M16 26h8" />
    </svg>
  );
}

export function ValidationIcon({
  strokeClassName: extra,
  ...props
}: StageIconProps) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Validación" {...props}>
      <DualPath d="M12 7h16a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <DualPath d="M14 14h12" />
      <DualPath d="M14 19h10" />
      <DualPath d="M16 27l3 3 6-7" />
    </svg>
  );
}

export function ScaleIcon({ strokeClassName: extra, ...props }: StageIconProps) {
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Escala" {...props}>
      <DualPath d="M20 6l5 10h8l-7 7 3 11-9-6-9 6 3-11-7-7h8l5-10Z" />
      <DualPath d="M20 28v6" />
      <DualPath d="M14 34h12" />
    </svg>
  );
}

