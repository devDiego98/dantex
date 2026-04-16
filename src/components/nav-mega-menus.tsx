import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AudioLines,
  BookOpen,
  ChefHat,
  Code2,
  CreditCard,
  Cog,
  ExternalLink,
  Flag,
  FlaskConical,
  Globe2,
  HeartPulse,
  Leaf,
  Radio,
  Sparkles,
  User,
  Zap,
} from "lucide-react";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const panel =
  "flex w-[min(100vw-2rem,44rem)] max-w-[44rem] overflow-hidden rounded-xl border border-white/10 bg-zinc-950 text-left text-white shadow-2xl shadow-black/50";

const colLeft = "flex flex-1 flex-col border-r border-white/10 bg-black p-6 sm:p-7";
const colRight = "flex flex-1 flex-col bg-zinc-900/95 p-6 sm:p-7";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {children}
    </p>
  );
}

function MegaRowLink({
  href = "#",
  icon: Icon,
  children,
  external,
  className,
}: {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <NavigationMenuLink
      href={href}
      className={cn(
        "group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10",
        className
      )}
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
}: {
  href?: string;
  children: React.ReactNode;
}) {
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
  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>Lo que hacemos</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <NavigationMenuLink
              render={<Link to="/engineering" />}
              closeOnClick
              className="group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
            >
              <Globe2 className="size-5 shrink-0 text-white/90" aria-hidden />
              <span className="flex-1">Ingeniería Optimizada con IA</span>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink
              render={<Link to="/ai-consulting-services/santex-lab" />}
              closeOnClick
              className="group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
            >
              <FlaskConical className="size-5 shrink-0 text-white/90" aria-hidden />
              <span className="flex-1">STX Lab</span>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink
              render={<Link to="/ai-consulting-services" />}
              closeOnClick
              className="group/row flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
            >
              <Cog className="size-5 shrink-0 text-white/90" aria-hidden />
              <span className="flex-1">Consultoría en IA</span>
            </NavigationMenuLink>
          </li>
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>Soluciones</SectionLabel>
        <ul className="space-y-0.5">
          {["BIM", "Data", "DevOps", "Ciberseguridad", "Diseño de Producto"].map(
            (label) => (
              <li key={label}>
                <TextLink href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}>
                  {label}
                </TextLink>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

const industriasItems: { label: string; href: string; icon: typeof Radio }[] =
  [
    { label: "Agricultura", href: "#agricultura", icon: Radio },
    { label: "Energia", href: "#energia", icon: Zap },
    { label: "Finanzas", href: "#finanzas", icon: CreditCard },
    { label: "Foodtech", href: "#foodtech", icon: ChefHat },
    { label: "Govtech", href: "#govtech", icon: Flag },
    { label: "Salud", href: "#salud", icon: HeartPulse },
    {
      label: "Deportes & Entretenimiento",
      href: "#deportes",
      icon: Activity,
    },
  ];

export function MegaMenuIndustrias() {
  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>Industrias</SectionLabel>
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
        <SectionLabel>Historias destacadas</SectionLabel>
        <NavigationMenuLink
          href="#historia-firehouse"
          className="group flex w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40 p-0 transition-colors hover:border-white/20 hover:bg-black/50 focus-visible:bg-black/50"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80"
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <p className="p-4 text-sm leading-snug text-zinc-200">
            Firehouse recurre a Santex para pagos más seguros, inteligentes y sin
            interrupciones
          </p>
        </NavigationMenuLink>
      </div>
    </div>
  );
}

const insightsStories = [
  {
    title: "ROI en IA: ¿Tu proyecto genera valor real?",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=160&q=80",
  },
  {
    title: "Cómo escalar equipos de producto con IA responsable",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=160&q=80",
  },
];

export function MegaMenuInsights() {
  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>Insights</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <MegaRowLink href="#historias-impacto" icon={Sparkles}>
              Historias de impacto
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#blog" icon={BookOpen}>
              Blog
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#podcast" icon={AudioLines}>
              Podcast
            </MegaRowLink>
          </li>
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>Últimas historias</SectionLabel>
        <ul className="space-y-3">
          {insightsStories.map((story) => (
            <li key={story.title}>
              <NavigationMenuLink
                href="#"
                className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10"
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
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MegaMenuComunidad() {
  return (
    <div className={panel}>
      <div className={colLeft}>
        <SectionLabel>Somos Santex</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <MegaRowLink href="#trabaja" icon={User}>
              Trabaja en Santex
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#cultura" icon={Sparkles}>
              Cultura
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#sustentabilidad" icon={Leaf} external>
              Sustentabilidad
            </MegaRowLink>
          </li>
          <li>
            <MegaRowLink href="#hackathon" icon={Code2} external>
              Hackathon
            </MegaRowLink>
          </li>
        </ul>
      </div>
      <div className={colRight}>
        <SectionLabel>Haciendo la diferencia</SectionLabel>
        <ul className="space-y-0.5">
          <li>
            <NavigationMenuLink
              href="#"
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
            >
              <span className="flex-1">AI League for Good</span>
              <ExternalLink className="size-4 text-zinc-500" aria-hidden />
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink
              href="#"
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
            >
              <span className="flex-1">Technology with Purpose</span>
              <ExternalLink className="size-4 text-zinc-500" aria-hidden />
            </NavigationMenuLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
