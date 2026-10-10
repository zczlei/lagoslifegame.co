import Link from "next/link";
import { OFFICIAL_GAME } from "@/lib/constants";

const faqs = [
  {
    q: "What is Lagos Life game?",
    a: "A free, browser-based life sim set in Lagos, Nigeria. You make a character, work, pay Saturday rent, and interact with other players who are online at the same time.",
  },
  {
    q: "Is Lagos Life free?",
    a: "Yes — signing up and playing in the browser is free. Optional in-game naira top-ups exist; you do not need them to play. The site advertises no ad trackers.",
  },
  {
    q: "Where do I get the Lagos Life game link?",
    a: "Only use https://lagoslife.app/ — that is the official primary domain cited in the game's own posts, Terms, and /stats. Anything asking you to install an APK or pay to register is a clone.",
  },
  {
    q: "Does Lagos Life have an app download?",
    a: 'There is no required download for browser play. Search interest around "lagos life app download" mostly reflects people looking for a mobile shortcut. Treat any random APK as fake until an official store listing is linked from lagoslife.app itself.',
  },
  {
    q: "Can I play Lagos Life on a phone?",
    a: "Yes, through a normal mobile browser. Avoid the built-in viewer inside TikTok or Instagram — that is the most common reason the game appears broken. You can add lagoslife.app to your home screen for an app-like icon.",
  },
  {
    q: "Is Lagos Life legit?",
    a: `Yes — it is a real browser game operated by ${OFFICIAL_GAME.creator} (named in the Terms of Use and credited on lagoslife.app/stats with ${OFFICIAL_GAME.creatorHandle}). Official game socials linked from the homepage include ${OFFICIAL_GAME.gameHandle} on X and @lagoslifeapp on Instagram. It is not affiliated with EA or The Sims.`,
  },
  {
    q: "Why is everyone online at once?",
    a: "The game went viral on short-form video in early October 2026. Live counters on /stats refresh every 30 seconds and move fast — a quieter hour is often an easier login than a peak spike.",
  },
] as const;

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.16em] text-amber uppercase">
          FAQ
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="font-display cursor-pointer list-none text-lg font-semibold text-sand marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span
                  aria-hidden
                  className="mt-1 text-amber transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-amber/30 bg-amber/10 px-6 py-7">
        <p className="font-display text-xl font-semibold text-sand">
          Want the fixes in order of what usually works?
        </p>
        <p className="mt-2 text-ink-muted">
          Start with{" "}
          <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
            the Lagos Life game link page
          </Link>
          , then{" "}
          <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
            how to play
          </Link>{" "}
          once you are in.
        </p>
      </div>
    </section>
  );
}
