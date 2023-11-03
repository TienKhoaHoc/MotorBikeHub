/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://127.0.0.1:27017/buyitnow",

    CLOUD_NAME: "deyg2mcjp",
    CLOUDINARY_API_KEY: "435335249849471",
    CLOUDINARY_API_SECRET: "o3126Fp_9zT2cG2NEE3ziCj2c5I",

    //NEXTAUTH_SECRET: "mysecretkey"
  },
  images: {
    domains: ["cdn.honda.com.vn"],
  }
};

module.exports = nextConfig;
