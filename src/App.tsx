import { Globe, Send } from "lucide-react";

import { DotGridBackground } from "@/components/dot-grid-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Insights", href: "#insights" },
  { label: "Comunidad", href: "#comunidad" },
];

function SocialIcon({
  name,
  className,
}: {
  name: "linkedin" | "instagram" | "youtube" | "spotify";
  className?: string;
}) {
  const base = "size-5 shrink-0";
  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(base, className)}
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(base, className)}
        aria-hidden
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn(base, className)}
        aria-hidden
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(base, className)}
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <div
        className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,120,120,0.35),transparent)] bg-[#000a0a]"
        aria-hidden
      />
      <DotGridBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="mb-16 flex justify-center sm:mb-20">
          <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/35 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-md sm:px-6">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <span className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-sm font-semibold tracking-tight">
                S
              </span>
              <span className="text-lg font-semibold tracking-tight">
                santex
              </span>
            </a>

            <nav
              className="font-chakra flex flex-1 flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-medium text-white/80 lg:hidden"
              aria-label="Principal"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <NavigationMenu className="hidden max-w-none font-chakra lg:block">
              <NavigationMenuList className="flex flex-wrap items-center gap-0.5">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="font-chakra h-9 bg-transparent px-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white data-open:bg-white/10 data-open:text-white">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="font-chakra">
                      <ul className="min-w-[220px] p-2">
                        <li>
                          <NavigationMenuLink
                            href={item.href}
                            className="block w-full"
                          >
                            Ver {item.label.toLowerCase()}
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink href="#" className="block w-full">
                            Recursos relacionados
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Idioma"
              >
                <Globe className="size-5" />
              </Button>
              <Button className="rounded-full bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-white/90">
                Contáctanos
              </Button>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center text-center">
          <h1 className="font-chakra mb-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Integramos personas y tecnología.
          </h1>
          <p className="mb-12 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg">
            Creamos soluciones que generan impacto real en los negocios.
          </p>

          <div className="mb-20 w-full max-w-2xl">
            <div className="flex items-center gap-2 rounded-xl border border-teal-500/35 bg-black/45 px-3 py-2 shadow-inner shadow-black/40 backdrop-blur-sm sm:px-4">
              <Input
                type="search"
                placeholder="Cuéntale a SAM qué necesitas..."
                className="h-11 flex-1 border-0 bg-transparent px-2 text-base text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0 md:text-sm bg-transparent"
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="shrink-0 rounded-lg text-teal-300 hover:bg-teal-500/15 hover:text-teal-200"
                aria-label="Enviar"
              >
                <Send className="size-5" />
              </Button>
            </div>
          </div>

          <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-3">
            <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Sobre Santex</CardTitle>
                <CardDescription className="text-zinc-400">
                  Descubre cómo creamos valor desde hace 26 años.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Explora el Sxt Lab</CardTitle>
                <CardDescription className="text-zinc-400">
                  Conoce el espacio de experimentación con IA.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-zinc-950/60 text-left ring-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Agenda una llamada</CardTitle>
                <CardDescription className="text-zinc-400">
                  Ponte en contacto con nuestro equipo.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </main>

        <footer className="mt-auto flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-zinc-500 sm:flex-row">
          <p>Desarrollado por santexgroup © 2026</p>
          <div className="flex items-center gap-5 text-zinc-400">
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <SocialIcon name="linkedin" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="YouTube"
            >
              <SocialIcon name="youtube" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              aria-label="Spotify"
            >
              <SocialIcon name="spotify" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-zinc-300">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-zinc-300">
              Política de SGI
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
