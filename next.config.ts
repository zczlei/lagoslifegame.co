import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Cache Components hang on Cloudflare Workers (setTimeout runtime gap → 1101).
  // Re-enable when OpenNext/Next support CF Cache Components fully.
  cacheComponents: false,
  turbopack: {
    // Parent ~/package-lock.json made Turbopack treat /Users/zhaolei as root
    // and watch the whole home tree → endless HMR refresh loops in dev.
    root: path.join(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
