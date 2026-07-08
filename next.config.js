/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // statusCode: 301 set explicitly — Next.js `permanent: true` emits 308;
      // these GET-only marketing/canonical redirects use a literal 301.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'promotedsoccerconsultants.com' }],
        destination: 'https://www.promotedsoccerconsultants.com/:path*',
        statusCode: 301,
      },
      {
        source: '/ai-assistant',
        destination: '/fuse-id',
        statusCode: 301,
      },
      {
        source: '/services',
        destination: '/recruiting-services',
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig
