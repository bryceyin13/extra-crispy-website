export function getAssetUrl(path: string): string {
  if (!path) return '';
  // If path is an absolute URL, return as is
  if (path.startsWith('http')) return path;
  
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure we don't have double slashes
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${cleanBase}${cleanPath}`;
}
