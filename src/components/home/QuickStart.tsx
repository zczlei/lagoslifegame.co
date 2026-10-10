import { OFFICIAL_GAME } from "@/lib/constants";

export function QuickStart() {
  return (
    <section className="border-y border-line bg-lagoon/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xl font-semibold text-sand md:text-2xl">
            Fastest route in
          </p>
          <p className="mt-2 text-ink-muted">
            Open{" "}
            <a
              href={OFFICIAL_GAME.primary}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app
            </a>{" "}
            in Chrome or Safari (not inside the social app), tap{" "}
            <em className="text-sand not-italic">Sign up free</em>, and let the
            site keep cookies — the game stores your session in one.
          </p>
        </div>
        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="shrink-0 self-start rounded-md bg-sand px-5 py-3 text-sm font-bold text-ashphalt transition-colors hover:bg-amber-hot md:self-center"
        >
          Open lagoslife.app →
        </a>
      </div>
    </section>
  );
}
