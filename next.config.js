/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  images: {
    domains: ['ascinate.in', 'localhost'],
  },
}

module.exports = withPWA(nextConfig)