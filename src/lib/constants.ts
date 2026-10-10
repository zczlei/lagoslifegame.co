export const SITE = {
  name: "Lagos Life Guide",
  url: "https://lagoslifegame.co",
  email: "hello@lagoslifegame.co",
  lastUpdated: "10 October 2026",
  lastUpdatedIso: "2026-10-10",
} as const;

/**
 * Official entry: lagoslife.app (IG / YouTube / Terms / stats / player wikis).
 * lagoslife.eliysites.com is the early Eliy-builder hostname for the same game —
 * keep as a known alias, never as the primary CTA.
 */
export const OFFICIAL_GAME = {
  primary: "https://lagoslife.app/",
  earlyAlias: "https://lagoslife.eliysites.com/",
  /** Named as operator in Terms of Use + credited on /stats (checked Oct 2026). */
  creator: "Shalom Rayhamen",
  creatorX: "https://x.com/Shalom_HeyEliy",
  creatorHandle: "@Shalom_HeyEliy",
  /** Linked from the official game homepage. */
  gameX: "https://x.com/LagosLifeApp",
  gameHandle: "@LagosLifeApp",
  gameInstagram: "https://www.instagram.com/lagoslifeapp/",
  supportEmail: "support@lagoslife.app",
  privacy: "https://lagoslife.app/privacy",
  terms: "https://lagoslife.app/terms",
} as const;

export const NAV = [
  { href: "/lagos-life-game-link/", label: "Play link" },
  { href: "/how-to-play/", label: "How to play" },
  { href: "/virtual-naira/", label: "Earn naira" },
  { href: "/is-lagos-life-safe/", label: "Safety" },
  { href: "/updates/", label: "Updates" },
] as const;

export const GUIDES = [
  {
    href: "/lagos-life-game-link/",
    title: "Where to play & link fixes",
    blurb: "The working entry point, and five failure modes",
  },
  {
    href: "/sign-in/",
    title: "Sign in not working",
    blurb: "Loops, lockouts, cookies, fingerprinting",
  },
  {
    href: "/how-to-play/",
    title: "How to play Lagos Life",
    blurb: "First hour: jobs, rent, danfo, NEPA",
  },
  {
    href: "/virtual-naira/",
    title: "Earning virtual naira",
    blurb: "What actually pays after the minimum wage ruling",
  },
  {
    href: "/homes/",
    title: "Homes and rent",
    blurb: "Move-in maths and first-week picks",
  },
  {
    href: "/sea-plots/",
    title: "Sea Plots explained",
    blurb: "₦50k / 7 days, slots, and when to rent",
  },
  {
    href: "/is-lagos-life-safe/",
    title: "Safety & scams",
    blurb: "Accounts, strangers, fake downloads",
  },
  {
    href: "/who-created-lagos-life/",
    title: "Who made Lagos Life",
    blurb: "Creator, launch date, sourced claims",
  },
  {
    href: "/updates/",
    title: "Dated updates log",
    blurb: "Build stamps, cities, player counts — sourced",
  },
] as const;
