import type { ImageMetadata } from 'astro';

function imageSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/dishes/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

const bySlug = new Map<string, ImageMetadata>();

for (const [path, mod] of Object.entries(modules)) {
  const file = path.split('/').pop() ?? '';
  const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  bySlug.set(slug, mod.default);
}

export function getNamedImage(name: string): ImageMetadata | undefined {
  return bySlug.get(imageSlug(name));
}
