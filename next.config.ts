import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {},
  typescript: {
    // Same workaround as agntix template: GSAP type files have casing issues
    // (Observer.d.ts vs observer.d.ts) that surface on case-sensitive filesystems.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
