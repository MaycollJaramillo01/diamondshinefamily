// The image helper's eager glob makes Astro copy every original into the build. Only what a page or stylesheet names is kept.
import { readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = readdirSync('dist', { recursive: true }).map(String).filter((f) => statSync(join('dist', f)).isFile());
const pages = files.filter((f) => /\.(html|css|js)$/.test(f)).map((f) => readFileSync(join('dist', f), 'utf8')).join('\n');

let removed = 0;
for (const f of files) {
  if (f.includes('_astro') && /\.(png|jpe?g|webp|avif)$/i.test(f) && !pages.includes(f.split(/[\\/]/).pop())) {
    rmSync(join('dist', f));
    removed++;
  }
}
console.log(`${removed} unreferenced images removed`);
