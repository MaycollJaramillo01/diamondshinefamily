// What each picture shows. They are the company's own illustrative images, never a client's home and never a result.
export const illustrativeNote = 'Illustrative image, not this property.';

export const pictures: Record<string, { alt: string }> = {
  'arrival-entrance.webp': { alt: 'Illustrative image of a limestone entrance with a timber door in low evening sun.' },
  'arrival-kitchen.webp': { alt: 'Illustrative image of a marble kitchen island with white flowers and a small card.' },
  'bed-presentation.jpg': { alt: 'Illustrative image of a bedroom with a made bed, a bench and a tall window.' },
  'carpet-closeup.webp': { alt: 'Illustrative close view of a neutral carpet, its pile raked in even lines.' },
  'carpet-restoration.jpg': { alt: 'Illustrative image of evening light across a carpeted room with dark walls.' },
  'carpet-room.webp': { alt: 'Illustrative image of a pale carpeted room with vacuum lines and a white sofa.' },
  'commercial-executive.jpg': { alt: 'Illustrative image of an executive office with a long table and a glass wall.' },
  'commercial.jpg': { alt: 'Illustrative image of a bright reception area with a polished floor and glass doors.' },
  'courtyard-wide.webp': { alt: 'Illustrative image of a limestone courtyard with an olive tree and arched glass doors.' },
  'deep-kitchen.webp': { alt: 'Illustrative image of a family kitchen with a timber island and tall windows.' },
  'empty-home.jpg': { alt: 'Illustrative image of an empty living room with a hardwood floor and tall windows.' },
  'entry.jpeg': { alt: 'Illustrative image of an entry hall with a console table, opening onto a living room.' },
  'essential.jpg': { alt: 'Illustrative image of a tidy living room with arched windows and a pale sofa.' },
  'fresh-linens.webp': { alt: 'Illustrative image of a bed made with fresh white linens and a folded throw.' },
  'gloved-hand-stone.jpg': { alt: 'Illustrative image of a gloved hand wiping a polished dark stone counter.' },
  'hero-home.jpg': { alt: 'Illustrative image of a white home with a garden path and clipped hedges under large oaks.' },
  'hero-services.jpg': { alt: 'Illustrative image of a bright open living and dining room.' },
  'hill-country-residence.jpeg': { alt: 'Illustrative image of a stone house in the Hill Country at the end of a long drive.' },
  'limestone-entrance.webp': { alt: 'Illustrative image of a pale stone walk leading to a limestone entrance.' },
  'limestone-fireplace.jpeg': { alt: 'Illustrative image of a living room with a limestone fireplace and tall windows onto a garden.' },
  'living.webp': { alt: 'Illustrative image of a living room with arched windows, a wool rug and a low timber table.' },
  'market-ready.jpg': { alt: 'Illustrative image of an open living room and kitchen, arranged and ready to be seen.' },
  'mint-citrus.webp': { alt: 'Illustration of mint leaves, lemon and soft wood on pale stone.' },
  'move-entry.webp': { alt: 'Illustrative image of an open front door and an empty, sunlit hall.' },
  'painting-hand.jpg': { alt: 'Illustrative image of a gloved hand cutting in paint along a white crown molding.' },
  'preservation.jpg': { alt: 'Illustrative image of a kitchen and hall in morning light, kept in good order.' },
  'rose-vanilla.webp': { alt: 'Illustration of roses, freesia and vanilla pods on pale stone.' },
  'saffron-amberwood.webp': { alt: 'Illustration of saffron threads, jasmine and amberwood on pale stone.' },
  'stone-kitchen.jpg': { alt: 'Illustrative image of a kitchen with a stone counter, a range and a glass-front cabinet.' },
  'towel-swans.webp': { alt: 'Illustrative image of two towels folded into swans on a made bed.' },
  'travertine.jpg': { alt: 'Illustrative close view of travertine floor tile and its joints.' },
  'white-glove-detail.webp': { alt: 'Illustrative image of a white-gloved hand resting on a carved timber table.' },
};

export const pic = (name: string) => {
  const p = pictures[name];
  if (!p) throw new Error(`Picture without a description: ${name}`);
  return { src: name, alt: p.alt };
};
