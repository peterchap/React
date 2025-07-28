/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  typescript: {
    // Temporarily allow build without type checking for initial setup
    ignoreBuildErrors: false,
  },
  eslint: {
    // Temporarily disable eslint during builds for initial setup
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig