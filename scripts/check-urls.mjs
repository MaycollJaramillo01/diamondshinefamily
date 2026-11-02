// Every indexed URL still answers, every internal link and #anchor lands, and every page carries its SEO basics.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { redirects } from '../src/data/redirects.mjs';
import { serviceKeys } from '../src/data/form.ts';

const problems = [];
const fileFor = (path) => join('dist', path === '/' ? 'index.html' : `${path.replace(/^\//, '')}.html`);
const isPage = (path) => existsSync(fileFor(path)) && !(path in redirects);

// 1. The URLs the old site had indexed, kept in the repo so the check also runs on Vercel.
const indexed = JSON.parse(readFileSync('scripts/indexed-urls.json', 'utf8'));
for (const url of indexed) {
  const target = redirects[url];
  if (target ? !isPage(target) : !isPage(url)) problems.push(`indexed URL lost: ${url}`);
}

// 2. Links, anchors and head tags, page by page.
const pages = readdirSync('dist', { recursive: true })
  .map(String)
  .filter((f) => f.endsWith('.html') && statSync(join('dist', f)).isFile())
  .map((f) => ({ file: f, path: '/' + f.replace(/\\/g, '/').replace(/(index)?\.html$/, ''), html: readFileSync(join('dist', f), 'utf8') }))
  .filter((p) => !(p.path in redirects));
const ids = new Map(pages.map((p) => [p.path, new Set([...p.html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
const titles = new Map();

for (const { path, html } of pages) {
  const body = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  for (const [, href] of body.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const [left, hash] = href.replace(/&#38;|&amp;/g, '&').split('#');
    const [target, query] = left.split('?');
    const to = target || path;
    if (to in redirects) problems.push(`${path} links to a redirect: ${href}`);
    else if (to.includes('.') ? !existsSync(join('dist', to)) : !isPage(to)) problems.push(`${path} has a broken link: ${href}`);
    else if (hash && !ids.get(to)?.has(hash)) problems.push(`${path} has a broken anchor: ${href}`);
    const service = new URLSearchParams(query).get('service');
    if (service && !serviceKeys.includes(service)) problems.push(`${path} preselects an unknown service: ${href}`);
  }
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) problems.push(`${path} has no title`);
  if (titles.has(title)) problems.push(`${path} repeats the title of ${titles.get(title)}`);
  titles.set(title, path);
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) problems.push(`${path} has no description`);
  if (!/<link rel="canonical"/.test(html)) problems.push(`${path} has no canonical`);
  const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  if (!og || !existsSync(join('dist', new URL(og).pathname))) problems.push(`${path} has no Open Graph image`);
  if ((body.match(/<h1[\s>]/g) ?? []).length !== 1) problems.push(`${path} does not have exactly one h1`);
  for (const [img] of body.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt[\s=>]/.test(img) || !/\swidth="/.test(img) || !/\sheight="/.test(img)) problems.push(`${path} has an image without alt or size: ${img.slice(0, 90)}`);
  }
  if (/\bundefined\b|\[confirm:|\bNaN\b/.test(body.replace(/<[^>]+>/g, ' '))) problems.push(`${path} shows a stray value`);
}

// 3. The sitemap lists pages, never redirects.
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
for (const from of Object.keys(redirects)) if (sitemap.includes(`${from}<`)) problems.push(`sitemap lists a redirect: ${from}`);
for (const { path } of pages) if (!sitemap.includes(`${path === '/' ? '' : path}</loc>`)) problems.push(`sitemap misses ${path}`);

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`${problems.length} problems`);
  process.exit(1);
}
console.log(`${indexed.length} indexed URLs and ${pages.length} pages checked`);
