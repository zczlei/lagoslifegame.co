import Link from "next/link";
import { NAV, OFFICIAL_GAME, SITE } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-sand transition-colors hover:text-amber-hot md:text-xl"
        >
          {SITE.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm text-ink-muted lg:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="rounded-md bg-amber px-3.5 py-2 text-sm font-semibold text-ashphalt transition-colors hover:bg-amber-hot"
        >
          Play free
        </a>
      </div>
    </header>
  );
}
