import Link from "next/link";
import { OFFICIAL_GAME } from "@/lib/constants";

type Props = {
  title: string;
  description: string;
  intent: string;
};

export function PlaceholderPage({ title, description, intent }: Props) {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 pt-28 pb-20 md:px-8">
      <p className="text-sm font-medium tracking-[0.16em] text-amber uppercase">
        Coming next
      </p>
      <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-sand md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-muted">{description}</p>
      <p className="mt-4 text-sm text-ink-muted">
        Search intent: <span className="text-sand">{intent}</span>
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={OFFICIAL_GAME.primary}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="rounded-md bg-amber px-5 py-3 text-sm font-bold text-ashphalt hover:bg-amber-hot"
        >
          Open official game →
        </a>
        <Link
          href="/"
          className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-sand hover:border-amber/40"
        >
          Back to home hub
        </Link>
      </div>
    </main>
  );
}
