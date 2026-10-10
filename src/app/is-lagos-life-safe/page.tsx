import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.safe.title },
  description: TDK.safe.description,
  alternates: { canonical: "/is-lagos-life-safe/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.safe.title,
    description: TDK.safe.description,
    url: `${SITE.url}/is-lagos-life-safe/`,
    images: [
      {
        url: "/og/safe.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.safe.title,
    description: TDK.safe.description,
    images: ["/og/safe.png"],
  },
  other: {
    "last-modified": SITE.lastUpdatedIso,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/is-lagos-life-safe/#webpage`,
      url: `${SITE.url}/is-lagos-life-safe/`,
      name: "Is Lagos Life Safe? What Players Should Know Before Signing Up",
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      publisher: { "@id": `${SITE.url}/#publisher` },
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life Privacy & Cookie Policy, effective 1 October 2026",
          url: OFFICIAL_GAME.privacy,
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Is Lagos Life safe?",
          item: `${SITE.url}/is-lagos-life-safe/`,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Is Lagos Life Safe? What Players Should Know Before Signing Up",
      datePublished: SITE.lastUpdatedIso,
      author: { "@id": `${SITE.url}/#publisher` },
      isPartOf: { "@id": `${SITE.url}/is-lagos-life-safe/#webpage` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the Lagos Life game safe to play?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game itself is run by an identified Nigerian developer, Shalom Rayhamen, who operates as Eliy, and it publishes terms and a privacy policy. The real hazards are around it rather than in it: open chat with strangers, a virtual currency that cannot be cashed out, and a wave of fake download and hack pages.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life an 18+ game?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The terms say the game is intended only for people aged 18 or over, and that accounts believed to belong to younger players may be suspended or terminated.",
          },
        },
        {
          "@type": "Question",
          name: "Can you earn real money in Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The terms state that Game Naira is a fictional unit, is not legal tender, cannot be withdrawn to a bank account, cannot be redeemed for real money, and that selling it for real money or running an exchange is prohibited.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lagos Life collect personal data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Its privacy policy lists account details, avatar choice, gameplay and economy records, social messages including direct messages, payment references, and technical data such as IP address, plus device fingerprinting for fraud and abuse prevention. It says it does not currently collect real-world GPS location and does not currently offer social login.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a Lagos Life hack or naira generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No legitimate one. Balances, rent and elections are held server-side, so anything promising free naira is after your password or your money.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life a scam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game is a real commercial product with named operator, terms, a privacy policy and a documented payment provider. Player counters come from the developer's own dashboard and have not been independently audited, which is normal for a game this young and worth stating rather than repeating as fact.",
          },
        },
        {
          "@type": "Question",
          name: "Does deleting a Lagos Life account erase everything?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The policy describes soft deletion: the account becomes inaccessible while some records remain for transaction ledgers, fraud and abuse prevention, payment reconciliation, chargebacks, moderation history and legal compliance.",
          },
        },
      ],
    },
  ],
};

const verdictRows = [
  {
    label: "The game itself",
    ok: true,
    text: "Legitimate product, named operator, public terms and privacy policy",
  },
  {
    label: "Your money",
    ok: false,
    text: 'Only ever top-up spend — Game Naira cannot be cashed out, so anyone selling you "real earnings" is lying',
  },
  {
    label: "Your data",
    ok: true,
    text: "Narrower than most free games (no GPS, no social login), but messages and gameplay are stored",
  },
  {
    label: "The people",
    ok: false,
    text: "Open real-time chat with strangers; moderation exists but a young team cannot police millions",
  },
  {
    label: "Age",
    ok: false,
    text: "Officially 18+. Anyone younger is breaking the terms",
  },
  {
    label: "Biggest practical risk",
    ok: false,
    text: "Not the game — the copycat sites, APKs and \"hacks\" around it",
  },
] as const;

const collectRows = [
  {
    cat: "Account",
    detail:
      "Display name, username/handle, email, password or password authentication data, account identifiers, creation date, status, authentication and security information. The policy states passwords should be stored under cryptographic protection, not as readable plaintext.",
  },
  {
    cat: "Avatar",
    detail: "Your man/woman selection for customisation",
  },
  {
    cat: "Gameplay",
    detail:
      "Balances, virtual transactions, player-to-player transfers, purchases, jobs, skills, experience, assets, properties, investments, relationships, venue activity, progress, achievements, penalties, events",
  },
  {
    cat: "Social",
    detail:
      "Public messages, venue chat, direct messages, posts, comments, reactions, stickers, profiles, reports, blocks, moderation records",
  },
  {
    cat: "Payment",
    detail:
      "Transaction reference, amount, currency, status, time, product, transaction identifiers. Card and bank credentials are stated to sit with the payment provider rather than being stored by Lagos Life.",
  },
  {
    cat: "Device & security",
    detail:
      "IP address, browser type, OS, device characteristics, session info, cookies, security identifiers, server logs, errors — plus fingerprinting aimed at account farming, bots, automation and restriction circumvention",
  },
] as const;

const scamRows = [
  {
    pitch: '"Convert your naira to cash / withdraw earnings"',
    why: "Redeeming is explicitly impossible; this is either theft or a fee scam",
  },
  {
    pitch: '"Buy a high-balance account / Sea Plot for cash"',
    why: "Account trading is banned in §3; the seller keeps recovery rights, you lose both",
  },
  {
    pitch: '"Naira generator / link hack"',
    why: "Balances are server-side; it is a password-harvest page",
  },
  {
    pitch: '"Official top-up agent, pay me on WhatsApp"',
    why: "Top-ups run through the in-game payment provider, not a person's account",
  },
] as const;

const checklist = [
  "Unique password, never reused anywhere else.",
  "Give an email — the recovery path you will want later.",
  "Open it only via the verified link, in a real browser.",
  "Never pay anyone to progress, and never buy balance off-game.",
  "Never share card or password details in game chat.",
  'Treat every "withdrawal" or "hack" offer as a scam.',
  "Screenshot and report harassment; block exists as a tool.",
  "Keep your real location, job and school out of your profile.",
  "Under 18, do not create an account — you are breaking §2.",
  "If you delete, understand it is soft deletion, not erasure.",
] as const;

const faqs = [
  {
    q: "Is Lagos Life safe for kids?",
    a: "No, by its own rules — it is 18+ and it is a public chat world with real money in-game purchases. If a teenager is playing anyway, the missing piece is not the game's code but the fact that they are talking to adults with no age verification on either side.",
  },
  {
    q: "Is it safe to add money?",
    a: (
      <>
        Payments run through Flutterwave inside the game, so treat it like any
        online purchase: small amounts, your own payment method, keep the
        transaction reference, and check the ledger before contacting support at{" "}
        <a
          href={`mailto:${OFFICIAL_GAME.supportEmail}`}
          className="text-amber-hot hover:text-sand"
        >
          {OFFICIAL_GAME.supportEmail}
        </a>{" "}
        (named in §20 of the privacy policy).
      </>
    ),
  },
  {
    q: "Does Lagos Life steal your data?",
    a: "It collects what a persistent multiplayer game needs, and it names its vendors. It states it does not collect real-world GPS and does not currently offer social login. It is not a data-harvesting front — but a soft-deleted account is not a wiped account.",
  },
  {
    q: "Can I lose my character?",
    a: "Yes, legitimately: §19 enforcement and soft deletion sit in the terms, and §16 of the policy covers automated security decisions, so ban waves driven by fingerprinting and bot detection are part of the design. Log in only from the browser you registered with, and keep a real email attached.",
  },
  {
    q: "Is the game itself malware?",
    a: "Nothing we reviewed suggests that. It is browser-based, states no ad trackers on its landing page, and its policy separates necessary from optional cookies. The malware risk in this story lives entirely on the fake-download side of the search results.",
  },
] as const;

export default function IsLagosLifeSafePage() {
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
          › Is Lagos Life safe? · Unofficial, fan-run · Policies re-checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Is Lagos Life Safe? The Honest Answer, and the Risks Nobody Mentions
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Yes — the game is safe in the sense that matters most: it is real, it
          has a named operator, and it publishes its own rules. But it is an{" "}
          <strong className="font-semibold text-sand">18+ world full of strangers</strong>,
          its money{" "}
          <strong className="font-semibold text-sand">cannot be turned into cash</strong>,
          and there is now a swarm of fake &quot;Lagos Life download&quot; pages
          built to harvest sign-ups. Those are the things that actually hurt
          players.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-display text-xl font-semibold text-sand">Verdict</p>
          <div className="mt-4 -mx-1 overflow-x-auto px-1">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <tbody>
                {verdictRows.map((row) => (
                  <tr key={row.label} className="border-b border-line/50 align-top">
                    <th className="py-3 pr-4 font-semibold text-sand">{row.label}</th>
                    <td
                      className={
                        row.ok
                          ? "py-3 font-semibold text-[#9ae6b4]"
                          : "py-3 font-semibold text-[#fecaca]"
                      }
                    >
                      {row.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          First: are you asking about the city instead?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Search engines keep mixing <em>Lagos Life</em> the game with{" "}
          <em>Lagos</em> the city, so you may have landed here looking for travel
          safety. If so: this page is about the browser game only, and nothing
          here describes real-world conditions in Lagos.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Is Lagos Life real, or a scam?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          It is real. The game launched on{" "}
          <strong className="font-semibold text-sand">1 October 2026</strong> and
          went viral within days; Vanguard News reported more than a million
          players by 6 October, citing the developer&apos;s own dashboard figures
          of roughly 1.2 million players and 71,000 online (peak claim above
          100,000 simultaneous). Those numbers come from the game&apos;s own
          stats page and are{" "}
          <strong className="font-semibold text-sand">not independently audited</strong>{" "}
          — treat them as claimed, not verified.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          What makes it safe to engage with at all: the operator is named. The{" "}
          <a
            href={OFFICIAL_GAME.terms}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            Terms of Use
          </a>{" "}
          and the{" "}
          <a
            href={OFFICIAL_GAME.privacy}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            Privacy &amp; Cookie Policy
          </a>
          , both effective 1 October 2026, state that Lagos Life is operated by{" "}
          <strong className="font-semibold text-sand">
            {OFFICIAL_GAME.creator}, Nigeria
          </strong>
          , who publishes under the name Eliy. It names its infrastructure host
          (DigitalOcean) and its payment processor (Flutterwave, with Bachs
          handling payments made before 6 October 2026), and it gives a
          data-protection contact in the policy. A scam does not usually publish
          who to email when money goes missing.
        </p>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/10 p-5">
          <p className="font-semibold text-sand">
            Automated &quot;scam checkers&quot; will still score it badly.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            One scanner currently lists lagoslife.app at{" "}
            <strong className="font-semibold text-sand">53/100</strong>, wording
            it as &quot;not a confirmed scam, but cautionary signals&quot;. That
            is what a young domain on a young TLD looks like to an algorithm: no
            age, no history, no filings. These tools are also widely criticised
            for scoring honest new sites low — do not treat a number like that as
            evidence, and do not treat a high number on a copycat domain as
            safety either.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What the game does <em>not</em> collect
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Section 3 of the policy has a &quot;information we do not intentionally
          collect&quot; list, which is rare and worth reading before you judge
          the privacy trade:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">No real-world GPS location</strong>{" "}
            for gameplay. It says plainly that your in-game location is fictional
            and should not be confused with your physical location.
          </li>
          <li>
            <strong className="font-semibold text-sand">No real-world GPS for advertising</strong>{" "}
            either (§7).
          </li>
          <li>
            <strong className="font-semibold text-sand">No social login currently</strong>{" "}
            — so you are not linking a Google, Facebook or Apple account, and the
            game is not pulling that contact graph.
          </li>
          <li>
            <strong className="font-semibold text-sand">No GIF search and no audio chat currently</strong>{" "}
            in its social features — meaning no voice capture in chat today.
          </li>
          <li>
            Device fingerprinting is stated to be for platform security and abuse
            prevention, &quot;not to convert a player&apos;s real-world identity
            into an advertising profile&quot;.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What it does collect — the part you should decide on
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Read this as the trade: a free persistent world only works because
          everything about your life inside it is stored.
        </p>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">Category (§2)</th>
                <th className="py-3 font-semibold">What is listed</th>
              </tr>
            </thead>
            <tbody>
              {collectRows.map((row) => (
                <tr key={row.cat} className="border-b border-line/70 align-top">
                  <th className="py-3.5 pr-4 font-semibold text-sand">{row.cat}</th>
                  <td className="py-3.5 text-ink-muted">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display mt-10 text-xl font-semibold text-sand">
          Three consequences people miss
        </h3>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">Deleting is soft.</strong>{" "}
            §11 describes <em>soft deletion</em>: the account becomes inaccessible
            while records remain for transaction ledgers, fraud and abuse
            prevention, payment reconciliation, chargebacks, moderation history
            and legal compliance. There is no universal &quot;everything gone&quot;
            deadline.
          </li>
          <li>
            <strong className="font-semibold text-sand">Public means public.</strong>{" "}
            §2 notes other players may see anything you intentionally make public.
            A screenshot of your chat is outside the game&apos;s control the
            moment you send it.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              If the game is sold, your data goes with it.
            </strong>{" "}
            §8 says personal information may be transferred if ownership or
            operation is restructured, sold or otherwise reorganised. That early
            in the product&apos;s life, that is not hypothetical for a hot
            property.
          </li>
        </ol>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Legal bases are framed under{" "}
          <strong className="font-semibold text-sand">Nigerian data protection law</strong>
          , and §9 admits processing may happen in jurisdictions outside Nigeria
          because of DigitalOcean and the payment providers.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The money risk is not the game — it is what people promise you
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          §5 of the terms is unusually blunt, and it kills the entire &quot;make
          money on Lagos Life&quot; pitch. Game Naira is a fictional unit. It is
          not Nigerian legal tender, not eNaira, not CBN-backed, not a bank
          deposit, not stored value, not a debt owed to you. It{" "}
          <strong className="font-semibold text-sand">
            cannot be withdrawn to a bank account or redeemed for real money
          </strong>
          , has no exchange rate, and &quot;₦1,000,000&quot; on your screen does
          not mean anyone owes you a million naira. Selling it for real money,
          brokering it or running an exchange is prohibited; the game may reverse
          balances obtained that way.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          From that one section follow the four scams that will actually cost
          you:
        </p>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">Pitch</th>
                <th className="py-3 font-semibold">Why it is false</th>
              </tr>
            </thead>
            <tbody>
              {scamRows.map((row) => (
                <tr key={row.pitch} className="border-b border-line/70 align-top">
                  <td className="py-3.5 pr-4 text-ink-muted">{row.pitch}</td>
                  <td className="py-3.5 font-semibold text-[#fecaca]">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Refunds are generally final once a purchase is delivered (§10),
          considered only when the payment was collected but the item never
          arrived and that can be verified in the provider&apos;s records. Filing
          a dishonest chargeback for something delivered lets them reverse the
          virtual goods or suspend the account. Buying naira is spending, not
          saving.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The people risk
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          This is a chat-first game, not a single-player sim. A widely shared
          technical critique on X put the structural problem plainly: every new
          player can talk to every existing player, which is a moderation load no
          young studio can fully carry. The terms prohibit harassment and abuse
          (§17–19 cover prohibited conduct, device and abuse protection and
          enforcement), and Vanguard&apos;s summary of the rules lists
          harassment, threats, hate speech, sexual content, scams and sharing
          other people&apos;s private information. Reports, blocks and moderation
          records are collected as data.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Practical rules that hold up regardless of what the developers promise:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Assume no end-to-end encryption.
            </strong>{" "}
            Privacy §13 states: &quot;Users should not assume that direct messages
            or venue communications are end-to-end encrypted unless Lagos Life
            expressly states otherwise.&quot; Communications are stored and
            processed for delivery, reports, moderation and security.
          </li>
          <li>
            Never send passwords or payment credentials through game chat — that
            includes anyone claiming to be &quot;staff&quot;.
          </li>
          <li>
            Never move a stranger&apos;s conversation to WhatsApp/Telegram to
            &quot;pay you for a job&quot;; the game&apos;s money cannot leave the
            game, so the request itself is the tell.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              18+ is a claim, not a check.
            </strong>{" "}
            Registration asks for a username, password and optional email — there
            is no ID or age verification in the signup flow, so underage players
            exist in this world. Adjust your expectations of who you are talking
            to.
          </li>
          <li>
            Do not arrange to meet anyone from the game. Do not share your real
            area, workplace or school.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The copycat layer: this is where accounts are actually lost
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          There is no APK, no iOS app, no installer. Every &quot;Lagos Life
          download&quot; result is a third party, and most of them monetise by
          making you think you need to log in first. Watch for:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            Pages asking for your Lagos Life password to &quot;claim your
            naira&quot; or &quot;verify your account&quot;.
          </li>
          <li>
            Look-alike domains that copy the branding but are not{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
              lagoslife.app
            </code>
            . Type the address yourself rather than tapping a search-ad link.
          </li>
          <li>
            &quot;Official Lagos Life Discord / WhatsApp group&quot; claims. There
            is no official one we could find; the community lives inside the
            game.
          </li>
          <li>Anything monetising access. Signing up is free.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Only the addresses in{" "}
          <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
            the Lagos Life game link page
          </Link>{" "}
          should receive your credentials.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Ten-point safety checklist
        </h2>
        <ol className="mt-5 list-decimal space-y-2.5 pl-5 text-ink-muted">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

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

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Sources
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-muted">
          <li>
            Lagos Life Privacy &amp; Cookie Policy, effective 1 Oct 2026 — §§2, 3,
            6, 7, 8, 9, 11, 13, 16, 20 —{" "}
            <a
              href={OFFICIAL_GAME.privacy}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/privacy
            </a>{" "}
            (re-checked {SITE.lastUpdated})
          </li>
          <li>
            Lagos Life Terms of Use, effective 1 Oct 2026 — §§2, 3, 5, 6, 10,
            17–20 —{" "}
            <a
              href={OFFICIAL_GAME.terms}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app/terms
            </a>{" "}
            (re-checked {SITE.lastUpdated})
          </li>
          <li>
            Vanguard News, &quot;10 things to know about the viral Lagos Life
            game&quot;, 6 Oct 2026 — launch date, player figures, 18+ framing
          </li>
          <li>
            Gridinsoft URL report for lagoslife.app (listed 53/100), retrieved 10
            Oct 2026
          </li>
          <li>
            X post by @FavourYusuf1 on the chat-scale and moderation implications,
            October 2026
          </li>
        </ul>

        <div className="mt-14 space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              This is not a security audit.
            </strong>{" "}
            Every privacy statement above is the{" "}
            <em>operator&apos;s own published policy</em>, summarised with section
            references so you can check it. We have not inspected Lagos Life&apos;s
            code, servers or actual data handling. This page is an independent fan
            guide, not affiliated with, endorsed by or sponsored by Lagos Life,
            Eliy or the developer.
          </p>
          <p>
            <strong className="font-semibold text-sand">Re-check cadence:</strong>{" "}
            the terms and policy carry an effective date of 1 October 2026. Re-read
            §§2, 6, 7 and 8 before each update to this page and change the date at
            the top when you do — that habit is the reason this page can beat a
            bigger site on this query.
          </p>
        </div>
      </main>
    </>
  );
}
