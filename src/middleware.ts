import { defineMiddleware } from 'astro:middleware';

// Spanish pages keep the visitor in Spanish: every link to a page of this site gains /es. Files (a path with an
// extension), links already under /es and the language switch (written with hreflang before href) stay as written.
const pageLink = /(<a\b[^>]*?\shref=")(\/(?!\/)[^"#?]*)/g;

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (context.currentLocale !== 'es') return response;
  const html = (await response.text())
    .replace(pageLink, (match, start: string, path: string) =>
      start.includes('hreflang=') || /^\/es(\/|$)/.test(path) || /\.\w+$/.test(path) ? match : `${start}/es${path === '/' ? '' : path}`,
    )
    // rich() prints the claims mark in English; the Spanish pages read it in Spanish.
    .replaceAll('<span class="tc">To&nbsp;confirm</span>', '<span class="tc">Por&nbsp;confirmar</span>');
  return new Response(html, { status: response.status, headers: response.headers });
});
