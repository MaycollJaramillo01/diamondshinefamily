import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirects } from './src/data/redirects.mjs';

export default defineConfig({
  site: 'https://www.diamondshinefamily.com',
  trailingSlash: 'never',
  // /about.html is served at /about, so indexed URLs keep their exact form with no trailing slash.
  build: { format: 'file' },
  // English at the root, Spanish under /es with the same paths.
  i18n: { locales: ['en', 'es'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page.replace(/\/$/, '').endsWith(from)),
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-US' } },
    }),
  ],
});
