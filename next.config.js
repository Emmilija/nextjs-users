/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    loader: 'imgix',
    path: '',
    domains: ['your-image-domain.com'],
    formats: ['image/webp', 'image/avif'],
    // Enable lazy loading by setting loading to 'lazy' by default
    loading: 'lazy',
  },
};

module.exports = nextConfig
