// Real 301s for the host, from the one list in src/data/redirects.mjs. The host is not chosen yet, so all three are written.
// ponytail: `301!` is Netlify's way past Astro's fallback pages. On Cloudflare Pages, write plain `301`.
import { writeFileSync } from 'node:fs';
import { redirects } from '../src/data/redirects.mjs';

const pairs = Object.entries(redirects);

writeFileSync('dist/_redirects', pairs.map(([from, to]) => `${from} ${to} 301!`).join('\n') + '\n');

writeFileSync(
  'dist/.htaccess',
  [
    ...pairs.map(([from, to]) => `RedirectMatch 301 ^${from}/?$ ${to}`),
    'RewriteEngine On',
    'RewriteCond %{REQUEST_FILENAME} !-f',
    'RewriteCond %{REQUEST_FILENAME}.html -f',
    'RewriteRule ^(.+)$ $1.html [L]',
  ].join('\n') + '\n',
);

const vercel = JSON.stringify(
  {
    cleanUrls: true,
    trailingSlash: false,
    redirects: pairs.map(([source, destination]) => ({ source, destination, statusCode: 301 })),
  },
  null,
  2,
);
writeFileSync('vercel.json', vercel + '\n');
writeFileSync('dist/vercel.json', vercel + '\n');
console.log(`${pairs.length} redirects written`);
