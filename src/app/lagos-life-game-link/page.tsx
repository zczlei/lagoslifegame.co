import type { Metadata } from "next";
import Link from "next/link";
import { LinkStatusPanel } from "@/components/link/LinkStatusPanel";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.link.title },
  description: TDK.link.description,
  alternates: { canonical: "/lagos-life-game-link/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.link.title,
    description: TDK.link.description,
    url: `${SITE.url}/lagos-life-game-link/`,
    images: [
      {
        url: "/og/link.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.link.title,
    description: TDK.link.description,
    images: ["/og/link.png"],
  },
  other: {
    "last-modified": SITE.lastUpdatedIso,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/lagos-life-game-link/#webpage`,
      url: `${SITE.url}/lagos-life-game-link/`,
      name: TDK.link.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      publisher: { "@id": `${SITE.url}/#publisher` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lagos Life Game Link",
          item: `${SITE.url}/lagos-life-game-link/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the official Lagos Life game link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "lagoslife.app is the link the game's own social posts and creator pages point to. The same game was earlier served from lagoslife.eliysites.com, the site-builder domain of its developer, Eliy.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a Lagos Life app download or APK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The game runs in the browser. There is no official APK, no App Store listing and no installer, so any site offering a Lagos Life download is not distributing an official build.",
          },
        },
        {
          "@type": "Question",
          name: "Why will the Lagos Life game link not load?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The usual causes are opening the link inside a social app's in-app browser, blocking the cookie that holds your sign-in, clearing site data, or the shared world straining bandwidth at peak hours. The most common complaint is lag rather than a queue.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a Lagos Life game link hack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no legitimate hack, cheat or naira generator. Because money, rent and elections run server-side, anything claiming to add balance to your account is a scam or a phishing page after your password.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an invite code or waitlist for Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sign-up takes a username and password, email is optional, and there is no waitlist or invite code.",
          },
        },
        {
          "@type": "Question",
          name: "How old do you have to be to open the Lagos Life link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game's terms put it at 18 or older, and say accounts believed to belong to younger players may be closed.",
          },
        },
      ],
    },
  ],
};

const realFake = [
  {
    claim: "Play free in the browser, sign up with a username and password (email optional)",
    ok: true,
    verdict: "Real",
  },
  {
    claim: "Instant access — no waitlist, no invite code",
    ok: true,
    verdict: "Real",
  },
  {
    claim: '"Download the Lagos Life app / APK"',
    ok: false,
    verdict: "Fake. There is no official APK, iOS app or installer of any kind",
  },
  {
    claim: "Pay to register, or pay to skip a queue",
    ok: false,
    verdict: "Fake. Signing up is free; the game sells in-game naira top-ups, not entry",
  },
  {
    claim: '"Lagos Life hack" or free naira generator',
    ok: false,
    verdict: "Fake — see the section below. This is a search people really make",
  },
  {
    claim: "An official Lagos Life Discord, subreddit or wiki",
    ok: false,
    verdict:
      "No official one we could find. The community is inside the game — real chat, families, squads",
  },
  {
    claim: 'A "Lagos Life" film, or a Lagos lifestyle/travel account',
    ok: false,
    verdict:
      "Genuine things, wrong subject. There is a Nollywood film called Lagos Life and unrelated Instagram accounts with the same name",
  },
] as const;

const fixes = [
  {
    title: "It stutters or lags — the game is not broken",
    body: (
      <>
        The single most reported problem is{" "}
        <strong className="font-semibold text-sand">lag, not a queue</strong>.
        This is a shared, real-time world where tens of thousands of players sit
        in the same rooms, so bandwidth strains at peak hours and the world
        judders. That is load on the world, not your Wi-Fi being useless. Reload
        once, or come back off-peak. If a genuine server-full screen appears, it
        is temporary and retrying is the only action.
      </>
    ),
  },
  {
    title: "The link opens dead from TikTok or Instagram",
    body: (
      <>
        In-app browsers sandbox or strip what the game needs. Copy the URL, open
        Chrome or Safari, paste it.{" "}
        <strong className="font-semibold text-sand">
          This one fix accounts for a large share of &quot;link not working&quot;
          complaints
        </strong>
        , because almost everyone arrives from a social feed.
      </>
    ),
  },
  {
    title: "Sign-up loops back on itself",
    body: (
      <>
        The game keeps you signed in with a cookie. If cookies are blocked for
        that domain, the login never completes and you bounce back to the start
        screen. Allow cookies for the game&apos;s domain (essential only is fine
        — it states it uses no ad trackers), or try a standard browser window
        rather than private mode.
      </>
    ),
  },
  {
    title: "You lost your character after clearing browsing data",
    body: (
      <>
        Because login is cookie-based, wiping site data wipes your session. Keep
        one browser profile for the game and never clear that site&apos;s data.
        If you registered with an email, your account is recoverable; if you did
        not, treat the character as tied to that device and browser.
      </>
    ),
  },
  {
    title: "It still won't open",
    body: (
      <>
        Check the early alias domain in the box above, and check whether you
        arrived on a copycat page (compare against the fake list). If both
        official addresses fail at the same time, the game is down and nothing
        on your side will help — watch{" "}
        <a
          href={OFFICIAL_GAME.gameX}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.gameHandle}
        </a>{" "}
        and{" "}
        <a
          href={OFFICIAL_GAME.creatorX}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.creatorHandle}
        </a>{" "}
        first; outage news lands there before fan sites.
      </>
    ),
  },
] as const;

const faqs = [
  {
    q: "What is the official Lagos Life game link?",
    a: (
      <>
        <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
          lagoslife.app
        </code>
        . The game was also served earlier from{" "}
        <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
          lagoslife.eliysites.com
        </code>
        , the developer&apos;s site-builder domain — same game, same developer.
      </>
    ),
  },
  {
    q: "Is there a Lagos Life app download or APK?",
    a: "No. Browser only. No APK, no App Store listing, no installer. Any site offering one is not distributing an official build.",
  },
  {
    q: "Why will the Lagos Life game link not load?",
    a: "Most often: you opened it inside a social app's in-app browser, cookies are blocked so sign-in loops, you cleared site data and killed the session, or the shared world is lagging at peak hours. Work through the numbered list above in order.",
  },
  {
    q: "Is there a Lagos Life game link hack?",
    a: "No legitimate one. The economy is server-side, so anything claiming otherwise is a phishing page or a scam.",
  },
  {
    q: "Do I need an invite code or waitlist?",
    a: "No. Username and password, email optional, instant access.",
  },
  {
    q: "How old do you have to be?",
    a: "18 or older per the game's terms, which also state that accounts believed to belong to younger players may be closed.",
  },
] as const;

export default function LagosLifeGameLinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main className="mx-auto max-w-3xl flex-1 px-5 pt-28 pb-20 md:px-8">
        <p className="text-sm text-ink-muted">
          <Link href="/" className="text-amber-hot hover:text-sand">
            Lagos Life Guide
          </Link>{" "}
          › Lagos Life game link · Unofficial, fan-run · Last checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Game Link: The Real One, and How to Fix It When It Won&apos;t
          Load
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          The Lagos Life game link people are looking for is{" "}
          <strong className="font-semibold text-sand">lagoslife.app</strong>. It
          runs in your browser — there is no download, no APK and no installer,
          which is exactly why so many searches for a &quot;link&quot; end up on
          a fake page.
        </p>

        <p className="mt-4 leading-relaxed text-ink-muted">
          Below is the link we verified, the fake ones to avoid, and the fixes
          for the three failures that actually stop people getting in: lag, a
          sign-in loop, and a link that opens dead from TikTok or Instagram.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-display text-xl font-semibold text-sand">
            Official game link
          </p>
          <p className="mt-2">
            <code className="rounded bg-ashphalt/60 px-2 py-1 text-amber-hot">
              {OFFICIAL_GAME.primary}
            </code>
          </p>
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-4 inline-flex rounded-md bg-amber px-5 py-3 text-sm font-bold text-ashphalt transition-colors hover:bg-amber-hot"
          >
            Open Lagos Life in a new tab →
          </a>
          <p className="mt-4 text-sm text-ink-muted">
            Older mirror you may still see shared:{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
              lagoslife.eliysites.com
            </code>{" "}
            — the site-builder domain the developer shipped from early. Same
            game. Prefer{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
              lagoslife.app
            </code>{" "}
            as the primary CTA.
          </p>
        </div>

        <div className="mt-10">
          <LinkStatusPanel />
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          How we verified this link
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Because copycat sites are already ranking for &quot;Lagos Life game
          link&quot;, here is the evidence rather than a bare URL:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            The game&apos;s developer is{" "}
            <strong className="font-semibold text-sand">
              {OFFICIAL_GAME.creator}
            </strong>
            , who ships under the name <strong className="font-semibold text-sand">Eliy</strong>{" "}
            (social handle{" "}
            <a
              href={OFFICIAL_GAME.creatorX}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              {OFFICIAL_GAME.creatorHandle}
            </a>
            ). Lagos Life&apos;s own social posts carry the line &quot;Play free:
            lagoslife.app&quot;.
          </li>
          <li>
            Live stats and terms sit on the same domain —{" "}
            <a
              href={`${OFFICIAL_GAME.primary}stats`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/stats
            </a>{" "}
            and{" "}
            <a
              href={`${OFFICIAL_GAME.primary}terms`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/terms
            </a>{" "}
            — which is what you would expect from the real operator, not a
            mirror.
          </li>
          <li>
            The landing page is the game itself: a live online counter, a visit
            counter, and <em>Sign up / Log in</em> buttons, with a cookie notice
            stating it uses one cookie to keep you signed in and another to
            count visits, &quot;no ad trackers, ever&quot;.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Real vs fake: check before you tap
        </h2>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">What a page claims</th>
                <th className="py-3 font-semibold">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {realFake.map((row) => (
                <tr key={row.claim} className="border-b border-line/70 align-top">
                  <td className="py-3.5 pr-4 text-ink-muted">{row.claim}</td>
                  <td
                    className={
                      row.ok
                        ? "py-3.5 font-semibold text-[#9ae6b4]"
                        : "py-3.5 font-semibold text-[#fecaca]"
                    }
                  >
                    {row.verdict}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Link not working? Work down this list
        </h2>
        <p className="mt-3 text-ink-muted">
          These are ordered by how often they are the actual cause.
        </p>

        <ol className="mt-8 space-y-8">
          {fixes.map((fix, i) => (
            <li key={fix.title}>
              <h3 className="font-display text-xl font-semibold text-sand">
                <span className="mr-2 text-amber">{i + 1}.</span>
                {fix.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{fix.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-xl border border-jollof/40 bg-jollof/10 p-5 md:p-6">
          <h2 className="font-display text-2xl font-bold text-sand">
            About &quot;Lagos Life game link hack&quot; — there isn&apos;t one
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Enough people search this that it appears as a related search. Money,
            rent, salaries and the governor election all run server-side, so a
            client-side cheat cannot change your balance. Anything promising a
            naira generator is either after your password, harvesting the account
            you just made, or selling you nothing. If a site asks for your Lagos
            Life credentials, close it. Play safety details:{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              is Lagos Life safe?
            </Link>
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Phone, tablet, desktop
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Browser-only means the game opens on anything with a modern browser,
          including phones — but it is a real-time multiplayer map, so expect the
          phone to run warm and the frame rate to move. If you want the account,
          password and 18+ rule handled properly before you commit a character to
          it:{" "}
          <Link href="/sign-in/" className="text-amber-hot hover:text-sand">
            Lagos Life sign-in and account fixes
          </Link>
          .
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What to do once you are in
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
              How to play Lagos Life
            </Link>{" "}
            — your first hour, in order.
          </li>
          <li>
            <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
              How to earn virtual naira
            </Link>{" "}
            — rent is charged every Saturday, so plan around that first.
          </li>
          <li>
            <Link href="/sea-plots/" className="text-amber-hot hover:text-sand">
              Sea Plots
            </Link>{" "}
            — the visible flex, and not a first-hour purchase.
          </li>
          <li>
            <Link href="/" className="text-amber-hot hover:text-sand">
              Lagos Life overview
            </Link>{" "}
            — what the game is, at a glance.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Frequently asked questions
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

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          This is an independent fan guide. We are not affiliated with, endorsed
          by or sponsored by Lagos Life, Eliy, or the developer. Links to the
          game point to the official site. Player counts and domain setup were
          checked on {SITE.lastUpdated} and change as the game grows — the online
          counter on the official page is always more current than this article.
        </p>
      </main>
    </>
  );
}
