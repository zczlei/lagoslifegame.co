import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** Public indexable routes (trailingSlash: true). Exclude /login/ (redirect) and /api/*. */
const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/lagos-life-game-link/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/sign-in/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/how-to-play/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/virtual-naira/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/homes/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/is-lagos-life-safe/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/who-created-lagos-life/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/sea-plots/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/updates/", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.lastUpdatedIso);

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
