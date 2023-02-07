/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/transaction",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
