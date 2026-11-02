// Reads the clock in San Antonio, whatever zone the visitor is in.
// ponytail: published weekly hours only, a holiday still reads as open. Add a closed-dates list when the company has one.
const said = {
  en: ['Opens today at 8:30 a.m. Central', 'Open now, until 6:00 p.m. Central', 'Back tomorrow at 8:30 a.m. Central', 'Back Monday at 8:30 a.m. Central'],
  es: ['Abrimos hoy a las 8:30 a.m., hora del centro', 'Abierto ahora, hasta las 6:00 p.m., hora del centro', 'Volvemos mañana a las 8:30 a.m., hora del centro', 'Volvemos el lunes a las 8:30 a.m., hora del centro'],
};

export function officeStatus(now: Date = new Date(), lang: 'en' | 'es' = 'en'): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = part('weekday');
  const minutes = Number(part('hour')) * 60 + Number(part('minute'));
  const weekday = day !== 'Sat' && day !== 'Sun';
  const [opens, open, tomorrow, monday] = said[lang];
  if (weekday && minutes < 510) return opens;
  if (weekday && minutes < 1080) return open;
  if (weekday && day !== 'Fri') return tomorrow;
  return monday;
}
