import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

const ogDescription =
  "There is no official changelog. This is a dated, sourced record of what actually changed, plus how to check it yourself.";

export const metadata: Metadata = {
  title: { absolute: TDK.updates.title },
  description: TDK.updates.description,
  alternates: { canonical: "/updates/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.updates.title,
    description: ogDescription,
    url: `${SITE.url}/updates/`,
    images: [
      {
        url: "/og/updates.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.updates.title,
    description: TDK.updates.description,
    images: ["/og/updates.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

type Band = "primary" | "press" | "unverified";

const bandClass: Record<Band, string> = {
  primary:
    "inline-block rounded-full bg-palm/25 px-2 py-0.5 text-[0.7rem] font-bold tracking-wide text-palm uppercase",
  press:
    "inline-block rounded-full bg-sky-500/20 px-2 py-0.5 text-[0.7rem] font-bold tracking-wide text-sky-200 uppercase",
  unverified:
    "inline-block rounded-full bg-amber/20 px-2 py-0.5 text-[0.7rem] font-bold tracking-wide text-amber-hot uppercase",
};

const bandLabel: Record<Band, string> = {
  primary: "Primary",
  press: "Dated press",
  unverified: "Unverified",
};

const logRows: {
  date: string;
  what: ReactNode;
  band: Band;
  evidence: ReactNode;
  meaning: ReactNode;
}[] = [
  {
    date: "10 Oct 2026\n11:16 UTC",
    what: (
      <>
        <strong className="font-semibold text-sand">Whole-site deployment.</strong>{" "}
        The build identifier{" "}
        <code className="rounded bg-ashphalt/60 px-1.5 py-0.5 text-amber-hot">
          1791631002
        </code>{" "}
        appears in the page source of both the homepage and the stats page — one
        deploy, same code everywhere. It converts to 10 Oct 2026 11:16:42 UTC
        when read as a Unix timestamp.
      </>
    ),
    band: "primary",
    evidence: (
      <>
        view-source on{" "}
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
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          lagoslife.app
        </a>
        ; search for <code className="text-amber-hot">build</code>
      </>
    ),
    meaning: (
      <>
        A build can ship with{" "}
        <strong className="font-semibold text-sand">zero announcement</strong>.
        If your rent or a wage moved overnight, that is why. Check the number
        yourself before assuming a bug.
      </>
    ),
  },
  {
    date: "10 Oct 2026",
    what: (
      <>
        <strong className="font-semibold text-sand">
          Paid ad inventory is live on the stats page.
        </strong>{" "}
        Ten slots, each priced{" "}
        <strong className="font-semibold text-sand">₦150,000 for 7 days</strong>,
        booking through{" "}
        <code className="rounded bg-ashphalt/60 px-1.5 py-0.5 text-[0.8em] text-amber-hot">
          /advertise?spot=stats&amp;slot=1…10
        </code>
        . The page also carries the official creator credit and links to four
        official accounts.
      </>
    ),
    band: "primary",
    evidence: (
      <>
        the stats page itself. First appearance date not published, so we date
        this observation, not the feature.
      </>
    ),
    meaning:
      "The game is monetising attention directly now. Expect changes that serve advertisers — brand placements (Terms §11–12) are a reason new items appear in the world without a post about them.",
  },
  {
    date: "7 Oct 2026",
    what: (
      <>
        <strong className="font-semibold text-sand">
          Abuja and Port Harcourt went live
        </strong>{" "}
        (announced on X the day before: &quot;2 MILLION PLAYERS!!! ABUJA AND
        PORT HARCOULT ARE NOW LIVE! … 10 MILLION+ VISITS TODAY!&quot;). Reported
        by Vanguard with the quote; the creator is named{" "}
        <strong className="font-semibold text-sand">
          {OFFICIAL_GAME.creator}
        </strong>
        , X handle{" "}
        <strong className="font-semibold text-sand">
          {OFFICIAL_GAME.creatorHandle}
        </strong>
        .
      </>
    ),
    band: "press",
    evidence: (
      <>
        <a
          href="https://www.vanguardngr.com/2026/10/lagos-life-game-crosses-2-million-users-heres-how-to-play/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          Vanguard, 7 Oct 2026
        </a>
      </>
    ),
    meaning: (
      <>
        Three cities means{" "}
        <strong className="font-semibold text-sand">
          distance became a mechanic
        </strong>
        : commute time, which jobs are reachable from which home, and whether
        rent in Abuja is cheaper than Lagos. Anything you learned about travel
        on day one is stale.
      </>
    ),
  },
  {
    date: "6 Oct 2026",
    what: (
      <>
        <strong className="font-semibold text-sand">
          50,000 players online simultaneously
        </strong>{" "}
        reported as a new high, with the total crossing 1.2 million and
        &quot;more than 95,000 people playing the game at the same time&quot;
        in the same article&apos;s update.
      </>
    ),
    band: "press",
    evidence: (
      <>
        <a
          href="https://www.isakaba.com/2026/10/06/lagos-life-reaches-50000-concurrent-players-as-nigerian-browser-game-expands/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          Isakaba, 6 Oct 2026
        </a>
      </>
    ),
    meaning: (
      <>
        Concurrent load at that scale is when{" "}
        <strong className="font-semibold text-sand">
          social features get throttled first
        </strong>
        . If chat fails for you and not for a friend, it is capacity, not your
        connection.
      </>
    ),
  },
  {
    date: "5 Oct 2026\n07:15",
    what: (
      <>
        <strong className="font-semibold text-sand">
          Dated reading of the official counter:
        </strong>{" "}
        <strong className="font-semibold text-sand">1,173,086</strong> total
        players · <strong className="font-semibold text-sand">55,083</strong>{" "}
        online now ·{" "}
        <strong className="font-semibold text-sand">9,122,244</strong> visits
        all-time. Recorded by Techpoint Africa from the official live stats
        page.
      </>
    ),
    band: "press",
    evidence: (
      <>
        <a
          href="https://technext24.com/tech-news/lagos-life-ranks-among-africas-top-trending-games/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          Techpoint Africa, 5 Oct 2026
        </a>
      </>
    ),
    meaning:
      "This is our numeric baseline. We keep extending that table below with our own dated readings.",
  },
  {
    date: "4 Oct 2026",
    what: (
      <>
        <strong className="font-semibold text-sand">
          1 million sign-ups in roughly three days
        </strong>
        , and a{" "}
        <strong className="font-semibold text-sand">
          $500,000 angel investment
        </strong>{" "}
        announced by the creator. Both self-reported; no independent audit
        published.
      </>
    ),
    band: "press",
    evidence:
      "creator posts circulated 4–6 Oct via Instagram Reels, Facebook and YouTube explainers",
    meaning:
      "Explains the speed of change. A funded team ships differently from a solo dev — week-one guides are obsolete by design.",
  },
  {
    date: "1 Oct 2026",
    what: (
      <>
        <strong className="font-semibold text-sand">
          Launch, and the rulebook published the same day.
        </strong>{" "}
        Terms of Use and Privacy &amp; Cookie Policy both say &quot;Effective 1
        October 2026&quot;. Terms already contains a section headed{" "}
        <strong className="font-semibold text-sand">
          §4 &quot;One Game World, Multiple Locations&quot;
        </strong>{" "}
        — written proof that other cities were planned before Abuja was
        announced.
      </>
    ),
    band: "primary",
    evidence: (
      <>
        <a
          href={OFFICIAL_GAME.terms}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          Terms
        </a>{" "}
        ·{" "}
        <a
          href={OFFICIAL_GAME.privacy}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          Privacy
        </a>{" "}
        — both carry the effective date on the page
      </>
    ),
    meaning: (
      <>
        Two things to know: the launch date is{" "}
        <strong className="font-semibold text-sand">1 October</strong> (not
        &quot;early October&quot;), and the multi-city world was always the
        plan, so a third city is not a rumour.
      </>
    ),
  },
  {
    date: "undated\nflagged",
    what: (
      <>
        <strong className="font-semibold text-sand">
          In-game chat bandwidth constrained.
        </strong>{" "}
        Players were told the team is &quot;facing serious constraints around
        bandwidth specifically for the in-game chat&quot;, and that they are
        &quot;working towards expanding server capacity to support more
        messages&quot;.
      </>
    ),
    band: "unverified",
    evidence:
      "player report circulating on X. We cannot date the original post, so this line records the claim, not the change.",
    meaning:
      'Social features fail in waves. A "chat is dead" complaint is usually load, and it will not show up in any announcement.',
  },
  {
    date: "7–9 Oct 2026\nflagged",
    what: (
      <>
        <strong className="font-semibold text-sand">
          A government/election system may exist in-game.
        </strong>{" "}
        Another independent guide reports a Governor / Senator / President
        panel, weekly terms, polls closing 8pm Sunday, a ₦50,000 running cost
        and a ₦25,000 daily stipend for the holder, with voting done in person
        at a Polling Unit.
      </>
    ),
    band: "unverified",
    evidence: (
      <>
        reported at lagoslife.org/updates/ with dated observations;{" "}
        <strong className="font-semibold text-sand">
          we have not seen it ourselves yet
        </strong>
      </>
    ),
    meaning:
      "If real, it is the biggest system added after launch and it changes income math — a stipend is not a salary. Treat the numbers as somebody's screenshot until we log in.",
  },
];

const baselineRows = [
  {
    checked: "5 Oct 07:15",
    total: "1,173,086",
    online: "55,083",
    visits: "9,122,244",
    build: "not recorded",
    source: "Techpoint Africa screenshot",
  },
  {
    checked: "6 Oct",
    total: "> 1,200,000",
    online: "> 95,000",
    visits: "—",
    build: "not recorded",
    source: "Isakaba",
  },
  {
    checked: "7 Oct",
    total: "> 2,000,000",
    online: "101,000+ cited",
    visits: "10,000,000+ visits that day",
    build: "not recorded",
    source: "creator's X post, via Vanguard",
  },
  {
    checked: "10 Oct ~11:37 UTC",
    total: "6,989,681",
    online: "88,429",
    visits: "36,489,382",
    build: "1791631002",
    source: "our live browser read of lagoslife.app/stats",
  },
] as const;

const faqs = [
  {
    q: "Does Lagos Life have a changelog?",
    a: "No. There is no changelog page on the official site and no version shown to players. The Terms let economy values change without notice (§7), which is why a dated third-party record is currently the only public change history.",
    schema:
      "No. There is no changelog page on lagoslife.app and no version number shown to players. The Terms of Use, effective 1 October 2026, allow the developer to change prices, salaries and payouts without notice under §7, and availability and changes are covered under §22. A dated, third-party record is currently the only public change history.",
  },
  {
    q: "Is there a Lagos Life version number?",
    a: (
      <>
        Not one players see. A build identifier sits in the page source and, on
        10 October 2026, the same value{" "}
        <code className="rounded bg-ashphalt/60 px-1.5 text-amber-hot">
          1791631002
        </code>{" "}
        appeared on the homepage and the stats page — the whole site deploys at
        once. When it changes, something shipped, announced or not.
      </>
    ),
    schema:
      "Players are not shown one. The site is deployed as a single build, and a build identifier can be read in the page source. A deployment read on 10 October 2026 carried the same identifier on both the homepage and the stats page, meaning the whole site ships at once. When that number changes, something shipped; it may change without any announcement.",
  },
  {
    q: "Where do updates get published?",
    a: (
      <>
        On X —{" "}
        <a
          href={OFFICIAL_GAME.creatorX}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.creatorHandle}
        </a>{" "}
        and{" "}
        <a
          href={OFFICIAL_GAME.gameX}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.gameHandle}
        </a>
        . City expansion and player milestones were both announced there and
        quoted by Nigerian press. There is no email list and no in-game
        patch-note screen.
      </>
    ),
    schema:
      "On X. The official organisation profile lists x.com/LagosLifeApp, and the creator credit on the stats page points to @Shalom_HeyEliy. City expansion and player milestones were announced there, quoted by Nigerian press. No email newsletter or in-game patch-note screen is documented.",
  },
  {
    q: "What is the current player count?",
    a: "Only ever as of a timestamp. The official counter publishes players online now, active today and yesterday, total players, and visits today and all-time, refreshed every 30 seconds. Dated readings we can cite include 1,173,086 total with 55,083 online on 5 October 2026, and our own 10 October read of 6,989,681 total with 88,429 online.",
    schema:
      "The official stats page publishes players online now, active today, active yesterday, total players, visits today and visits all time, described on the page as updating every 30 seconds. Those figures are drawn in the browser after load, so an archived copy must come from a screenshot, not from a saved page. Dated third-party readings we can cite include 1,173,086 total players and 55,083 online on 5 October 2026.",
  },
  {
    q: "Did Lagos Life add Abuja and Port Harcourt?",
    a: 'Yes — announced on X on 6 October 2026 and reported by Vanguard on 7 October. The Terms of Use already carried a section headed "One Game World, Multiple Locations" at launch on 1 October, so the multi-city world was planned, not improvised.',
    schema:
      "Yes. On 6 October 2026 the creator posted on X that Abuja and Port Harcourt were live alongside Lagos, a change reported by Vanguard on 7 October 2026. The Terms of Use already had a section headed One Game World, Multiple Locations as of 1 October 2026, which is the earliest written evidence that multi-city play was planned.",
  },
  {
    q: "Do numbers in Lagos Life guides go out of date?",
    a: "Frequently. Prices, salaries and payouts are adjustable under §7, and the first map expansion landed on day six. Any guide printing a weekly wage without a checked-on date is describing a moving target.",
    schema:
      "Frequently. Terms §7 lists prices, salaries and payouts among things that can be adjusted, and the game shipped its first map expansion on day six. Any guide that prints a weekly wage or a rent without a date is a guess about a moving target, which is why every figure on this site carries a checked-on date.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/updates/#webpage`,
      url: `${SITE.url}/updates/`,
      name: TDK.updates.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      about: {
        "@type": "VideoGame",
        name: "Lagos Life",
        publisher: {
          "@type": "Organization",
          name: "Lagos Life",
          url: OFFICIAL_GAME.primary.replace(/\/$/, ""),
        },
      },
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life — Live stats page, updated every 30 seconds; creator credit",
          url: `${OFFICIAL_GAME.primary}stats`,
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Terms of Use, effective 1 October 2026 — §4 One Game World Multiple Locations, §7 Virtual Economy, §11 Advertising, §22 Availability and Changes, §23 No Guarantee of Gameplay Outcomes",
          url: OFFICIAL_GAME.terms,
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Privacy & Cookie Policy, effective 1 October 2026 — §6 Cookies",
          url: OFFICIAL_GAME.privacy,
        },
        {
          "@type": "NewsArticle",
          author: "Vanguard",
          name: "Lagos Life game crosses 2 million users – here's how to play",
          datePublished: "2026-10-07",
          url: "https://www.vanguardngr.com/2026/10/lagos-life-game-crosses-2-million-users-heres-how-to-play/",
        },
        {
          "@type": "NewsArticle",
          author: "Techpoint Africa",
          name: "Lagos Life Ranks Among Africa's Top Trending Games",
          datePublished: "2026-10-05",
          url: "https://technext24.com/tech-news/lagos-life-ranks-among-africas-top-trending-games/",
        },
        {
          "@type": "NewsArticle",
          author: "Isakaba",
          name: "Lagos Life reaches 50,000 concurrent players as Nigerian browser game expands",
          url: "https://www.isakaba.com/2026/10/06/lagos-life-reaches-50000-concurrent-players-as-nigerian-browser-game-expands/",
        },
      ],
      publisher: { "@id": `${SITE.url}/#publisher` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Updates",
          item: `${SITE.url}/updates/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.schema,
        },
      })),
    },
  ],
};

export default function UpdatesPage() {
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
          › Updates · Unofficial, fan-run · Record last extended{" "}
          <strong className="font-semibold text-sand">
            10 October 2026, ~11:37 UTC
          </strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Updates: a Dated Change Log Since Launch
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Lagos Life has no changelog. No patch notes, no version screen, no
          release feed — and its own{" "}
          <a
            href={OFFICIAL_GAME.terms}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            Terms of Use (§7)
          </a>{" "}
          let the developer adjust{" "}
          <strong className="font-semibold text-sand">
            prices, salaries, payouts
          </strong>{" "}
          and other economy values without telling anyone. Which means a number
          you read anywhere, including here, is a snapshot of something that
          moves.
        </p>

        <p className="mt-4 leading-relaxed text-ink-muted">
          So this page is the record. Newest first.{" "}
          <strong className="font-semibold text-sand">
            Nothing gets deleted
          </strong>{" "}
          — if a later check contradicts an entry, the entry stays with an
          addendum showing what changed and when we noticed.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-semibold text-sand">
            Three evidence bands, labelled on every line
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            <span className={bandClass.primary}>{bandLabel.primary}</span>{" "}
            official Lagos Life page or document, read by us, with the date we
            read it. You can verify it yourself in under a minute — we always
            tell you how.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            <span className={bandClass.press}>{bandLabel.press}</span> Nigerian
            media quoting the creator or screenshotting the official counter.
            Carries its own date. Numbers are the creator&apos;s, not audited.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            <span className={bandClass.unverified}>
              {bandLabel.unverified}
            </span>{" "}
            something reported by another fan guide, or announced in a post we
            cannot date. Stays in the log flagged, and moves up a band only when
            we check it in-game ourselves.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The change log
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-3 py-3 font-semibold text-sand">Date</th>
                <th className="px-3 py-3 font-semibold text-sand">
                  What changed
                </th>
                <th className="px-3 py-3 font-semibold text-sand">Evidence</th>
                <th className="px-3 py-3 font-semibold text-sand">
                  What it means for you
                </th>
              </tr>
            </thead>
            <tbody>
              {logRows.map((row, i) => (
                <tr
                  key={`${row.date}-${i}`}
                  className={
                    i % 2 === 0
                      ? "border-b border-line bg-white/[0.02]"
                      : "border-b border-line"
                  }
                >
                  <td className="whitespace-pre-line px-3 py-3.5 align-top font-semibold tabular-nums text-sand">
                    {row.date}
                  </td>
                  <td className="px-3 py-3.5 align-top leading-relaxed text-ink-muted">
                    {row.what}
                  </td>
                  <td className="px-3 py-3.5 align-top text-ink-muted">
                    <span className={bandClass[row.band]}>
                      {bandLabel[row.band]}
                    </span>
                    <div className="mt-2 text-sm leading-relaxed">
                      {row.evidence}
                    </div>
                  </td>
                  <td className="px-3 py-3.5 align-top leading-relaxed text-ink-muted">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Check it yourself in 20 seconds
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Everything above is reproducible. That is the point — you do not have
          to trust a fan blog about a game nobody documents.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Did they ship today?
            </strong>{" "}
            Open{" "}
            <code className="rounded bg-ashphalt/60 px-1.5 text-amber-hot">
              view-source:lagoslife.app
            </code>{" "}
            in a desktop browser, search for{" "}
            <code className="text-amber-hot">build</code>. The number you find
            is the deploy identifier. If it is not{" "}
            <code className="text-amber-hot">1791631002</code>, something
            shipped since 10 October 11:16 UTC. Do the same on the stats page —
            the two should match.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              How many people are playing?
            </strong>{" "}
            Open{" "}
            <a
              href={`${OFFICIAL_GAME.primary}stats`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/stats
            </a>
            . It states the figures refresh every 30 seconds.{" "}
            <strong className="font-semibold text-sand">
              Numbers only appear in a live browser
            </strong>{" "}
            — a saved copy of that page shows dashes.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Where do announcements actually happen?
            </strong>{" "}
            X:{" "}
            <a
              href={OFFICIAL_GAME.creatorX}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              {OFFICIAL_GAME.creatorHandle}
            </a>{" "}
            and{" "}
            <a
              href={OFFICIAL_GAME.gameX}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              {OFFICIAL_GAME.gameHandle}
            </a>
            . No newsletter exists.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Anything new in the world that nobody announced?
            </strong>{" "}
            The stats page sells ten ad slots at{" "}
            <strong className="font-semibold text-sand">
              ₦150,000 per 7 days
            </strong>
            . Brand placements are the quiet reason objects and venues appear.
          </li>
        </ol>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The dated baseline — extended every day we check
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          One line per check, never edited afterwards. This is the table that
          turns &quot;the numbers changed&quot; from an opinion into evidence.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-3 py-3 font-semibold text-sand">
                  Checked (UTC)
                </th>
                <th className="px-3 py-3 font-semibold text-sand">
                  Total players
                </th>
                <th className="px-3 py-3 font-semibold text-sand">Online now</th>
                <th className="px-3 py-3 font-semibold text-sand">
                  Visits all-time
                </th>
                <th className="px-3 py-3 font-semibold text-sand">Build id</th>
                <th className="px-3 py-3 font-semibold text-sand">Source</th>
              </tr>
            </thead>
            <tbody>
              {baselineRows.map((row, i) => (
                <tr
                  key={row.checked}
                  className={
                    i % 2 === 0
                      ? "border-b border-line bg-white/[0.02]"
                      : "border-b border-line"
                  }
                >
                  <td className="whitespace-nowrap px-3 py-3.5 font-semibold tabular-nums text-sand">
                    {row.checked}
                  </td>
                  <td className="px-3 py-3.5 tabular-nums text-ink-muted">
                    {row.total}
                  </td>
                  <td className="px-3 py-3.5 tabular-nums text-ink-muted">
                    {row.online}
                  </td>
                  <td className="px-3 py-3.5 tabular-nums text-ink-muted">
                    {row.visits}
                  </td>
                  <td className="px-3 py-3.5 text-ink-muted">
                    {row.build === "not recorded" ? (
                      row.build
                    ) : (
                      <code className="text-amber-hot">{row.build}</code>
                    )}
                  </td>
                  <td className="px-3 py-3.5 text-ink-muted">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          10 Oct row also recorded Active today 933,644 · Active yesterday
          1,416,439 · Visits today 1,484,670 (same browser session). Figures
          move every 30 seconds on the official page.
        </p>

        <div className="mt-8 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              Why this page cannot promise exact figures.
            </strong>{" "}
            Terms <strong className="font-semibold text-sand">§7</strong> lists
            prices, salaries and payouts among the values the developer may
            adjust; <strong className="font-semibold text-sand">§22</strong>{" "}
            covers availability and changes;{" "}
            <strong className="font-semibold text-sand">§23</strong> explicitly
            disclaims any guarantee of gameplay outcomes. There is no published
            duty to announce a change before it reaches you. So every number on
            this site carries the date it was checked, and{" "}
            <strong className="font-semibold text-sand">
              this page is where those dates are kept honest
            </strong>
            .
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What changed → which guide it breaks
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Three cities (6 Oct)
            </strong>{" "}
            — breaks anything about travel time and rent, including{" "}
            <Link href="/homes/" className="text-amber-hot hover:text-sand">
              home prices and the 3× move-in fee
            </Link>
            . A cheap Lagos room may not be cheap in Port Harcourt.
          </li>
          <li>
            <strong className="font-semibold text-sand">Silent builds</strong> —
            break{" "}
            <Link
              href="/virtual-naira/"
              className="text-amber-hot hover:text-sand"
            >
              the Naira guide&apos;s wage and price tables
            </Link>{" "}
            first. Those tables are dated for exactly this reason.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Load and deploys
            </strong>{" "}
            — break login. If a build lands while you are mid-session, expect
            the loop described on{" "}
            <Link href="/sign-in/" className="text-amber-hot hover:text-sand">
              the sign-in fix page
            </Link>
            , and remember &quot;Start fresh&quot; clears local code caches, not
            your account.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Whatever ships next
            </strong>{" "}
            —{" "}
            <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
              the first-30-minutes guide
            </Link>{" "}
            is the page that goes stale fastest after a map or job update.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Addenda — earlier claims this record corrected
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">10 October 2026.</strong>{" "}
            We previously wrote that no official source publishes exact player
            figures.{" "}
            <a
              href={`${OFFICIAL_GAME.primary}stats`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              The stats page
            </a>{" "}
            contradicts that: six live metrics, self-described as refreshing
            every 30 seconds. The reason we do not print a single &quot;true&quot;
            price list is that{" "}
            <strong className="font-semibold text-sand">
              values move with builds
            </strong>
            , not that the developer hides numbers.
          </li>
          <li>
            <strong className="font-semibold text-sand">10 October 2026.</strong>{" "}
            Press coverage spelled the creator&apos;s name at least four ways
            across Rayhamen, Rahmen and Mathew. The official stats page settles
            the working name:{" "}
            <strong className="font-semibold text-sand">
              {OFFICIAL_GAME.creator}
            </strong>
            ,{" "}
            <strong className="font-semibold text-sand">
              {OFFICIAL_GAME.creatorHandle}
            </strong>
            . The{" "}
            <Link
              href="/who-created-lagos-life/"
              className="text-amber-hot hover:text-sand"
            >
              creator guide
            </Link>{" "}
            uses that, with the variants footnoted.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What this log will not do
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          No rumours from comment sections. No screenshot without a date. No
          rewriting an entry to pretend we always knew — a wrong line gets an
          addendum above it. And no deleting: a change log that edits its own
          history is a blog post.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Frequently asked
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

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Sources
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink-muted">
          <li>
            <a
              href={`${OFFICIAL_GAME.primary}stats`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Lagos Life — Live stats
            </a>{" "}
            · official · counter cadence, six metrics, creator credit, ad
            pricing; build id read 10 Oct 2026
          </li>
          <li>
            <a
              href={OFFICIAL_GAME.terms}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Terms of Use
            </a>{" "}
            · official, effective 1 Oct 2026 · §4, §7, §11, §22, §23
          </li>
          <li>
            <a
              href={OFFICIAL_GAME.privacy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Privacy &amp; Cookie Policy
            </a>{" "}
            · official, effective 1 Oct 2026 · §6
          </li>
          <li>
            <a
              href="https://www.vanguardngr.com/2026/10/lagos-life-game-crosses-2-million-users-heres-how-to-play/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Vanguard — Lagos Life game crosses 2 million users
            </a>{" "}
            · 7 Oct 2026
          </li>
          <li>
            <a
              href="https://technext24.com/tech-news/lagos-life-ranks-among-africas-top-trending-games/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Techpoint Africa
            </a>{" "}
            · 5 Oct 2026 · dated counter reading
          </li>
          <li>
            <a
              href="https://www.isakaba.com/2026/10/06/lagos-life-reaches-50000-concurrent-players-as-nigerian-browser-game-expands/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Isakaba
            </a>{" "}
            · 6 Oct 2026 · concurrency and total
          </li>
          <li>
            Creator posts on X,{" "}
            <strong className="font-semibold text-sand">
              {OFFICIAL_GAME.creatorHandle}
            </strong>
            , 6 Oct 2026, quoted by Vanguard.
          </li>
        </ul>

        <p className="mt-10 text-ink-muted">
          <Link href="/" className="text-amber-hot hover:text-sand">
            Home
          </Link>{" "}
          ·{" "}
          <Link
            href="/lagos-life-game-link/"
            className="text-amber-hot hover:text-sand"
          >
            Official game link
          </Link>{" "}
          ·{" "}
          <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
            First 30 minutes
          </Link>{" "}
          ·{" "}
          <Link
            href="/virtual-naira/"
            className="text-amber-hot hover:text-sand"
          >
            Game Naira
          </Link>{" "}
          ·{" "}
          <Link href="/homes/" className="text-amber-hot hover:text-sand">
            Rents
          </Link>{" "}
          ·{" "}
          <Link href="/sign-in/" className="text-amber-hot hover:text-sand">
            Sign-in
          </Link>{" "}
          ·{" "}
          <Link
            href="/is-lagos-life-safe/"
            className="text-amber-hot hover:text-sand"
          >
            Safety
          </Link>
        </p>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <strong className="font-semibold text-sand">Independent guide.</strong>{" "}
          Not affiliated with, endorsed by or sponsored by Lagos Life or its
          creator. Official game:{" "}
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            lagoslife.app
          </a>
          . Ad prices, player counts and dates here are our observations as of
          the timestamps shown, and the developer can change any of them without
          notice.
        </p>
      </main>
    </>
  );
}
