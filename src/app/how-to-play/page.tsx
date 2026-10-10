import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

export const metadata: Metadata = {
  title: { absolute: TDK.howToPlay.title },
  description: TDK.howToPlay.description,
  alternates: { canonical: "/how-to-play/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.howToPlay.title,
    description: TDK.howToPlay.description,
    url: `${SITE.url}/how-to-play/`,
    images: [
      {
        url: "/og/how-to-play.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.howToPlay.title,
    description: TDK.howToPlay.description,
    images: ["/og/how-to-play.png"],
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
      "@id": `${SITE.url}/how-to-play/#webpage`,
      url: `${SITE.url}/how-to-play/`,
      name: "How to Play Lagos Life on Your Phone: The First 30 Minutes",
      isPartOf: { "@id": `${SITE.url}/#website` },
      datePublished: SITE.lastUpdatedIso,
      dateModified: SITE.lastUpdatedIso,
      inLanguage: "en",
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life (official PWA manifest and boot scripts)",
          url: OFFICIAL_GAME.primary,
        },
        {
          "@type": "CreativeWork",
          name: "Lagos Life Wiki — careers, homes and needs figures (unofficial)",
          url: "https://lagoslife.wiki/",
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
          name: "How to play",
          item: `${SITE.url}/how-to-play/`,
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to play Lagos Life on a phone in 30 minutes",
      description:
        "Set Lagos Life up on your phone as a home-screen app, then run the first 30 minutes: sign-up, trait, birth lottery, first shift and rent.",
      totalTime: "PT30M",
      inLanguage: "en",
      step: [
        {
          "@type": "HowToSection",
          name: "Set up the phone",
          itemListElement: [
            {
              "@type": "HowToStep",
              name: "Check the system floor",
              text: "Lagos Life needs iOS 16.4 or newer on iPhone; every browser on iPhone uses the same engine, so switching browser does not help. On Android, use an up-to-date Chrome.",
            },
            {
              "@type": "HowToStep",
              name: "Open the game in a real browser",
              text: "Copy lagoslife.app into Chrome or Safari. Do not tap through from TikTok or Instagram — the game flags in-app browsers and most 'it won't open' cases are that.",
            },
            {
              "@type": "HowToStep",
              name: "Add it to your home screen",
              text: "There is no APK or App Store listing, but the site ships a web app manifest, so Share or the browser menu can install it to the home screen and it launches full-screen.",
            },
          ],
        },
        {
          "@type": "HowToSection",
          name: "Minute 0 to 12: get born",
          itemListElement: [
            {
              "@type": "HowToStep",
              name: "Sign up (0-3 min)",
              text: "Username and password, email optional, no waitlist and no invite code.",
            },
            {
              "@type": "HowToStep",
              name: "Build the character and pick a trait (3-8 min)",
              text: "Ten traits each bend one skill, a need's decay or how activities land, so pick for the career you intend to climb.",
            },
            {
              "@type": "HowToStep",
              name: "Accept the birth lottery result (8-12 min)",
              text: "Origin is permanent and re-rolling does not change it; some starts carry debt and some lock off the Lekki housing tier.",
            },
          ],
        },
        {
          "@type": "HowToSection",
          name: "Minute 12 to 30: earn, then house",
          itemListElement: [
            {
              "@type": "HowToStep",
              name: "Work your first shift (12-22 min)",
              text: "Take the shift that pays now rather than the one with the best ceiling; banking is reported as the strongest opener while music and DJ are night shifts.",
            },
            {
              "@type": "HowToStep",
              name: "Decide housing after you have seen a wage (22-30 min)",
              text: "Rent is charged every Saturday across five tiers, so choose the cheapest bed that keeps you solvent and treat Ikoyi and Banana Island as late-game buys.",
            },
          ],
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you install Lagos Life on your phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but not from an app store. There is no APK, no iOS app and no Play Store listing. The site ships a web app manifest and mobile web-app tags, so you install it to the home screen from the browser instead, and it opens full-screen without browser chrome.",
          },
        },
        {
          "@type": "Question",
          name: "What iPhone does Lagos Life need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "iOS 16.4 or newer. The game shows that message itself and notes that every browser on iPhone uses the same engine, so changing browser will not fix it — only a software update will. On Android it asks for an updated Chrome.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Lagos Life keep reloading on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The game watches for failed script and stylesheet loads and re-opens the page automatically, up to three times in three minutes, because a stale cached build is the usual cause. If a boot is still unfinished after 40 seconds, it offers a Start fresh button that clears its own cached code and shell.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lagos Life drain battery or heat the phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expect it to. The world is a full-screen canvas map of live players and venues, so the GPU is working the whole time. Lower brightness, close background apps, keep the phone off charge, and use the in-game night mode the site stores locally.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lagos Life free on mobile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, sign-up and play are free on any browser. The game sells in-game naira top-ups, and none of that money can be withdrawn to a bank account.",
          },
        },
        {
          "@type": "Question",
          name: "How long before you understand Lagos Life?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "About 30 minutes is enough to be in work and housed. The full economy — careers, five housing tiers, 21 venues with their own opening hours, six decaying needs — takes days, which is why this page is deliberately short.",
          },
        },
        {
          "@type": "Question",
          name: "Can two people play Lagos Life on one phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not side by side: the same shared world is entered with one signed-in session at a time, and login is cookie-based. If you clear the site's data you lose that session, which is also how people accidentally sign in as whoever made the account.",
          },
        },
      ],
    },
  ],
};

const timeline = [
  {
    mins: "0–3",
    doThis: (
      <>
        <strong className="font-semibold text-sand">Sign up.</strong> Username +
        password; email optional. No queue, no invite code.
      </>
    ),
    phone:
      "Type the password in, don't let autofill guess — you will need it on the second device.",
  },
  {
    mins: "3–8",
    doThis: (
      <>
        <strong className="font-semibold text-sand">Character, then a trait.</strong>{" "}
        The creator leans Nigerian (gele, ankara, adire, aso-oke). Ten traits
        exist, and each one bends a skill&apos;s growth rate, a need&apos;s
        decay, or how certain activities land.
      </>
    ),
    phone:
      "Choose the trait for the career you intend to climb, not the funniest name. Rotate to landscape if the options crowd.",
  },
  {
    mins: "8–12",
    doThis: (
      <>
        <strong className="font-semibold text-sand">
          Let the birth lottery decide.
        </strong>{" "}
        Origin is permanent and re-rolling the character does{" "}
        <em>not</em> re-roll it. Some starts hand you debt — the LAPO Baby start
        is reported with a ₦60,000 microfinance loan (about ₦72,000 total across
        weekly repayments; both figures appear in community guides and we have
        not independently verified them in-game). Some origins are locked out of
        the Lekki housing tier.
      </>
    ),
    phone:
      "Screenshot your origin and perks before you spend 20 minutes arguing about it in chat.",
  },
  {
    mins: "12–22",
    doThis: (
      <>
        <strong className="font-semibold text-sand">Work one real shift.</strong>{" "}
        Banking is reported as the strongest opener on entry pay; Music has the
        highest ceiling but Music and DJ are night shifts, so you work while
        everyone else is partying. Promotion is reported as roughly doubling
        per-shift pay across five levels.
      </>
    ),
    phone:
      "Don't pick a shift you cannot finish. A night job on a phone you need for other things is how people burn out in week one.",
  },
  {
    mins: "22–30",
    doThis: (
      <>
        <strong className="font-semibold text-sand">
          Only now look at housing.
        </strong>{" "}
        Rent is charged <strong className="font-semibold text-sand">every Saturday</strong>{" "}
        across five tiers, from the cheapest Mushin bed upward; Ikoyi and Banana
        Island are move-in purchases, not rentals. Full table:{" "}
        <Link href="/homes/" className="text-amber-hot hover:text-sand">
          homes and weekly rent
        </Link>
        .
      </>
    ),
    phone:
      "Take the cheapest roof that clears rent, then upgrade when a wage — not a top-up — pays for it.",
  },
] as const;

const phoneProblems = [
  {
    problem: "Phone heats up",
    fix: "Close background apps first — that is the free win. Take it off the charger: charging plus a live canvas is how a phone gets genuinely hot. Move it off a case or blanket.",
  },
  {
    problem: "Frames stutter on a mid/low-RAM phone",
    fix: "Close everything else, then lower brightness rather than raising it. There is no graphics-quality switch we could find in the game, so background RAM and screen power are the only levers you have.",
  },
  {
    problem: "Battery drops fast",
    fix: "Use the night mode the game stores locally, play on Wi-Fi, and stop the session after a shift instead of idling on the map.",
  },
  {
    problem: "Data cost",
    fix: "The live world keeps a connection open. If you are on bundles, expect steady small usage rather than bursts — and prefer the home-screen install, which reuses its cached shell instead of re-downloading the page.",
  },
  {
    problem: "It keeps refreshing itself",
    fix: "That is the game, not you. It reloads automatically up to three times in three minutes when a script or stylesheet fails, because a stale cached build is the usual culprit.",
  },
  {
    problem: "Stuck on the loading screen",
    fix: (
      <>
        At 15 seconds the game says your network is slow and to hang on. At 40
        seconds it offers a <strong className="font-semibold text-sand">Start fresh</strong>{" "}
        button and promises &quot;your game is saved on our servers&quot; — that
        button clears its own cached code and reloads.{" "}
        <strong className="font-semibold text-sand">
          Use it; it does not delete your account.
        </strong>{" "}
        If it still won&apos;t boot, the problem is the world being overloaded,
        not your phone: see{" "}
        <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
          the link page
        </Link>
        .
      </>
    ),
  },
  {
    problem: "Turned into a black bar on a notched phone",
    fix: "Rotate to landscape. The app is coded to resize itself for landscape when launched from the home-screen icon.",
  },
] as const;

const faqs = [
  {
    q: "Can you install Lagos Life on a phone?",
    a: (
      <>
        Yes, but not from an app store. There is no APK, no iOS app and no Play
        Store listing — the site ships a web-app manifest, so you use{" "}
        <strong className="font-semibold text-sand">Add to Home Screen</strong>{" "}
        and it launches full-screen like an app.
      </>
    ),
  },
  {
    q: "Which iPhones can run it?",
    a: "iOS 16.4 or newer. Since every browser on iPhone uses the same rendering engine, changing browser will not help an old iOS — only updating will.",
  },
  {
    q: "Why does it reload on its own?",
    a: "The game detects failed asset loads and re-opens the page automatically, up to three times in three minutes, because a stale cached build is the normal cause.",
  },
  {
    q: "Is it free on mobile?",
    a: (
      <>
        Yes. Sign-up and play are free in any browser. It sells in-game naira
        top-ups, and that money cannot be withdrawn to a bank account — see{" "}
        <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
          the safety page
        </Link>
        .
      </>
    ),
  },
  {
    q: "Is Lagos Life multiplayer?",
    a: "Real-time and shared, not a private sandbox: you see other players on the same map, chat with them, join families and squads, and take part in server-wide events such as the governor election. Which is also why it is heavier on a phone than a normal browser game.",
  },
  {
    q: "How long until it makes sense?",
    a: (
      <>
        30 minutes gets you housed and paid. Days get you the rest — start with{" "}
        <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
          earning naira
        </Link>{" "}
        and{" "}
        <Link href="/homes/" className="text-amber-hot hover:text-sand">
          housing
        </Link>{" "}
        once you are past the first shift.
      </>
    ),
  },
] as const;

export default function HowToPlayPage() {
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
          › How to play · Unofficial, fan-run · Phone-first version, reviewed{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          How to Play Lagos Life on Your Phone: The First 30 Minutes
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          <strong className="font-semibold text-sand">
            Almost everybody plays this on a phone
          </strong>{" "}
          — and the official site is built to prove it: the viewport is locked
          with <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">viewport-fit=cover</code>
          , it ships a home-screen app manifest, it detects when you arrived from
          TikTok or Instagram, and it re-flows the screen when you turn the phone
          sideways. So this guide is not a desktop walkthrough with &quot;also
          works on mobile&quot; bolted on. It is a 30-minute run with the phone
          settings done first.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-semibold text-sand">
            Play free, in the browser:{" "}
            <a
              href={OFFICIAL_GAME.primary}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app
            </a>{" "}
            — no download, no APK, no waitlist.
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Can&apos;t get in? Read{" "}
            <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
              the Lagos Life game link and fixes
            </Link>{" "}
            first. Phone details are below.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Why 30 minutes, not an hour
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          The community guides describe a <em>first hour</em>, and honestly that
          is a desktop-shaped number. On a phone you have a battery, a hot hand,
          and a feed of clips you copied a link from. Thirty minutes is what you
          can actually spend before you either get paid or give up — and it is
          enough: sign up, be born, work one shift, decide where to sleep before
          Saturday. Everything after that is a different game.
        </p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          The full economy is genuinely deep —{" "}
          <strong className="font-semibold text-sand">14 careers</strong>,{" "}
          <strong className="font-semibold text-sand">5 housing tiers</strong>,{" "}
          <strong className="font-semibold text-sand">
            21 venues with their own opening hours
          </strong>
          , <strong className="font-semibold text-sand">6 needs</strong> draining
          on separate clocks, land, taxes, a live governor election. We are not
          covering that here on purpose. Use{" "}
          <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
            the naira guide
          </Link>{" "}
          and{" "}
          <Link href="/homes/" className="text-amber-hot hover:text-sand">
            the rent page
          </Link>{" "}
          when you are in.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Set the phone up before you sign up
        </h2>

        <h3 className="font-display mt-8 text-xl font-semibold text-sand">
          1. The system floor is real, and iPhone users cannot dodge it
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Lagos Life does not run on old software, and it tells you so itself.
          Its boot check shows one of two messages verbatim:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">iPhone:</strong> &quot;Lagos
            Life needs iOS 16.4 or newer. Go to Settings → General → Software
            Update, then open the game again. (Every browser on iPhone uses the
            same engine, so another browser won&apos;t help.)&quot;
          </li>
          <li>
            <strong className="font-semibold text-sand">Android:</strong> update
            Chrome from the Play Store, then reopen the game.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-ink-muted">
          That iOS note is the single most useful thing on this page:{" "}
          <strong className="font-semibold text-sand">
            on iPhone, switching to Firefox, Brave or Edge does nothing
          </strong>{" "}
          — they are all WebKit underneath. Only updating iOS fixes it. If a
          friend says &quot;just use a different browser&quot;, they are wrong.
        </p>

        <h3 className="font-display mt-10 text-xl font-semibold text-sand">
          2. Never tap through from TikTok or Instagram
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          The official code checks your browser string for Twitter, Instagram,
          Facebook, Line, TikTok, Snapchat and LinkedIn and switches the page
          into a special mode when it finds one. Those in-app browsers sandbox
          the storage the game needs to keep you signed in.{" "}
          <strong className="font-semibold text-sand">
            Copy the link, open Chrome or Safari, paste it.
          </strong>{" "}
          This one habit removes most &quot;Lagos Life won&apos;t load&quot;
          reports — see{" "}
          <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
            the link page
          </Link>{" "}
          for the rest.
        </p>

        <h3 className="font-display mt-10 text-xl font-semibold text-sand">
          3. Install it to the home screen (this is the &quot;download&quot;
          everyone wants)
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Searches for a <em>Lagos Life download</em>, <em>app</em> or{" "}
          <em>APK</em> are all searching for the thing below. There is no APK and
          no store listing — anyone offering one is not distributing the game.
          But the site declares a web-app manifest and a 180×180 home-screen
          icon, so you can make it look and feel like an app in 20 seconds:
        </p>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">Phone</th>
                <th className="py-3 font-semibold">Add Lagos Life to the home screen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line/70 align-top">
                <td className="py-3.5 pr-4 font-semibold text-sand">
                  iPhone (iOS 16.4+)
                </td>
                <td className="py-3.5 text-ink-muted">
                  Open{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
                    lagoslife.app
                  </code>{" "}
                  in Safari → <strong className="font-semibold text-sand">Share</strong>{" "}
                  →{" "}
                  <strong className="font-semibold text-sand">
                    Add to Home Screen
                  </strong>{" "}
                  → Add. Launch it from that icon: it opens full-screen with the
                  status bar blended in, no Safari bar.
                </td>
              </tr>
              <tr className="border-b border-line/70 align-top">
                <td className="py-3.5 pr-4 font-semibold text-sand">Android</td>
                <td className="py-3.5 text-ink-muted">
                  Open{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 text-sand">
                    lagoslife.app
                  </code>{" "}
                  in Chrome → tap{" "}
                  <strong className="font-semibold text-sand">⋮</strong> →{" "}
                  <strong className="font-semibold text-sand">
                    Add to Home screen
                  </strong>{" "}
                  or{" "}
                  <strong className="font-semibold text-sand">Install app</strong>{" "}
                  → Add.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          <strong className="font-semibold text-sand">
            Why this matters beyond convenience:
          </strong>{" "}
          the game has code that behaves differently when it is launched from the
          home-screen icon rather than a browser tab — it sizes the map to the
          screen and to landscape orientation. The notch and the browser bar are
          why the buttons feel cramped in a tab.
        </p>

        <div className="mt-6 rounded-xl border border-jollof/40 bg-jollof/10 p-5">
          <p className="leading-relaxed text-ink-muted">
            <strong className="font-semibold text-sand">
              Keep cookies allowed for the game.
            </strong>{" "}
            Login is cookie-based and stored on the device. Two habits will lose
            you your character: clearing that site&apos;s browsing data, and using
            private/incognito windows. It&apos;s also why you should not sign in
            as your account on a friend&apos;s phone and then let them clear it.
            The policy says it uses no ad trackers.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The first 30 minutes
        </h2>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-3 font-semibold">Minutes</th>
                <th className="py-3 pr-3 font-semibold">Do this</th>
                <th className="py-3 font-semibold">Phone note</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row) => (
                <tr key={row.mins} className="border-b border-line/70 align-top">
                  <td className="py-3.5 pr-3 font-semibold whitespace-nowrap text-amber tabular-nums">
                    {row.mins}
                  </td>
                  <td className="py-3.5 pr-3 text-ink-muted">{row.doThis}</td>
                  <td className="py-3.5 text-ink-muted">{row.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          The three meters that eat beginners
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Six needs decay on their own clocks. Three will hurt you inside the
          first half hour:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">Bladder</strong> —
            reported as the fastest meter in the game. Deal with it between
            tasks rather than mid-shift.
          </li>
          <li>
            <strong className="font-semibold text-sand">Hunger</strong> — the
            fastest of the ordinary needs; food venues have opening hours, so
            plan the route.
          </li>
          <li>
            <strong className="font-semibold text-sand">Fun</strong> — the one
            that punishes pure grinding. A danfo ride or a night out is not a
            distraction from the game; it <em>is</em> the economy.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What to ignore until tomorrow
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">Sea Plots.</strong> The
            visible flex, and not a first-30-minutes purchase.{" "}
            <Link href="/sea-plots/" className="text-amber-hot hover:text-sand">
              What they cost and do
            </Link>
            .
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Side businesses and land.
            </strong>{" "}
            Both compound, both carry a bad-day cost, and land carries the{" "}
            <em>omo-onile</em> levy reported as high as 35% in Ikorodu.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Generator, solar and inverter gear.
            </strong>{" "}
            NEPA cutting your power is a real mechanic with its own outage cue,
            but buying through it is a week-two decision.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Anything anyone offers you for real money.
            </strong>{" "}
            Game naira cannot be withdrawn to a bank account, so every &quot;I&apos;ll
            pay you cash for an account / for naira&quot; offer is a rule-break
            and usually a scam. Read{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              is Lagos Life safe?
            </Link>{" "}
            before you accept a friend request.
          </li>
        </ol>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Heat, battery and data: the phone-only problems
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          This is a full-screen live canvas of other people walking around, so
          the GPU never rests. The complaints on TikTok are exactly what you
          would expect — phones getting hot, stuttering, and one creator&apos;s
          whole video being about their iPhone 12 pausing mid-game. Fixes that
          actually help, in order:
        </p>
        <div className="mt-5 -mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">Problem</th>
                <th className="py-3 font-semibold">What to do</th>
              </tr>
            </thead>
            <tbody>
              {phoneProblems.map((row) => (
                <tr key={row.problem} className="border-b border-line/70 align-top">
                  <th className="py-3.5 pr-4 font-semibold text-sand">
                    {row.problem}
                  </th>
                  <td className="py-3.5 text-ink-muted">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
          How we keep this honest
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Checked on {SITE.lastUpdated}:
            </strong>{" "}
            the official site&apos;s mobile configuration, home-screen manifest,
            in-app-browser detection, iOS 16.4 message, 15/40-second boot
            prompts, Start fresh cache clear, and the three-reload limit — all
            read from{" "}
            <a
              href={OFFICIAL_GAME.primary}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.app
            </a>{" "}
            itself.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Second-hand, flagged as such:
            </strong>{" "}
            career counts, entry and ceiling pay, trait mechanics, rent tiers,
            venue hours and the omo-onile percentages come from the community
            guide at{" "}
            <a
              href="https://lagoslife.wiki/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              lagoslife.wiki
            </a>
            , which is unofficial and internally inconsistent on at least one
            figure. We do not restate any of it as verified until we have seen it
            in-game.
          </li>
          <li>
            <strong className="font-semibold text-sand">Refresh cadence:</strong>{" "}
            this page is re-checked whenever the game&apos;s build changes. If a
            number is wrong, tell us via{" "}
            <a
              href={OFFICIAL_GAME.gameX}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-amber-hot hover:text-sand"
            >
              {OFFICIAL_GAME.gameHandle}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-amber-hot hover:text-sand"
            >
              {SITE.email}
            </a>{" "}
            and we fix it here with a date.
          </li>
        </ul>

        <div className="mt-10 rounded-xl border border-amber/30 bg-amber/10 p-5 md:p-6">
          <p className="font-semibold text-sand">Next steps</p>
          <p className="mt-2 text-ink-muted">
            <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
              working link &amp; fixes
            </Link>{" "}
            →{" "}
            <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
              earning naira past rent
            </Link>{" "}
            →{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              safety before you chat
            </Link>
          </p>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Lagos Life Guide is an independent fan site. We are not affiliated
          with, endorsed by, or sponsored by Lagos Life, Eliy, or the developer.
          Game names, screenshots and trademarks belong to their owner; player
          counts and in-game figures shown here are reported, not independently
          audited. Not legal or financial advice.{" "}
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-amber-hot hover:text-sand"
          >
            Play Lagos Life →
          </a>
        </p>
      </main>
    </>
  );
}
