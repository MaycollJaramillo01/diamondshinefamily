// Reads the clock in San Antonio, whatever zone the visitor is in.
// ponytail: published weekly hours only, a holiday still reads as open. Add a closed-dates list when the company has one.
export function officeStatus(now: Date = new Date()): string {
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
  if (weekday && minutes < 510) return 'Opens today at 8:30 a.m. Central';
  if (weekday && minutes < 1080) return 'Open now, until 6:00 p.m. Central';
  if (weekday && day !== 'Fri') return 'Back tomorrow at 8:30 a.m. Central';
  return 'Back Monday at 8:30 a.m. Central';
}
