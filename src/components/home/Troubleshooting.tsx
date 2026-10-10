import Link from "next/link";

const rows = [
  {
    symptom: "Sign-up screen loops back to itself",
    cause: "The session cookie is blocked, so the login never completes",
    fix: "Allow cookies for the game's domain, or try one window in a standard browser",
  },
  {
    symptom: "Stuck on loading, black screen",
    cause: "Traffic spike — a viral game saturates at peak hours",
    fix: "Reload once and come back 10–15 minutes later",
  },
  {
    symptom: "Opens from TikTok/Instagram but nothing happens",
    cause: "In-app browsers strip or sandbox what the game needs",
    fix: "Copy the URL and open it in Chrome or Safari",
  },
  {
    symptom: 'Lost your character after "clearing browsing data"',
    cause: "Login is cookie-based, so wiping site data wipes the session",
    fix: "Never clear that site's data; keep the same browser profile",
  },
  {
    symptom: "A page demands a download or a payment to register",
    cause: "It is not the official entry point",
    fix: "Leave. Only play at lagoslife.app — free sign-up in the browser",
  },
] as const;

export function Troubleshooting() {
  return (
    <section className="border-y border-line bg-ashphalt/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.16em] text-jollof uppercase">
            Fixes
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-sand md:text-4xl">
            Link not working? Start here
          </h2>
          <p className="mt-3 text-ink-muted">
            Every one of these is a real failure mode, and none of them need a
            reinstall.
          </p>
        </div>

        <div className="mt-10 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-sand">
                <th className="py-3 pr-4 font-semibold">Symptom</th>
                <th className="py-3 pr-4 font-semibold">Likely cause</th>
                <th className="py-3 font-semibold">Fix</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.symptom} className="border-b border-line/70 align-top">
                  <td className="py-4 pr-4 font-medium text-sand">{row.symptom}</td>
                  <td className="py-4 pr-4 text-ink-muted">{row.cause}</td>
                  <td className="py-4 text-ink-muted">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          Full troubleshooting:{" "}
          <Link href="/lagos-life-game-link/" className="text-amber-hot hover:text-sand">
            Lagos Life game link and fixes
          </Link>{" "}
          · account problems:{" "}
          <Link href="/sign-in/" className="text-amber-hot hover:text-sand">
            Lagos Life sign-in issues
          </Link>
        </p>
      </div>
    </section>
  );
}
