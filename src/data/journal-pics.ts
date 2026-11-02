// Each article's lead and margin picture, and the published claims its text repeats.
export const articlePics: Record<string, [string, string]> = {
  '8000-homes-served-thoughtful-home-care': ['hero-home.jpg', 'white-glove-detail.webp'],
  'annual-home-preservation-checklist': ['preservation.jpg', 'preservation.jpg'],
  'before-the-first-box-move-in-preparation': ['move-entry.webp', 'empty-home.jpg'],
  'caring-for-high-touch-home-surfaces': ['white-glove-detail.webp', 'stone-kitchen.jpg'],
  'carpet-care-rooms-pets-and-realistic-expectations': ['carpet-closeup.webp', 'carpet-room.webp'],
  'good-samaritan-care-beyond-the-home': ['courtyard-wide.webp', 'gloved-hand-stone.jpg'],
  'hard-water-marks-what-can-be-restored': ['travertine.jpg', 'gloved-hand-stone.jpg'],
  'preparing-a-san-antonio-home-for-seasonal-changes': ['courtyard-wide.webp', 'limestone-entrance.webp'],
  'preparing-home-for-new-baby': ['fresh-linens.webp', 'bed-presentation.jpg'],
  'preparing-your-home-before-returning-from-travel': ['arrival-entrance.webp', 'arrival-kitchen.webp'],
  'restore-or-replace-homeowner-framework': ['empty-home.jpg', 'limestone-entrance.webp'],
  'the-art-of-preparing-a-guest-room': ['bed-presentation.jpg', 'towel-swans.webp'],
  'what-buyers-notice-in-the-first-minutes': ['hero-home.jpg', 'entry.jpeg'],
  'white-glove-floor-ritual-finishing-touch': ['rose-vanilla.webp', 'saffron-amberwood.webp'],
};

export const articleNotes: Record<'en' | 'es', Record<string, string>> = {
  en: {
    '8000-homes-served-thoughtful-home-care': 'The 8,000+ figure is as published. [confirm:homes-8000]',
    'white-glove-floor-ritual-finishing-touch': 'Prices and availability are as published. [confirm:prices]',
    'good-samaritan-care-beyond-the-home': 'As published by the family. [confirm:good-samaritan]',
  },
  es: {
    '8000-homes-served-thoughtful-home-care': 'La cifra de más de 8,000 es la publicada. [confirm:homes-8000]',
    'white-glove-floor-ritual-finishing-touch': 'Los precios y la disponibilidad son los publicados. [confirm:prices]',
    'good-samaritan-care-beyond-the-home': 'Tal como lo publica la familia. [confirm:good-samaritan]',
  },
};
