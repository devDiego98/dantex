import { useEffect, useRef } from "react";

type MarbleConnectorProps = {
  className?: string;
  /** Horizontal gradient line between cards; hide when the marble is a standalone focal point. */
  showConnectorLine?: boolean;
};

const grainSvg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)' opacity='0.9'/>
  </svg>`
);

function buildMarbleTexture(width: number, height: number): HTMLCanvasElement {
  const tex = document.createElement("canvas");
  tex.width = width * 3;
  tex.height = height;
  const tc = tex.getContext("2d")!;
  const imgData = tc.createImageData(tex.width, tex.height);
  const d = imgData.data;
  const W = tex.width;
  const H = tex.height;

  function smoothstep(a: number, b: number, t: number) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  function hash(n: number, seed: number): number {
    let h = n * 127 + seed * 311;
    h = (((h >> 16) ^ h) * 0x45d9f3b) | 0;
    h = (((h >> 16) ^ h) * 0x45d9f3b) | 0;
    return (((h >> 16) ^ h) | 0) / 2147483648;
  }

  function noise(x: number, y: number, seed: number): number {
    let v = 0,
      amp = 1,
      freq = 1,
      max = 0;
    for (let i = 0; i < 6; i++) {
      const px = x * freq + seed * 137.3;
      const py = y * freq + seed * 79.1;
      const ix = Math.floor(px),
        iy = Math.floor(py);
      const fx = px - ix,
        fy = py - iy;
      const u = fx * fx * (3 - 2 * fx),
        vv = fy * fy * (3 - 2 * fy);
      const a = hash(ix + iy * 57, seed);
      const b = hash(ix + 1 + iy * 57, seed);
      const c = hash(ix + (iy + 1) * 57, seed);
      const dd = hash(ix + 1 + (iy + 1) * 57, seed);
      v += (a + (b - a) * u + (c - a) * vv + (a - b - c + dd) * u * vv) * amp;
      max += amp;
      amp *= 0.5;
      freq *= 2.1;
    }
    return v / max;
  }

  // Horizontal tiling: pattern repeats every W px, so column 0 must match column W-1.
  // Use angle -> cos(ang) only inside noise(); sin flips sign across that boundary and would re-open the seam.
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const ny = py / H;
      const ang = ((px + 0.5) / W) * (Math.PI * 2);
      const cx = Math.cos(ang);
      const warp = noise(cx * 0.8 + ny * 0.35, ny * 1.2, 0) * 2.5;
      const warp2 = noise(cx * 1.4 + ny * 0.4, ny * 0.9 + 5, 1) * 1.2;
      const bands = Math.sin((ny * 3.5 + warp + warp2) * Math.PI);
      const fine = noise(cx * 3 + ny * 0.2, ny * 3, 2) * 0.3;
      const v = Math.pow(smoothstep(-1, 1, bands + fine), 1.4);

      const r = Math.round(v * 0 + (1 - v) * 2);
      const g = Math.round(v * 180 + (1 - v) * 28);
      const b2 = Math.round(v * 140 + (1 - v) * 22);

      const idx = (py * W + px) * 4;
      d[idx] = r;
      d[idx + 1] = g;
      d[idx + 2] = b2;
      d[idx + 3] = 255;
    }
  }

  tc.putImageData(imgData, 0, 0);
  return tex;
}

export function MarbleConnector({
  className,
  showConnectorLine = true,
}: MarbleConnectorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const texRef = useRef<HTMLCanvasElement | null>(null);
  const patternRef = useRef<CanvasPattern | null>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const SIZE = canvas.width;
    const ctx = canvas.getContext("2d")!;

    texRef.current = buildMarbleTexture(SIZE, SIZE);
    patternRef.current = ctx.createPattern(texRef.current, "repeat");

    function draw() {
      const tex = texRef.current!;
      const pattern = patternRef.current;
      if (!pattern) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      offsetRef.current = (offsetRef.current + 0.18) % tex.width;
      const x = offsetRef.current;

      // Reset any previous transforms, then shift the repeating pattern.
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.save();
      ctx.translate(-x, 0);
      ctx.fillStyle = pattern;
      // Fill extra width to fully cover the canvas after translation.
      ctx.fillRect(0, 0, SIZE + tex.width, SIZE);
      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={className}>
      {showConnectorLine ? (
        <div className="absolute top-1/2 h-px w-full max-w-md -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
      ) : null}

      <div className="relative z-10 size-14">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-xl"
          style={{
            background:
              "radial-gradient(circle at 50% 58%, rgba(20,180,140,0.5), transparent 65%)",
          }}
          aria-hidden
        />

        {/* Rim */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1.5px solid rgba(20,160,120,0.15)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 40px -6px rgba(20,180,140,0.55)",
          }}
          aria-hidden
        />

        {/* Rotating marble texture via canvas */}
        <div
          className="absolute inset-[4px] rounded-full overflow-hidden"
          aria-hidden
        >
          <canvas
            ref={canvasRef}
            width={192}
            height={192}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>

        {/* Fixed teal light — center-lower */}
        <div
          className="absolute inset-[4px] rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 72% 52% at 54% 58%, rgba(0,210,160,0.52), transparent 58%), radial-gradient(ellipse 50% 38% at 40% 50%, rgba(0,255,200,0.22), transparent 52%)",
          }}
          aria-hidden
        />

        {/* Depth / edge darkening */}
        <div
          className="absolute inset-[4px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 36%, rgba(0,0,0,0.88) 80%), radial-gradient(circle at 18% 16%, rgba(0,0,0,0.7), transparent 42%), radial-gradient(circle at 82% 12%, rgba(0,0,0,0.72), transparent 38%)",
          }}
          aria-hidden
        />

        {/* Subtle sheen */}
        <div
          className="absolute inset-[4px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 38% 26% at 43% 38%, rgba(180,255,235,0.08), transparent 55%)",
          }}
          aria-hidden
        />

        {/* Micro grain */}
        <div
          className="absolute inset-[4px] rounded-full opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,${grainSvg}")`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
