import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const accentCard: Record<
  "amber" | "slate" | "rose" | "violet",
  { border: string; shadow: string; btn: string }
> = {
  amber: {
    border: "border-amber-500/20",
    shadow: "shadow-[0_0_80px_-20px_rgba(245,158,11,0.18)]",
    btn: "border-amber-400/35 hover:bg-amber-500/10",
  },
  slate: {
    border: "border-slate-400/20",
    shadow: "shadow-[0_0_80px_-20px_rgba(148,163,184,0.16)]",
    btn: "border-slate-400/35 hover:bg-slate-500/10",
  },
  rose: {
    border: "border-rose-500/20",
    shadow: "shadow-[0_0_80px_-20px_rgba(244,63,94,0.16)]",
    btn: "border-rose-400/35 hover:bg-rose-500/10",
  },
  violet: {
    border: "border-violet-500/20",
    shadow: "shadow-[0_0_80px_-20px_rgba(139,92,246,0.2)]",
    btn: "border-violet-400/35 hover:bg-violet-500/10",
  },
};

export type IndustryNvidiaAccent = keyof typeof accentCard;

export function IndustryNvidiaSection({
  accent,
  description,
}: {
  accent: IndustryNvidiaAccent;
  description: string;
}) {
  const { t } = useTranslation();
  const n = accentCard[accent];

  return (
    <section className={cn(sectionPadding, "pb-6")}>
      <motion.div
        className={cn(
          "mx-auto grid w-full max-w-5xl gap-10 overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-8 sm:grid-cols-[auto_1fr] sm:gap-14 sm:p-12",
          n.border,
          n.shadow,
        )}
        {...fadeUp}
      >
        <div className="flex items-center justify-center">
          <div
            className="flex h-28 w-full max-w-[220px] items-center justify-center rounded-xl border border-white/10 bg-black/40 px-6 py-4 sm:h-36"
            aria-label="NVIDIA"
          >
            <span className="font-chakra text-3xl font-bold tracking-tight text-[#76B900] sm:text-4xl">
              NVIDIA
            </span>
          </div>
        </div>

        <div className="text-left">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
            {t("industryNvidia.kicker")}
          </p>
          <h2 className="font-chakra text-2xl font-semibold text-white sm:text-3xl">
            {t("industryNvidia.title")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-zinc-400">
            {description}
          </p>
          <div className="mt-7">
            <a
              href="/ai-consulting-services#ai-powered-ecosystem"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full bg-black/30 text-sm font-medium text-white",
                n.btn,
              )}
            >
              {t("industryNvidia.cta")}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
