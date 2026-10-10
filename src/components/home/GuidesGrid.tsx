import Link from "next/link";
import { GUIDES } from "@/lib/constants";

export function GuidesGrid() {
  return (
    <section className="border-y border-line bg-lagoon/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-amber uppercase">
            Hub
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
            Guides on this site
          </h2>
          <p className="mt-3 text-ink-muted">
            Jump to the page that matches what you searched for.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <li key={guide.href} className="bg-lagoon-deep">
              <Link
                href={guide.href}
                className="group flex h-full flex-col justify-between p-6 transition-colors hover:bg-lagoon-mid/40"
              >
                <span className="font-display text-lg font-semibold text-sand group-hover:text-amber-hot">
                  {guide.title}
                </span>
                <span className="mt-3 text-sm text-ink-muted">{guide.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
