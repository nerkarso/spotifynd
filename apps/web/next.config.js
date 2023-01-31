/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
