// nav.ts in Spanish: the same groups, ids and links, so both menus stay in step.
export const serviceGroups = [
  {
    id: 'cleaning',
    name: 'Limpieza especializada',
    href: '/experiences',
    line: 'Essential Refresh, Limpieza Profunda White Glove y Limpieza de Mudanza.',
    links: [
      { label: 'Essential Refresh', href: '/experiences#essential-refresh' },
      { label: 'Limpieza Profunda White Glove', href: '/experiences#deep-cleaning' },
      { label: 'Limpieza de Mudanza', href: '/experiences#move-reset' },
    ],
  },
  {
    id: 'restoration',
    name: 'Restauración',
    href: '/restoration',
    line: 'Alfombras, azulejos y juntas, frescura interior y olores, pintura interior y lavado a presión de concreto.',
    links: [
      { label: 'Alfombras', href: '/carpet-restoration' },
      { label: 'Azulejos y juntas', href: '/tile-grout-restoration' },
      { label: 'Frescura y olores', href: '/odor-restoration' },
      { label: 'Pintura interior', href: '/painting' },
      { label: 'Lavado a presión', href: '/pressure-washing' },
    ],
  },
  {
    id: 'recurring',
    name: 'Cuidado recurrente',
    href: '/home-preservation',
    line: 'Preservación del Hogar semanal, quincenal o mensual, con un precio por visita por escrito.',
    links: [
      { label: 'Preservación del Hogar', href: '/home-preservation' },
      { label: 'White Glove Society', href: '/white-glove-society' },
      { label: 'Floor Ritual', href: '/floor-ritual' },
      { label: 'Welcome Home', href: '/white-glove-welcome-home' },
    ],
  },
  {
    id: 'preparation',
    name: 'Preparación de propiedades',
    href: '/market-ready-solutions',
    line: 'Casas listas para la venta, alianzas con agentes inmobiliarios y mudanzas militares PCS.',
    links: [
      { label: 'Casas listas para la venta', href: '/market-ready-solutions' },
      { label: 'Alianzas con agentes inmobiliarios', href: '/realtor-partnerships' },
      { label: 'Mudanzas militares PCS', href: '/military-pcs-concierge' },
    ],
  },
  {
    id: 'concierge',
    name: 'Concierge',
    href: '/private-concierge',
    line: 'Un solo punto de contacto para su calendario de cuidado acordado, sus llegadas y sus proveedores externos.',
    links: [{ label: 'Concierge Privado', href: '/private-concierge' }],
  },
  {
    id: 'commercial',
    name: 'Comercial',
    href: '/commercial',
    line: 'Oficinas, áreas administrativas y espacios de atención al público.',
    links: [{ label: 'Commercial Diamond Standard', href: '/commercial' }],
  },
];

export const primaryNav = [
  { label: 'Nuestro trabajo', href: '/transformation-stories' },
  { label: 'La familia', href: '/about' },
  { label: 'Reseñas', href: '/reviews' },
  { label: 'Contacto', href: '/contact' },
];

export const footerMain = [
  { label: 'Servicios', href: '/services' },
  { label: 'Nuestro trabajo', href: '/transformation-stories' },
  { label: 'La familia', href: '/about' },
  { label: 'Reseñas', href: '/reviews' },
  { label: 'El Diario del Hogar', href: '/journal' },
  { label: 'Contacto', href: '/contact' },
];

export const footerMore = [
  { label: 'Zonas de servicio', href: '/service-areas' },
  { label: 'El Estándar White Glove', href: '/white-glove-standard' },
  { label: 'Para quienes sirven', href: '/for-those-who-serve' },
  { label: 'Recursos para clientes', href: '/client-resources' },
  { label: 'Documentación', href: '/documentation' },
  { label: 'Certificados de regalo', href: '/gift-certificates' },
  { label: 'Empleo', href: '/careers' },
];

export const footerLegal = [
  { label: 'Política de privacidad', href: '/privacy-policy' },
  { label: 'Privacidad del cliente', href: '/client-privacy' },
  { label: 'Términos de uso', href: '/terms-of-use' },
  { label: 'Aviso sobre los servicios', href: '/service-disclaimer' },
];
