// The six-part service hierarchy drives the header's contextual menu, the home list and the /services page.
export const serviceGroups = [
  {
    id: 'cleaning',
    name: 'Specialized cleaning',
    href: '/experiences',
    line: 'Essential Refresh, White Glove Deep Cleaning and the Move-In / Move-Out Reset.',
    links: [
      { label: 'Essential Refresh', href: '/experiences#essential-refresh' },
      { label: 'White Glove Deep Cleaning', href: '/experiences#deep-cleaning' },
      { label: 'Move-In / Move-Out Reset', href: '/experiences#move-reset' },
    ],
  },
  {
    id: 'restoration',
    name: 'Restoration',
    href: '/restoration',
    line: 'Carpet, tile and grout, interior freshness and odor, interior painting, concrete pressure washing.',
    links: [
      { label: 'Carpet', href: '/carpet-restoration' },
      { label: 'Tile and grout', href: '/tile-grout-restoration' },
      { label: 'Freshness and odor', href: '/odor-restoration' },
      { label: 'Interior painting', href: '/painting' },
      { label: 'Pressure washing', href: '/pressure-washing' },
    ],
  },
  {
    id: 'recurring',
    name: 'Recurring care',
    href: '/home-preservation',
    line: 'Weekly, biweekly or monthly Home Preservation, with a written price per visit.',
    links: [
      { label: 'Home Preservation', href: '/home-preservation' },
      { label: 'White Glove Society', href: '/white-glove-society' },
      { label: 'Floor Ritual', href: '/floor-ritual' },
      { label: 'Welcome Home', href: '/white-glove-welcome-home' },
    ],
  },
  {
    id: 'preparation',
    name: 'Property preparation',
    href: '/market-ready-solutions',
    line: 'Market-ready homes, realtor partnerships and military PCS moves.',
    links: [
      { label: 'Market-ready homes', href: '/market-ready-solutions' },
      { label: 'Realtor partnerships', href: '/realtor-partnerships' },
      { label: 'Military PCS moves', href: '/military-pcs-concierge' },
    ],
  },
  {
    id: 'concierge',
    name: 'Concierge',
    href: '/private-concierge',
    line: 'One point of contact for your agreed home-care schedule, arrivals and outside providers.',
    links: [{ label: 'Private Concierge', href: '/private-concierge' }],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    href: '/commercial',
    line: 'Offices, administrative and client-facing spaces.',
    links: [{ label: 'Commercial Diamond Standard', href: '/commercial' }],
  },
];

// With the call to action, these make the six top-level options.
export const primaryNav = [
  { label: 'Our Work', href: '/transformation-stories' },
  { label: 'The Family', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const footerMain = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/transformation-stories' },
  { label: 'The Family', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Home Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export const footerMore = [
  { label: 'Service areas', href: '/service-areas' },
  { label: 'The White Glove Standard', href: '/white-glove-standard' },
  { label: 'For Those Who Serve', href: '/for-those-who-serve' },
  { label: 'Client resources', href: '/client-resources' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'Gift certificates', href: '/gift-certificates' },
  { label: 'Careers', href: '/careers' },
];

export const footerLegal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Client Privacy', href: '/client-privacy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Service Disclaimer', href: '/service-disclaimer' },
];
