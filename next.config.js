/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  images: {
    domains: ['ascinate.in'],
  },
}

module.exports = withPWA(nextConfig)