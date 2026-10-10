import Link from "next/link";

export function Safety() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-palm uppercase">
            Trust
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
            Is Lagos Life safe?
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-ink-muted">
          <p>
            Short answer: the game itself is a normal public multiplayer browser
            game, and its own privacy notice says it runs on two cookies with no
            ad trackers. The risks are around it, not in it — strangers on an
            open mic or chat, and a swarm of copycat sites pretending to be the
            official download.
          </p>
          <p>
            The three rules that matter: never pay another player to progress,
            never reuse a password you use elsewhere, and never enter anything
            on a site that claims to be a &quot;Lagos Life app&quot; you must
            install. Longer version:{" "}
            <Link href="/is-lagos-life-safe/" className="text-amber-hot hover:text-sand">
              is Lagos Life safe to play?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
