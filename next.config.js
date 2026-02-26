/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  images: {
    domains: ['ascinate.in/projects/hercompass', '127.0.0.1'],
  },
}

module.exports = withPWA(nextConfig)