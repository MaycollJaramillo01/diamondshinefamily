// people.ts in Spanish: the same family, pictures and links, in the same order.
import type { Person } from './people';

export const people: Person[] = [
  {
    slug: 'lilian-leal',
    name: 'Lilian Leal',
    role: 'Fundadora y propietaria',
    also: 'Fundadora de Esposas Bendecidas / Blessed Wives',
    portrait: 'lilian-leal.png',
    alt: 'Retrato de Lilian Leal, con chaqueta oscura, sonriendo.',
    statement: 'El cuidado empieza por la persona.',
    intro: 'Lilian Leal aporta el mismo instinto a una casa, a un equipo y a una conversación: escuchar con atención, notar lo que hace falta y ayudar a que las personas se sientan cuidadas.',
    quote: 'Cada hogar que tocamos merece sentirse cuidado como nos gustaría que cuidaran el nuestro.',
    picture: 'fresh-linens.webp',
    chapters: [
      {
        title: 'El corazón de la empresa familiar',
        paragraphs: [
          'Lilian fundó Diamond Shine Professional Cleaning Service en San Antonio en 2017. Su visión dio forma a una empresa donde la atención al detalle y la calidez van juntas. Una habitación terminada debe sentirse acogedora, y quien vive en ella debe sentirse respetado.',
          'Como fundadora y propietaria, sigue guiando la cultura de servicio de la empresa y el Estándar White Glove. Lidera con el ejemplo y muestra a los empleados cómo la preparación, la discreción y el orgullo por el trabajo construyen confianza. Su cuidado por el equipo forma parte de su cuidado por el cliente: las personas necesitan apoyo y un estándar claro para dar lo mejor de sí.',
        ],
      },
      {
        title: 'La comprensión de una madre, el ejemplo de una líder',
        paragraphs: [
          'Como madre e hija, Lilian entiende cuánto puede llegar a cargar un hogar. Ve las responsabilidades detrás de una casa ajetreada y el alivio que puede traer una ayuda bien pensada. Esa mirada guía la manera en que recibe a los clientes, enseña a los empleados y atiende los detalles del servicio diario.',
          'También le encantan la decoración y el diseño de interiores: la disposición de una habitación, un toque final bien pensado y la sensación de llegar a un espacio que está listo para usted. Su enfoque, inspirado en la hospitalidad, busca llevar la comodidad de una habitación de hotel preparada con esmero a la familiaridad del propio hogar.',
        ],
      },
      {
        title: 'Fe, escucha y aliento',
        paragraphs: [
          'Más allá de Diamond Shine, Lilian es la fundadora de Esposas Bendecidas / Blessed Wives, un ministerio cristiano internacional que acompaña a mujeres en la preparación para el matrimonio, en la vida de casadas y ante los retos dentro de la familia.',
          'Su ministerio se centra en la escucha, la orientación práctica para la vida y la mentoría, por medio de la oración, la reflexión, la enseñanza bíblica y el diálogo sobre libros de fe, relaciones y crecimiento personal. Las mujeres que se preparan para casarse y las que ya viven su matrimonio son recibidas con la misma atención a su historia personal.',
        ],
      },
      {
        title: 'Ayudar a otros a encontrar su lugar',
        paragraphs: [
          'El liderazgo de Lilian une lo práctico y lo personal. En el trabajo, es ejemplo de cuidado, constancia y responsabilidad. En el ministerio, ofrece compañía, orientación para la vida y un lugar donde ser escuchada. El hilo que recorre su trabajo es la convicción de que cuidar bien a las personas puede cambiar cómo viven su hogar, sus responsabilidades y su propia vida.',
        ],
      },
      {
        title: 'Un lugar en la mesa',
        paragraphs: [
          'Junto a Sergio, Lilian dirige Good Samaritan, una organización sin fines de lucro en México que apoya a adultos y niños necesitados con artículos esenciales para el hogar, ropa, juguetes, botas y apoyo educativo. [confirm:good-samaritan]',
          'Lilian y Sergio también están desarrollando una iniciativa de comidas comunitarias, con la idea de que todos merecen un lugar en la mesa. La iniciativa está en desarrollo.',
        ],
      },
    ],
    glance: ['Diamond Shine: valores fundacionales y cultura de servicio', 'Esposas Bendecidas: fe y mentoría', 'Desarrollo de los empleados y liderazgo con el ejemplo', 'Presentación del hogar, decoración y hospitalidad', 'Good Samaritan: apoyo comunitario en México', 'Comidas comunitarias: iniciativa en desarrollo'],
    links: [
      { label: 'La historia de Diamond Shine', href: '/about' },
      { label: 'Nuestros servicios de cuidado del hogar', href: '/services' },
    ],
  },
  {
    slug: 'sergio-leal',
    name: 'Sergio Leal',
    role: 'Cofundador y propietario',
    also: 'Fundador y visionario de Le’Garci Constructora',
    portrait: 'sergio-leal.png',
    alt: 'Retrato de Sergio Leal, con traje azul marino y corbata, sonriendo.',
    statement: 'Una visión más amplia del hogar.',
    intro: 'Sergio Leal ve el hogar como un todo: el trabajo que necesita, las personas que resguarda y la confianza que hace posible cada servicio.',
    quote: 'No construimos Diamond Shine para ser los más grandes; lo construimos para ser la empresa en la que confían las familias.',
    picture: 'limestone-entrance.webp',
    chapters: [
      {
        title: 'La visión detrás de Le’Garci',
        paragraphs: [
          'Sergio es el fundador y visionario de Le’Garci Constructora, y cofundador y propietario de Diamond Shine Professional Cleaning Service. Su trabajo une el criterio práctico de un constructor con el compromiso de una empresa familiar hacia las personas que dependen del resultado.',
          'Está desarrollando un enfoque integral que abarca la construcción, el cuidado de propiedades y las relaciones que los conectan. Su ambición es que a un propietario le resulte más fácil encontrar un punto de coordinación de confianza, con las personas adecuadas y responsabilidades bien definidas para cada parte del cuidado de su casa.',
        ],
      },
      {
        title: 'Una sola relación, una experiencia más cuidada',
        paragraphs: [
          'En Diamond Shine, Sergio contribuye en operaciones, logística, ventas y mercadeo. Mira todo el recorrido del cliente: cómo una familia encuentra por primera vez a la empresa, cómo se entienden sus necesidades y cómo el equipo convierte una solicitud de servicio en una experiencia organizada.',
          'La idea es ahorrarles a los clientes la frustración de empezar de cero con cada tarea. La limpieza, la restauración, la preparación y el cuidado continuo deben sentirse conectados.',
        ],
      },
      {
        title: 'Dar la bienvenida a quienes sirven',
        paragraphs: [
          'Para las familias militares que se mudan a San Antonio, la coordinación puede importar tanto como el trabajo en sí. La visión PCS de Sergio se centra en ayudar a las familias a llegar a una casa preparada con esmero, con menos pendientes compitiendo por su tiempo.',
          'Ese compromiso se extiende a los veteranos, a los cónyuges de militares y a la comunidad más amplia a la que sirve Diamond Shine. La tranquilidad nace de expectativas claras, una comunicación confiable y un cuidado que continúa después de la primera visita.',
        ],
      },
      {
        title: 'Un estándar familiar que sigue adelante',
        paragraphs: [
          'Sergio aporta a la empresa familiar un énfasis constante en el oficio, la responsabilidad y la ejecución práctica. Junto a Lilian y a su hijo Emilio, ayuda a conectar las ambiciones más grandes de la empresa con las decisiones diarias que hacen confiable el servicio. Para él, crecer también es una cuestión de buena administración: construir relaciones que perduren y dejar a quienes vienen detrás un estándar digno de seguir.',
        ],
      },
      {
        title: 'Servir más allá de la puerta de entrada',
        paragraphs: [
          'Sergio y Lilian dirigen Good Samaritan, una organización sin fines de lucro en México que apoya a adultos y niños necesitados con artículos esenciales para el hogar, ropa, juguetes, botas y apoyo educativo. [confirm:good-samaritan]',
          'Juntos están desarrollando una iniciativa de comidas comunitarias construida en torno a una invitación sencilla: un lugar en la mesa. Este trabajo sigue en desarrollo.',
        ],
      },
    ],
    glance: ['Le’Garci Constructora: visión fundadora', 'Diamond Shine: liderazgo de la empresa familiar', 'Operaciones, oficio y coordinación', 'Ventas, mercadeo y el recorrido del cliente', 'Good Samaritan: apoyo comunitario en México', 'Comidas comunitarias: iniciativa en desarrollo'],
    links: [
      { label: 'Le’Garci Constructora', href: 'https://legarciconstructora.com/' },
      { label: 'Preparación del hogar para mudanzas PCS', href: '/military-pcs-concierge' },
    ],
  },
  {
    slug: 'emilio-leal',
    name: 'Emilio Leal',
    role: 'Director ejecutivo',
    also: 'Fundador y arquitecto principal de inteligencia de PEGASUS',
    portrait: 'emilio-leal.png',
    alt: 'Retrato de Emilio Leal, con anteojos y traje azul marino, sonriendo.',
    statement: 'El estándar es personal.',
    intro: 'Para Emilio Leal, el liderazgo empieza con una responsabilidad sencilla: asegurarse de que la experiencia que recibe una familia esté a la altura de la confianza que depositó en la empresa.',
    quote: 'Mi visión es convertir a Diamond Shine en una institución duradera de cuidado de propiedades: una que dé paz a nuestros clientes, oportunidades a nuestro equipo y un legado que nuestra familia pueda llevar adelante con orgullo.',
    picture: 'entry.jpeg',
    chapters: [
      {
        title: 'Responsable de la experiencia',
        paragraphs: [
          'Como director ejecutivo de Diamond Shine Professional Cleaning Service, Emilio dirige la experiencia del cliente, el rumbo de la marca y la siguiente etapa de la empresa familiar. Fundada en San Antonio en 2017, Diamond Shine le da una medida diaria del liderazgo: el estado de una casa, la claridad de una conversación y si un cliente se siente escuchado.',
          'Es la persona atenta a lo que se prometió, a cómo se prepara el equipo y a cómo se da seguimiento al trabajo. El Estándar White Glove se expresa en la preparación, la discreción, un trabajo constante y la disposición a atender cualquier inquietud.',
        ],
      },
      {
        title: 'Una bienvenida bien pensada a San Antonio',
        paragraphs: [
          'Las familias militares y los veteranos son centrales en la comunidad a la que Emilio quiere servir. Está desarrollando un enfoque más coordinado para preparar casas en los cambios permanentes de estación (PCS), que conecta los servicios de limpieza, restauración y cuidado de propiedades de Diamond Shine en torno a la llegada o la partida de una familia.',
          'El objetivo es práctico: ayudar a preparar una casa antes de que llegue la familia, coordinar el acceso aprobado con sus contactos de confianza y reducir el tiempo dedicado a resolver detalles a distancia.',
        ],
      },
      {
        title: 'Aprender el lenguaje de la hospitalidad',
        paragraphs: [
          'A Emilio le interesa cómo se siente un espacio, cómo se recibe a un invitado y cómo los pequeños detalles comunican cuidado. Su formación continua abarca administración de empresas, finanzas, ética y liderazgo, y valora las lecciones de disciplina y responsabilidad que comparten los militares en servicio y los veteranos que ha conocido a través de la empresa.',
        ],
      },
      {
        title: 'Construir hacia lo que viene',
        paragraphs: [
          'Además de Diamond Shine, Emilio es el fundador y arquitecto principal de inteligencia de PEGASUS, un proyecto independiente de Reality Operating System en desarrollo activo. Su idea rectora es “la inteligencia entre la intención y la realidad”.',
          'En todos estos esfuerzos, la pregunta sigue siendo la misma: ¿cómo pueden una mejor preparación, decisiones más claras y un servicio atento dar a las personas más tiempo para la vida que quieren construir?',
        ],
      },
    ],
    glance: ['Experiencia y satisfacción del cliente', 'Familias militares, veteranos y preparación del hogar para mudanzas PCS', 'Estándares de servicio y desarrollo del equipo', 'PEGASUS: la inteligencia entre la intención y la realidad'],
    links: [
      { label: 'Preparación del hogar para mudanzas PCS', href: '/military-pcs-concierge' },
      { label: 'Cuidado de propiedades comerciales', href: '/commercial' },
      { label: 'PEGASUS', href: 'https://www.risewithpegasus.com/emilio' },
    ],
  },
];
