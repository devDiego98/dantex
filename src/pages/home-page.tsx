import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-1 flex-col items-center pt-28 text-center sm:pt-32">
      <h1 className="font-chakra mb-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        {t("home.heroTitle")}
      </h1>
      <p className="mb-12 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg">
        {t("home.heroSubtitle")}
      </p>

      <div className="mb-20 w-full max-w-2xl">
        <div className="flex items-center gap-2 rounded-xl border border-teal-500/35 bg-black/45 px-3 py-2 shadow-inner shadow-black/40 backdrop-blur-sm sm:px-4">
          <Input
            type="search"
            placeholder={t("home.searchPlaceholder")}
            className="h-11 flex-1 border-0 !bg-transparent px-2 text-base text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0 md:text-sm bg-transparent"
          />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="shrink-0 rounded-lg text-teal-300 hover:bg-teal-500/15 hover:text-teal-200"
            aria-label={t("home.send")}
          >
            <Send className="size-5" />
          </Button>
        </div>
      </div>

      <div
        id="servicios"
        className="grid w-full max-w-5xl gap-4 sm:grid-cols-3 scroll-mt-28"
      >
        <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">{t("home.cardAboutTitle")}</CardTitle>
            <CardDescription className="text-zinc-400">
              {t("home.cardAboutDesc")}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">{t("home.cardLabTitle")}</CardTitle>
            <CardDescription className="text-zinc-400">
              {t("home.cardLabDesc")}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">{t("home.cardCallTitle")}</CardTitle>
            <CardDescription className="text-zinc-400">
              {t("home.cardCallDesc")}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div id="industrias" className="h-0 scroll-mt-28" aria-hidden />
      <div id="insights" className="h-0 scroll-mt-28" aria-hidden />
      <div id="comunidad" className="h-0 scroll-mt-28" aria-hidden />
    </main>
  );
}
