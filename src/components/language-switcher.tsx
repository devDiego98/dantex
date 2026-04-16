import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LANGS = [
  { code: "es" as const, labelKey: "language.es" },
  { code: "en" as const, labelKey: "language.en" },
];

type Variant = "icon" | "mobile";

export function LanguageSwitcher({
  className,
  variant = "icon",
}: {
  className?: string;
  variant?: Variant;
}) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current =
    LANGS.find((l) => i18n.language.startsWith(l.code)) ?? LANGS[0]!;

  useEffect(() => {
    if (!open) return;
    function onDocMouseDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  function select(code: "es" | "en") {
    void i18n.changeLanguage(code);
    setOpen(false);
  }

  if (variant === "mobile") {
    return (
      <div className={cn("relative", className)} ref={rootRef}>
        <button
          type="button"
          className="font-chakra flex w-full items-center justify-between gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.08]"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={`${t("language.label")}: ${t(current.labelKey)}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex items-center gap-2">
            <Globe className="size-4 shrink-0 text-white/70" aria-hidden />
            {t(current.labelKey)}
          </span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-white/50 transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
        {open ? (
          <ul
            role="listbox"
            className="absolute bottom-full left-0 right-0 z-[2] mb-2 overflow-hidden rounded-xl border border-white/10 bg-[#050d0d] py-1 shadow-lg"
          >
            {LANGS.map((lang) => {
              const active = i18n.language.startsWith(lang.code);
              return (
                <li key={lang.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm text-white/90 hover:bg-white/[0.06]"
                    onClick={() => select(lang.code)}
                  >
                    {t(lang.labelKey)}
                    {active ? (
                      <Check className="size-4 shrink-0 text-teal-400" aria-hidden />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)} ref={rootRef}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-white/80 hover:bg-white/10 hover:text-white"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("language.label")}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="size-5" aria-hidden />
      </Button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-[120] mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-white/10 bg-[#050d0d] py-1 shadow-lg shadow-black/40"
        >
          {LANGS.map((lang) => {
            const active = i18n.language.startsWith(lang.code);
            return (
              <li key={lang.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm text-white/90 hover:bg-white/[0.06]"
                  onClick={() => select(lang.code)}
                >
                  {t(lang.labelKey)}
                  {active ? (
                    <Check className="size-4 shrink-0 text-teal-400" aria-hidden />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
