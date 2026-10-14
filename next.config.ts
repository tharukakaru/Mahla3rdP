import type { NextConfig } from 'next';
const marketingOrigin = process.env.NEXT_PUBLIC_SITE_URL;
const existingOrigin = process.env.NEXT_PUBLIC_LEGACY_ORIGIN || 'https://mahla3rdpoint.com';
if (marketingOrigin && new URL(marketingOrigin).origin === new URL(existingOrigin).origin) {
  throw new Error('Marketing and the existing application need distinct origins before deployment. Set NEXT_PUBLIC_LEGACY_ORIGIN to the preserved application host to prevent booking/account links looping back to marketing.');
}
const config: NextConfig = {
  distDir: '.next',
  devIndicators: false,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: false },
      ...['contact', 'about', 'method', 'booking', 'birth-chart', 'work-with-mahla', 'academy', 'journal', 'privacy', 'terms', 'portal'].map(path => ({ source: `/${path}`, destination: `/en/${path}`, permanent: true })),
      { source: '/articles/what-is-the-3rd-point', destination: '/en/journal/a-position-beyond-duality', permanent: true },
      { source: '/articles/quantum-scheduling-lunar-cycles', destination: '/en/journal/a-different-relationship-with-timing', permanent: true },
      { source: '/articles/what-is-the-matrix', destination: '/en/journal/recognising-the-pattern', permanent: true },
      { source: '/articles', destination: '/en/journal', permanent: true },
      { source: '/classes', destination: '/en/academy', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'X-Frame-Options', value: 'DENY' },
    ] }];
  }
};
// Optional static hosting build; legacy redirects are emitted by build-static.mjs.
if (process.env.MAHLA_STATIC_EXPORT === '1') {
  config.output = 'export';
  config.experimental = { cpus: 1 };
  delete config.distDir;
  config.trailingSlash = true;
  delete config.redirects;
  delete config.headers;
}
export default config;



