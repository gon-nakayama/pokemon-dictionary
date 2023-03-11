/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  env: {
    ...require(`./env/${process.env.APP_ENV || "local"}.json`),
  },
};

module.exports = nextConfig;
