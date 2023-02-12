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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/transaction" }, // Redirect index to transaction page
      "/transaction": { page: "/transaction" },
      "/category": { page: "/category" },
      "/payee": { page: "/payee" },
      "/account": { page: "/account" },
    };
  },
};

module.exports = nextConfig;
