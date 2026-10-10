export function Different() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(228,87,46,0.12),_transparent_55%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-jollof uppercase">
            Why it sticks
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
            What actually makes it different
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            Most browser life sims give you a blank suburb and generic errands.
            Lagos Life gives you a specific city with its own logic: NEPA
            cutting your power mid-task, the price of a danfo ride, amala at
            Shitta, a night out at Quilox, and a running in-game government that
            passes things like a minimum-wage raise as law.
          </p>
          <p>
            That detail is why the clips land — the game reads like Lagos
            gossip, not a demo. It is also, importantly, public. Players you
            meet are real people typing, which changes both the fun and the
            risk. Our safety section is not paranoia.
          </p>
        </div>
      </div>
    </section>
  );
}
