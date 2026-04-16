import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, DoubleSide } from "three";
import type { MotionValue } from "framer-motion";
import type { Group } from "three";

import { cn } from "@/lib/utils";

type EngineeringOrb3DProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  /** Multiplier for shader line frequency. Lower = fewer lines. */
  lineScale?: number;
  className?: string;
};

const VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vPos;

  void main() {
    vPos = position;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform vec3 uTint;
  uniform vec3 uLineColor;
  uniform float uBaseAlpha;
  uniform float uFresnelStrength;
  uniform float uLineScale;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec3 vPos;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPosition);
    float ndv = clamp(abs(dot(N, V)), 0.0, 1.0);
    float fresnel = pow(1.0 - ndv, 3.0) * uFresnelStrength;

    vec3 p = normalize(vPos);
    float wobble =
      sin(p.x * 4.2) * 0.38 +
      sin(p.y * 3.6) * 0.32 +
      sin(p.z * 5.1) * 0.34;

    float u = atan(p.z, p.x) + wobble * 0.18;
    float v = asin(clamp(p.y, -1.0, 1.0)) + wobble * 0.12;

    float s = max(0.25, uLineScale);
    float lineA = abs(sin(u * (24.0 * s) + sin(v * (9.0 * s)) * 1.4));
    float lineB = abs(sin(v * (20.0 * s) + cos(u * (7.0 * s)) * 1.2));
    float lineC = abs(sin((length(p.xy) * (14.0 * s) + wobble) * (18.0 * s)));
    float lineMask = smoothstep(0.86, 1.0, max(max(lineA, lineB), lineC));

    vec3 baseCol = uTint;
    vec3 lineCol = mix(uTint, uLineColor, lineMask);
    vec3 col = mix(baseCol, lineCol, lineMask * 0.92);

    float alpha =
      uBaseAlpha
      + fresnel * 0.55
      + lineMask * 0.42;

    alpha = clamp(alpha, 0.0, 0.88);
    gl_FragColor = vec4(col, alpha);
  }
`;

function GlassLineSphere({
  mouseX,
  mouseY,
  lineScale = 1,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  lineScale?: number;
}) {
  const groupRef = useRef<Group>(null);

  const uniforms = useMemo(
    () => ({
      uTint: { value: new Color("#0d9488") },
      uLineColor: { value: new Color("#e0fdfa") },
      uBaseAlpha: { value: 0.06 },
      uFresnelStrength: { value: 0.95 },
      uLineScale: { value: lineScale },
    }),
    [lineScale]
  );

  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;
    const x = mouseX.get();
    const y = mouseY.get();
    const targetY = x * 0.55;
    const targetX = -y * 0.42;
    g.rotation.y += (targetY - g.rotation.y) * 0.07;
    g.rotation.x += (targetX - g.rotation.x) * 0.07;
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.02}>
        <sphereGeometry args={[1, 96, 96]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={VERT}
          fragmentShader={FRAG}
          transparent
          depthWrite={false}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

function OrbScene({
  mouseX,
  mouseY,
  lineScale,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  lineScale?: number;
}) {
  return <GlassLineSphere mouseX={mouseX} mouseY={mouseY} lineScale={lineScale} />;
}

const orbGrain = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>`
);

export function EngineeringOrb3D({
  mouseX,
  mouseY,
  lineScale,
  className,
}: EngineeringOrb3DProps) {
  return (
    <div
      className={cn(
        "relative isolate w-full max-w-[min(92vw,30rem)] overflow-visible sm:max-w-[26rem] lg:max-w-[30rem]",
        className
      )}
    >
      <div className="aspect-square w-full p-[min(6vw,1.5rem)] sm:p-8">
        <div className="relative h-full min-h-0 w-full overflow-visible">
          <div
            className="pointer-events-none absolute inset-0 z-[1] rounded-full opacity-[0.12] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,${orbGrain}")`,
            }}
            aria-hidden
          />
          <Canvas
            className="h-full w-full"
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 3.45], fov: 38 }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
          >
            <OrbScene mouseX={mouseX} mouseY={mouseY} lineScale={lineScale} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
