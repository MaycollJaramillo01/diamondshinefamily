// English at the root, Spanish under /es with the same paths. Every page and component reads its language from the
// URL (Astro.currentLocale) and takes its words from here or from the *.es.ts beside each data file.
import { brand } from '../data/brand';
import * as navEn from '../data/nav';
import * as navEs from '../data/nav.es';
import { people as peopleEn } from '../data/people';
import { people as peopleEs } from '../data/people.es';
import { stories as storiesEn } from '../data/stories';
import { stories as storiesEs } from '../data/stories.es';
import { reviews as reviewsEn } from '../data/reviews';
import { reviews as reviewsEs } from '../data/reviews.es';
import { services as servicesEn } from '../data/services';
import { services as servicesEs } from '../data/services.es';
import { secondary as secondaryEn } from '../data/secondary';
import { secondary as secondaryEs } from '../data/secondary.es';
import { illustrativeNote as noteEn } from '../data/pictures';
import { illustrativeNote as noteEs } from '../data/pictures.es';

export type Lang = 'en' | 'es';

export const langOf = (locale: string | undefined): Lang => (locale === 'es' ? 'es' : 'en');

// The same page in the given language.
export function pathIn(path: string, lang: Lang): string {
  const bare = path.replace(/\.html$/, '').replace(/\/(index)?$/, '').replace(/^\/es(?=\/|$)/, '') || '/';
  if (lang === 'en') return bare;
  return bare === '/' ? '/es' : `/es${bare}`;
}

export const data = {
  en: { ...navEn, people: peopleEn, stories: storiesEn, reviews: reviewsEn, pages: [...servicesEn, ...secondaryEn], illustrativeNote: noteEn },
  es: { ...navEs, people: peopleEs, stories: storiesEs, reviews: reviewsEs, pages: [...servicesEs, ...secondaryEs], illustrativeNote: noteEs },
};

export const ui = {
  en: {
    descriptor: brand.descriptor,
    cta: brand.cta,
    hours: brand.hours,
    callOrText: 'Call or text',
    call: 'Call',
    skip: 'Skip to content',
    languages: 'Language',
    services: 'Services',
    menu: 'Menu',
    compareAll: 'Compare all services',
    primary: 'Primary',
    homePage: 'Home page',
    youAreHere: 'You are here',
    familyOwned: `Family-owned in ${brand.city} since ${brand.founded}.`,
    creds: 'Insured [confirm:insured] Bonded [confirm:bonded] Background-checked team [confirm:background]',
    related: 'Related care',
    seeDetails: 'See details',
    questions: 'Questions, answered plainly',
    clientSaid: 'What a client said',
    translated: '',
    business: `Family-owned ${brand.descriptor.toLowerCase()} in ${brand.city}, Texas: specialized cleaning, restoration and recurring care.`,
    footer: {
      sign: 'With care, the Leal family',
      message: `Family-owned in ${brand.city}, Texas, since ${brand.founded}. We answer ${brand.hours.short}`,
      google: 'Google reviews',
      explore: 'Everything on this site',
      photos: 'Photographs on this site are illustrative unless a page says otherwise. They are not client homes or results.',
    },
    frames: {
      title: 'Project documentation',
      text: 'We document each approved area before work begins, after it is completed and at property handoff. Photography is published only with client approval, so these frames stay empty until that is on file.',
      pending: 'Photo pending client approval',
    },
  },
  es: {
    descriptor: 'Preservación y Cuidado del Hogar',
    cta: 'Solicite una Evaluación del Hogar',
    hours: {
      text: 'De lunes a viernes, de 8:30 a.m. a 6:00 p.m., hora del centro',
      short: 'De lunes a viernes, de 8:30 a.m. a 6:00 p.m.',
      closed: 'Los fines de semana son para el descanso, la familia y la gratitud.',
    },
    callOrText: 'Llame o escriba al',
    call: 'Llame al',
    skip: 'Ir al contenido',
    languages: 'Idioma',
    services: 'Servicios',
    menu: 'Menú',
    compareAll: 'Comparar todos los servicios',
    primary: 'Principal',
    homePage: 'Página de inicio',
    youAreHere: 'Usted está aquí',
    familyOwned: `Empresa familiar en ${brand.city} desde ${brand.founded}.`,
    creds: 'Asegurados [confirm:insured] Afianzados [confirm:bonded] Equipo con verificación de antecedentes [confirm:background]',
    related: 'Cuidados relacionados',
    seeDetails: 'Ver detalles',
    questions: 'Preguntas, respondidas con claridad',
    clientSaid: 'Lo que dijo un cliente',
    translated: 'traducida del inglés',
    business: `Empresa familiar de preservación y cuidado del hogar en ${brand.city}, Texas: limpieza especializada, restauración y cuidado recurrente.`,
    footer: {
      sign: 'Con cariño, la familia Leal',
      message: `Empresa familiar en ${brand.city}, Texas, desde ${brand.founded}. Atendemos de lunes a viernes, de 8:30 a.m. a 6:00 p.m.`,
      google: 'Reseñas en Google',
      explore: 'Todo lo que hay en este sitio',
      photos: 'Las fotografías de este sitio son ilustrativas, salvo que una página indique lo contrario. No son casas ni resultados de clientes.',
    },
    frames: {
      title: 'Documentación del proyecto',
      text: 'Documentamos cada área aprobada antes de empezar, al terminar y en la entrega de la propiedad. Las fotografías se publican solo con la aprobación del cliente, así que estos marcos siguen vacíos hasta tenerla por escrito.',
      pending: 'Foto pendiente de aprobación del cliente',
    },
  },
};

// Dates are kept as written in English ("March 3, 2026") and shown in the page's language.
export const showDate = (date: string, lang: Lang) =>
  lang === 'en' ? date : new Intl.DateTimeFormat('es-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${date} UTC`));
