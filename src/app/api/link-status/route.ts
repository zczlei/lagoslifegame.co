import { connection, NextResponse } from "next/server";
import { OFFICIAL_GAME } from "@/lib/constants";

type Probe = {
  url: string;
  ok: boolean;
  status: number | null;
  finalUrl: string | null;
  ms: number;
  error?: string;
};

async function probe(url: string): Promise<Probe> {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
      headers: {
        "user-agent": "LagosLifeGuideLinkChecker/1.0 (+https://lagoslifegame.co)",
      },
      signal: AbortSignal.timeout(12000),
    });
    return {
      url,
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      ms: Date.now() - started,
    };
  } catch (err) {
    return {
      url,
      ok: false,
      status: null,
      finalUrl: null,
      ms: Date.now() - started,
      error: err instanceof Error ? err.message : "request failed",
    };
  }
}

export async function GET() {
  await connection();
  const [primary, earlyAlias] = await Promise.all([
    probe(OFFICIAL_GAME.primary),
    probe(OFFICIAL_GAME.earlyAlias),
  ]);

  return NextResponse.json({
    checkedAt: new Date().toISOString(),
    primary,
    earlyAlias,
    playUrl: OFFICIAL_GAME.primary,
    note: "Online player counts are rendered client-side on the game page — open lagoslife.app for the live counter.",
  });
}
