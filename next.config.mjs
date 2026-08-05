/** @type {import('next').NextConfig} */

// Repo name — the site is served from https://<user>.github.io/<repo>/ on GitHub Pages,
// so assets and links need this prefix in production. Local `next dev` uses no prefix.
const repo = 'breakwall-specialists'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
