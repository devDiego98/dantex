import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const sectionPadding =
  "px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 border-t border-white/8";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stories = [
  {
    title: "Transformando la Gestión de Contenidos Financieros a Gran Escala",
    href: "https://dantexgroup.com/es/stories-of-impact/transforming-financial-content-management-at-scale",
  },
  {
    title: "F.A.S.T. – Inteligencia Fiscal con IA Generativa",
    href: "https://dantexgroup.com/es/stories-of-impact/f-a-s-t-fiscal-intelligence-with-generative-ai",
  },
  {
    title:
      "Wibond: La billetera virtual todo en uno para transacciones seguras y eficientes",
    href: "https://dantexgroup.com/es/stories-of-impact/wibond-the-all-in-one-virtual-wallet-for-secure-and-efficient-transactions",
  },
] as const;

export function FinanceStoriesSection() {
  return (
    <section className={sectionPadding}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <motion.header className="space-y-3" {...fadeUp}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
            From Potential to Impact
          </p>
          <h3 className="font-chakra text-2xl font-semibold tracking-tight sm:text-3xl">
            Explora cómo transformamos soluciones financieras
          </h3>
          <a
            href="https://dantexgroup.com/es/stories-of-impact"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-sky-200 hover:text-sky-100"
          >
            Descubre más historias{" "}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </motion.header>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.06 }}
        >
          {stories.map((s) => (
            <a key={s.href} href={s.href} className="group block">
              <Card className="h-full border-white/10 bg-zinc-950/55 ring-1 ring-white/5 backdrop-blur-sm transition-colors group-hover:border-white/20">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-5 sm:p-6">
                  <p className="font-chakra text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-white">
                    Descubre el impacto{" "}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
