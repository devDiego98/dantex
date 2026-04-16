import { DantexLabSectionFrame } from "./dection-frame";

const partners = [
  "NVIDIA",
  "AWS Partner Network",
  "Microsoft Azure",
  "Google Cloud",
  "Databricks",
];

export function DantexLabPartnersSection() {
  return (
    <DantexLabSectionFrame className="border-t border-white/5 bg-[#010807] py-10">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
        Aliados tecnológicos
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {partners.map((name) => (
          <li key={name}>
            <span className="text-sm font-semibold tracking-wide text-zinc-500 grayscale transition-colors hover:text-zinc-400 sm:text-base">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </DantexLabSectionFrame>
  );
}
