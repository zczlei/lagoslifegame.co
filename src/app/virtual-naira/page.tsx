import type { Metadata } from "next";
import Link from "next/link";
import { CAREERS, formatNaira } from "@/data/careers";
import { RENT_VS_WAGE } from "@/data/homes";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.virtualNaira.title },
  description: TDK.virtualNaira.description,
  alternates: { canonical: "/virtual-naira/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.virtualNaira.title,
    description:
      "33 careers turned into weekly pay, the rent each one can carry, and the bank rates nobody needs yet.",
    url: `${SITE.url}/virtual-naira/`,
    images: [
      {
        url: "/og/naira.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.virtualNaira.title,
    description: TDK.virtualNaira.description,
    images: ["/og/naira.png"],
  },
  other: { "last-modified": SITE.lastUpdatedIso },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/virtual-naira/#webpage`,
      url: `${SITE.url}/virtual-naira/`,
      name: TDK.virtualNaira.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life Jobs — 33 Careers and Pay per Shift (player observation, 8 Oct 2026)",
          url: "https://lagoslife.org/jobs/",
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Money — How to Earn (player observation, 7-8 Oct 2026)",
          url: "https://lagoslife.org/money/",
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
          name: "How to earn virtual naira",
          item: `${SITE.url}/virtual-naira/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you earn virtual naira in Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through the Phone → Jobs panel, which listed 33 career cards on 8 October 2026. Each card shows a starting role, an amount in Game Naira per shift and a number of working days per week, so weekly pay is shift pay multiplied by working days.",
          },
        },
        {
          "@type": "Question",
          name: "Which Lagos Life job pays the most per week?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Of the 33 starting-role cards observed on 8 October 2026, Broadcasting → Newsroom Reporter and Real Estate → Estate Agent both display ₦18,000 across six working days, which is ₦108,000 a week — the largest figure once working days are counted. Both show a displayed skill requirement of comedy 3 and charisma 3.",
          },
        },
        {
          "@type": "Question",
          name: "Does the highest Lagos Life salary per shift pay the most overall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Medicine → House Officer shows the largest per-shift amount at ₦21,000, but only five working days, so ₦105,000 a week — below the ₦108,000 from two six-day roles.",
          },
        },
        {
          "@type": "Question",
          name: "What is the easiest Lagos Life job to start without skill requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Among cards that displayed no skill threshold and a confirmed venue, Aviation → Airport Staff, Check-in Agent at Murtala Muhammed shows ₦12,000 across five days, ₦60,000 a week. Refining → Operator Trainee shows ₦14,000 across five days, ₦70,000, but the map still marked the refinery as coming soon on the same observation.",
          },
        },
        {
          "@type": "Question",
          name: "Can you cash out Lagos Life naira?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Terms §5 states Game Naira is fictional, is not legal tender, cannot be withdrawn to a bank account and cannot be redeemed for real money, and prohibits selling it for real money or running an exchange.",
          },
        },
        {
          "@type": "Question",
          name: "Do Lagos Life salaries change?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, at the operator's discretion. Terms §7 reserves the ability to adjust salaries, payouts, prices, skill requirements, tax rates, asset values, job requirements and event multipliers, which is why this page is dated and worth re-checking.",
          },
        },
        {
          "@type": "Question",
          name: "Does Money History show everything you earned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Bank screen observed on 7 October 2026 described Money History as recording money sent to or received from a partner, not every wage, reward or starting credit — so it cannot be used to audit your own income.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How do you earn virtual naira in Lagos Life?",
    a: "Take a route from Phone → Jobs, which listed 33 career cards on 8 October 2026. Each shows a starting role, Game Naira per shift and working days per week. Weekly pay is shift pay × working days.",
  },
  {
    q: "Which job pays the most per week?",
    a: (
      <>
        Among starting cards: Newsroom Reporter (comedy 3) and Estate Agent
        (charisma 3), both ₦18,000 × 6 days ={" "}
        <strong className="font-semibold text-sand">₦108,000</strong>. House
        Officer has the biggest per-shift number at ₦21,000 but only five days,
        so ₦105,000 a week — below two six-day roles paying ₦18,000. Working days
        behave like a pay column.
      </>
    ),
  },
  {
    q: "What is the best Lagos Life job with no skill requirement?",
    a: 'Among cards showing no skill threshold and a confirmed venue: Airport Staff, Check-in Agent at ₦12,000 × 5 days = ₦60,000. Refining → Operator Trainee displays more (₦14,000 × 5 = ₦70,000), but the same observation found the refinery marked "Coming soon" on the map, so treat it as unconfirmed.',
  },
  {
    q: "Can you cash out Lagos Life naira?",
    a: "No. Terms §5 states Game Naira is fictional, is not legal tender, cannot be withdrawn to a bank account and cannot be redeemed for real money, and that selling it for real money or running an exchange is prohibited.",
  },
  {
    q: "Do these salaries change?",
    a: "Yes, at the operator's discretion — Terms §7 reserves adjustment of salaries, payouts, prices, tax rates, skill requirements, asset values and job requirements. Every figure here is dated to the 8 October 2026 card set.",
  },
  {
    q: "Can I check what I earned?",
    a: "Not fully. Bank → Money History, observed 7 October 2026, records only transfers sent to or received from a partner — not wages, rewards or starting credit.",
  },
] as const;

export default function VirtualNairaPage() {
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
          › How to earn virtual naira · Unofficial, fan-run · Wages re-checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          How to Earn Virtual Naira in Lagos Life: All 33 Careers, Ranked by Week
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Lagos Life&apos;s Jobs panel quotes every career{" "}
          <strong className="font-semibold text-sand">per shift</strong>, and that
          single number hides the real ranking. Three of the cards showing
          ₦18,000–₦21,000 are not the top earners once you multiply by working
          days — and two jobs with identical shift pay sit ₦6,000 apart per week
          because of their schedules.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          So this page does the arithmetic the game will not do for you: all 33
          observed starting roles converted to weekly pay, then compared against
          what housing actually costs. Game values are quoted as displayed by
          other players&apos; dated observations; every total is{" "}
          <strong className="font-semibold text-sand">our calculation</strong> and
          is labelled as such.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-display text-xl font-semibold text-sand">
            Three numbers that decide your first week
          </p>
          <div className="mt-4 -mx-1 overflow-x-auto px-1">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <tbody>
                <tr className="border-b border-line/50 align-top">
                  <th className="py-3 pr-3 font-semibold text-sand">Floor</th>
                  <td className="py-3 pr-3 text-right font-semibold tabular-nums text-amber">
                    ₦26,400/wk
                  </td>
                  <td className="py-3 text-ink-muted">
                    Lounge Waiting → Waiter and Football → Viewing Centre
                    Attendant (₦6,600 × 4 days)
                  </td>
                </tr>
                <tr className="border-b border-line/50 align-top">
                  <th className="py-3 pr-3 font-semibold text-sand">
                    Best no-requirement start
                  </th>
                  <td className="py-3 pr-3 text-right font-semibold tabular-nums text-amber">
                    ₦60,000/wk
                  </td>
                  <td className="py-3 text-ink-muted">
                    Aviation → Airport Staff, Check-in Agent (₦12,000 × 5 days,
                    no skill threshold shown)
                  </td>
                </tr>
                <tr className="align-top">
                  <th className="py-3 pr-3 font-semibold text-sand">
                    Ceiling on a starting card
                  </th>
                  <td className="py-3 pr-3 text-right font-semibold tabular-nums text-amber">
                    ₦108,000/wk
                  </td>
                  <td className="py-3 text-ink-muted">
                    Broadcasting → Newsroom Reporter (comedy 3) and Real Estate →
                    Estate Agent (charisma 3), both ₦18,000 × 6 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Spread from floor to ceiling:{" "}
            <strong className="font-semibold text-sand">
              4.1× on the same amount of in-game time
            </strong>
            . Choosing a career is the biggest early-money decision in the game.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The one rule before you read the table
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Two fields on a career card mean different things, and mixing them up
          is how people pick a bad job:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">₦ per shift</strong> — the
            amount advertised for one shift. All 33 cards state 1-hour shifts,
            any time.
          </li>
          <li>
            <strong className="font-semibold text-sand">Work days per week</strong>{" "}
            — a schedule field (4, 5 or 6), <em>not</em> a pay unit.
          </li>
        </ul>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5 text-sm leading-relaxed text-ink-muted">
          <p className="font-semibold text-sand">
            Weekly pay = ₦ per shift × work days per week{" "}
            <span className="font-normal text-ink-muted">
              (Lagos Life Guide calculation)
            </span>
          </p>
          <p className="mt-2">
            Assumptions, stated plainly: it assumes you complete every listed
            day&apos;s shift at the displayed card amount, and it is gross —
            before taxes, needs, rent, transport, fines or bonuses.
            Completed-shift receipts, deductions and net income have not been
            reconciled by any player observation we could find. Treat each total
            as the <em>ceiling your wage could reach</em>, not your take-home.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          All 33 careers, ranked by weekly pay
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Shift pay, working days and displayed requirements are quoted from the
          8 October 2026 Phone → Jobs observation (23 cards in the Lagos group, 5
          Abuja, 5 Port Harcourt). The weekly column is ours.
        </p>

        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-2 font-semibold">Career → starting role</th>
                <th className="py-3 pr-2 font-semibold">Venue / area</th>
                <th className="py-3 pr-2 text-right font-semibold">₦ / shift</th>
                <th className="py-3 pr-2 text-right font-semibold">Days</th>
                <th className="py-3 pr-2 text-right font-semibold">
                  ₦ / week{" "}
                  <span className="font-normal text-ink-muted">(ours)</span>
                </th>
                <th className="py-3 font-semibold">Requirement</th>
              </tr>
            </thead>
            <tbody>
              {CAREERS.map((row) => (
                <tr key={row.career} className="border-b border-line/70 align-top">
                  <td className="py-2.5 pr-2 text-sand">{row.career}</td>
                  <td className="py-2.5 pr-2 text-ink-muted">
                    {row.venue}
                    {row.note ? (
                      <span className="mt-0.5 block text-xs opacity-80">
                        ({row.note})
                      </span>
                    ) : null}
                  </td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {formatNaira(row.shift)}
                  </td>
                  <td className="py-2.5 pr-2 text-right tabular-nums text-ink-muted">
                    {row.days}
                  </td>
                  <td className="py-2.5 pr-2 text-right font-semibold tabular-nums text-amber">
                    {formatNaira(row.week)}
                  </td>
                  <td className="py-2.5 text-ink-muted">{row.req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          Sorted by our weekly total. Rows are the 8 Oct 2026 starting-role cards
          — they are not every promotion level. &quot;None shown&quot; means the
          card displayed no skill threshold; it does not prove there are no other
          requirements.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Why ₦21,000 a shift is not the top job
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Medicine → House Officer has the biggest number on any card: ₦21,000 per
          shift. But it is a five-day schedule, so ₦105,000 a week —{" "}
          <strong className="font-semibold text-sand">below</strong> two six-day
          roles paying ₦18,000 a shift. The same trap at the bottom: DJ → Hype Man
          shows ₦8,300, the same as Teaching → Lesson Teacher, yet teaching is
          ₦8,300 a week higher because it runs five days, not four.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          The lesson is worth carrying into every future patch:{" "}
          <strong className="font-semibold text-sand">
            on Lagos Life cards, working days are a pay column disguised as a
            schedule.
          </strong>
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What each wage can actually carry
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Weekly rent is charged every Saturday across eight Lagos listings, so a
          wage only means something next to a home. Percentages below are ours.
        </p>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-3 font-semibold">Home (Lagos tab, 10 Oct 2026)</th>
                <th className="py-3 pr-3 text-right font-semibold">Rent / week</th>
                <th className="py-3 pr-3 text-right font-semibold">% of ₦60k/wk</th>
                <th className="py-3 text-right font-semibold">% of ₦26.4k/wk</th>
              </tr>
            </thead>
            <tbody>
              {RENT_VS_WAGE.map((row) => (
                <tr key={row.home} className="border-b border-line/70 align-top">
                  <td className="py-2.5 pr-3 text-ink-muted">
                    {row.home}
                    {"note" in row && row.note ? (
                      <span className="text-xs opacity-80"> ({row.note})</span>
                    ) : null}
                  </td>
                  <td className="py-2.5 pr-3 text-right tabular-nums text-ink-muted">
                    {formatNaira(row.rent)}
                  </td>
                  <td className="py-2.5 pr-3 text-right tabular-nums text-ink-muted">
                    {row.pct60}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-ink-muted">
                    {row.pct26}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5 text-sm leading-relaxed text-ink-muted">
          <p className="font-semibold text-sand">
            Two conclusions from that table{" "}
            <span className="font-normal text-ink-muted">
              (Lagos Life Guide calculation, not a game rule)
            </span>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="font-semibold text-sand">
                Even the highest displayed starting wage cannot rent Magodo GRA.
              </strong>{" "}
              ₦110,000 a week of rent exceeds the ₦108,000 ceiling from the 33
              starting cards — before food, transport or fines. Ikoyi and Banana
              Island are investment or promotion territory, not wage territory.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                Rent is only a rounding error at the bottom.
              </strong>{" "}
              On a ₦60,000 Check-in Agent week, Mushin costs 4%. What actually
              constrains a beginner is the one-off{" "}
              <strong className="font-semibold text-sand">move-in charge</strong>{" "}
              — see{" "}
              <Link href="/homes/" className="text-amber-hot hover:text-sand">
                Lagos Life homes, rent and move-in cost
              </Link>
              .
            </li>
          </ul>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Other ways money moves — and where it quietly leaves
        </h2>

        <h3 className="font-display mt-8 text-xl font-semibold text-sand">
          Money you can see elsewhere
        </h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Promotions beat job-hopping on paper.
            </strong>{" "}
            The same observation recorded Trading as Shop Assistant ₦8,300 on the
            starting card, while the promoted role (Stall Owner, Trading Level 2)
            displayed ₦16,500 — roughly double, without changing career. The
            displayed next step was &quot;Wholesaler — reach 100% with hustle
            level 3&quot;, recorded as a displayed condition, not a completed
            promotion.
          </li>
          <li>
            <strong className="font-semibold text-sand">Naija Reserve Bank</strong>
            , as displayed on 7 Oct 2026: Savings{" "}
            <strong className="font-semibold text-sand">0.5% a week</strong>, Bonds{" "}
            <strong className="font-semibold text-sand">2% in 7 days</strong>.
            Neither payout was completed or verified.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Public office and policing
            </strong>{" "}
            are separate pots: the Lagos Gov tab displayed a{" "}
            <strong className="font-semibold text-sand">₦50,000 candidacy fee</strong>{" "}
            (displayed expense, deduction unconfirmed), and the Police panel
            described an EFCC raid as covering <em>cash</em> only, not the
            topped-up portion — a panel declaration, not a tested outcome.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Gifts and player transfers
            </strong>{" "}
            are named in Terms §7 as part of the economy.
          </li>
        </ul>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5 text-sm leading-relaxed text-ink-muted">
          <p className="font-semibold text-sand">
            Why the bank is irrelevant while you are broke{" "}
            <span className="font-normal text-ink-muted">
              (Lagos Life Guide calculation on displayed rates)
            </span>
          </p>
          <p className="mt-2">
            Bonds are 4× savings over the same seven days, but at the highest
            displayed weekly wage of ₦108,000, 2% of it parked is{" "}
            <strong className="font-semibold text-sand">₦2,160 a week</strong> —
            less than the cheapest shift on any card (₦6,600). For bond yield to
            out-earn your job you would need{" "}
            <strong className="font-semibold text-sand">₦5.4m</strong> in principal.
            Early on, a career decision is worth more than the entire banking
            system.
          </p>
        </div>

        <h3 className="font-display mt-10 text-xl font-semibold text-sand">
          Money that leaves
        </h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Weekly rent, every Saturday
            </strong>{" "}
            — read from the home panel, not tested by a completed move.
          </li>
          <li>
            <strong className="font-semibold text-sand">Needs upkeep.</strong>{" "}
            Needs decay on their own clocks and refilling them costs money. Rates
            and a weekly living-cost table are still awaiting a first-hand game
            check — we are not inventing those numbers here.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Transport, repairs, insurance, taxes, fines and penalties
            </strong>{" "}
            are all named in Terms §7. Rates and triggers are not published;
            nobody has recorded them.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Balances obtained through fraud, duplication or exploits may be
              corrected or reversed
            </strong>{" "}
            per the same section. See{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              is Lagos Life safe?
            </Link>{" "}
            for why &quot;naira generator&quot; sites are phishing pages, not
            cheats.
          </li>
        </ul>

        <div className="mt-6 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              Money History will not audit your income.
            </strong>{" "}
            The Bank screen&apos;s Money History, observed 7 October 2026, records
            money sent to or received from <em>a partner</em> — not every wage,
            reward or starting credit. So an empty history proves nothing about
            what you earned, and a screenshot of it is not evidence of income.
            Anyone selling you a &quot;Lagos Life earnings proof&quot; is relying
            on that gap.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Top-ups: what you are actually buying
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Optional naira are purchased through{" "}
          <strong className="font-semibold text-sand">Flutterwave</strong> (Terms
          §6). Three things worth reading before you pay:
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              It cannot come back out.
            </strong>{" "}
            Terms §5 is explicit: Game Naira is fictional, is not legal tender,
            cannot be withdrawn to a bank account, cannot be redeemed for real
            money, and selling it for real money or operating an exchange is
            prohibited.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              It is a game mechanic, not an investment.
            </strong>{" "}
            Terms §8 frames economic and investment systems as mechanics.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Refunds are governed by §10
            </strong>
            , and payments made before 6 October 2026 ran through a different
            processor (Bachs) — relevant if you ever need to trace an old charge.
            Full wording:{" "}
            <a
              href={OFFICIAL_GAME.terms}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/terms
            </a>
            .
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Spending real money to skip the wage ladder is a legitimate choice —
          but do it knowing{" "}
          <strong className="font-semibold text-sand">
            there is no exit and no cash value
          </strong>
          . A player asking &quot;can I earn real money from Lagos Life?&quot; has
          already met the scam version of this game; the real answer is the
          sentence above.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Why this page will go out of date
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Every figure here is a dated observation, and the game says so itself:
          Terms §7 reserves the operator&apos;s right to adjust{" "}
          <strong className="font-semibold text-sand">
            prices, salaries, payouts, skill requirements, virtual tax rates,
            probabilities, promotional multipliers, economic events, item
            availability, asset values, job requirements and transaction limits
          </strong>
          . Balances from exploits may be reversed. That is why we date every
          number, and why you should expect the weekly-wage order to shuffle after
          the first rebalance.
        </p>

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
            Player observation, 8 Oct 2026 — Phone → Jobs, 33 starting-role cards
            (
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
            Player observation, 7 Oct 2026 — Bank → Naija Reserve Bank rates and
            Money History (
            <a
              href="https://lagoslife.org/money/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.org/money
            </a>
            )
          </li>
          <li>
            Player observation, 10 Oct 2026 — Phone → Houses → Homes, Lagos tab
            rent (
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
            Lagos Life Terms of Use, effective 1 Oct 2026 — §§5, 6, 7, 8, 10 (
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
            Weekly-pay totals, percentages and the bond principal figure:{" "}
            <strong className="font-semibold text-sand">our own calculation</strong>{" "}
            from the displayed values above.
          </li>
        </ul>

        <div className="mt-10 rounded-xl border border-amber/30 bg-amber/10 p-5">
          <p className="font-semibold text-sand">Next</p>
          <p className="mt-2 text-ink-muted">
            <Link href="/homes/" className="text-amber-hot hover:text-sand">
              homes, rent &amp; move-in
            </Link>{" "}
            ·{" "}
            <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
              first 30 minutes
            </Link>{" "}
            ·{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              safety
            </Link>
          </p>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Lagos Life Guide is an independent, fan-run guide and is not affiliated
          with Lagos Life or its developer. Money figures are dated third-party
          in-game observations, not official published data and not guarantees.
          Nothing here is financial advice — per Terms §5, no in-game money can
          be converted to real money.
        </p>
      </main>
    </>
  );
}
