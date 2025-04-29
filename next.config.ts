import type { NextConfig } from "next";

const { NEXT_PUBLIC_DISCORD_INVITE_URL } = process.env;


const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/discord',
        destination: NEXT_PUBLIC_DISCORD_INVITE_URL as string,
        permanent: true,
      },

    ]
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
