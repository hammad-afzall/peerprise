import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/custom-software",
        destination: "/custom-software-solutions",
        permanent: true,
      },
      {
        source: "/health-check",
        destination: "/digital-review",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
