// Client words, exactly as published on Facebook and Google. No ratings, no edits, no additions.
// `source` keeps the difference between a Facebook recommendation and a Google review.
export type Review = {
  id: string;
  name: string;
  source: 'Facebook recommendation' | 'Google review';
  context: string;
  excerpt?: string;
  text: string;
  note?: string;
  group: 'homes' | 'moves' | 'recurring' | 'commercial';
};

export const reviews: Review[] = [
  {
    id: 'serena',
    name: 'Serena L.',
    source: 'Facebook recommendation',
    context: 'Deep cleaning, moving preparation',
    excerpt: 'They took great care with the home and items in the home…',
    text: 'BEYOND wonderful experience. They were exceptionally detailed, thorough, and I am so impressed with my home it is beyond words. They did a deep clean and got us moving ready! They took great care with the home and items in the home, and cleaned even little details like dust off of the light switches, dusted/fluffed our flower decorations, and so much more. Really just all the care and attention they had for our home is just amazing! This is a smaller family owned business, and they truly treat their customers like family. I highly recommend them!',
    group: 'moves',
  },
  {
    id: 'evelyn',
    name: 'Evelyn R.',
    source: 'Facebook recommendation',
    context: 'Recurring cleaning',
    excerpt: 'Their attention to detail is unmatched, they treat our home as if it were their own, and the results speak for themselves.',
    text: "We've had the pleasure of working with Lilian and her team from Diamond Shine Professional Cleaning Service, and I can't recommend them enough! They are always professional, punctual, and incredibly trustworthy. Their attention to detail is unmatched, they treat our home as if it were their own, and the results speak for themselves. Every visit leaves the house sparkling clean and refreshed.",
    group: 'recurring',
  },
  {
    id: 'rob',
    name: 'Rob W.',
    source: 'Facebook recommendation',
    context: 'Weekly cleaning, two move-out cleans',
    excerpt: "We've been using Diamond Shine since 2019…",
    text: "We've been using Diamond Shine since 2019, consisting of weekly cleaning services and 2 move-out cleans. We have always been extremely happy with their service, plus they're just good people to boot. Highly recommend!",
    group: 'recurring',
  },
  {
    id: 'anne',
    name: 'Anne D.',
    source: 'Facebook recommendation',
    context: 'Recurring home care',
    excerpt: 'The attention to detail they display is a testament to their professionalism and respect for our home.',
    text: 'We are incredibly satisfied with the services provided by Diamond Shine. They are prompt and communicative with our appointments and speedy without sacrificing quality. The attention to detail they display is a testament to their professionalism and respect for our home. Even the smallest details are no problem for them, and when they are finished, it feels like a brand new home every time.',
    group: 'recurring',
  },
  {
    id: 'brittney',
    name: 'Brittney T.',
    source: 'Google review',
    context: 'Deep cleaning',
    excerpt: 'Every little detail was taken care of and it truly exceeded my expectations.',
    text: "Absolutely amazing! I had my house deep cleaned today and I honestly couldn’t be happier. Everything was PERFECT. The attention to detail was incredible and my entire house looks and feels so fresh. I could literally smell how clean the house was before I even walked through the front door! Every little detail was taken care of and it truly exceeded my expectations. I’m so impressed and will definitely be using them again. 10/10 recommend!",
    group: 'homes',
  },
  {
    id: 'brandon',
    name: 'Brandon C.',
    source: 'Google review',
    context: 'Deep cleaning (excerpt)',
    text: 'Had an amazing experience with Diamond Shine, Emilio and his whole staff. The customer service was excellent, very personable and makes you feel like family, they left my whole house clean and fresh, with their deep cleaning services. …',
    group: 'homes',
  },
  {
    id: 'crystal',
    name: 'Crystal C.',
    source: 'Facebook recommendation',
    context: 'Move-out cleaning',
    excerpt: 'The team was professional, knowledgeable, and clearly takes pride in their work.',
    text: 'The team did an absolutely amazing job with my move-out clean! When I walked in, I almost cried — the house was shining, smelled incredible, and was truly move-in ready. They went above and beyond my expectations. The team was professional, knowledgeable, and clearly takes pride in their work. I would highly recommend this company to anyone needing a deep, thorough clean.',
    group: 'moves',
  },
  {
    id: 'melissa',
    name: 'Melissa C.',
    source: 'Facebook recommendation',
    context: 'Deep cleaning, a home with pets',
    excerpt: 'They were so professional, hardworking, and worked with my schedule.',
    text: "Had a deep clean on our house which was very overdue and we are so happy! We have 4 cats and I was having trouble keeping up with the cleaning. I needed help and I'm so glad I reached out to Diamond Shine. They were so professional, hardworking, and worked with my schedule. I feel like I have a brand new house again. Thank you so much!",
    group: 'homes',
  },
  {
    id: 'cynthia',
    name: 'Cynthia M.',
    source: 'Facebook recommendation',
    context: 'A home reset for a young family',
    text: "Diamond Shine cleaning is the best cleaning service! As a mother of 2 under 2, it's hard to get in a good deep cleaning, but they came and made my house so clean and nice. They really took their time and provided the best service possible. Thank you so much for making my house shine!",
    group: 'homes',
  },
  {
    id: 'kristina',
    name: 'Kristina J.',
    source: 'Facebook recommendation',
    context: 'Professional cleaning',
    excerpt: 'Communication was top notch.',
    text: 'I had Diamond Shine out for an estimate. Very warm and generous folks who strive to do good by their customers. My house was absolutely spotless when they finished. Very thorough with every room. Communication was top notch. I will definitely be in touch with them again for cleaning services. They treat their clients like family and that goes a long way. Thank you again for an amazing experience!',
    group: 'homes',
  },
  {
    id: 'cassandra',
    name: 'Cassandra L.',
    source: 'Facebook recommendation',
    context: 'Professional cleaning',
    text: 'I absolutely recommend Diamond Shine cleaning service. They respond promptly to messages, and they are so kind and professional. From the moment they walked in they greeted me with a smile and walked me through their process. They asked if we had any allergies, assured me that they use clean and safe products for children and pets, and asked if I had any questions. They were quick, efficient, and worked thoroughly. They left my house looking clean and smelling great. 10/10 recommend. Thank you!',
    group: 'homes',
  },
  {
    id: 'dee',
    name: 'Dee T.',
    source: 'Facebook recommendation',
    context: 'Professional team',
    text: 'Lillian and her team did an amazing job on our home and far exceeded my expectations! They are very professional, timely, and the attention to detail is outstanding. Thanks to Emilio for helping with the initial setup and scheduling, the entire team is so friendly and the experience from start to finish was great. 10/10 recommend!',
    group: 'homes',
  },
  {
    id: 'megan',
    name: 'Megan V.',
    source: 'Google review',
    context: 'Commercial cleaning, long-term client',
    excerpt: 'They consistently take great care of our business, are reliable, thorough, and always go the extra mile.',
    text: "We've worked with Diamond Shine Professional Cleaning Services for several years, and they have been nothing short of amazing. This is a small, family-owned business made up of the sweetest people who genuinely care about the work they do and the clients they serve. They consistently take great care of our business, are reliable, thorough, and always go the extra mile. It's rare to find a cleaning company that combines professionalism with such kindness and attention to detail. We're so grateful for them and highly recommend their services.",
    group: 'commercial',
  },
];
