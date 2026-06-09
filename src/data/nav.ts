export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
] as const;

function normalizePath(path: string) {
  const trimmed = path.split('?')[0].split('#')[0].replace(/\/index\.html$/, '').replace(/\/$/, '');
  return trimmed || '/';
}

export function isNavActive(href: string, currentPath: string) {
  const path = normalizePath(currentPath);
  const target = normalizePath(href);
  if (target === '/') return path === '/';
  return path === target;
}
