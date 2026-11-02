// The form's rules, apart from the page, so scripts/check-logic.mjs can run them.
const messages = {
  en: {
    service: 'Choose a service, or “Not sure yet”.',
    name: 'Enter your name so we know who to ask for.',
    phone: 'Enter a phone number with area code, like 210-982-2312.',
    email: 'Enter an email address, like name@example.com.',
    area: 'Enter your ZIP code or neighborhood, so we can confirm we reach you.',
  },
  es: {
    service: 'Elija un servicio, o “Aún no lo sé”.',
    name: 'Escriba su nombre, para saber por quién preguntar.',
    phone: 'Escriba un teléfono con código de área, como 210-982-2312.',
    email: 'Escriba un correo electrónico, como nombre@ejemplo.com.',
    area: 'Escriba su código postal o vecindario, para confirmar que llegamos hasta usted.',
  },
};

export function fieldError(name: string, value: string, lang: 'en' | 'es' = 'en'): string {
  if (!(name in messages.en)) return '';
  const v = value.trim();
  const ok = name === 'phone' ? v.replace(/\D/g, '').length >= 10 : name === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) : v !== '';
  return ok ? '' : messages[lang][name as keyof typeof messages.en];
}

export function serviceFromUrl(search: string, known: string[]): string {
  const key = new URLSearchParams(search).get('service') ?? '';
  return known.includes(key) ? key : '';
}

export type SubmitState = 'pending' | 'success' | 'failure';

// With no authorized endpoint nothing is sent and nothing pretends to be: success only ever follows an OK answer.
export async function submitTo(endpoint: string, body: FormData, send: typeof fetch = fetch): Promise<SubmitState> {
  if (!endpoint) return 'pending';
  try {
    const response = await send(endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } });
    return response.ok ? 'success' : 'failure';
  } catch {
    return 'failure';
  }
}
