const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  // https://github.com/vercel/next.js/pull/36584
  experimental: {
    legacyBrowsers: false
  }
  // async redirects() {
  //   return [
  //     {
  //       source: '/blog',
  //       destination: '/',
  //       permanent: false,
  //     },
  //     {
  //       source: '/blog/:slug*',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ]
  // },
})
