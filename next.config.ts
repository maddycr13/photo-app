import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['live.staticflickr.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
