// The three documented cases, as the company publishes them. Nothing here is predicted: outcomes stay pending until the
// service record says otherwise, and the frames stay empty until the client approves the photographs.
export type Story = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  h1: string;
  lead: string;
  mark: 'boerne-case' | 'converse-status' | 'ladera-status';
  pic: string;
  second: string;
  scopePic: string;
  statusLine: string;
  summary: string;
  meta: string[];
  situation: string;
  goal: string;
  found: string[];
  scope: string[];
  work: string[];
  result: string[];
  frames: { name: string; line: string; frames: string[] }[];
  documents: string[];
  care: string[];
  service: string;
  related: { label: string; href: string; line: string }[];
};

const allFrames = ['Before', 'After', 'Property handoff'];

export const stories: Story[] = [
  {
    slug: 'boerne-market-ready-property-handoff',
    name: 'A Boerne residence',
    seoTitle: 'Boerne Market-Ready Home Preparation Case Study | Diamond Shine',
    description: 'How a Boerne-area residence was prepared for new owners: whole-home detailing, appliance care, carpet restoration, freshness treatment and a documented handoff.',
    h1: 'A Boerne home, ready for new&nbsp;owners.',
    lead: 'A large Boerne-area residence received a documented market-ready preparation: whole-home detailing, appliance care, carpet restoration, freshness treatment and a final property handoff. [confirm:boerne-case]',
    mark: 'boerne-case',
    pic: 'hill-country-residence.jpeg',
    second: 'carpet-room.webp',
    scopePic: 'deep-kitchen.webp',
    statusLine: 'Work documented. Photographs held until the client approves them. [confirm:boerne-case]',
    summary: 'Whole-home detailing, appliance care, carpet restoration across four bedrooms, closets, an upstairs living area and stairs, freshness treatment and a final handoff review.',
    meta: ['Boerne area', 'Single-family home', 'Market-ready', 'Carpet restoration'],
    situation: 'A roughly 4,690-square-foot, four-bedroom, five-bath single-family residence in the Boerne area was approaching a transition to new ownership. We were engaged to complete a coordinated market-ready preparation and create a service record for the property handoff.',
    goal: 'Complete the approved cleaning, restoration, freshness, appliance-detailing and presentation work under one coordinated plan, so the residence could be handed off in a professionally prepared condition.',
    found: [
      'Whole-home detailing needs across visible surfaces, trim, high-touch areas, bathrooms and floors',
      'Carpeted areas requiring professional extraction and deodorizing across bedrooms, closets, the upstairs living area and stairs',
      'Kitchen and appliance interiors requiring presentation detailing, including the refrigerator and double ovens',
      'Freshness and prior-occupancy concerns requiring a coordinated deodorizing reset',
    ],
    scope: [
      'Market-ready cleaning throughout approved interior areas',
      'Kitchen and appliance presentation detailing, including refrigerator interior and double ovens',
      'Carpet restoration across four bedrooms, bedroom closets, upstairs living area and stairs',
      'Odor treatment and professional freshness support',
      'Floor care, whole-home presentation detailing and a final room-by-room review',
    ],
    work: [
      'A coordinated team of five to six specialists was assigned across appliance detailing, bathroom sanitation, surface presentation, floor care, carpet restoration, deodorizing and final quality control.',
      'Professional supplies, extraction equipment, floor-care materials, microfiber systems and deodorizing products were provided by Diamond Shine.',
      'Kitchen, bathroom, trim, blinds, interior windows, reachable fixtures, doors, high-touch areas and approved floors were detailed.',
      'Carpeted areas were professionally cleaned, extracted, deodorized and reviewed after treatment.',
      'A final room-by-room presentation review was completed before handoff documentation was prepared.',
    ],
    result: [
      'The documented cleaning, appliance detailing, carpet restoration, freshness treatment, floor care and presentation scope was completed.',
      'The residence received a final room-by-room quality-control review.',
      'A property service record and a detailed completed-service record were prepared for the transition. [confirm:certification]',
      'The home was handed off with the completed scope documented for the new homeowners.',
    ],
    frames: [
      { name: 'Main living room', line: 'Carpet restoration in the main traffic pathway, plus a final frame at handoff.', frames: allFrames },
      { name: 'Kitchen and bathroom tile pathways', line: 'Grout lines in the kitchen and bathroom pathways, before and after.', frames: ['Before', 'After'] },
    ],
    documents: ['White Glove Home Evaluation', 'Property Service Certification', 'Completed Service Record'],
    care: [
      'Allow professionally treated carpet areas to dry fully before heavy traffic.',
      'Maintain gentle routine upkeep across kitchen, bathroom and high-touch presentation areas.',
      'Support interior freshness with appropriate airflow after deodorizing and extraction work.',
      'Consider recurring care when continued presentation readiness is needed.',
    ],
    service: 'market-ready',
    related: [
      { label: 'Market-ready preparation', href: '/market-ready-solutions', line: 'The service behind this record.' },
      { label: 'Carpet restoration', href: '/carpet-restoration', line: 'Extraction and treatment, with honest limits.' },
      { label: 'Documentation', href: '/documentation', line: 'What a service record says, and what it does not.' },
    ],
  },
  {
    slug: 'converse-post-occupancy-white-glove-reset',
    name: 'A Converse home',
    seoTitle: 'Converse Move-Out Cleaning and Odor Reset Case Study | Diamond Shine',
    description: 'A project diary: a Converse-area home scheduled for a move-out reset, carpet care, oven detailing and pet and smoke odor treatment. Outcome pending verified completion.',
    h1: 'A Converse home, reset after&nbsp;occupancy.',
    lead: 'A project diary. A Converse-area residence entered a coordinated reset after prior occupancy left cleaning, carpet, pet, smoke and odor concerns to address. Outcome pending verified service completion. [confirm:converse-status]',
    mark: 'converse-status',
    pic: 'empty-home.jpg',
    second: 'carpet-closeup.webp',
    scopePic: 'move-entry.webp',
    statusLine: 'Outcome pending verified service completion. [confirm:converse-status]',
    summary: 'A scheduled move-out cleaning, carpet cleaning across four rooms or areas, oven interior detailing, and pet and smoke odor treatment.',
    meta: ['Converse area', 'Single-family home', 'Move-in and move-out', 'Carpet'],
    situation: 'Following a move-out, the residence required a substantial post-occupancy reset before its next chapter. The approved planning record identified general move-out cleaning needs together with carpet, oven, pet-related, smoke and odor concerns.',
    goal: 'Bring the property back to a cleaner, fresher, more orderly condition through one coordinated service plan, rather than separating the work across multiple appointments.',
    found: [
      'Significant post-occupancy cleaning needs across the approved interior scope',
      'Four carpeted rooms or areas scheduled for professional cleaning',
      'Pet and cigarette-smoke odor concerns requiring targeted treatment',
      'Oven interior requiring detailed cleaning',
    ],
    scope: ['Move-out cleaning', 'Carpet cleaning across four approved rooms or areas', 'Interior oven detailing', 'Pet and smoke odor treatment'],
    work: [
      'The project is documented as a scheduled diary until service completion is verified.',
      'The team will sequence the approved move-out reset, carpet care, oven detailing and odor treatment under one plan.',
      'Real before, work-in-progress, after and handoff photography may be added only when publication approval is on file.',
    ],
    result: [
      'Project outcome pending verified service completion.',
      'Completed work and handoff language will be updated from the service record rather than predicted in advance.',
    ],
    frames: [
      { name: 'Post-occupancy interior', line: 'Real documentation will be added after the approved service is completed and publication permission is confirmed.', frames: allFrames },
    ],
    documents: ['Approved service proposal', 'Completion record pending service'],
    care: [
      'Ventilation and drying guidance will be based on the actual products and carpet treatment used on service day.',
      'Any persistent odor concerns outside the approved scope will be documented honestly at handoff.',
    ],
    service: 'move-reset',
    related: [
      { label: 'Move-In / Move-Out Reset', href: '/experiences#move-reset', line: 'What the visit includes.' },
      { label: 'Interior odor treatment', href: '/odor-restoration', line: 'What we can do about odor, and what we do not claim.' },
      { label: 'Carpet restoration', href: '/carpet-restoration', line: 'Extraction and treatment, with honest limits.' },
    ],
  },
  {
    slug: 'ladera-one-day-market-ready-staging-preparation',
    name: 'A Ladera home',
    seoTitle: 'Ladera Market-Ready Staging Preparation Case Study | Diamond Shine',
    description: 'A project diary: a Ladera-area home booked for one coordinated day of detailing, carpet, windows and appliances before staging, protecting fresh paint. Outcome pending.',
    h1: 'A Ladera home, one day before&nbsp;staging.',
    lead: 'A project diary. A Ladera-area homeowner preparing for staging requested one plan for whole-home detailing, carpet restoration, exterior windows and appliance interiors, while protecting freshly painted walls. Outcome pending verified service completion. [confirm:ladera-status]',
    mark: 'ladera-status',
    pic: 'market-ready.jpg',
    second: 'painting-hand.jpg',
    scopePic: 'entry.jpeg',
    statusLine: 'Outcome pending verified service completion. [confirm:ladera-status]',
    summary: 'A booked plan covering a whole-home reset, carpet restoration in four bedrooms, up to 20 safely accessible exterior windows, refrigerator and oven interiors, and a final presentation review.',
    meta: ['Ladera area', 'Single-family home', 'Market-ready', 'Carpet restoration'],
    situation: 'An approximately 2,200-square-foot, four-bedroom, two-bath residence was being prepared for staging. The interior had been freshly repainted, creating an important sequencing requirement: improve the home’s presentation while protecting new paint.',
    goal: 'Coordinate cleaning, carpet, windows, appliance interiors and final presentation under one team, so the home can move toward staging without a series of disconnected appointments.',
    found: [
      'Moderate buildup reported in the initial request',
      'Four carpeted bedrooms included in the planned restoration scope',
      'Exterior windows requested as part of the preparation plan',
      'Refrigerator and oven interiors included for detailed presentation',
      'Fresh interior paint requiring protection during service',
    ],
    scope: [
      'Move-in / move-out reset for the approved whole-home scope',
      'Carpet restoration in four bedrooms',
      'Exterior window cleaning for up to 20 safely accessible windows',
      'Interior refrigerator and oven detailing',
      'Blinds, reachable interior glass, baseboards, trim, doors, frames, high-touch surfaces, kitchen, bathrooms and hard-floor care',
      'Fresh-paint protection and a final room-by-room presentation review',
    ],
    work: [
      'The project is presented as an upcoming diary until service completion is verified.',
      'The booked plan anticipates approximately four to six specialists, with professional supplies and equipment included.',
      'Work is planned as one coordinated service day, subject to final condition, safe access and the approved scope.',
      'Real photography and final result language will be added only after the work is completed and publication permission is confirmed.',
    ],
    result: [
      'Project outcome pending verified service completion.',
      'The final story will document only the services actually performed and the condition observed at handoff.',
    ],
    frames: [
      { name: 'Market-ready residence', line: 'Before, after and handoff documentation will be published only after service completion and approval.', frames: allFrames },
    ],
    documents: ['Market-ready proposal', 'Booking confirmation', 'Completion record pending service'],
    care: [
      'Freshly painted walls should be protected from unnecessary washing or abrasion.',
      'Keep carpeted bedrooms reasonably clear to support efficient extraction and drying.',
      'Keep window and blind areas accessible where practical for the approved presentation work.',
    ],
    service: 'market-ready',
    related: [
      { label: 'Market-ready preparation', href: '/market-ready-solutions', line: 'One coordinated plan before staging or photography.' },
      { label: 'Realtor partnerships', href: '/realtor-partnerships', line: 'Working with agents around listing dates.' },
      { label: 'Interior painting', href: '/painting', line: 'Touch-ups alongside cleaning, in the same visit.' },
    ],
  },
];
