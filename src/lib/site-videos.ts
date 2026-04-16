/** Single source of truth for `/videos/*.mp4` used across the site. */
export const HERO_VIDEOS = {
  agtech: "/videos/agriculture.mp4",
  energy: "/videos/energy.mp4",
  finance: "/videos/finance.mp4",
  foodtech: "/videos/foodtech.mp4",
  govtech: "/videos/govtech.mp4",
  healthcare: "/videos/salud.mp4",
  sports: "/videos/sports.mp4",
} as const;

export const ENGINEERING_IMPACT_VIDEOS = {
  matriz: "/videos/matriz-de-desempeno.mp4",
  commits: "/videos/analisis-de-commits.mp4",
  evolucion: "/videos/evolucion-profesional.mp4",
  feedback: "/videos/feedback-con-ia.mp4",
} as const;

/** Every MP4 referenced on the site — used for global preload. */
export const ALL_SITE_VIDEO_URLS = [
  ...Object.values(HERO_VIDEOS),
  ...Object.values(ENGINEERING_IMPACT_VIDEOS),
] as const;
