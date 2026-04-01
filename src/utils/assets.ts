/**
 * Resolves a public asset path using Vite's base URL.
 * In dev this returns '/images/foo.jpg', in production '/krishna-dhulipala/images/foo.jpg'.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return base + path.replace(/^\//, '');
}
