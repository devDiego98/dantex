import type { TFunction } from "i18next";
import {
  Activity,
  ChefHat,
  Cog,
  CreditCard,
  Flag,
  FlaskConical,
  Globe2,
  HeartPulse,
  Radio,
  Zap,
} from "lucide-react";

export function getServiciosNavItems(t: TFunction) {
  return [
    {
      label: t("navMega.servicios.aiEngineering"),
      href: "/engineering",
      icon: Globe2,
    },
    {
      label: t("navMega.servicios.stxLab"),
      href: "/ai-consulting-services/dantex-lab",
      icon: FlaskConical,
    },
    {
      label: t("navMega.servicios.aiConsulting"),
      href: "/ai-consulting-services",
      icon: Cog,
    },
  ] as const;
}

export function getIndustriasNavItems(t: TFunction) {
  return [
    { label: t("navMega.industries.ag"), href: "/agtech", icon: Radio },
    { label: t("navMega.industries.energy"), href: "/energy", icon: Zap },
    {
      label: t("navMega.industries.finance"),
      href: "/finance",
      icon: CreditCard,
    },
    {
      label: t("navMega.industries.foodtech"),
      href: "/foodtech",
      icon: ChefHat,
    },
    { label: t("navMega.industries.govtech"), href: "/govtech", icon: Flag },
    {
      label: t("navMega.industries.health"),
      href: "/healthcare",
      icon: HeartPulse,
    },
    {
      label: t("navMega.industries.sports"),
      href: "/sports-entertainment",
      icon: Activity,
    },
  ] as const;
}
