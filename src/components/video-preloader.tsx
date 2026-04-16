import { ALL_SITE_VIDEO_URLS } from "@/lib/site-videos";

/**
 * Mounts once in the layout so every route warms the HTTP/media cache for all
 * site videos, not only the current page.
 */
export function VideoPreloader() {
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0"
      aria-hidden
    >
      {ALL_SITE_VIDEO_URLS.map((src) => (
        <video key={src} preload="auto" muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
