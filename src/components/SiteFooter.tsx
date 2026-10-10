import Link from "next/link";
import { GUIDES, SITE } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ashphalt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-sand">{SITE.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
            Unofficial, fan-made guide. Not affiliated with, endorsed by, or
            connected to Lagos Life or its creator. We only link to the official
            game and write our own text.
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            Errors?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-amber-hot underline decoration-amber/40 underline-offset-3 hover:text-sand"
            >
              Tell us
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="text-ink-muted transition-colors hover:text-sand"
            >
              {guide.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink-muted md:px-8">
          © 2026 {SITE.url.replace("https://", "")} · Last updated{" "}
          {SITE.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
