import type { ComponentType } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BimSvg from "@/svgs/bim";
import ChromeSvg from "@/svgs/chrome";
import CybersecuritySvg from "@/svgs/cybersecurity";
import DesignSvg from "@/svgs/design";
import DevopsSvg from "@/svgs/devops";

const ITEM_KEYS = [
  "dataScience",
  "devops",
  "bim",
  "cyber",
  "design",
] as const;

const ICONS: ComponentType<{ className?: string }>[] = [
  ChromeSvg,
  DevopsSvg,
  BimSvg,
  CybersecuritySvg,
  DesignSvg,
];

export function VideoUnderVideoSection() {
  const { t } = useTranslation();

  const items = useMemo(
    () =>
      ITEM_KEYS.map((key, i) => ({
        title: t(`videoUnderVideo.items.${key}.title`),
        description: t(`videoUnderVideo.items.${key}.desc`),
        Icon: ICONS[i]!,
      })),
    [t]
  );

  return (
    <section className="relative mb-24 mt-10 snap-center">
      <div className="mx-auto max-w-6xl">
        <h3 className="font-chakra mb-6 text-center text-2xl font-semibold text-white sm:text-3xl">
          {t("videoUnderVideo.sectionTitle")}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6",
                  "shadow-[0_25px_70px_-55px_rgba(94,234,212,0.45)]",
                  "transition-[border-color,background-color,transform] duration-300",
                  "hover:-translate-y-0.5 hover:border-teal-400/35 hover:bg-teal-950/15",
                ].join(" ")}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(110% 120% at 20% 20%, rgba(94,234,212,0.22), transparent 55%), radial-gradient(90% 90% at 90% 10%, rgba(255,255,255,0.10), transparent 60%)",
                  }}
                  aria-hidden
                />

                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div
                      className={[
                        "rounded-xl border border-white/10 bg-black/35 p-3",
                        "[--wvx9zi:rgb(113_113_122)] group-hover:[--wvx9zi:rgb(255_255_255)]",
                        "transition-[border-color,background-color] duration-8500",
                        "[&_svg]:h-10 [&_svg]:w-10 [&_svg]:opacity-60 group-hover:[&_svg]:opacity-95",
                        "[&_svg]:transition-[opacity] [&_svg]:duration-[6600ms]",
                        "[&_svg_path]:transition-[stroke,stroke-dashoffset,opacity] [&_svg_path]:duration-[6200ms] [&_svg_path]:ease-out",
                        "[&_svg_path]:[stroke-dasharray:200] [&_svg_path]:[stroke-dashoffset:200]",
                        "group-hover:[&_svg_path]:[stroke-dashoffset:0]",
                      ].join(" ")}
                      aria-hidden
                    >
                      <Icon />
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                      aria-label={t("videoUnderVideo.exploreAria", {
                        title: item.title,
                      })}
                    >
                      {t("videoUnderVideo.explore")}
                      <span
                        className="flex size-7 items-center justify-center rounded-md bg-white/5"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </button>
                  </div>

                  <h4 className="font-chakra mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
