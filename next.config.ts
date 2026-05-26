import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/emergency-physicians-preview",
        assetPrefix: "/emergency-physicians-preview",
        images: {
          unoptimized: true,
        },
      }
    : {}),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
