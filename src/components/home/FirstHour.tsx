import Link from "next/link";

const steps = [
  {
    title: "Get in",
    body: (
      <>
        Open{" "}
        <a
          href="https://lagoslife.app/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-amber-hot hover:text-sand"
        >
          lagoslife.app
        </a>{" "}
        in Chrome or Safari — not inside TikTok/Instagram.{" "}
        <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
          If the link won&apos;t open
        </Link>
        , the fix is almost always cookies or the in-app browser.
      </>
    ),
  },
  {
    title: "Create your character",
    body: (
      <>
        Sign up free (18+): username (3–20 chars), password (8+), email optional.
        Then the creator flow in order —{" "}
        <strong className="font-semibold text-sand">Look</strong> →{" "}
        <strong className="font-semibold text-sand">Personality</strong> (traits) →{" "}
        <strong className="font-semibold text-sand">Dream</strong> →{" "}
        <strong className="font-semibold text-sand">Birth lottery</strong> → home.
        The lottery is server-assigned once per account (Nepo Baby vs LAPO Baby)
        and does not re-roll if you remake the look.
      </>
    ),
  },
  {
    title: "Take a job before you chase a house upgrade",
    body: (
      <>
        Open <strong className="font-semibold text-sand">Phone → Jobs</strong>,
        apply, then tap <strong className="font-semibold text-sand">Go to work</strong>{" "}
        on a scheduled day (button appears from ~6 AM game time). Entry shifts
        still have to clear Saturday rent — and a LAPO start also owes ₦12,000/week
        loan repayment. Full money routes:{" "}
        <Link href="/virtual-naira/" className="text-amber-hot hover:text-sand">
          how to earn virtual naira
        </Link>
        .
      </>
    ),
  },
  {
    title: "Ride danfo, don't walk long",
    body: (
      <>
        Danfo (shared minibus) is the early-game workhorse: base ₦100 + ₦5/km,
        rounded to the nearest ₦50 — so a 5 km hop is about ₦150. Same fare band
        as keke, but faster across the map. Okada is quicker and pricier; cab is
        the expensive option. Trek is free but burns needs on long trips.
      </>
    ),
  },
  {
    title: "Rent deliberately",
    body: (
      <>
        Lagos market homes run from{" "}
        <strong className="font-semibold text-sand">Mushin face-me-I-face-you at ₦2,400/week</strong>{" "}
        (₦7,200 move-in) to{" "}
        <strong className="font-semibold text-sand">Banana Island at ₦1,500,000/week</strong>.
        LAPO starts usually pick Mushin or Yaba (₦6,000/week); Nepo starts in a
        Lekki flat. Rent hits every Saturday 9 AM — owe two weeks and you get a
        Quit Notice. Details:{" "}
        <Link href="/homes/" className="text-amber-hot hover:text-sand">
          homes page
        </Link>
        .
      </>
    ),
  },
  {
    title: "Then think about Sea Plots",
    body: (
      <>
        A lagoon Sea Plot rents for{" "}
        <strong className="font-semibold text-sand">₦50,000 for seven in-game days</strong>{" "}
        (about 24 plots on the map; first-come). Billboards are ₦100,000 for the
        same window. Neither is a first-hour buy — clear rent (and LAPO, if you
        rolled it) first.{" "}
        <Link href="/sea-plots/" className="text-amber-hot hover:text-sand">
          What Sea Plots do and cost →
        </Link>
      </>
    ),
  },
] as const;

export function FirstHour() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.16em] text-amber uppercase">
          Start here
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
          How to play: your first hour
        </h2>
        <p className="mt-3 text-ink-muted">
          Numbers below were cross-checked against live-game player guides dated
          9–10 October 2026. Full guide with video:{" "}
          <Link href="/how-to-play/" className="text-amber-hot hover:text-sand">
            how to play Lagos Life
          </Link>
          .
        </p>
      </div>

      <ol className="mt-12 space-y-0 border-l border-line">
        {steps.map((step, index) => (
          <li key={step.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute top-1 -left-[9px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-amber text-[10px] font-bold text-ashphalt"
            >
              {index + 1}
            </span>
            <h3 className="font-display text-xl font-semibold text-sand">
              {step.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
