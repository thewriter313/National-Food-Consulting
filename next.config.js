/** @type {import('next').NextConfig} */
// GitHub Pages uses /repo-name as base path; GITHUB_REPOSITORY is set in Actions
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const basePath = repoName ? `/${repoName}` : ''
const assetPrefix = basePath

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: assetPrefix || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
