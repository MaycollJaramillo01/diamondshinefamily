import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirects } from './src/data/redirects.mjs';

export default defineConfig({
  site: 'https://www.diamondshinefamily.com',
  trailingSlash: 'never',
  // /about.html is served at /about, so indexed URLs keep their exact form with no trailing slash.
  build: { format: 'file' },
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page.replace(/\/$/, '').endsWith(from)),
    }),
  ],
});
