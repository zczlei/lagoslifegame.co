export type LinkStatusRow = {
  date: string;
  primary: "up" | "down" | "slow";
  earlyAlias: "up" | "down" | "redirect" | "slow";
  /** From official UI when we checked — prefer live counter over this. */
  onlineNote: string;
  notes: string;
};

/** Append a row whenever you re-check both domains (aim: daily). */
export const LINK_STATUS_LOG: LinkStatusRow[] = [
  {
    date: "2026-10-10",
    primary: "up",
    earlyAlias: "up",
    onlineNote: "~89k on the live homepage counter",
    notes: "Both lagoslife.app and lagoslife.eliysites.com returned HTTP 200; same game UI.",
  },
];
