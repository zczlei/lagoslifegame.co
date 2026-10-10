import Link from "next/link";
import { OFFICIAL_GAME } from "@/lib/constants";

const rows = [
  { label: "Genre", value: "Sims-style life simulation, set entirely in Lagos" },
  { label: "Where you play", value: "In the browser at lagoslife.app — no download, no installer" },
  { label: "Price", value: "Free to sign up (optional in-game naira top-ups exist)" },
  {
    label: "Multiplayer",
    value: "Yes. Shared real-time city — real players, not NPC lives",
  },
  {
    label: "Players",
    value:
      "Live counters on /stats move every 30s; peak concurrent has run in the tens of thousands since the Oct 2026 viral spike",
  },
  {
    label: "Sign-in method",
    value: "Cookie-based session, plus a separate visit-counter cookie",
  },
  {
    label: "Ads & trackers",
    value: 'Official privacy notice: "No ad trackers, ever"',
  },
  {
    label: "Age",
    value: "18+ (Terms of Use; under-age accounts may be closed)",
  },
] as const;

export function AtAGlance() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.16em] text-amber uppercase">
          Snapshot
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
          Lagos Life at a glance
        </h2>
        <p className="mt-3 text-ink-muted">
          Cross-checked against the official Terms,{" "}
          <a
            href={`${OFFICIAL_GAME.primary}stats`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            /stats
          </a>
          , and live-game player guides (9–10 October 2026). Prices and counters
          move — treat them as directional.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-sm md:text-base">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}
              >
                <th className="w-[38%] px-4 py-3.5 align-top font-semibold text-sand md:px-5">
                  {row.label}
                </th>
                <td className="px-4 py-3.5 text-ink-muted md:px-5">{row.value}</td>
              </tr>
            ))}
            <tr className="bg-white/[0.03]">
              <th className="px-4 py-3.5 align-top font-semibold text-sand md:px-5">
                Creator
              </th>
              <td className="px-4 py-3.5 text-ink-muted md:px-5">
                {OFFICIAL_GAME.creator} — credited on /stats as{" "}
                {OFFICIAL_GAME.creatorHandle}; game social{" "}
                {OFFICIAL_GAME.gameHandle}.{" "}
                <Link
                  href="/who-created-lagos-life/"
                  className="text-amber-hot hover:text-sand"
                >
                  Sources & disagreements →
                </Link>
              </td>
            </tr>
            <tr>
              <th className="px-4 py-3.5 align-top font-semibold text-sand md:px-5">
                In-game city features
              </th>
              <td className="px-4 py-3.5 text-ink-muted md:px-5">
                Gov events,{" "}
                <Link href="/sea-plots/" className="text-amber-hot hover:text-sand">
                  Sea Plots
                </Link>{" "}
                (₦50k / 7 in-game days), seven Lagos{" "}
                <Link href="/homes/" className="text-amber-hot hover:text-sand">
                  homes
                </Link>{" "}
                from Mushin ₦2,400/week upward, weekly rent every Saturday
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
