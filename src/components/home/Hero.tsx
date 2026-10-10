import Image from "next/image";
import { OFFICIAL_GAME, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Official Lagos Life city map — Lagos Lagoon, Island and Sea Plots"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center scale-105"
      />
      <div
        aria-hidden
        className="hero-glow absolute -left-1/4 top-1/4 h-[50vmin] w-[70vmin] rounded-full bg-amber/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-lagoon-deep/25 via-lagoon-deep/50 to-lagoon-deep"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-lagoon-deep via-lagoon-deep/85 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <p className="animate-rise text-sm font-medium tracking-[0.18em] text-amber uppercase">
          Unofficial fan guide · Updated {SITE.lastUpdated}
        </p>

        <h1 className="animate-rise-delay-1 font-display mt-4 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-sand sm:text-6xl md:text-7xl lg:text-8xl">
          Lagos Life
          <span className="mt-2 block text-[0.58em] font-semibold text-ink">
            the browser life sim, explained
          </span>
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          Free Lagos life sim in your browser at lagoslife.app — ride a danfo,
          rent a home, earn virtual naira, and skip every fake APK.
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-4">
          <a
            href={OFFICIAL_GAME.primary}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="cta-pulse inline-flex items-center rounded-md bg-amber px-6 py-3.5 text-base font-bold text-ashphalt transition-transform hover:-translate-y-0.5 hover:bg-amber-hot"
          >
            Open Lagos Life →
          </a>
          <a
            href="/how-to-play/"
            className="inline-flex items-center rounded-md border border-line px-5 py-3.5 text-base font-semibold text-sand transition-colors hover:border-amber/50 hover:text-amber-hot"
          >
            First-hour walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
