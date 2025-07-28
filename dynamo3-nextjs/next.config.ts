import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel deployment optimizations */
  output: 'standalone',
  
  /* Image optimization */
  images: {
    domains: [],
    unoptimized: false,
  },
  
  /* Compression and performance */
  compress: true,
  poweredByHeader: false,
  
  /* Environment variables */
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
