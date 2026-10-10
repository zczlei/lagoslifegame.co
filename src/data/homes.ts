export type HomeRow = {
  name: string;
  rent: number | null;
  moveIn: number | null;
  buyLive: string;
  note?: string;
};

export type AffordRow = {
  name: string;
  moveIn: string;
  weeksOf60k: string;
  pctOf60k: string;
  pctOf108k: string;
};

export type InvestRow = {
  name: string;
  buyLive: string;
  invest: string;
  ratio: string;
  need?: boolean;
};

/** Lagos tab of Phone → Houses → Homes, observed 10 Oct 2026. */
export const LAGOS_HOMES: HomeRow[] = [
  {
    name: "Hall of Residence · UNILAG, Akoka",
    rent: 1200,
    moveIn: 3600,
    buyLive: "not shown",
    note: "6×6 bunk, students only",
  },
  {
    name: "Face-me-I-face-you · Mushin",
    rent: 2400,
    moveIn: 7200,
    buyLive: "113,000",
    note: "6×6, one room in a shared compound",
  },
  {
    name: "Self-contain · Yaba",
    rent: 6000,
    moveIn: null,
    buyLive: "312k",
    note: "move-in not shown (observing account already lived there)",
  },
  {
    name: "Mini-flat · Lekki Phase 1",
    rent: 17000,
    moveIn: 51000,
    buyLive: "910k",
  },
  {
    name: "Terrace duplex · Ikate, Lekki",
    rent: 45000,
    moveIn: 135000,
    buyLive: "2.5m",
  },
  {
    name: "Family duplex · Magodo GRA",
    rent: 110000,
    moveIn: 330000,
    buyLive: "6.1m",
  },
  {
    name: "Duplex · Ikoyi",
    rent: 250000,
    moveIn: 750000,
    buyLive: "15m",
  },
  {
    name: "Mansion · Banana Island",
    rent: 1500000,
    moveIn: 4500000,
    buyLive: "91m",
  },
];

export const AFFORD_ROWS: AffordRow[] = [
  { name: "Mushin", moveIn: "7,200", weeksOf60k: "0.12", pctOf60k: "4%", pctOf108k: "2.2%" },
  { name: "Yaba self-contain", moveIn: "not shown", weeksOf60k: "—", pctOf60k: "10%", pctOf108k: "5.6%" },
  { name: "Lekki Phase 1 mini-flat", moveIn: "51,000", weeksOf60k: "0.85", pctOf60k: "28.3%", pctOf108k: "15.7%" },
  { name: "Ikate terrace duplex", moveIn: "135,000", weeksOf60k: "2.25", pctOf60k: "75%", pctOf108k: "41.7%" },
  { name: "Magodo GRA family duplex", moveIn: "330,000", weeksOf60k: "5.5", pctOf60k: "183%", pctOf108k: "102%" },
  { name: "Ikoyi duplex", moveIn: "750,000", weeksOf60k: "12.5", pctOf60k: "417%", pctOf108k: "231%" },
  { name: "Banana Island mansion", moveIn: "4,500,000", weeksOf60k: "75", pctOf60k: "2,500%", pctOf108k: "1,389%" },
];

export const INVEST_ROWS: InvestRow[] = [
  { name: "Face-me-I-face-you · Mushin", buyLive: "113,000", invest: "26,000", ratio: "10.8" },
  { name: "Self-contain · Yaba", buyLive: "312,000", invest: "72,000", ratio: "12.0" },
  { name: "Mini-flat · Lekki Phase 1", buyLive: "910,000", invest: "210,000", ratio: "12.35" },
  { name: "Terrace duplex · Ikate, Lekki", buyLive: "2.5m", invest: "570,000", ratio: "12.67" },
  { name: "Family duplex · Magodo GRA", buyLive: "6.1m", invest: "1.4m", ratio: "12.73", need: true },
  { name: "Duplex · Ikoyi", buyLive: "15m", invest: "3.4m", ratio: "13.6", need: true },
  { name: "Mansion · Banana Island", buyLive: "91m", invest: "21m", ratio: "14.0", need: true },
];

export const RENT_VS_WAGE = [
  { home: "Hall of Residence · UNILAG, Akoka", rent: 1200, pct60: "2%", pct26: "4.5%", note: "students only" },
  { home: "Face-me-I-face-you · Mushin", rent: 2400, pct60: "4%", pct26: "9.1%" },
  { home: "Self-contain · Yaba", rent: 6000, pct60: "10%", pct26: "22.7%" },
  { home: "Mini-flat · Lekki Phase 1", rent: 17000, pct60: "28.3%", pct26: "64.4%" },
  { home: "Terrace duplex · Ikate, Lekki", rent: 45000, pct60: "75%", pct26: "170%" },
  { home: "Family duplex · Magodo GRA", rent: 110000, pct60: "183%", pct26: "417%" },
  { home: "Duplex · Ikoyi", rent: 250000, pct60: "417%", pct26: "947%" },
  { home: "Mansion · Banana Island", rent: 1500000, pct60: "2,500%", pct26: "5,682%" },
] as const;
