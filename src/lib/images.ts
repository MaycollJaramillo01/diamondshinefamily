import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp}', { eager: true });

// Finds a picture by file name, so data files can name pictures as plain strings.
export function img(name: string): ImageMetadata {
  const key = Object.keys(files).find((k) => k.endsWith(`/${name}`));
  if (!key) throw new Error(`Unknown image: ${name}`);
  return files[key].default;
}
