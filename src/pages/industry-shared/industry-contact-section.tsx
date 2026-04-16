import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const accentPanel: Record<
  "amber" | "slate" | "rose" | "violet",
  { panel: string; muted: string; list: string; focus: string }
> = {
  amber: {
    panel:
      "border-amber-500/25 bg-gradient-to-br from-amber-700/55 via-amber-950/65 to-black shadow-[0_0_90px_rgba(245,158,11,0.14)]",
    muted: "text-amber-50/90",
    list: "text-amber-50/95",
    focus:
      "focus-visible:border-amber-400/50 focus-visible:ring-2 focus-visible:ring-amber-500/30",
  },
  slate: {
    panel:
      "border-slate-400/25 bg-gradient-to-br from-slate-700/55 via-slate-950/65 to-black shadow-[0_0_90px_rgba(148,163,184,0.12)]",
    muted: "text-slate-100/90",
    list: "text-slate-100/95",
    focus:
      "focus-visible:border-slate-400/50 focus-visible:ring-2 focus-visible:ring-slate-400/30",
  },
  rose: {
    panel:
      "border-rose-500/25 bg-gradient-to-br from-rose-800/50 via-rose-950/65 to-black shadow-[0_0_90px_rgba(244,63,94,0.12)]",
    muted: "text-rose-50/90",
    list: "text-rose-50/95",
    focus:
      "focus-visible:border-rose-400/50 focus-visible:ring-2 focus-visible:ring-rose-500/30",
  },
  violet: {
    panel:
      "border-violet-500/25 bg-gradient-to-br from-violet-800/50 via-violet-950/65 to-black shadow-[0_0_90px_rgba(139,92,246,0.14)]",
    muted: "text-violet-50/90",
    list: "text-violet-50/95",
    focus:
      "focus-visible:border-violet-400/50 focus-visible:ring-2 focus-visible:ring-violet-500/30",
  },
};

export type IndustryContactAccent = keyof typeof accentPanel;

export function IndustryContactSection({
  accent,
}: {
  accent: IndustryContactAccent;
}) {
  const { t } = useTranslation();
  const a = accentPanel[accent];
  const pillars = useMemo(
    () => [
      t("industryContact.pillarConnect"),
      t("industryContact.pillarInnovation"),
      t("industryContact.pillarQuality"),
      t("industryContact.pillarSustainability"),
    ],
    [t]
  );

  return (
    <section id="contact" className={sectionPadding}>
      <motion.div
        className={cn(
          "mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border p-6 sm:p-10 lg:p-12",
          a.panel,
        )}
        {...fadeUp}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="text-white">
            <h2 className="font-chakra text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("industryContact.title")}
            </h2>
            <p className={cn("mt-4 text-sm leading-relaxed", a.muted)}>
              {t("industryContact.formLead")}
            </p>
            <p className={cn("mt-3 text-sm leading-relaxed", a.muted)}>
              {t("industryContact.formFollowUp")}
            </p>

            <ul
              className={cn(
                "mt-8 grid gap-2.5 text-sm sm:grid-cols-2",
                a.list,
              )}
            >
              {pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md sm:p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-zinc-200">
                {t("industryContact.firstName")}
                <Input
                  name="firstName"
                  autoComplete="given-name"
                  className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
                />
              </label>
              <label className="block text-xs font-medium text-zinc-200">
                {t("industryContact.lastName")}
                <Input
                  name="lastName"
                  autoComplete="family-name"
                  className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
                />
              </label>
            </div>
            <label className="block text-xs font-medium text-zinc-200">
              {t("industryContact.role")}
              <Input
                name="role"
                autoComplete="organization-title"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
            <label className="block text-xs font-medium text-zinc-200">
              {t("industryContact.email")}
              <Input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1.5 h-10 border-white/15 bg-black/50 text-zinc-100 placeholder:text-zinc-500"
              />
            </label>
            <label className="block text-xs font-medium text-zinc-200">
              {t("industryContact.projectMessage")}
              <textarea
                name="message"
                rows={4}
                className={cn(
                  "mt-1.5 w-full resize-y rounded-lg border border-white/15 bg-black/50 px-2.5 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500",
                  a.focus,
                )}
              />
            </label>
            <div className="flex justify-end pt-1">
              <Button
                type="submit"
                className="rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                {t("industryContact.submit")}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
