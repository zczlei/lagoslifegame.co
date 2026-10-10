export type CareerRow = {
  career: string;
  venue: string;
  shift: number;
  days: number;
  week: number;
  req: string;
  note?: string;
};

/** Starting-role cards observed 8 Oct 2026; week = shift × days (our calc). Sorted by week desc. */
export const CAREERS: CareerRow[] = [
  { career: "Broadcasting → Newsroom Reporter", venue: "Lagos · Naija Radio House", shift: 18000, days: 6, week: 108000, req: "comedy 3" },
  { career: "Real Estate → Estate Agent", venue: "Lagos · golf club (full name not shown)", shift: 18000, days: 6, week: 108000, req: "charisma 3" },
  { career: "Medicine → House Officer", venue: "Lagos · General Hospital", shift: 21000, days: 5, week: 105000, req: "fitness 3" },
  { career: "Product Management → Associate PM", venue: "Lagos · CcHub", shift: 20000, days: 5, week: 100000, req: "coding 3" },
  { career: "Oil & Gas → Field Technician", venue: "Port Harcourt · Trans-Amadi base", shift: 20000, days: 5, week: 100000, req: "fitness or coding 3" },
  { career: "Aviation → Cabin Crew", venue: "Lagos · Murtala Muhammed", shift: 19000, days: 5, week: 95000, req: "fitness 3" },
  { career: "Civil Service → Administrative Officer", venue: "Lagos · Marina", shift: 17000, days: 5, week: 85000, req: "hustle 3" },
  { career: "Civil Service → Admin Officer (Abuja)", venue: "Abuja · Federal Secretariat", shift: 17000, days: 5, week: 85000, req: "charisma or coding 2" },
  { career: "Refining → Operator Trainee", venue: "Lagos · Refinery, Apapa", shift: 14000, days: 5, week: 70000, req: "none shown", note: 'map marked "Coming soon"' },
  { career: "Aviation → Airport Staff, Check-in Agent", venue: "Lagos · Murtala Muhammed", shift: 12000, days: 5, week: 60000, req: "none shown" },
  { career: "Banking → Marketer", venue: "Lagos · VI", shift: 11600, days: 5, week: 58000, req: "none shown" },
  { career: "Trading → Shop Assistant", venue: "Lagos · Balogun", shift: 8300, days: 6, week: 49800, req: "none shown" },
  { career: "Wuse Market Trading → Shop Attendant", venue: "Abuja · Wuse Market", shift: 8300, days: 6, week: 49800, req: "none shown" },
  { career: "Creek Road Trading → Market Trader", venue: "Port Harcourt · Creek Road Market", shift: 8300, days: 6, week: 49800, req: "none shown" },
  { career: "Tech → Intern", venue: "Lagos · Yaba", shift: 9900, days: 5, week: 49500, req: "none shown" },
  { career: "Nursing → Student Nurse", venue: "Lagos · General Hospital", shift: 9100, days: 5, week: 45500, req: "none shown" },
  { career: "Law → Law Clerk", venue: "Lagos · Igbosere High Court", shift: 9100, days: 5, week: 45500, req: "none shown" },
  { career: "Fitness Coach → Gym Floor Assistant", venue: "Lagos · Ikoyi gym", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Hairstyling → Salon Assistant", venue: "Lagos · Mama Bisi's", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Chef → Dishwasher", venue: "Lagos · Amala Shitta", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Retail → Sales Rep", venue: "Lagos · The Palms", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Keke Riding → Keke Rider", venue: "Abuja · Gwagwalada motor park / Airport Road", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Mai Shayi → Tea Spot Hand", venue: "Abuja · Federal Secretariat corner", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Ferry Work → Ferry Hand", venue: "Port Harcourt · Bonny Jetty", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Bole & Fish → Bole Seller", venue: "Port Harcourt · Mama Ibiba's fire", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Security → Security Guard", venue: "Port Harcourt · PH Mall", shift: 7400, days: 6, week: 44400, req: "none shown" },
  { career: "Teaching → Lesson Teacher", venue: "Lagos · The Library", shift: 8300, days: 5, week: 41500, req: "none shown" },
  { career: "Music → Backup Singer", venue: "Lagos · Shrine", shift: 7400, days: 5, week: 37000, req: "none shown" },
  { career: "DJ → Hype Man", venue: "Lagos · Quilox", shift: 8300, days: 4, week: 33200, req: "none shown" },
  { career: "Content Creator → Aspiring Creator", venue: "Lagos · Lekki canopy", shift: 6600, days: 5, week: 33000, req: "none shown" },
  { career: "Event Planning → Canopy Boy/Girl", venue: "Lagos · Freedom Park", shift: 7400, days: 4, week: 29600, req: "none shown" },
  { career: "Football → Viewing Centre Attendant", venue: "Lagos · Viewing Centre", shift: 6600, days: 4, week: 26400, req: "none shown" },
  { career: "Lounge Waiting → Waiter", venue: "Abuja · Kryxtal Lounge, Wuse 2", shift: 6600, days: 4, week: 26400, req: "none shown" },
];

export function formatNaira(n: number): string {
  return n.toLocaleString("en-NG");
}
