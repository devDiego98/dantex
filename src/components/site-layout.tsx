import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { DotGridBackground } from "@/components/dot-grid-background";
import {
  getIndustriasNavItems,
  getServiciosNavItems,
} from "@/components/nav-mega-menu-items";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  MegaMenuComunidad,
  MegaMenuIndustrias,
  MegaMenuInsights,
  MegaMenuServicios,
} from "@/components/nav-mega-menus";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const NAV_SCROLL_THRESHOLD = 20;

export function SiteLayout() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const serviciosItems = useMemo(() => getServiciosNavItems(t), [t]);
  const industriasItems = useMemo(() => getIndustriasNavItems(t), [t]);
  const navItems = useMemo(
    () =>
      [
        {
          label: t("nav.services"),
          href: "/#servicios",
          disabled: false,
          accordion: "servicios" as const,
        },
        {
          label: t("nav.industries"),
          href: "/#industrias",
          disabled: false,
          accordion: "industrias" as const,
        },
        { label: t("nav.insights"), href: "/#insights", disabled: true },
        { label: t("nav.community"), href: "/#comunidad", disabled: true },
      ] as const,
    [t]
  );
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<
    null | "servicios" | "industrias"
  >(null);
  const { scrollY } = useScroll();

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const visible = latest < NAV_SCROLL_THRESHOLD;
    setNavVisible(visible);
    if (!visible) closeMobileMenu();
  });

  useEffect(() => {
    queueMicrotask(() => {
      const y = window.scrollY;
      setNavVisible(y < NAV_SCROLL_THRESHOLD);
      closeMobileMenu();
    });
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground">
      <ScrollToTop />
      <div
        className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,120,120,0.35),transparent)] bg-[#000a0a]"
        aria-hidden
      />
      <DotGridBackground />

      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 pb-2 sm:px-6",
          !navVisible && "pointer-events-none"
        )}
        initial={false}
        animate={{ y: navVisible ? 0 : "-130%" }}
        transition={{ type: "spring", stiffness: 420, damping: 40, mass: 0.8 }}
        aria-hidden={!navVisible}
      >
        <div className="flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-md sm:gap-4 sm:px-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 text-white"
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-sm font-semibold tracking-tight">
              D
            </span>
            <span className="text-lg font-semibold tracking-tight">dantex</span>
          </Link>

          <div className="flex-1 lg:hidden" aria-hidden />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 text-white/90 hover:bg-white/10 hover:text-white lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-site-nav"
            aria-label={t("layout.openMenu")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-6" aria-hidden />
          </Button>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <NavigationMenu
              className="max-w-none font-chakra"
              delay={100}
              closeDelay={200}
            >
              <NavigationMenuList className="flex flex-wrap items-center gap-0.5">
                <NavigationMenuItem value="servicios">
                  <NavigationMenuTrigger className="font-chakra h-9 bg-transparent px-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white data-open:bg-white/10 data-open:text-white">
                    {t("nav.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 font-chakra">
                    <MegaMenuServicios />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="industrias">
                  <NavigationMenuTrigger className="font-chakra h-9 bg-transparent px-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white data-open:bg-white/10 data-open:text-white">
                    {t("nav.industries")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 font-chakra">
                    <MegaMenuIndustrias />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="insights">
                  <NavigationMenuTrigger
                    disabled
                    className="font-chakra h-9 cursor-not-allowed bg-transparent px-3 text-sm font-medium text-white/35 hover:bg-transparent hover:text-white/35 data-open:bg-transparent data-open:text-white/35"
                  >
                    {t("nav.insights")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 font-chakra">
                    <MegaMenuInsights />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem value="comunidad">
                  <NavigationMenuTrigger
                    disabled
                    className="font-chakra h-9 cursor-not-allowed bg-transparent px-3 text-sm font-medium text-white/35 hover:bg-transparent hover:text-white/35 data-open:bg-transparent data-open:text-white/35"
                  >
                    {t("nav.community")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 font-chakra">
                    <MegaMenuComunidad />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
            <LanguageSwitcher />
            <Button className="rounded-full bg-white px-5 text-sm font-medium text-zinc-900 hover:bg-white/90">
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t("layout.navDialog")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
              aria-label={t("layout.closeMenu")}
              onClick={closeMobileMenu}
            />
            <motion.div
              id="mobile-site-nav"
              className="relative z-[1] flex max-h-[min(100dvh-1.5rem,44rem)] w-full max-w-lg flex-1 flex-col self-center overflow-hidden rounded-2xl border border-emerald-400/35 bg-[#050d0d] shadow-[0_0_0_1px_rgba(45,120,120,0.12),0_24px_80px_rgba(0,0,0,0.65)] sm:rounded-3xl"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4 sm:px-5">
                <Link
                  to="/"
                  className="flex items-center gap-2.5 text-white"
                  onClick={closeMobileMenu}
                >
                  <span className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-sm font-semibold tracking-tight">
                    D
                  </span>
                  <span className="text-lg font-semibold tracking-tight">
                    dantex
                  </span>
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-white/90 hover:bg-white/10 hover:text-white"
                  aria-label={t("layout.closeMenu")}
                  onClick={closeMobileMenu}
                >
                  <X className="size-6" aria-hidden />
                </Button>
              </div>

              <nav
                className="font-chakra min-h-0 flex-1 overflow-y-auto overscroll-contain px-1 py-2 sm:px-2"
                aria-label={t("layout.mainNav")}
              >
                <ul className="divide-y divide-white/[0.06]">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      {item.disabled ? (
                        <span
                          className="flex w-full items-center gap-3 px-4 py-4 text-[15px] font-medium tracking-wide text-white/35 sm:px-5"
                          aria-disabled="true"
                        >
                          <span className="flex-1">{item.label}</span>
                          <ChevronRight
                            className="size-5 shrink-0 text-white/20"
                            aria-hidden
                          />
                        </span>
                      ) : (
                        <div>
                          <button
                            type="button"
                            className="flex w-full items-center gap-3 px-4 py-4 text-left text-[15px] font-medium tracking-wide text-white transition-colors hover:bg-white/[0.04] active:bg-white/[0.06] sm:px-5"
                            aria-expanded={mobileAccordion === item.accordion}
                            aria-controls={`mobile-${item.accordion}-subnav`}
                            id={`mobile-${item.accordion}-trigger`}
                            onClick={() =>
                              setMobileAccordion((cur) =>
                                cur === item.accordion ? null : item.accordion
                              )
                            }
                          >
                            <span className="flex-1">{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "size-5 shrink-0 text-white/60 transition-transform duration-200",
                                mobileAccordion === item.accordion &&
                                  "rotate-180"
                              )}
                              aria-hidden
                            />
                          </button>
                          {mobileAccordion === item.accordion ? (
                            <ul
                              id={`mobile-${item.accordion}-subnav`}
                              className="border-t border-white/[0.06] bg-black/30 px-2 py-2 sm:px-3"
                              role="list"
                              aria-labelledby={`mobile-${item.accordion}-trigger`}
                            >
                              {(item.accordion === "servicios"
                                ? serviciosItems
                                : industriasItems
                              ).map(({ label, href, icon: Icon }) => (
                                <li key={href}>
                                  <Link
                                    to={href}
                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[14px] font-medium text-white/90 transition-colors hover:bg-white/[0.06] active:bg-white/[0.08] sm:px-4"
                                    onClick={closeMobileMenu}
                                  >
                                    <Icon
                                      className="size-5 shrink-0 text-white/70"
                                      aria-hidden
                                    />
                                    <span className="flex-1">{label}</span>
                                    <ChevronRight
                                      className="size-4 shrink-0 text-white/35"
                                      aria-hidden
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-4 sm:px-5">
                <Button
                  className="rounded-full bg-white px-5 text-sm font-medium text-teal-950 shadow-sm hover:bg-white/90"
                  onClick={closeMobileMenu}
                >
                  {t("nav.contact")}
                </Button>
                <LanguageSwitcher
                  variant="mobile"
                  className="w-full sm:w-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-screen flex-col  pb-10 pt-0 ">
        <Outlet />

        <footer className="mt-auto flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-zinc-500 sm:flex-row px-16">
          <p>
            Desarrollado por{" "}
            <a
              href="linkedin.com/in/devdiego1"
              className="text-gray-300 hover:text-gray-100"
            >
              Diego Perez
            </a>{" "}
            © 2026
          </p>
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
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-zinc-300">
              {t("footer.sgi")}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
