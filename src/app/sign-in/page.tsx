import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.signIn.title },
  description: TDK.signIn.description,
  alternates: { canonical: "/sign-in/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.signIn.title,
    description: TDK.signIn.description,
    url: `${SITE.url}/sign-in/`,
    images: [
      {
        url: "/og/sign-in.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.signIn.title,
    description: TDK.signIn.description,
    images: ["/og/sign-in.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/sign-in/#webpage`,
      url: `${SITE.url}/sign-in/`,
      name: TDK.signIn.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sign in",
          item: `${SITE.url}/sign-in/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does Lagos Life sign-in keep looping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Login is cookie-based. If cookies are blocked for lagoslife.app, or you open the game inside TikTok/Instagram, the session never completes and the sign-up or log-in screen loops.",
          },
        },
        {
          "@type": "Question",
          name: "Can I recover a Lagos Life guest account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you signed up without an email, the session lives in that browser profile's cookies. Clearing site data or switching devices usually loses the character. Add an email while you still have access if the game offers it.",
          },
        },
        {
          "@type": "Question",
          name: "Why am I not getting a Lagos Life email code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check spam and promotions, confirm the address was typed correctly, wait a few minutes, and only request a new code from lagoslife.app itself — never from a third-party 'recovery' page.",
          },
        },
      ],
    },
  ],
};

const fixes = [
  {
    problem: "Sign-in or sign-up loops back to itself",
    cause:
      "The session cookie never sticks — blocked cookies, private/incognito mode, or an in-app browser.",
    fix: (
      <>
        Open{" "}
        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          lagoslife.app
        </a>{" "}
        in Chrome or Safari (not TikTok/Instagram). Allow cookies for that
        domain — essential-only is fine; the game states it uses no ad trackers.
        Avoid private windows for the account you want to keep.
      </>
    ),
  },
  {
    problem: "I lost my guest / no-email character",
    cause:
      "Without an email, recovery is tied to the browser profile that held the cookie.",
    fix: (
      <>
        That character is usually gone if you cleared site data, switched phones,
        or used someone else&apos;s browser. If you still have the session open:
        attach an email immediately and screenshot your username. For the next
        account, never skip email. Full safety notes:{" "}
        <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
          is Lagos Life safe?
        </Link>
      </>
    ),
  },
  {
    problem: "Email / verification code never arrives",
    cause:
      "Typo in the address, spam filtering, rate limits, or you requested the code on a fake page.",
    fix: (
      <>
        Confirm the address character-by-character, check spam/promotions, wait
        2–5 minutes, then retry only from the official game. Contact{" "}
        <a
          href={`mailto:${OFFICIAL_GAME.supportEmail}`}
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.supportEmail}
        </a>{" "}
        if the account is paid or you have a transaction reference — never send
        your password to a third party.
      </>
    ),
  },
  {
    problem: "Password forgotten, email attached",
    cause: "Normal forgotten-password flow on a cookie-session game.",
    fix: (
      <>
        Use Forgot password on{" "}
        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          lagoslife.app
        </a>{" "}
        only. If the reset mail does not arrive, treat it like a missing code
        above. Do not enter the password on any site that is not that domain.
      </>
    ),
  },
  {
    problem: "It worked on one phone, blank on another",
    cause: "Cookie sessions do not travel with you automatically.",
    fix: (
      <>
        Log in with username/email + password on the new device in a real browser,
        then Add to Home Screen again. Setup steps:{" "}
        <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
          how to play on phone
        </Link>
        .
      </>
    ),
  },
] as const;

const faqs = [
  {
    q: "Is Lagos Life sign-in free?",
    a: "Yes. Sign up and log in are free. Optional naira top-ups are separate and cannot be cashed out.",
  },
  {
    q: "Do I need an invite code?",
    a: "No. Username and password, email optional, no waitlist.",
  },
  {
    q: "Should I use the same password elsewhere?",
    a: "No. Use a unique password. The game is a public chat world — see the safety page before you reuse anything.",
  },
  {
    q: "Where is the official sign-in page?",
    a: (
      <>
        Only{" "}
        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          lagoslife.app
        </a>
        . Link verification:{" "}
        <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
          Lagos Life game link
        </Link>
        .
      </>
    ),
  },
] as const;

export default function SignInPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-3xl flex-1 px-5 pt-28 pb-20 md:px-8">
        <p className="text-sm text-ink-muted">
          <Link href="/" className="text-amber-hot hover:text-sand">
            Lagos Life Guide
          </Link>{" "}
          › Sign in · Unofficial, fan-run · Reviewed{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Sign In: Fix Loops, Guest Loss &amp; Email Codes
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Most &quot;I can&apos;t log in&quot; reports are not broken passwords —
          they are cookies, in-app browsers, or a guest account that never had an
          email. This page is the account-only checklist; for dead links and lag
          see{" "}
          <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
            the game link page
          </Link>
          .
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-semibold text-sand">Sign in here only</p>
          <p className="mt-2">
            <code className="rounded bg-ashphalt/60 px-2 py-1 text-amber-hot">
              {OFFICIAL_GAME.primary}
            </code>
          </p>
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-4 inline-flex rounded-md bg-amber px-5 py-3 text-sm font-bold text-ashphalt hover:bg-amber-hot"
          >
            Open Lagos Life →
          </a>
          <p className="mt-3 text-sm text-ink-muted">
            18+ per the Terms. Never type your password on a download, APK or
            &quot;naira generator&quot; page.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          How sign-in actually works
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            The landing page <em>is</em> the game: Sign up / Log in sit on{" "}
            <strong className="font-semibold text-sand">lagoslife.app</strong>.
          </li>
          <li>
            Sessions are{" "}
            <strong className="font-semibold text-sand">cookie-based</strong>{" "}
            (plus a separate visit-counter cookie). The privacy notice says no ad
            trackers.
          </li>
          <li>
            Email is optional at sign-up — optional for convenience,{" "}
            <strong className="font-semibold text-sand">
              mandatory if you want recovery
            </strong>
            .
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Fix each failure mode
        </h2>
        <div className="mt-6 space-y-8">
          {fixes.map((item, i) => (
            <div key={item.problem}>
              <h3 className="font-display text-xl font-semibold text-sand">
                <span className="mr-2 text-amber">{i + 1}.</span>
                {item.problem}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                <strong className="font-semibold text-sand">Likely cause:</strong>{" "}
                {item.cause}
              </p>
              <p className="mt-2 leading-relaxed text-ink-muted">{item.fix}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              If a site asks for your Lagos Life password to &quot;restore&quot;
              or &quot;verify&quot; the account, close it.
            </strong>{" "}
            Account recovery only happens on the official domain. Fake pages are
            covered on{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              the safety page
            </Link>
            .
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          FAQ
        </h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
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
              <p className="mt-3 leading-relaxed text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-amber/30 bg-amber/10 p-5">
          <p className="font-semibold text-sand">Related</p>
          <p className="mt-2 text-ink-muted">
            <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
              link &amp; load fixes
            </Link>{" "}
            ·{" "}
            <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
              phone setup
            </Link>{" "}
            ·{" "}
            <Link href="/who-created-lagos-life/" className="text-amber-hot hover:text-sand">
              who made the game
            </Link>
          </p>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Independent fan guide — not affiliated with Lagos Life or its
          developer. Account flows change with builds; re-check the official site
          if a step no longer matches.
        </p>
      </main>
    </>
  );
}
