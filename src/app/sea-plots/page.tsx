import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.seaPlots.title },
  description: TDK.seaPlots.description,
  alternates: { canonical: "/sea-plots/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.seaPlots.title,
    description: TDK.seaPlots.description,
    url: `${SITE.url}/sea-plots/`,
    images: [
      {
        url: "/og/sea-plots.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — city map with Lagos Lagoon and Sea Plots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.seaPlots.title,
    description: TDK.seaPlots.description,
    images: ["/og/sea-plots.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

const plotRows = [
  {
    where: "Lagos lagoon",
    kind: "Sea plot",
    grid: "6×4",
    slots: "24",
  },
  {
    where: "Abuja",
    kind: "Land plot",
    grid: "3×3",
    slots: "9",
  },
  {
    where: "Port Harcourt",
    kind: "Land plot",
    grid: "3×3",
    slots: "9",
  },
] as const;

const faqs = [
  {
    q: "How much is a Sea Plot in Lagos Life?",
    a: "₦50,000 Game Naira for seven in-game days. That figure is what the shared-city advertising panel and multiple player guides show as of early October 2026.",
    schema:
      "A Lagos Life Sea Plot rents for ₦50,000 Game Naira for seven in-game days. Road billboards are a separate product at ₦100,000 for the same window.",
  },
  {
    q: "How many Sea Plots are there?",
    a: "On the Lagos lagoon map the advertised layout is a 6×4 grid — about 24 lagoon slots. Abuja and Port Harcourt also show land-plot grids at the same ₦50,000 / 7-day rate.",
    schema:
      "Lagos lagoon sea plots are advertised as a 6×4 grid (about 24 slots). Abuja and Port Harcourt land plots appear as 3×3 grids. Slots are first come, first served in the shared city.",
  },
  {
    q: "Is a Sea Plot the same as a home?",
    a: (
      <>
        No. A{" "}
        <Link href="/homes/" className="text-amber-hot hover:text-sand">
          home
        </Link>{" "}
        is where your Sim lives and pays Saturday rent. A Sea Plot is temporary
        map advertising on the lagoon (or land plot in other cities). Neither
        replaces the other.
      </>
    ),
    schema:
      "No. Homes are where your character lives and pay weekly Saturday rent. Sea Plots are temporary map advertising rentals paid from your game wallet. They do not replace housing.",
  },
  {
    q: "Can I buy or sell a Sea Plot for real money?",
    a: (
      <>
        No. Game Naira cannot be cashed out, and plot transfers / resale are
        treated as off-limits. Anyone selling a &quot;Sea Plot for cash&quot; is
        a scam — see{" "}
        <Link
          href="/is-lagos-life-safe/"
          className="text-amber-hot hover:text-sand"
        >
          safety
        </Link>
        .
      </>
    ),
    schema:
      "No. Sea Plots are in-game rentals paid with Game Naira, which cannot be withdrawn. Player reports and the Terms treat account and plot trading for real money as prohibited. Secondhand plot sales are scams.",
  },
  {
    q: "Should I rent one in my first hour?",
    a: (
      <>
        No. Clear housing and a stable wage first — see{" "}
        <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
          how to play
        </Link>{" "}
        and{" "}
        <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
          earning naira
        </Link>
        . ₦50,000 is more than many early weekly paycheques after rent.
      </>
    ),
    schema:
      "No. Sea Plots are a mid-game flex. Prioritise a home and a repeatable wage first. ₦50,000 for seven days is a large share of early weekly income once Saturday rent is paid.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/sea-plots/#webpage`,
      url: `${SITE.url}/sea-plots/`,
      name: TDK.seaPlots.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      publisher: { "@id": `${SITE.url}/#publisher` },
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life billboards and sea plots — shared-city advertising prices (player-facing panels, Oct 2026)",
          url: "https://lagoslife.com.ng/guide/billboards/",
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Terms of Use, effective 1 October 2026",
          url: OFFICIAL_GAME.terms,
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sea Plots",
          item: `${SITE.url}/sea-plots/`,
        },
      ],
    },
    {
      "@type": "Product",
      name: "Lagos Life Sea Plot (Lagos lagoon rental)",
      description:
        "Temporary in-game lagoon advertising rental in Lagos Life — not real land.",
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "NGN",
        description: "₦50,000 Game Naira for seven in-game days",
        availability: "https://schema.org/InStock",
      },
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

export default function SeaPlotsPage() {
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
          › Sea Plots · Unofficial, fan-run · Prices re-checked against
          shared-city panels{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Sea Plots: Cost, Slots and When to Buy
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          A Sea Plot is temporary{" "}
          <strong className="font-semibold text-sand">map advertising</strong>{" "}
          on the Lagos lagoon — not a house, not real land, and not something
          you cash out. You pay from your game wallet; other players see who
          holds the slot while the lease runs.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-semibold text-sand">At a glance</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
            <li>
              <strong className="font-semibold text-sand">₦50,000</strong> Game
              Naira for <strong className="font-semibold text-sand">7</strong>{" "}
              in-game days
            </li>
            <li>
              Lagos lagoon grid about{" "}
              <strong className="font-semibold text-sand">6×4 (24 slots)</strong>
              ; first come, first served
            </li>
            <li>
              Road{" "}
              <strong className="font-semibold text-sand">billboards</strong> are
              a separate product at ₦100,000 / 7 days
            </li>
            <li>
              Does <strong className="font-semibold text-sand">not</strong>{" "}
              replace Saturday home rent
            </li>
          </ul>
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-5 inline-flex rounded-md bg-amber px-5 py-3 text-sm font-bold text-ashphalt hover:bg-amber-hot"
          >
            Open Lagos Life map →
          </a>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What a Sea Plot actually is
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Open the shared city map, tap an available lagoon tile, and rent it
          from your wallet. While you hold it, your presence shows on the
          waterfront where other Sims walk past — status flex and in-game
          advertising in one. When the seven days end, the slot frees for the
          next player.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Player guides disagree slightly on the{" "}
          <em>payload</em> you attach: shared-city advertising copy emphasises
          name + emoji (and billboards add slogan/colour); some in-game
          write-ups describe a reviewed picture + link submission. Treat the
          in-game panel as the source of truth for what your build currently
          accepts — the price and duration have been consistent across reports.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Prices and slots
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-4 py-3 font-semibold text-sand">Product</th>
                <th className="px-4 py-3 font-semibold text-sand">Price</th>
                <th className="px-4 py-3 font-semibold text-sand">Lasts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line bg-white/[0.02]">
                <td className="px-4 py-3.5 font-semibold text-sand">
                  Sea / land plot
                </td>
                <td className="px-4 py-3.5 tabular-nums text-ink-muted">
                  ₦50,000
                </td>
                <td className="px-4 py-3.5 text-ink-muted">7 in-game days</td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-semibold text-sand">
                  Road billboard
                </td>
                <td className="px-4 py-3.5 tabular-nums text-ink-muted">
                  ₦100,000
                </td>
                <td className="px-4 py-3.5 text-ink-muted">7 in-game days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-4 py-3 font-semibold text-sand">Where</th>
                <th className="px-4 py-3 font-semibold text-sand">Kind</th>
                <th className="px-4 py-3 font-semibold text-sand">Grid</th>
                <th className="px-4 py-3 font-semibold text-sand">~Slots</th>
              </tr>
            </thead>
            <tbody>
              {plotRows.map((row, i) => (
                <tr
                  key={row.where}
                  className={
                    i % 2 === 0
                      ? "border-b border-line bg-white/[0.02]"
                      : "border-b border-line last:border-0"
                  }
                >
                  <td className="px-4 py-3.5 font-semibold text-sand">
                    {row.where}
                  </td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.kind}</td>
                  <td className="px-4 py-3.5 tabular-nums text-ink-muted">
                    {row.grid}
                  </td>
                  <td className="px-4 py-3.5 tabular-nums text-ink-muted">
                    {row.slots}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          Slot counts are the product of the advertised grids. Billboards are
          separate (about 64 across cities; Lagos ~38). Always confirm on the
          live map — inventories change with updates.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          How to rent one
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            Play only at{" "}
            <a
              href={OFFICIAL_GAME.primary}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app
            </a>
            — never through an APK or &quot;plot broker&quot; page.
          </li>
          <li>Open the shared city map and find an available lagoon (or land) tile.</li>
          <li>
            Confirm price and duration on the rental panel, then pay from your
            game wallet.
          </li>
          <li>
            If the build asks for creative assets, have rights-cleared image /
            compliant link ready; player reports say submissions can be reviewed
            before they go live.
          </li>
          <li>
            Do not expect a transfer button — plots are not inventory you resell
            to another account.
          </li>
        </ol>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Rules that bite
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              First come, first served
            </strong>{" "}
            — two players cannot hold the same slot.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Review / takedown risk
            </strong>{" "}
            — content that breaks the game&apos;s rules may never go live, or
            may be pulled; player guides report no refund when a plot is removed
            for violations.
          </li>
          <li>
            <strong className="font-semibold text-sand">No real property</strong>{" "}
            — Terms treat virtual items as fictional; you are renting attention
            on a map, not buying Nigerian land.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              No cash-out, no middlemen
            </strong>{" "}
            — Game Naira never leaves the game. &quot;Buy my Sea Plot for
            USDT&quot; is the same class of scam as account trading.
          </li>
        </ul>

        <div className="mt-8 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              Ignore anyone selling Sea Plots for real money.
            </strong>{" "}
            Account trading is banned in the Terms; the seller can still recover
            the account, and you lose both cash and access. Full scam list:{" "}
            <Link
              href="/is-lagos-life-safe/"
              className="text-amber-hot hover:text-sand"
            >
              Is Lagos Life safe?
            </Link>
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          When it is worth the ₦50,000
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Rent one when you already cover Saturday housing and still have a
          surplus you will not miss for a week. A mid-tier early job around
          ₦60,000/week (e.g. airport check-in) means a Sea Plot is most of a
          week&apos;s pay before rent — fine as a flex once you are stable,
          painful if Mushin still owns your Saturday.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          It makes more sense for crews staking a flag, creators pointing at a
          real channel, or roleplayers running an in-game brand. If you only
          want &quot;something to buy,&quot; a cheaper{" "}
          <Link href="/homes/" className="text-amber-hot hover:text-sand">
            home upgrade
          </Link>{" "}
          usually helps the Sim more.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Sea Plot vs home vs billboard
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-4 py-3 font-semibold text-sand">Feature</th>
                <th className="px-4 py-3 font-semibold text-sand">Home</th>
                <th className="px-4 py-3 font-semibold text-sand">Sea Plot</th>
                <th className="px-4 py-3 font-semibold text-sand">Billboard</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              <tr className="border-b border-line bg-white/[0.02]">
                <td className="px-4 py-3.5 font-semibold text-sand">Job</td>
                <td className="px-4 py-3.5">Where you live</td>
                <td className="px-4 py-3.5">Lagoon / land ad</td>
                <td className="px-4 py-3.5">Road ad</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-4 py-3.5 font-semibold text-sand">Typical cost</td>
                <td className="px-4 py-3.5">From ₦1,200/wk + move-in</td>
                <td className="px-4 py-3.5">₦50,000 / 7 days</td>
                <td className="px-4 py-3.5">₦100,000 / 7 days</td>
              </tr>
              <tr className="border-b border-line bg-white/[0.02]">
                <td className="px-4 py-3.5 font-semibold text-sand">Recurring</td>
                <td className="px-4 py-3.5">Every Saturday</td>
                <td className="px-4 py-3.5">Re-rent when lease ends</td>
                <td className="px-4 py-3.5">Re-rent when lease ends</td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-semibold text-sand">First hour?</td>
                <td className="px-4 py-3.5">Yes — cheapest home</td>
                <td className="px-4 py-3.5">No</td>
                <td className="px-4 py-3.5">No</td>
              </tr>
            </tbody>
          </table>
        </div>

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

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Sources
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink-muted">
          <li>
            Shared-city advertising panels summarised by player sites (Oct
            2026): Sea / land plot ₦50,000 / 7 days; billboard ₦100,000 / 7
            days; Lagos lagoon 6×4; Abuja &amp; Port Harcourt land 3×3; FCFS —
            e.g.{" "}
            <a
              href="https://lagoslife.com.ng/guide/billboards/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Lagos Life billboards &amp; sea plots guide
            </a>
            .
          </li>
          <li>
            Fan in-game notes on review / no-transfer / picture-link rules
            (reported 6 Oct 2026) — treat as secondary until your own panel
            matches.
          </li>
          <li>
            Lagos Life{" "}
            <a
              href={OFFICIAL_GAME.terms}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              Terms of Use
            </a>{" "}
            — virtual economy is fictional; no real-world cash-out; account
            trading restricted.
          </li>
        </ul>

        <p className="mt-10 text-ink-muted">
          <Link href="/" className="text-amber-hot hover:text-sand">
            Home
          </Link>{" "}
          ·{" "}
          <Link href="/homes/" className="text-amber-hot hover:text-sand">
            Homes &amp; rent
          </Link>{" "}
          ·{" "}
          <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
            Earn naira
          </Link>{" "}
          ·{" "}
          <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
            First 30 minutes
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
          Independent fan guide — not affiliated with Lagos Life or{" "}
          {OFFICIAL_GAME.creator}. Prices and slot grids change with builds; if
          the live map disagrees with this page, the game is right.
        </p>
      </main>
    </>
  );
}
