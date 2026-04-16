import { BrandsMarquee } from "@/components/brands-marquee";

const logos = [
  "AWS",
  "Google Cloud",
  "Microsoft Azure",
  "Databricks",
  "Snowflake",
  "Kubernetes",
] as const;

function LogoWordmark({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap font-chakra text-lg font-semibold tracking-wide text-zinc-500">
      {children}
    </span>
  );
}

export function AiLogoCloudSection() {
  return (
    <section className="py-10 sm:py-12">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Tecnología y alianzas
      </p>
      <BrandsMarquee
        durationSeconds={45}
        itemGapClassName="gap-14 sm:gap-20"
        itemClassName="shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-90"
        items={logos.map((name) => (
          <LogoWordmark key={name}>{name}</LogoWordmark>
        ))}
      />
    </section>
  );
}
