// form.ts in Spanish. The keys stay the same, so ?service= works in both languages.
export const serviceOptions = [
  {
    group: 'Limpieza especializada',
    options: [
      { key: 'essential-refresh', label: 'Essential Refresh' },
      { key: 'deep-cleaning', label: 'Limpieza Profunda White Glove' },
      { key: 'move-reset', label: 'Limpieza de Mudanza (entrada o salida)' },
    ],
  },
  {
    group: 'Restauración',
    options: [
      { key: 'restoration', label: 'Restauración, aún no sé cuál' },
      { key: 'carpet', label: 'Restauración de alfombras' },
      { key: 'tile-grout', label: 'Restauración de azulejos y juntas' },
      { key: 'odor', label: 'Frescura interior y olores' },
      { key: 'painting', label: 'Pintura interior' },
      { key: 'pressure-washing', label: 'Lavado a presión de concreto' },
    ],
  },
  {
    group: 'Cuidado recurrente',
    options: [{ key: 'home-preservation', label: 'Preservación del Hogar' }],
  },
  {
    group: 'Preparación de propiedades',
    options: [
      { key: 'market-ready', label: 'Preparación para la venta' },
      { key: 'realtor', label: 'Agente inmobiliario o referencia de un listado' },
      { key: 'military', label: 'Mudanza militar PCS' },
    ],
  },
  {
    group: 'Concierge',
    options: [{ key: 'concierge', label: 'Concierge Privado' }],
  },
  {
    group: 'Comercial',
    options: [{ key: 'commercial', label: 'Oficinas y espacios comerciales' }],
  },
];

export const sizeOptions = ['Menos de 1,500 pies²', '1,500–2,499 pies²', '2,500–3,499 pies²', '3,500–4,999 pies²', '5,000+ pies²', 'No lo sé'];

export const surfaceOptions = [
  { key: 'stone', label: 'Piedra natural' },
  { key: 'hardwood', label: 'Madera' },
  { key: 'tile', label: 'Azulejos y juntas' },
  { key: 'carpet', label: 'Alfombras y tapetes' },
  { key: 'glass', label: 'Vidrio' },
  { key: 'outdoor', label: 'Áreas exteriores' },
];

export const timingOptions = ['Lo antes posible', 'En las próximas dos semanas', 'En el próximo mes', 'Una fecha concreta, en mis notas', 'Solo estoy planeando'];
