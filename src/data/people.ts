// The Leal family, in the wording the company publishes. A [confirm:…] mark stays until the company verifies the line.
export type Person = {
  slug: string;
  name: string;
  role: string;
  also: string;
  portrait: string;
  alt: string;
  statement: string;
  intro: string;
  quote: string;
  picture: string;
  chapters: { title: string; paragraphs: string[] }[];
  glance: string[];
  links: { label: string; href: string }[];
};

export const people: Person[] = [
  {
    slug: 'lilian-leal',
    name: 'Lilian Leal',
    role: 'Founder and Owner',
    also: 'Founder, Esposas Bendecidas / Blessed Wives',
    portrait: 'lilian-leal.png',
    alt: 'Portrait of Lilian Leal, in a dark jacket, smiling.',
    statement: 'Care begins with the person.',
    intro: 'Lilian Leal brings the same instinct to a home, a team and a conversation: listen closely, notice what is needed and help people feel cared for.',
    quote: 'Every home we touch deserves to feel cared for the way we’d want our own to be cared for.',
    picture: 'fresh-linens.webp',
    chapters: [
      {
        title: 'The heart of the family business',
        paragraphs: [
          'Lilian founded Diamond Shine Professional Cleaning Service in San Antonio in 2017. Her vision shaped a company where attention to detail and warmth belong together. A finished room should feel welcoming, and the person who lives there should feel respected.',
          'As Founder and Owner, she remains a guiding influence on the company’s service culture and the White Glove Standard. She leads by example, showing employees how preparation, discretion and pride in the work build trust. Her care for the team is part of her care for the client: people need support and a clear standard to do their best work.',
        ],
      },
      {
        title: 'A mother’s understanding, a leader’s example',
        paragraphs: [
          'As a mother and a daughter, Lilian understands how much a household can carry. She sees the responsibilities behind a busy home and the relief that thoughtful help can bring. That perspective informs how she welcomes clients, teaches employees and approaches the details of everyday service.',
          'She also loves decoration and interior design: the arrangement of a room, a considered finishing touch and the feeling of coming home to a space that is ready for you. Her hospitality-minded approach aims to bring the comfort of a carefully prepared hotel room into the familiarity of someone’s own home.',
        ],
      },
      {
        title: 'Faith, listening and encouragement',
        paragraphs: [
          'Beyond Diamond Shine, Lilian is the founder of Esposas Bendecidas / Blessed Wives, an international Christian ministry supporting women through marriage preparation, married life and challenges within the family.',
          'Her ministry centers on listening, practical life guidance and mentorship, through prayer, reflection, Bible teaching and discussions of books on faith, relationships and personal growth. Women preparing to marry and those already navigating marriage are welcomed with the same attention to their individual story.',
        ],
      },
      {
        title: 'Helping others find their footing',
        paragraphs: [
          'Lilian’s leadership connects the practical and the personal. In the workplace, she models care, consistency and responsibility. In ministry, she offers companionship, life guidance and a place to be heard. The thread running through her work is a belief that caring well for people can change how they experience their homes, their responsibilities and themselves.',
        ],
      },
      {
        title: 'A place at the table',
        paragraphs: [
          'Alongside Sergio, Lilian leads Good Samaritan, a nonprofit organization in Mexico supporting adults and children in need with household essentials, clothing, toys, boots and educational support. [confirm:good-samaritan]',
          'Lilian and Sergio are also developing a community meal initiative, with the idea that everyone deserves a place at the table. The initiative is in development.',
        ],
      },
    ],
    glance: ['Diamond Shine: founding values and service culture', 'Esposas Bendecidas: faith and mentorship', 'Employee development and leadership by example', 'Home presentation, decoration and hospitality', 'Good Samaritan: community support in Mexico', 'Community meals: initiative in development'],
    links: [
      { label: 'The Diamond Shine story', href: '/about' },
      { label: 'Our home care services', href: '/services' },
    ],
  },
  {
    slug: 'sergio-leal',
    name: 'Sergio Leal',
    role: 'Co-Founder and Owner',
    also: 'Founder and Visionary, Le’Garci Constructora',
    portrait: 'sergio-leal.png',
    alt: 'Portrait of Sergio Leal, in a navy suit and tie, smiling.',
    statement: 'A wider vision of home.',
    intro: 'Sergio Leal sees the home as a whole: the work it needs, the people it shelters and the trust that makes every service possible.',
    quote: 'We didn’t build Diamond Shine to be the biggest — we built it to be the one families trust.',
    picture: 'limestone-entrance.webp',
    chapters: [
      {
        title: 'The vision behind Le’Garci',
        paragraphs: [
          'Sergio is the founder and visionary behind Le’Garci Constructora and Co-Founder and Owner of Diamond Shine Professional Cleaning Service. His work brings together a builder’s practical judgment and a family-business commitment to the people who depend on the result.',
          'He is developing an umbrella approach to construction, property care and the relationships that connect them. His ambition is to make it easier for a homeowner to find a trusted point of coordination, with the right people and clearly defined responsibilities for each part of a home’s care.',
        ],
      },
      {
        title: 'One relationship, a more considered experience',
        paragraphs: [
          'At Diamond Shine, Sergio contributes to operations, logistics, sales and marketing. He looks at the entire client journey: how a family first finds the company, how its needs are understood and how the team turns a service request into an organized experience.',
          'The idea is to spare clients the frustration of starting over with every task. Cleaning, restoration, preparation and ongoing care should feel connected.',
        ],
      },
      {
        title: 'Welcoming those who serve',
        paragraphs: [
          'For military families moving to San Antonio, coordination can matter as much as the work itself. Sergio’s PCS vision centers on helping families arrive to a home that has been thoughtfully prepared, with fewer loose ends competing for their time.',
          'That commitment extends to veterans, military spouses and the wider community Diamond Shine serves. Peace of mind comes from clear expectations, reliable communication and care that continues beyond the first visit.',
        ],
      },
      {
        title: 'A family standard, carried forward',
        paragraphs: [
          'Sergio brings a steady emphasis on craftsmanship, responsibility and practical execution to the family business. Alongside Lilian and his son Emilio, he helps connect the company’s larger ambitions to the everyday decisions that make service dependable. For him, growth is also a question of stewardship: building relationships that endure and leaving those who follow a standard worth carrying forward.',
        ],
      },
      {
        title: 'Service beyond the front door',
        paragraphs: [
          'Sergio and Lilian lead Good Samaritan, a nonprofit organization in Mexico supporting adults and children in need with household essentials, clothing, toys, boots and educational support. [confirm:good-samaritan]',
          'Together, they are developing a community meal initiative built around a simple invitation: a place at the table. This work is still in development.',
        ],
      },
    ],
    glance: ['Le’Garci Constructora: founding vision', 'Diamond Shine: family-business leadership', 'Operations, craftsmanship and coordination', 'Sales, marketing and the client journey', 'Good Samaritan: community support in Mexico', 'Community meals: initiative in development'],
    links: [
      { label: 'Le’Garci Constructora', href: 'https://legarciconstructora.com/' },
      { label: 'PCS home preparation', href: '/military-pcs-concierge' },
    ],
  },
  {
    slug: 'emilio-leal',
    name: 'Emilio Leal',
    role: 'Chief Executive Officer',
    also: 'Founder and Chief Intelligence Architect, PEGASUS',
    portrait: 'emilio-leal.png',
    alt: 'Portrait of Emilio Leal, in glasses and a navy suit, smiling.',
    statement: 'The standard is personal.',
    intro: 'For Emilio Leal, leadership begins with a simple responsibility: make sure the experience a family receives lives up to the trust it placed in you.',
    quote: 'My vision is to build Diamond Shine into a lasting property-care institution—one that creates peace for our clients, opportunity for our team, and a legacy our family can proudly carry forward.',
    picture: 'entry.jpeg',
    chapters: [
      {
        title: 'Accountable for the experience',
        paragraphs: [
          'As Chief Executive Officer of Diamond Shine Professional Cleaning Service, Emilio leads customer experience, brand direction and the next stage of the family business. Established in San Antonio in 2017, Diamond Shine gives him a daily measure of leadership: the condition of a home, the clarity of a conversation and whether a client feels heard.',
          'He is the person focused on what was promised, how the team prepares and how the work is followed through. The White Glove Standard is expressed through preparation, discretion, consistent workmanship and the willingness to address a concern.',
        ],
      },
      {
        title: 'A thoughtful welcome to San Antonio',
        paragraphs: [
          'Military families and veterans are central to the community Emilio wants to serve. He is developing a more coordinated approach to Permanent Change of Station home preparation, connecting Diamond Shine’s cleaning, restoration and property-care services around a family’s arrival or departure.',
          'The goal is practical: help prepare a home before the family arrives, coordinate approved access with its trusted contacts and reduce the time spent managing details from a distance.',
        ],
      },
      {
        title: 'Learning the language of hospitality',
        paragraphs: [
          'What interests Emilio is how a space feels, how a guest is welcomed and how small details communicate care. His continuing development spans business administration, finance, ethics and leadership, and he values the lessons in discipline and responsibility shared by service members and veterans he has met through the business.',
        ],
      },
      {
        title: 'Building toward what comes next',
        paragraphs: [
          'Alongside Diamond Shine, Emilio is the Founder and Chief Intelligence Architect of PEGASUS, a separate Reality Operating System project in active development. Its guiding idea is “intelligence between intention and reality.”',
          'Across these efforts, the question remains the same: how can better preparation, clearer decisions and thoughtful service give people more time for the lives they want to build?',
        ],
      },
    ],
    glance: ['Customer experience and satisfaction', 'Military families, veterans and PCS home preparation', 'Service standards and team development', 'PEGASUS: intelligence between intention and reality'],
    links: [
      { label: 'PCS home preparation', href: '/military-pcs-concierge' },
      { label: 'Commercial property care', href: '/commercial' },
      { label: 'PEGASUS', href: 'https://www.risewithpegasus.com/emilio' },
    ],
  },
];
