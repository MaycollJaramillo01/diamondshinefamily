// The reviews in Spanish. Clients wrote them in English; the pages say these are translations.
// Names, groups and sources come from reviews.ts, so the two lists cannot drift apart.
import { reviews as published, type Review } from './reviews';

const source = { 'Facebook recommendation': 'recomendación en Facebook', 'Google review': 'reseña en Google' } as const;

const words: Record<string, Pick<Review, 'context' | 'excerpt' | 'text'>> = {
  serena: {
    context: 'Limpieza profunda, preparación para una mudanza',
    excerpt: 'Cuidaron muchísimo la casa y las cosas que había en ella…',
    text: 'Una experiencia MÁS QUE maravillosa. Fueron excepcionalmente detallistas y minuciosos, y mi casa me impresiona tanto que no hay palabras. Hicieron una limpieza profunda ¡y dejaron todo listo para la mudanza! Cuidaron muchísimo la casa y las cosas que había en ella, y limpiaron hasta los detalles más pequeños, como el polvo de los apagadores; sacudieron y esponjaron nuestras flores decorativas, y mucho más. ¡Todo el cuidado y la atención que le dieron a nuestro hogar es simplemente increíble! Es una empresa familiar pequeña, y de verdad tratan a sus clientes como familia. ¡Los recomiendo muchísimo!',
  },
  evelyn: {
    context: 'Limpieza recurrente',
    excerpt: 'Su atención al detalle no tiene igual, tratan nuestra casa como si fuera suya, y los resultados hablan por sí solos.',
    text: 'Hemos tenido el gusto de trabajar con Lilian y su equipo de Diamond Shine Professional Cleaning Service, ¡y no me canso de recomendarlos! Siempre son profesionales, puntuales e increíblemente confiables. Su atención al detalle no tiene igual, tratan nuestra casa como si fuera suya, y los resultados hablan por sí solos. Cada visita deja la casa reluciente y renovada.',
  },
  rob: {
    context: 'Limpieza semanal, dos limpiezas de salida',
    excerpt: 'Usamos Diamond Shine desde 2019…',
    text: 'Usamos Diamond Shine desde 2019, con limpieza semanal y 2 limpiezas de salida. Su servicio siempre nos ha encantado, y además son buenas personas. ¡Muy recomendables!',
  },
  anne: {
    context: 'Cuidado recurrente del hogar',
    excerpt: 'La atención al detalle que muestran es prueba de su profesionalismo y de su respeto por nuestra casa.',
    text: 'Nuestra satisfacción con los servicios de Diamond Shine es enorme. Son puntuales y se comunican bien sobre nuestras citas, y son rápidos sin sacrificar la calidad. La atención al detalle que muestran es prueba de su profesionalismo y de su respeto por nuestra casa. Hasta los detalles más pequeños no son problema para ellos, y cuando terminan, la casa se siente como nueva cada vez.',
  },
  brittney: {
    context: 'Limpieza profunda',
    excerpt: 'Se ocuparon de cada pequeño detalle y de verdad superó mis expectativas.',
    text: '¡Absolutamente increíble! Hoy me hicieron una limpieza profunda en la casa y, sinceramente, no podría estar más feliz. Todo quedó PERFECTO. La atención al detalle fue increíble y toda mi casa se ve y se siente muy fresca. ¡Literalmente podía oler lo limpia que estaba la casa antes de cruzar la puerta principal! Se ocuparon de cada pequeño detalle y de verdad superó mis expectativas. Me impresionó muchísimo y sin duda volveré a contratarlos. ¡Recomendación de 10/10!',
  },
  brandon: {
    context: 'Limpieza profunda (extracto)',
    text: 'Tuve una experiencia increíble con Diamond Shine, Emilio y todo su personal. El servicio al cliente fue excelente, muy cercano, y te hacen sentir como de la familia; dejaron toda mi casa limpia y fresca con su servicio de limpieza profunda. …',
  },
  crystal: {
    context: 'Limpieza de salida',
    excerpt: 'El equipo fue profesional y conocedor, y es evidente que se enorgullece de su trabajo.',
    text: '¡El equipo hizo un trabajo absolutamente increíble con mi limpieza de salida! Cuando entré, casi lloro: la casa brillaba, olía increíble y de verdad estaba lista para habitarse. Superaron con creces mis expectativas. El equipo fue profesional y conocedor, y es evidente que se enorgullece de su trabajo. Recomendaría ampliamente esta empresa a cualquiera que necesite una limpieza profunda y minuciosa.',
  },
  melissa: {
    context: 'Limpieza profunda, una casa con mascotas',
    excerpt: 'Fueron muy profesionales y muy trabajadores, y se ajustaron a mi horario.',
    text: 'Nos hicieron una limpieza profunda en la casa, que hacía mucha falta, ¡y nos sentimos muy felices! Tenemos 4 gatos y me costaba mantenerme al día con la limpieza. Necesitaba ayuda y me alegra mucho haber contactado a Diamond Shine. Fueron muy profesionales y muy trabajadores, y se ajustaron a mi horario. Siento que tengo una casa nueva otra vez. ¡Muchísimas gracias!',
  },
  cynthia: {
    context: 'Una casa renovada para una familia joven',
    text: '¡Diamond Shine es el mejor servicio de limpieza! Como madre de 2 menores de 2 años, es difícil hacer una buena limpieza profunda, pero vinieron y dejaron mi casa muy limpia y bonita. De verdad se tomaron su tiempo y dieron el mejor servicio posible. ¡Muchísimas gracias por hacer brillar mi casa!',
  },
  kristina: {
    context: 'Limpieza profesional',
    excerpt: 'La comunicación fue de primera.',
    text: 'Llamé a Diamond Shine para un presupuesto. Son personas muy cálidas y generosas que se esfuerzan por hacer las cosas bien para sus clientes. Mi casa quedó absolutamente impecable cuando terminaron. Muy minuciosos en cada habitación. La comunicación fue de primera. Sin duda volveré a contactarlos para servicios de limpieza. Tratan a sus clientes como familia, y eso cuenta mucho. ¡Gracias otra vez por una experiencia increíble!',
  },
  cassandra: {
    context: 'Limpieza profesional',
    text: 'Recomiendo totalmente el servicio de limpieza de Diamond Shine. Responden rápido a los mensajes y son muy amables y profesionales. Desde el momento en que entraron me saludaron con una sonrisa y me explicaron su proceso. Preguntaron si teníamos alguna alergia, me aseguraron que usan productos limpios y seguros para niños y mascotas, y me preguntaron si tenía alguna duda. Fueron rápidos, eficientes y trabajaron a fondo. Dejaron mi casa limpia y con un olor muy agradable. Recomendación de 10/10. ¡Gracias!',
  },
  dee: {
    context: 'Equipo profesional',
    text: '¡Lillian y su equipo hicieron un trabajo increíble en nuestra casa y superaron con creces mis expectativas! Son muy profesionales y puntuales, y su atención al detalle es sobresaliente. Gracias a Emilio por ayudar con la organización inicial y la programación; todo el equipo es muy amable y la experiencia, de principio a fin, fue excelente. ¡Recomendación de 10/10!',
  },
  megan: {
    context: 'Limpieza comercial, cliente de largo plazo',
    excerpt: 'Cuidan muy bien nuestro negocio de forma constante, son confiables y minuciosos, y siempre hacen un esfuerzo adicional.',
    text: 'Llevamos varios años trabajando con Diamond Shine Professional Cleaning Services, y han sido simplemente increíbles. Es una empresa pequeña y familiar formada por las personas más dulces, a quienes de verdad les importa su trabajo y los clientes a los que sirven. Cuidan muy bien nuestro negocio de forma constante, son confiables y minuciosos, y siempre hacen un esfuerzo adicional. Es raro encontrar una empresa de limpieza que combine el profesionalismo con tanta amabilidad y atención al detalle. Agradecemos muchísimo contar con ellos y recomendamos ampliamente sus servicios.',
  },
};

export const reviews = published.map((r) => ({ ...r, ...words[r.id], source: source[r.source] }));
