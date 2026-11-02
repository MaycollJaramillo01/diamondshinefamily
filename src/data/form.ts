// Options of the evaluation form. Keys travel in ?service= so the form opens with the page's service selected.
export const serviceOptions = [
  {
    group: 'Specialized cleaning',
    options: [
      { key: 'essential-refresh', label: 'Essential Refresh' },
      { key: 'deep-cleaning', label: 'White Glove Deep Cleaning' },
      { key: 'move-reset', label: 'Move-In / Move-Out Reset' },
    ],
  },
  {
    group: 'Restoration',
    options: [
      { key: 'restoration', label: 'Restoration, not sure which' },
      { key: 'carpet', label: 'Carpet restoration' },
      { key: 'tile-grout', label: 'Tile and grout restoration' },
      { key: 'odor', label: 'Interior freshness and odor' },
      { key: 'painting', label: 'Interior painting' },
      { key: 'pressure-washing', label: 'Concrete pressure washing' },
    ],
  },
  {
    group: 'Recurring care',
    options: [{ key: 'home-preservation', label: 'Home Preservation' }],
  },
  {
    group: 'Property preparation',
    options: [
      { key: 'market-ready', label: 'Market-ready preparation' },
      { key: 'realtor', label: 'Realtor or listing referral' },
      { key: 'military', label: 'Military PCS move' },
    ],
  },
  {
    group: 'Concierge',
    options: [{ key: 'concierge', label: 'Private Concierge' }],
  },
  {
    group: 'Commercial',
    options: [{ key: 'commercial', label: 'Offices and commercial spaces' }],
  },
];

export const serviceKeys = serviceOptions.flatMap((g) => g.options.map((o) => o.key)).concat('not-sure');

export const sizeOptions = ['Under 1,500 sq ft', '1,500–2,499 sq ft', '2,500–3,499 sq ft', '3,500–4,999 sq ft', '5,000+ sq ft', 'Not sure'];

export const surfaceOptions = [
  { key: 'stone', label: 'Natural stone' },
  { key: 'hardwood', label: 'Hardwood' },
  { key: 'tile', label: 'Tile and grout' },
  { key: 'carpet', label: 'Carpet and rugs' },
  { key: 'glass', label: 'Glass' },
  { key: 'outdoor', label: 'Outdoor living' },
];

export const timingOptions = ['As soon as possible', 'Within two weeks', 'Within a month', 'A specific date, in my notes', 'Just planning'];
