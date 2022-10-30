/** @type {import('next').NextConfig} */
module.exports = {
  // React 18 strict mode causes double rerenders
  reactStrictMode: true,
  env:{
    BASE_URL: process.env.BASE_URL
  },
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  }
}
