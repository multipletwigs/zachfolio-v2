/** @type {import('next').NextConfig} */
module.exports = {
  // React 18 strict mode causes double rerenders
  reactStrictMode: false,
  env:{
    BASE_URL: process.env.BASE_URL
  }
}
