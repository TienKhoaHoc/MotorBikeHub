/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://127.0.0.1:27017/buyitnow",
  },
  images: {
    domains: ["cdn.honda.com.vn"],
  }
};

module.exports = nextConfig;
