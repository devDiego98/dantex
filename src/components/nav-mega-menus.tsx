import type { ReactNode } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  AudioLines,
  BookOpen,
  Code2,
  ExternalLink,
  Leaf,
  Sparkles,
  User,
} from "lucide-react";

import {
  getIndustriasNavItems,
  getServiciosNavItems,
} from "@/components/nav-mega-menu-items";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const panel =
  "flex w-[min(100vw-2rem,44rem)] max-w-[44rem] overflow-hidden rounded-xl border border-white/10 bg-zinc-950 text-left text-white shadow-2xl shadow-black/50";

const colLeft =
  "flex flex-1 flex-col border-r border-white/10 bg-black p-6 sm:p-7";
const colRight = "flex flex-1 flex-col bg-zinc-900/95 p-6 sm:p-7";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </p>
  );
}

const disabledRowClass =
  "cursor-not-allowed opacity-45 pointer-events-none select-none";

function MegaRowLink({
  href = "#",
  icon: Icon,
  children,
  external,
  className,
  disabled,
}: {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const rowClass = cn(
    "group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10",
    disabled && disabledRowClass,
    className
  );

  if (disabled) {
    return (
      <span className={rowClass} aria-disabled="true">
        <Icon className="size-5 shrink-0 text-white/90" aria-hidden />
        <span className="flex-1">{children}</span>
        {external ? (
          <ExternalLink className="size-4 shrink-0 text-zinc-500" aria-hidden />
        ) : null}
      </span>
    );
  }

  const isInternalRoute = href.startsWith("/");
  return (
    <NavigationMenuLink
      href={isInternalRoute ? undefined : href}
      render={isInternalRoute ? <Link to={href} /> : undefined}
      closeOnClick
      className={rowClass}
    >
      <Icon className="size-5 shrink-0 text-white/90" aria-hidden />
      <span className="flex-1">{children}</span>
      {external ? (
        <ExternalLink
          className="size-4 shrink-0 text-zinc-500 group-hover/row:text-zinc-400"
          aria-hidden
        />
      ) : null}
    </NavigationMenuLink>
  );
}

function TextLink({
  href = "#",
  children,
  disabled,
}: {
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span
        className={cn(
          "block rounded-lg px-2 py-2.5 text-sm font-medium text-white",
          disabledRowClass
        )}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }
  return (
    <NavigationMenuLink
      href={href}
      className="block rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
    >
      {children}
    </NavigationMenuLink>
  );
}

export function MegaMenuServicios() {
  const { t } = useTranslation();
  const serviciosItems = useMemo(() => getServiciosNavItems(t), [t]);
  const solutionTags = useMemo(
    () => [
      t("navMega.solutionsTags.bim"),
      t("navMega.solutionsTags.data"),
      t("navMega.solutionsTags.devops"),
      t("navMega.solutionsTags.cyber"),
      t("navMega.solutionsTags.design"),
    ],
    [t]
  );

  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>{t("navMega.whatWeDo")}</SectionLabel>
        <ul className="space-y-0.5">
          {serviciosItems.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <NavigationMenuLink
                render={<Link to={href} />}
                closeOnClick
                className="group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
              >
                <Icon className="size-5 shrink-0 text-white/90" aria-hidden />
                <span className="flex-1">{label}</span>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>{t("navMega.solutions")}</SectionLabel>
        <ul className="space-y-0.5">
          {solutionTags.map((label) => (
            <li key={label}>
              <TextLink disabled>{label}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MegaMenuIndustrias() {
  const { t } = useTranslation();
  const industriasItems = useMemo(() => getIndustriasNavItems(t), [t]);

  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>{t("navMega.industriesLabel")}</SectionLabel>
        <ul className="space-y-0.5">
          {industriasItems.map(({ label, href, icon }) => (
            <li key={label}>
              <MegaRowLink href={href} icon={icon}>
                {label}
              </MegaRowLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>{t("navMega.featuredStory")}</SectionLabel>
        <div
          className={cn(
            "group flex w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40 p-0",
            disabledRowClass
          )}
          aria-disabled="true"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80"
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="p-4 text-sm leading-snug text-zinc-200">
            {t("navMega.featuredBlurb")}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MegaMenuInsights() {
  const { t } = useTranslation();
  const insightsStories = useMemo(
    () => [
      {
        title: t("navMega.insight1"),
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=160&q=80",
      },
      {
        title: t("navMega.insight2"),
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=160&q=80",
      },
    ],
    [t]
  );

  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>{t("navMega.insightsLabel")}</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <MegaRowLink href="#historias-impacto" icon={Sparkles} disabled>
              {t("navMega.impactStories")}
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#blog" icon={BookOpen} disabled>
              {t("navMega.blog")}
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#podcast" icon={AudioLines} disabled>
              {t("navMega.podcast")}
            </MegaRowLink>
          </li>
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>{t("navMega.latestStories")}</SectionLabel>
        <ul className="space-y-3">
          {insightsStories.map((story) => (
            <li key={story.title}>
              <div
                className={cn("flex gap-3 rounded-lg p-2", disabledRowClass)}
                aria-disabled="true"
              >
                <img
                  src={story.img}
                  alt=""
                  className="size-14 shrink-0 rounded-md object-cover"
                  loading="lazy"
                />
                <span className="text-sm font-medium leading-snug text-zinc-100">
                  {story.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MegaMenuComunidad() {
  const { t } = useTranslation();

  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>{t("navMega.communityLabel")}</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <MegaRowLink href="#trabaja" icon={User} disabled>
              {t("navMega.workAt")}
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#cultura" icon={Sparkles} disabled>
              {t("navMega.culture")}
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#sustentabilidad" icon={Leaf} external disabled>
              {t("navMega.sustainability")}
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#hackathon" icon={Code2} external disabled>
              {t("navMega.hackathon")}
            </MegaRowLink>
          </li>
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>{t("navMega.makingADifference")}</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <div
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-white",
                disabledRowClass
              )}
              aria-disabled="true"
            >
              <span className="flex-1">AI League for Good</span>
              <ExternalLink className="size-4 text-zinc-500" aria-hidden />
            </div>
          </li>
          <li>
            <div
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-white",
                disabledRowClass
              )}
              aria-disabled="true"
            >
              <span className="flex-1">Technology with Purpose</span>
              <ExternalLink className="size-4 text-zinc-500" aria-hidden />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
