import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.creator.title },
  description: TDK.creator.description,
  alternates: { canonical: "/who-created-lagos-life/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.creator.title,
    description: TDK.creator.description,
    url: `${SITE.url}/who-created-lagos-life/`,
    images: [
      {
        url: "/og/creator.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.creator.title,
    description: TDK.creator.description,
    images: ["/og/creator.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

type Claim = {
  claim: string;
  source: string;
  date: string;
  note?: string;
  href?: string;
};

const claims: Claim[] = [
  {
    claim: "Operator named Shalom Rayhamen, Nigeria",
    source: "Lagos Life Terms of Use + Privacy & Cookie Policy",
    date: "effective 1 Oct 2026; re-checked 10 Oct 2026",
    href: OFFICIAL_GAME.terms,
  },
  {
    claim: `Public stats page credits the same name and links ${OFFICIAL_GAME.creatorHandle}`,
    source: "lagoslife.app/stats",
    date: "checked 10 Oct 2026",
    href: `${OFFICIAL_GAME.primary}stats`,
  },
  {
    claim: "Game social accounts linked from the homepage include @LagosLifeApp (X) and @lagoslifeapp (Instagram)",
    source: "Official game homepage social links",
    date: "checked Oct 2026",
    href: OFFICIAL_GAME.gameX,
    note: "Creator handle and game handle are different accounts — keep them separate.",
  },
  {
    claim: "Launch associated with 1 October 2026",
    source: "Terms / Privacy effective date; Vanguard News summary of the viral launch",
    date: "Terms dated 1 Oct 2026; Vanguard piece dated 6 Oct 2026",
    note: "We treat 1 Oct 2026 as the published effective / launch-week date, not an independently audited launch timestamp.",
  },
  {
    claim: "Ships under / associated with the name Eliy in community and media coverage",
    source: "Developer branding / community reports; Terms name the person, not a separate company entity",
    date: "Oct 2026 reporting",
    note: "Official legal pages use the personal operator name. 'Eliy' appears in handles and coverage — do not invent a company registration we have not seen.",
  },
  {
    claim: "Some media profiles use the name Shalom Mathew",
    source: "Secondary interviews (e.g. Condia profile summarised by fan sites)",
    date: "Oct 2026",
    note: "Disagreement: this guide keeps the official credit (Shalom Rayhamen) as primary and notes Mathew as media-reported, not as a replacement name.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/who-created-lagos-life/#webpage`,
      url: `${SITE.url}/who-created-lagos-life/`,
      name: TDK.creator.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      about: {
        "@type": "Person",
        name: OFFICIAL_GAME.creator,
        sameAs: [OFFICIAL_GAME.creatorX],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Who made Lagos Life",
          item: `${SITE.url}/who-created-lagos-life/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who created Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Official Terms and the /stats page name Shalom Rayhamen as the operator/creator. The creator X account credited on /stats is @Shalom_HeyEliy; the game account is @LagosLifeApp.",
          },
        },
        {
          "@type": "Question",
          name: "When did Lagos Life launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Terms and Privacy Policy are effective 1 October 2026, and contemporary reporting describes a 1 October 2026 launch week. Treat that as the published date, not an audited server log.",
          },
        },
      ],
    },
  ],
};

export default function WhoCreatedPage() {
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
          › Who made Lagos Life · Unofficial, fan-run · Sources re-checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Who Made Lagos Life? Creator, Launch Date and Sources
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Short answer: official pages name{" "}
          <strong className="font-semibold text-sand">
            {OFFICIAL_GAME.creator}
          </strong>
          . Everything below is a claim with a source, a date, and — where the
          internet disagrees — the disagreement spelled out. Wrong names spread
          faster than corrections, so this page refuses to flatten the conflict.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-display text-xl font-semibold text-sand">
            Working credit (official)
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
            <li>
              Operator / creator:{" "}
              <strong className="font-semibold text-sand">
                {OFFICIAL_GAME.creator}
              </strong>
            </li>
            <li>
              Creator X (from /stats):{" "}
              <a
                href={OFFICIAL_GAME.creatorX}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-amber-hot hover:text-sand"
              >
                {OFFICIAL_GAME.creatorHandle}
              </a>
            </li>
            <li>
              Game X:{" "}
              <a
                href={OFFICIAL_GAME.gameX}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-amber-hot hover:text-sand"
              >
                {OFFICIAL_GAME.gameHandle}
              </a>
            </li>
            <li>
              Play:{" "}
              <a
                href={OFFICIAL_GAME.primary}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-amber-hot hover:text-sand"
              >
                lagoslife.app
              </a>
            </li>
          </ul>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Claim ledger
        </h2>
        <p className="mt-3 text-ink-muted">
          Read down the table. If a row has a note, the note is the point —
          especially where media and legal pages diverge.
        </p>

        <div className="mt-6 space-y-5">
          {claims.map((row) => (
            <article
              key={row.claim}
              className="rounded-xl border border-line bg-ashphalt/40 p-5"
            >
              <p className="font-semibold text-sand">{row.claim}</p>
              <p className="mt-2 text-sm text-ink-muted">
                <strong className="text-sand">Source:</strong>{" "}
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-amber-hot hover:text-sand"
                  >
                    {row.source}
                  </a>
                ) : (
                  row.source
                )}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                <strong className="text-sand">Date:</strong> {row.date}
              </p>
              {row.note ? (
                <p className="mt-3 text-sm leading-relaxed text-amber-hot/90">
                  Disagreement / caution: {row.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What we will not claim
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            Exact headcount, valuation or &quot;solo developer in N hours&quot;
            stories without a primary source we can open.
          </li>
          <li>
            That player counters on /stats are independently audited — they are
            the operator&apos;s own dashboard.
          </li>
          <li>
            Affiliation with EA, The Sims, or any unrelated &quot;Lagos Life&quot;
            film / travel brand.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          FAQ
        </h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          <details className="group py-5">
            <summary className="font-display cursor-pointer list-none text-lg font-semibold text-sand marker:content-none [&::-webkit-details-marker]:hidden">
              Who created Lagos Life?
            </summary>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Official Terms and /stats name {OFFICIAL_GAME.creator}. Creator
              social on /stats: {OFFICIAL_GAME.creatorHandle}. Game social:{" "}
              {OFFICIAL_GAME.gameHandle}.
            </p>
          </details>
          <details className="group py-5">
            <summary className="font-display cursor-pointer list-none text-lg font-semibold text-sand marker:content-none [&::-webkit-details-marker]:hidden">
              When did it launch?
            </summary>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Published materials cluster around 1 October 2026 (policy effective
              date + launch-week reporting). We date the claim rather than
              inventing a server log.
            </p>
          </details>
          <details className="group py-5">
            <summary className="font-display cursor-pointer list-none text-lg font-semibold text-sand marker:content-none [&::-webkit-details-marker]:hidden">
              Is this the same as the Nollywood film &quot;Lagos Life&quot;?
            </summary>
            <p className="mt-3 leading-relaxed text-ink-muted">
              No. This page is only about the browser game at lagoslife.app.
            </p>
          </details>
        </div>

        <div className="mt-10 rounded-xl border border-amber/30 bg-amber/10 p-5">
          <p className="font-semibold text-sand">Related</p>
          <p className="mt-2 text-ink-muted">
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              is it safe / legit?
            </Link>{" "}
            ·{" "}
            <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
              official link
            </Link>{" "}
            ·{" "}
            <Link href="/sign-in/" className="text-amber-hot hover:text-sand">
              sign-in fixes
            </Link>
          </p>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Independent fan guide. Not affiliated with, endorsed by or sponsored by
          Lagos Life or {OFFICIAL_GAME.creator}. If a primary source changes,
          this ledger should change with a new date — not a silent rewrite.
        </p>
      </main>
    </>
  );
}
