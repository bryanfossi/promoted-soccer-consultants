/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'promotedsoccerconsultants.com' }],
        destination: 'https://www.promotedsoccerconsultants.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
