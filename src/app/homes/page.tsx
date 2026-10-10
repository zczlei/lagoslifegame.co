import type { Metadata } from "next";
import Link from "next/link";
import {
  AFFORD_ROWS,
  INVEST_ROWS,
  LAGOS_HOMES,
} from "@/data/homes";
import { formatNaira } from "@/data/careers";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.homes.title },
  description: TDK.homes.description,
  alternates: { canonical: "/homes/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.homes.title,
    description:
      "Eight homes, Saturday rent, a move-in charge worth three weeks, and the two panels that price the same building differently.",
    url: `${SITE.url}/homes/`,
    images: [
      {
        url: "/og/homes.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.homes.title,
    description: TDK.homes.description,
    images: ["/og/homes.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/homes/#webpage`,
      url: `${SITE.url}/homes/`,
      name: TDK.homes.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life Houses — Property and Home Rules (player observation, 10 Oct 2026)",
          url: "https://lagoslife.org/houses/",
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Terms of Use, effective 1 October 2026",
          url: OFFICIAL_GAME.terms,
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Privacy & Cookie Policy, effective 1 October 2026",
          url: OFFICIAL_GAME.privacy,
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
          name: "Homes and rent",
          item: `${SITE.url}/homes/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Lagos Life homes, Lagos tab (observed 10 October 2026)",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "Hall of Residence · UNILAG, Akoka",
            description: "6×6 bunk space, students only",
            offers: {
              "@type": "Offer",
              price: "1200",
              priceCurrency: "NGN",
              description: "₦1,200 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "Face-me-I-face-you · Mushin",
            description: "6×6, one room in a shared compound",
            offers: {
              "@type": "Offer",
              price: "2400",
              priceCurrency: "NGN",
              description: "₦2,400 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            name: "Self-contain · Yaba",
            offers: {
              "@type": "Offer",
              price: "6000",
              priceCurrency: "NGN",
              description: "₦6,000 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            name: "Mini-flat · Lekki Phase 1",
            offers: {
              "@type": "Offer",
              price: "17000",
              priceCurrency: "NGN",
              description: "₦17,000 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Product",
            name: "Terrace duplex · Ikate, Lekki",
            offers: {
              "@type": "Offer",
              price: "45000",
              priceCurrency: "NGN",
              description: "₦45,000 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Product",
            name: "Family duplex · Magodo GRA",
            offers: {
              "@type": "Offer",
              price: "110000",
              priceCurrency: "NGN",
              description: "₦110,000 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Product",
            name: "Duplex · Ikoyi",
            offers: {
              "@type": "Offer",
              price: "250000",
              priceCurrency: "NGN",
              description: "₦250,000 Game Naira per week",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Product",
            name: "Mansion · Banana Island",
            offers: {
              "@type": "Offer",
              price: "1500000",
              priceCurrency: "NGN",
              description: "₦1,500,000 Game Naira per week",
            },
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is rent in Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Lagos tab of Phone → Houses showed eight listings on 10 October 2026, from ₦1,200 a week for a UNILAG student hall bunk and ₦2,400 for a Mushin face-me-I-face-you room, up to ₦1,500,000 a week for a Banana Island mansion. Rent is charged every Saturday.",
          },
        },
        {
          "@type": "Question",
          name: "Why does moving into a Lagos Life home cost three times the weekly rent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The move-in charge is two weeks of rent paid upfront plus one week of agent and agreement fees. Across the seven move-in charges displayed on 10 October 2026 each equalled weekly rent × 3, and the Mushin detail broke ₦7,200 into ₦4,800 prepaid rent and ₦2,400 in agent fees. This is a pattern across displayed values, not an officially published fee rate.",
          },
        },
        {
          "@type": "Question",
          name: "Which Lagos Life home should a beginner rent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On the displayed figures, the cheapest reachable entry is Mushin at ₦2,400 a week and ₦7,200 to move in. The UNILAG hall is cheaper at ₦1,200 but its button was disabled with a students-only restriction requiring enrolment at the Senate Building first, so a low price does not mean every account can move in.",
          },
        },
        {
          "@type": "Question",
          name: "Can you buy a house outright in Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, from Phone → Houses → Homes → listing → Buy & move in, which removes weekly rent. Outright prices observed on 10 October 2026 ran from ₦113,000 for the Mushin room to ₦91m for the Banana Island mansion.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the same house have two different prices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Homes tab prices a property to live in, while the Invest tab prices a property to rent out. On 10 October 2026 Mushin showed ₦113,000 to live in and ₦26,000 to invest. Two panels with two purposes; a difference is not a price increase.",
          },
        },
        {
          "@type": "Question",
          name: "What does the word Need mean on a Lagos Life property button?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Need appeared on disabled Invest buttons where the observing account's balance was insufficient — it is a balance message, not a discount or an out-of-stock notice.",
          },
        },
        {
          "@type": "Question",
          name: "Are Lagos Life houses real assets you can cash out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Property sits inside the simulated economy named in Terms §7 and Terms §8 frames economic and investment systems as game mechanics, while §5 states Game Naira cannot be withdrawn or redeemed and has no real cash value.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How much is rent in Lagos Life?",
    a: "Eight listings on the Lagos tab, 10 October 2026: ₦1,200 (UNILAG hall, students only), ₦2,400 (Mushin), ₦6,000 (Yaba), ₦17,000 (Lekki Phase 1), ₦45,000 (Ikate), ₦110,000 (Magodo GRA), ₦250,000 (Ikoyi), ₦1,500,000 (Banana Island). Charged every Saturday.",
  },
  {
    q: "Why is moving in three times the rent?",
    a: "Two weeks of rent prepaid plus one week of agent and agreement fees. All seven displayed move-in charges fit weekly rent × 3 — a pattern across displayed values, not a published rate.",
  },
  {
    q: "What is the cheapest home I can actually get?",
    a: 'Mushin is the cheapest home that is actually reachable: ₦2,400 a week and ₦7,200 to move in. The UNILAG hall displays less — ₦1,200 — but its button was disabled on 10 October 2026 with the line "For UNILAG students only: enrol at the Senate Building first". A low displayed price is not an accessible price.',
  },
  {
    q: "Can you sell a house in Lagos Life?",
    a: "A resale is displayed, not confirmed. The Mushin detail showed a resale value of ₦90,400 against its ₦113,000 buy price — exactly 80% — but no resale was completed in the observation, so we would not describe 80% as the game's resale rate. Either way, §5 means the proceeds are Game Naira with no real-world value.",
  },
  {
    q: "Which is better: renting or buying outright?",
    a: "On the displayed prices, buying to live in costs roughly 47–61 times that home's weekly rent (our arithmetic). So renting wins until you have close to sixty weeks of that home's rent in spare cash — cash that would earn more as a career or Invest decision while you are still on a starting wage.",
  },
] as const;

export default function HomesPage() {
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
          › Homes and rent · Unofficial, fan-run · Listings re-checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Homes: Every Rent, the Move-In Rule, and What Your First Wage
          Can Carry
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          The Lagos tab of Phone → Houses showed{" "}
          <strong className="font-semibold text-sand">eight homes</strong> on 10
          October 2026, from ₦1,200 a week to ₦1,500,000. Weekly rent is not what
          stops most new players, though — it is the{" "}
          <strong className="font-semibold text-sand">
            move-in charge, which is three times the weekly rent
          </strong>
          , paid once at the door.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          This page lays out all eight listings, works out the move-in maths, and
          then puts each home next to a real starting wage, because &quot;which
          house should I take&quot; is a salary question wearing a decoration
          question&apos;s clothes.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              If you only read one line:
            </strong>{" "}
            rent the{" "}
            <strong className="font-semibold text-sand">
              Mushin face-me-I-face-you
            </strong>{" "}
            — ₦2,400 a week, ₦7,200 to move in — and keep the money the cheaper
            bed saves you. On the best no-requirement starting wage (₦60,000 a
            week,{" "}
            <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
              see the wage table
            </Link>
            ), a Lekki Phase 1 mini-flat&apos;s ₦51,000 move-in alone eats{" "}
            <strong className="font-semibold text-sand">85% of one week</strong>{" "}
            before you have paid for anything else.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          All eight Lagos homes, as displayed
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Rent, move-in and outright prices are quoted from the 10 October 2026
          Phone → Houses → Homes observation. Displayed abbreviations are
          preserved.
        </p>

        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-3 font-semibold">Home</th>
                <th className="py-3 pr-3 text-right font-semibold">Rent / week</th>
                <th className="py-3 pr-3 text-right font-semibold">Move-in</th>
                <th className="py-3 text-right font-semibold">Buy to live</th>
              </tr>
            </thead>
            <tbody>
              {LAGOS_HOMES.map((row) => (
                <tr key={row.name} className="border-b border-line/70 align-top">
                  <td className="py-2.5 pr-3 text-ink-muted">
                    {row.name}
                    {row.note ? (
                      <span className="mt-0.5 block text-xs opacity-80">
                        ({row.note})
                      </span>
                    ) : null}
                  </td>
                  <td className="py-2.5 pr-3 text-right tabular-nums text-ink-muted">
                    {row.rent != null ? formatNaira(row.rent) : "—"}
                  </td>
                  <td className="py-2.5 pr-3 text-right tabular-nums text-ink-muted">
                    {row.moveIn != null ? formatNaira(row.moveIn) : "not shown"}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-ink-muted">
                    {row.buyLive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          Prices are displayed offers in Game Naira on that date, not a permanent
          catalogue. Abbreviations (k, m) follow the listing&apos;s own format.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The move-in charge: two weeks of rent, plus one week of fees
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Home detail panels describe the move-in charge as{" "}
          <strong className="font-semibold text-sand">
            two weeks of rent prepaid plus one week of agent and agreement fees
          </strong>
          . The Mushin panel breaks ₦7,200 into ₦4,800 (two weeks&apos; rent) and
          ₦2,400 (agent and agreement fees); the UNILAG hall breaks ₦3,600 into
          ₦2,400 prepaid and ₦1,200 fees.
        </p>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5 text-sm leading-relaxed text-ink-muted">
          <p className="font-semibold text-sand">
            Move-in charge = weekly rent × 3{" "}
            <span className="font-normal text-ink-muted">
              (Lagos Life Guide pattern-check)
            </span>
          </p>
          <p className="mt-2">
            All seven move-in charges displayed on 10 October 2026 fit it exactly:
            1,200→3,600 · 2,400→7,200 · 17,000→51,000 · 45,000→135,000 ·
            110,000→330,000 · 250,000→750,000 · 1,500,000→4,500,000. This is a
            pattern across displayed values, <em>not</em> an officially published
            universal fee rate — Yaba&apos;s move-in charge was not shown, so we
            did not fill it in by multiplication.
          </p>
        </div>

        <p className="mt-4 leading-relaxed text-ink-muted">
          The practical effect is that{" "}
          <strong className="font-semibold text-sand">
            the entry price of a home is three weeks of it, paid before you have
            earned anything that week.
          </strong>{" "}
          Players who budget for rent alone get blocked at the door by a 3×
          deposit, then conclude the game is pay-to-play. It is not — it is
          deposit-heavy.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What each home costs you in weeks of labour
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Wage references are the gross weekly totals from{" "}
          <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
            the career table
          </Link>
          : ₦60,000 is the best no-requirement start (Check-in Agent), ₦108,000 is
          the top displayed starting card (Newsroom Reporter, Estate Agent),
          ₦26,400 is the floor. All of this column is{" "}
          <strong className="font-semibold text-sand">our calculation</strong>, and
          it is gross — before needs, transport, taxes and fines.
        </p>

        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-2 font-semibold">Home</th>
                <th className="py-3 pr-2 text-right font-semibold">Move-in</th>
                <th className="py-3 pr-2 text-right font-semibold">
                  Weeks of ₦60k
                </th>
                <th className="py-3 pr-2 text-right font-semibold">
                  Rent % of ₦60k
                </th>
                <th className="py-3 text-right font-semibold">Rent % of ₦108k</th>
              </tr>
            </thead>
            <tbody>
              {AFFORD_ROWS.map((row) => (
                <tr key={row.name} className="border-b border-line/70 align-top">
                  <td className="py-2.5 pr-2 text-ink-muted">{row.name}</td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.moveIn}
                  </td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.weeksOf60k}
                  </td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.pctOf60k}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-ink-muted">
                    {row.pctOf108k}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5 text-sm leading-relaxed text-ink-muted">
          <p className="font-semibold text-sand">
            Three conclusions that fall out of the arithmetic{" "}
            <span className="font-normal text-ink-muted">
              (Lagos Life Guide calculation, not game rules)
            </span>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-sand">
                Wages cannot reach Magodo GRA.
              </strong>{" "}
              Its ₦110,000 weekly rent is above the highest displayed starting
              wage of ₦108,000 — before a single need is refilled. Magodo, Ikoyi
              and Banana Island are promotion-and-investment territory, not wage
              territory.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                Lekki Phase 1 is the real first stretch.
              </strong>{" "}
              At ₦17,000 a week it is 28.3% of a ₦60,000 week, and its ₦51,000
              move-in costs 85% of that same week. Doable, but only with saved
              wages, not in month one.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                Owning outright pays for itself in 47–61 weeks of rent.
              </strong>{" "}
              Dividing each buy-to-live price by that home&apos;s own weekly rent:
              Mushin 47.1, Yaba 52.0, Lekki 53.5, Ikate 55.6, Magodo 55.5, Ikoyi
              60.0, Banana Island 60.7 — a remarkably flat band. The game prices
              ownership almost as a multiple of rent rather than as a market.
            </li>
          </ul>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Which home first: the decision we would make
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Ours, not the game&apos;s: keep rent at or below a quarter of your gross
          weekly wage, because everything above that is paid out of the same
          purse as food, danfo fares and fines.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Week 1 — Mushin, ₦7,200.
            </strong>{" "}
            Six weeks of a ₦60,000 wage covers it outright, and ₦2,400 a week will
            not hurt you after one shift.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Once you hold about ₦150,000 saved — Yaba, ₦6,000/wk.
            </strong>{" "}
            We show no move-in figure because none was displayed for an account
            already living there. That cell is still awaiting a first-hand move.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              At a promoted wage, not a starting one — Lekki Phase 1.
            </strong>{" "}
            ₦17,000 a week needs roughly ₦68,000 of gross weekly income to sit at
            25%. That is between Check-in Agent (₦60,000) and the gated ceiling
            (₦108,000), which in practice means you should be looking at a
            promotion, not a better starting card.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Do not chase the UNILAG hall because it is cheap.
            </strong>{" "}
            Its button was disabled on 10 October 2026 with the displayed line
            &quot;For UNILAG students only: enrol at the Senate Building
            first&quot;. A low price is not an accessible price. The enrolment
            steps were not observed.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              Rent is charged every Saturday
            </strong>{" "}
            — the line reads on the Mushin detail panel. The same panel says that
            when you move to a <strong className="font-semibold text-sand">smaller</strong>{" "}
            home, furniture that no longer fits goes into storage. Both were read
            from the panel, not tested by completing a move. Whether the day you
            move in changes when your first Saturday charge lands is still
            undocumented — treat the Saturday cycle as the planning anchor until
            someone logs a completed move.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Homes vs Invest: two panels, two prices for the same building
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Phone → Houses → Invest separately lists properties <em>to rent out</em>
          , and its prices differ from the Homes tab&apos;s buy-to-live prices.
          Different prices for a same-named property from two panels with two
          purposes are{" "}
          <strong className="font-semibold text-sand">not a price increase</strong>{" "}
          — a point worth stating because copycat guides present the lower figure
          as a discount.
        </p>

        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-2 font-semibold">Property</th>
                <th className="py-3 pr-2 text-right font-semibold">
                  Homes — buy to live
                </th>
                <th className="py-3 pr-2 text-right font-semibold">
                  Invest — purchase
                </th>
                <th className="py-3 text-right font-semibold">
                  Invest ÷ weekly rent{" "}
                  <span className="font-normal text-ink-muted">(ours)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {INVEST_ROWS.map((row) => (
                <tr key={row.name} className="border-b border-line/70 align-top">
                  <td className="py-2.5 pr-2 text-ink-muted">{row.name}</td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.buyLive}
                  </td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.invest}
                    {row.need ? (
                      <span className="ml-1 text-xs text-jollof">Need</span>
                    ) : null}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-ink-muted">
                    {row.ratio}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          <strong className="font-semibold text-sand">Need</strong> appeared on
          disabled buttons where the observing account&apos;s balance was
          insufficient — it is a balance message, not a discount or out-of-stock
          notice. The last column is ours and needs its assumption stated: Invest
          lists weekly rental income, but no player observation we could find
          records an actual landlord payment, so we divided the Invest purchase
          price by that same property&apos;s <em>displayed tenant rent</em> as a
          rough shape — 10.8 to 14.{" "}
          <strong className="font-semibold text-sand">
            That ratio is not a payback period and not a return.
          </strong>
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Buying, renting and moving: the exact paths
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">Rent a home:</strong> Phone
            → Houses → Homes → listing → <em>Rent it · ₦7,200</em> (Mushin).
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Own a home to live in:
            </strong>{" "}
            Phone → Houses → Homes → listing → <em>Buy &amp; move in</em>.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Buy a property to rent out:
            </strong>{" "}
            Phone → Houses → Invest → <em>Buy</em>.
          </li>
          <li>
            <strong className="font-semibold text-sand">Neighbours:</strong> a panel
            titled <em>Neighbours</em>, reached through Map → Neighbours (checked
            7 October 2026).
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-ink-muted">
          These are the button paths as displayed.{" "}
          <strong className="font-semibold text-sand">
            No move, purchase, transfer or visit was completed in the observations
            we cite
          </strong>
          , and neither was a resale — the Mushin detail displayed a resale value
          of ₦90,400, which is exactly 80% of its ₦113,000 price, but that
          percentage is one displayed pair, not a published resale rule.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Two questions people ask that the game answers with &quot;no&quot;
        </h2>

        <h3 className="font-display mt-8 text-xl font-semibold text-sand">
          Is a Lagos Life house a real asset?
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          No. Terms §7 places property inside the simulated economy, §8 identifies
          economic and investment systems as game mechanics, and §5 states Game
          Naira cannot be withdrawn or redeemed and has no real cash value.
          Selling virtual property for real money is prohibited. Anyone offering
          to buy your Banana Island mansion for naira is either a scam or a Terms
          violation.
        </p>

        <h3 className="font-display mt-8 text-xl font-semibold text-sand">
          What happens to my home if I delete my account?
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Do not expect it gone. The Privacy Policy includes properties, virtual
          assets and game progress among the data it processes (§2), and account
          deletion is described as{" "}
          <strong className="font-semibold text-sand">soft deletion</strong>: the
          account becomes inaccessible while records may be retained for
          transaction ledgers, fraud and abuse prevention, payment reconciliation,
          chargebacks, moderation history and legal compliance (§§10–12). Full
          breakdown:{" "}
          <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
            is Lagos Life safe?
          </Link>
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What nobody has verified yet
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            Completed moves, purchases, resales and visiting permissions — button
            paths only.
          </li>
          <li>
            The Saturday rent charge itself, furniture storage after downsizing,
            investment income receipt and distribution, and the steps that grant
            UNILAG housing eligibility.
          </li>
          <li>
            Yaba&apos;s move-in charge and the UNILAG hall&apos;s outright price
            (neither was displayed).
          </li>
          <li>
            Whether a listing&apos;s rent or sale price has been rebalanced since
            the last check — expect it:{" "}
            <strong className="font-semibold text-sand">
              Terms §7 reserves adjustment of prices and asset values
            </strong>
            , which is why an older map counter is not a current inventory.
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

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Sources
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
          <li>
            Player observation, 10 Oct 2026 — Phone → Houses → Homes and Invest (
            <a
              href="https://lagoslife.org/houses/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.org/houses
            </a>
            )
          </li>
          <li>
            Player observation, 8 Oct 2026 — 33 starting-role career cards used for
            the weeks-of-labour column (
            <a
              href="https://lagoslife.org/jobs/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.org/jobs
            </a>
            )
          </li>
          <li>
            Lagos Life Terms of Use, effective 1 Oct 2026 — §§5, 7, 8 (
            <a
              href={OFFICIAL_GAME.terms}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/terms
            </a>
            )
          </li>
          <li>
            Lagos Life Privacy &amp; Cookie Policy, effective 1 Oct 2026 — §2,
            §§10–12 (
            <a
              href={OFFICIAL_GAME.privacy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/privacy
            </a>
            )
          </li>
          <li>
            Every weeks-of-wage figure, the ×3 move-in pattern check, the 47–61 and
            10.8–14 ratios, and the 80% resale note:{" "}
            <strong className="font-semibold text-sand">our own calculation</strong>{" "}
            from the displayed values above.
          </li>
        </ul>

        <div className="mt-10 rounded-xl border border-amber/30 bg-amber/10 p-5">
          <p className="font-semibold text-sand">Next</p>
          <p className="mt-2 text-ink-muted">
            <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
              earn virtual naira
            </Link>{" "}
            ·{" "}
            <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
              first 30 minutes
            </Link>{" "}
            ·{" "}
            <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
              working link
            </Link>
          </p>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Lagos Life Guide is an independent, fan-run guide and is not affiliated
          with Lagos Life or its developer. All prices are dated third-party
          in-game observations, not official published data, and no purchase or
          move was completed in the checks we cite. Nothing here is real-estate or
          financial advice — per Terms §5, property and naira in Lagos Life have
          no withdrawable value.
        </p>
      </main>
    </>
  );
}
