// Indexed URLs that no longer have their own page. Astro writes a fallback page for each;
// scripts/write-redirects.mjs turns this same list into real 301s for the host.
export const redirects = {
  '/quote': '/home-evaluation',
  '/request-experience': '/home-evaluation',
  '/gallery': '/transformation-stories',
  '/military-pcs': '/military-pcs-concierge',
  '/private-clients': '/private-concierge',
  '/the-diamond-shine-experience': '/services',
  '/the-world-of-diamond-shine': '/about',
  '/the-people-behind-the-shine': '/about',
  '/our-community': '/about',
  '/white-glove-standard-film': '/white-glove-standard',
  '/hosting-season': '/white-glove-welcome-home',
  '/partnerships': '/realtor-partnerships',
  '/white-glove-academy': '/careers',
  '/white-glove-society/membership': '/white-glove-society',
};
