"use client";

import { useEffect, useState, useTransition } from "react";
import { LINK_STATUS_LOG } from "@/data/link-status-log";
import { OFFICIAL_GAME } from "@/lib/constants";

type Probe = {
  url: string;
  ok: boolean;
  status: number | null;
  finalUrl: string | null;
  ms: number;
  error?: string;
};

type Payload = {
  checkedAt: string;
  primary: Probe;
  earlyAlias: Probe;
  note: string;
};

function StatusPill({ ok }: { ok: boolean }) {
  return (
    <span
      className={
        ok
          ? "rounded-full bg-palm/30 px-2.5 py-0.5 text-xs font-semibold text-[#9ae6b4]"
          : "rounded-full bg-jollof/25 px-2.5 py-0.5 text-xs font-semibold text-[#fecaca]"
      }
    >
      {ok ? "Up" : "Down"}
    </span>
  );
}

export function LinkStatusPanel() {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function runCheck() {
    startTransition(async () => {
      setError(null);
      try {
        const res = await fetch("/api/link-status", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as Payload;
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Check failed");
      }
    });
  }

  useEffect(() => {
    runCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  return (
    <section className="rounded-xl border border-line bg-ashphalt/50 p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium tracking-[0.14em] text-amber uppercase">
            Live link check
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold text-sand">
            Are the official domains up right now?
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            We probe both hostnames from our server. Player counts still live on
            the game page itself.
          </p>
        </div>
        <button
          type="button"
          onClick={runCheck}
          disabled={pending}
          className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-sand transition-colors hover:border-amber/50 hover:text-amber-hot disabled:opacity-50"
        >
          {pending ? "Checking…" : "Re-check now"}
        </button>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-jollof">Could not run check: {error}</p>
      ) : null}

      {data ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-lagoon-deep/60 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-sand">lagoslife.app</p>
              <StatusPill ok={data.primary.ok} />
            </div>
            <p className="mt-2 text-sm text-ink-muted">
              HTTP {data.primary.status ?? "—"} · {data.primary.ms}ms
            </p>
            <a
              href={OFFICIAL_GAME.primary}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-amber-hot hover:text-sand"
            >
              Open primary →
            </a>
          </div>
          <div className="rounded-lg border border-line bg-lagoon-deep/60 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-sand">eliysites mirror</p>
              <StatusPill ok={data.earlyAlias.ok} />
            </div>
            <p className="mt-2 text-sm text-ink-muted">
              HTTP {data.earlyAlias.status ?? "—"} · {data.earlyAlias.ms}ms
              {data.earlyAlias.finalUrl &&
              data.earlyAlias.finalUrl !== OFFICIAL_GAME.earlyAlias
                ? ` · landed on ${data.earlyAlias.finalUrl}`
                : ""}
            </p>
            <a
              href={OFFICIAL_GAME.earlyAlias}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-amber-hot hover:text-sand"
            >
              Open early alias →
            </a>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-ink-muted">
          {pending ? "Probing both domains…" : "Waiting for first check."}
        </p>
      )}

      <p className="mt-4 text-xs text-ink-muted">
        {data
          ? `Last live check: ${new Date(data.checkedAt).toLocaleString("en-GB", { timeZone: "UTC" })} UTC. ${data.note}`
          : null}
      </p>

      <h3 className="font-display mt-8 text-lg font-semibold text-sand">
        Status log
      </h3>
      <div className="mt-3 -mx-1 overflow-x-auto px-1">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-sand">
              <th className="py-2 pr-3 font-semibold">Date</th>
              <th className="py-2 pr-3 font-semibold">lagoslife.app</th>
              <th className="py-2 pr-3 font-semibold">eliysites</th>
              <th className="py-2 font-semibold">Online note</th>
            </tr>
          </thead>
          <tbody>
            {LINK_STATUS_LOG.map((row) => (
              <tr key={row.date} className="border-b border-line/70 align-top">
                <td className="py-2.5 pr-3 text-sand">{row.date}</td>
                <td className="py-2.5 pr-3 text-ink-muted">{row.primary}</td>
                <td className="py-2.5 pr-3 text-ink-muted">{row.earlyAlias}</td>
                <td className="py-2.5 text-ink-muted">
                  {row.onlineNote}
                  <span className="mt-1 block text-xs opacity-80">{row.notes}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
