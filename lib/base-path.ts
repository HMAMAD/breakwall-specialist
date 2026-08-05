// The site is served from a subfolder on GitHub Pages (https://<user>.github.io/<repo>/),
// so assets in /public must be prefixed with this base path in production.
// Must match `basePath` in next.config.mjs. Empty in local dev (served from root).
// Next.js inlines process.env.NODE_ENV at build time, so this resolves to a static string.
export const basePath =
  process.env.NODE_ENV === 'production' ? '/breakwall-specialist' : ''

// Prefix a /public asset path with the base path. Pass a root-absolute path, e.g. asset('/assets/x.jpg').
export function asset(path: string): string {
  return `${basePath}${path}`
}
