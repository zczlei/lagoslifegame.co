import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";

const ogDescription =
  "No social login, no APK, no cloud save. What the official documents actually allow when you cannot get in.";

export const metadata: Metadata = {
  title: { absolute: TDK.signIn.title },
  description: TDK.signIn.description,
  alternates: { canonical: "/sign-in/" },
  openGraph: {
    type: "article",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.signIn.title,
    description: ogDescription,
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

const faqs = [
  {
    q: "How do you sign in to Lagos Life?",
    a: "From the game's own site, with the email and password you registered (Terms §3). There is no social login (Privacy §3) and no app to open.",
    schema:
      "Lagos Life signs in from its own website with the email address and password you registered. Terms §3 lists display name, username or handle, email address, password and an avatar gender selection as information registration may require. The Privacy & Cookie Policy states in §3 that the service does not currently provide social login, so there is no Sign in with Google or Sign in with Apple option.",
  },
  {
    q: "Why does Lagos Life keep logging me out?",
    a: "The session lives in cookies the policy classifies as necessary, covering account sessions, authentication, security and load management (§6). Private tabs, cookie blocking, and embedded TikTok or Instagram browsers remove it — so the game sees a stranger every time.",
    schema:
      "Login sessions depend on cookies the policy classifies as necessary. Privacy §6 lists necessary cookies for account sessions, authentication, security, fraud prevention, load management and core game functions, and states that disabling necessary cookies may prevent parts of Lagos Life from functioning correctly. Private or incognito tabs, blocked third-party storage, aggressive tracking protection and auto-clear settings all remove that session, so the game treats you as a new visitor.",
  },
  {
    q: "Can you recover an account without the email?",
    a: "Nothing written promises that. Passwords are stored in cryptographic form rather than plaintext, so support can reset access but cannot recite your old password. Treat the registered email as the only key.",
    schema:
      "Nothing in the current Terms or Privacy Policy promises a recovery route that skips your email address. The policy also states passwords should be stored using cryptographic protection rather than readable plaintext, so no support reply can hand your original password back. Recovery means proving you own the account, and the only documented handle for that is the contact address in Terms §32.",
  },
  {
    q: "Why was I blocked after changing devices?",
    a: "Device fingerprinting exists on purpose (§2), combining browser, device, session and network signals to catch account farming, automation and circumvention of restrictions. One browser, one device, no VPN, for several days.",
    schema:
      "Lagos Life uses device fingerprinting. Privacy §2 states it may combine characteristics of a browser, device, session, network or other technical environment to identify patterns associated with account farming, fraud, unauthorised automation, repeated abuse, circumvention of restrictions and suspicious registrations. That signal includes browser type, operating system, device characteristics, session information and IP address. If you clear cookies, switch browsers, use private mode or route through a VPN, the technical environment changes and the abuse-prevention layer can treat the attempt as suspicious.",
  },
  {
    q: "Does progress sync between phone and laptop?",
    a: "No documented sync feature. Sign in with the same email and password in a normal browser on each device.",
    schema:
      "There is no documented cross-device save feature. The policy lists saving game progress as a processing purpose and hosting on DigitalOcean as infrastructure, but the access route is a browser session tied to necessary cookies and to your own credentials. Moving devices means signing in again with the same email and password in a normal browser, not tapping a sync button.",
  },
  {
    q: "Is there a Lagos Life APK I should log into?",
    a: (
      <>
        No. There is no app-store client. Every &quot;download Lagos Life
        APK&quot;, &quot;naira generator&quot; or &quot;character counter&quot;
        asking for your password is a third-party page. See{" "}
        <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
          is Lagos Life safe
        </Link>{" "}
        for the scam list.
      </>
    ),
    schema:
      "No. Terms names its services through lagoslife.app and lagoslife.eliysites.com; there is no Play Store or App Store client, and no social login. Anything asking you to install an APK, log in with Google, or hand over your Lagos Life password to a 'character counter', 'naira generator' or 'hack tool' is a third-party page, not the game.",
  },
  {
    q: "What proves the account is mine?",
    a: "Registered email, handle and display name, creation date, the exact error screen, and — strongest of all — a Flutterwave transaction reference if you ever paid.",
    schema:
      "The strongest evidence the documents acknowledge is account and transaction data: the registered email address, username or handle, display name, account creation date and account status are all processed categories, and payments carry a transaction reference, amount, currency, payment status, payment time and product purchased. If you bought Game Naira, the Flutterwave reference is the fastest ownership proof available to you.",
  },
] as const;

const symptoms = [
  {
    see: "You enter details, screen flashes, and you are back at sign-up",
    cause:
      "The session cookie never survived. Necessary cookies carry account sessions and authentication (Privacy §6); private tabs, cookie-blocking, closing an embedded social browser all discard it.",
    help: "Normal Chrome/Safari tab, cookies allowed for the domain, then sign in. Do not repeat from inside TikTok or Instagram.",
  },
  {
    see: '"Wrong email or password" though you are sure',
    cause:
      "Autofill of a different address, trailing space, or a second account you made in a moment of frustration.",
    help: "Retype both fields by hand. Try the older email first if you have ever made two accounts.",
  },
  {
    see: "Signed in, but the character is brand new",
    cause:
      "You are in a different account, not a lost one. Progress belongs to the account, and display name / handle are not the login key — email is.",
    help: "Sign out, then sign in with the email you actually used the first day. Check your mail app for the earliest Lagos Life message.",
  },
  {
    see: "Works on your phone, blank or logged-out on the laptop",
    cause:
      "There is no documented cross-device sync. Both machines are separate browsers holding separate sessions.",
    help: "Sign in on the laptop with the same email and password. If it logs in and the world matches, you never lost anything — you were just in two browsers.",
  },
  {
    see: "Blocked or “suspicious activity” after you changed browser, device or used a VPN",
    cause:
      "Device fingerprinting. Privacy §2 states it may combine browser, device, session and network characteristics to spot account farming, fraud, unauthorised automation, repeated abuse, circumvention of restrictions and suspicious registrations.",
    help: "Stop rotating. Use one browser on one device, no VPN, for a few days. Anything that looks like multi-accounting reads as abuse by design — and Terms §7 lets the operator reverse balances obtained through it.",
  },
  {
    see: "You asked for a reset and no email arrived",
    cause:
      "Nothing in the documents promises a delivery window, and the policy only authorises necessary account, security and support mail.",
    help: "Check spam and promotions; confirm the address is not an alias or a work domain that filters new senders; wait for a normal mail hour before assuming failure.",
  },
  {
    see: "You deleted the account and want it back",
    cause:
      'Soft deletion, by design. Terms §20 is titled "Soft Deletion"; Privacy §11 says a soft-deleted account "may become inaccessible to the player while some records remain" for transaction ledgers, fraud prevention, reconciliation, security, moderation history and legal compliance.',
    help: "Ask, but with low expectations: the deletion is not a hard erase, which cuts both ways — your records can exist while your access does not.",
  },
  {
    see: "Your minor sibling's account vanished",
    cause:
      'Terms §2: the game is for 18+, and the operator may suspend or terminate an account "where we reasonably believe the user is under 18."',
    help: (
      <>
        This one is not a bug and no cookie trick fixes it. See the{" "}
        <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
          age and safety breakdown
        </Link>
        .
      </>
    ),
  },
  {
    see: "Nothing loads at all, so you never even reach the sign-in screen",
    cause: "Not an account problem. Boot and asset failures have their own page.",
    help: (
      <>
        Use the{" "}
        <Link
          href="/lagos-life-game-link/"
          className="text-amber-hot hover:text-sand"
        >
          link and not-loading fixes
        </Link>{" "}
        first — and note that the game&apos;s <em>Start fresh</em> option clears
        service-worker caches, so only use it when you know your credentials.
      </>
    ),
  },
] as const;

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
      citation: [
        {
          "@type": "CreativeWork",
          name: "Lagos Life Terms of Use, effective 1 October 2026 — §2 Eligibility, §3 Accounts, §7 The Virtual Economy, §20 Soft Deletion, §32 Contact",
          url: OFFICIAL_GAME.terms,
        },
        {
          "@type": "CreativeWork",
          name: 'Lagos Life Privacy & Cookie Policy, effective 1 October 2026 — §1 Scope, §2 Account Information, §3 Information We Do Not Intentionally Collect, §4 Why We Process, §6 Cookies, §8 DigitalOcean, §11 Account Deletion',
          url: OFFICIAL_GAME.privacy,
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
          name: "Sign in problems",
          item: `${SITE.url}/sign-in/`,
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
          › Sign in problems · Unofficial, fan-run · Docs re-checked{" "}
          <strong className="font-semibold text-sand">{SITE.lastUpdated}</strong>
        </p>

        <h1 className="font-display mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-sand md:text-5xl">
          Lagos Life Sign In Not Working: Fixes, Facts and What Nobody Can
          Recover
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
          Search results for &quot;Lagos Life login not working&quot; are mostly{" "}
          <strong className="font-semibold text-sand">
            other games&apos; account-recovery pages
          </strong>
          . They tell you to add a Google account, restore from Google Play, or
          contact a game studio&apos;s support desk. None of it applies here —
          Lagos Life has no app store client and, in its own words, no social
          login at all.
        </p>

        <p className="mt-4 leading-relaxed text-ink-muted">
          So here is what is actually true, taken from the game&apos;s Terms of
          Use and Privacy &amp; Cookie Policy (both effective 1 October 2026),
          plus what you can do yourself when the sign-in screen refuses you.
        </p>

        <div className="mt-8 rounded-xl border border-palm/40 bg-palm/15 p-5 md:p-6">
          <p className="font-semibold text-sand">
            Four facts that settle most &quot;I can&apos;t get in&quot; posts
          </p>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-ink-muted">
            <li>
              <strong className="font-semibold text-sand">
                Email + password only.
              </strong>{" "}
              Terms §3 lists display name, username or handle, email address,
              password and an avatar gender selection as the information
              registration may require.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                No social login exists.
              </strong>{" "}
              Privacy §3: &quot;We do not currently provide social login.&quot;
              No Google button, no Apple button. If you saw one, you were on a
              copycat page.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                Nobody can read your password back to you.
              </strong>{" "}
              Privacy §2: passwords &quot;should be stored using appropriate
              cryptographic protection rather than as readable plaintext.&quot;
              Support can reset access; it cannot tell you the old one.
            </li>
            <li>
              <strong className="font-semibold text-sand">
                Being logged out is usually a cookie event, not a hack.
              </strong>{" "}
              Privacy §6 lists necessary cookies for account sessions and
              authentication, and warns that disabling them &quot;may prevent
              parts of Lagos Life from functioning correctly.&quot;
            </li>
          </ol>
        </div>

        <div className="mt-8 rounded-xl border border-amber/30 bg-amber/10 p-5">
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
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          60-second checklist — run this before you post &quot;they banned
          me&quot;
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Open a normal tab, not a private one.
            </strong>{" "}
            Private/Incognito and &quot;delete cookies on close&quot; destroy
            the session every time.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Leave TikTok or Instagram.
            </strong>{" "}
            Embedded social browsers keep killing this game&apos;s login flow —
            use the{" "}
            <Link
              href="/lagos-life-game-link/"
              className="text-amber-hot hover:text-sand"
            >
              link page
            </Link>{" "}
            to get the address into Chrome or Safari instead of tapping it
            inside the app.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Check storage/tracking protection is not blocking cookies
            </strong>{" "}
            for the game&apos;s domain (Chrome&apos;s site settings → Cookies →
            allow).
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Type the email, do not paste a saved one.
            </strong>{" "}
            Password managers happily fill an old address for an account you
            already abandoned.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Look for a trailing space
            </strong>{" "}
            in the password field — a common cause of &quot;correct password
            rejected&quot; on a phone keyboard.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Switch network, not account.
            </strong>{" "}
            Mobile data ↔ Wi-Fi. If it works on one and not the other, the
            network is the variable.
          </li>
        </ol>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Symptom → what it most likely is → what you can do
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-4 py-3 font-semibold text-sand">
                  What you see
                </th>
                <th className="px-4 py-3 font-semibold text-sand">
                  Most likely cause
                </th>
                <th className="px-4 py-3 font-semibold text-sand">
                  What actually helps
                </th>
              </tr>
            </thead>
            <tbody>
              {symptoms.map((row, i) => (
                <tr
                  key={row.see}
                  className={
                    i % 2 === 0
                      ? "border-b border-line bg-white/[0.02]"
                      : "border-b border-line"
                  }
                >
                  <td className="px-4 py-3.5 align-top font-semibold text-sand">
                    {row.see}
                  </td>
                  <td className="px-4 py-3.5 align-top text-ink-muted">
                    {row.cause}
                  </td>
                  <td className="px-4 py-3.5 align-top text-ink-muted">
                    {row.help}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border border-jollof/40 bg-jollof/10 p-5 leading-relaxed text-ink-muted">
          <p>
            <strong className="font-semibold text-sand">
              Ignore the &quot;restore via Google Play&quot; advice in your
              search results.
            </strong>{" "}
            That is Google substituting other games&apos; help documents because
            no Lagos Life answer page existed until now. There is no Play Store
            listing, no Google-account save, and no cloud-restore flow. Recovery
            here is: correct email, correct password, working cookies, and if
            that fails, the developer&apos;s own contact address.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          What the documents do <em>not</em> promise
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Saying this out loud is the point of the page. As of {SITE.lastUpdated}
          , the Terms and Privacy Policy describe{" "}
          <strong className="font-semibold text-sand">collecting</strong>{" "}
          authentication and security information, and list &quot;respond to
          support requests&quot; as a processing purpose — but nowhere do they
          state:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
          <li>
            a password-reset guarantee, or a method that works without the
            registered email;
          </li>
          <li>a support response time or any service level;</li>
          <li>a way to merge two accounts you made by mistake;</li>
          <li>any obligation to restore a soft-deleted account.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-ink-muted">
          If someone in a comment thread insists the game &quot;owes&quot; them
          their account back, that is not in writing anywhere.
        </p>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          How to write to support so they can actually verify you
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Contact{" "}
          <a
            href={`mailto:${OFFICIAL_GAME.supportEmail}`}
            className="text-amber-hot hover:text-sand"
          >
            {OFFICIAL_GAME.supportEmail}
          </a>{" "}
          (Terms §32). Every claim the policy acknowledges is a data category
          you can quote back. Include as many as you honestly have, in one
          message rather than five:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink-muted">
          <li>
            <strong className="font-semibold text-sand">
              Registered email address
            </strong>{" "}
            (the single field that decides whether they can find you).
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Username / handle and display name
            </strong>{" "}
            — both are separate processed fields; give both even if you only
            remember one spelling.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Approximate creation date
            </strong>{" "}
            — the game stores account creation date and account status.
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Exactly what the screen shows
            </strong>
            , with the error wording, plus browser and device (Privacy §2
            records IP, browser type, OS and device characteristics, so a
            description is cross-checkable).
          </li>
          <li>
            <strong className="font-semibold text-sand">
              Payment references
            </strong>{" "}
            if you ever bought Game Naira: transaction reference, amount,
            currency, payment time, product purchased. This is the fastest proof
            of ownership available to a player.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-ink-muted">
          And do <strong className="font-semibold text-sand">not</strong> hand
          your password to anyone offering to &quot;recover&quot; it, including
          anyone replying in your comments. Terms §3 forbids selling, renting,
          transferring, sharing or trading accounts without written permission,
          and §7 allows reversal of anything obtained through unauthorised
          activity — so &quot;buying back&quot; your own account through a
          middleman is the one route guaranteed to end badly.
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
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-ink-muted">
          <li>
            Lagos Life{" "}
            <strong className="font-semibold text-sand">Terms of Use</strong>,
            effective 1 October 2026 — applicability clause naming lagoslife.app
            and lagoslife.eliysites.com; §2 Eligibility; §3 Accounts; §7 The
            Virtual Economy; §20 Soft Deletion; §32 Contact. Re-checked by hand{" "}
            {SITE.lastUpdated}.
          </li>
          <li>
            Lagos Life{" "}
            <strong className="font-semibold text-sand">
              Privacy &amp; Cookie Policy
            </strong>
            , effective 1 October 2026 — §1 Scope (support); §2 Account
            Information, Device and Technical Information, Device Fingerprinting,
            Payment Information; §3 Information We Do Not Intentionally Collect
            (&quot;We do not currently provide social login&quot;); §4 Why We
            Process Personal Information; §6 Cookies; §8 How We Share Information
            (DigitalOcean). Re-checked by hand {SITE.lastUpdated}.
          </li>
          <li>
            SERP observation, {SITE.lastUpdated}: results for &quot;lagos life
            game login not working account lost&quot; were dominated by unrelated
            games&apos; recovery docs plus YouTube walkthroughs — no Lagos
            Life-specific text answer ranked.
          </li>
        </ul>

        <h2 className="font-display mt-14 text-2xl font-bold text-sand md:text-3xl">
          Maintenance log
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white/[0.04]">
                <th className="px-4 py-3 font-semibold text-sand">Date</th>
                <th className="px-4 py-3 font-semibold text-sand">
                  What was checked
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3.5 align-top text-sand">2026-10-10</td>
                <td className="px-4 py-3.5 text-ink-muted">
                  Terms and Privacy re-read in full for account, cookie,
                  fingerprinting and deletion clauses; symptom table written from
                  those clauses. In-game sign-in form not yet transcribed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-10 text-ink-muted">
          <Link href="/" className="text-amber-hot hover:text-sand">
            Home
          </Link>{" "}
          ·{" "}
          <Link
            href="/lagos-life-game-link/"
            className="text-amber-hot hover:text-sand"
          >
            Official link &amp; loading fixes
          </Link>{" "}
          ·{" "}
          <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
            First 30 minutes on your phone
          </Link>{" "}
          ·{" "}
          <Link
            href="/is-lagos-life-safe/"
            className="text-amber-hot hover:text-sand"
          >
            Is Lagos Life safe?
          </Link>{" "}
          ·{" "}
          <Link
            href="/who-created-lagos-life/"
            className="text-amber-hot hover:text-sand"
          >
            Who made Lagos Life
          </Link>
        </p>

        <p className="mt-14 border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
          Independent fan guide. Not affiliated with, endorsed by, or connected
          to {OFFICIAL_GAME.creator} or Lagos Life. Quoted clauses are from the
          official documents dated 1 October 2026 — the operator can change them
          without notice, which is why this page is dated. If a screen you see
          contradicts anything here, the game is right and this page needs
          updating.
        </p>
      </main>
    </>
  );
}
