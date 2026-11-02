// The form's rules, apart from the page, so scripts/check-logic.mjs can run them.
export function fieldError(name: string, value: string): string {
  const v = value.trim();
  switch (name) {
    case 'service':
      return v ? '' : 'Choose a service, or “Not sure yet”.';
    case 'name':
      return v ? '' : 'Enter your name so we know who to ask for.';
    case 'phone':
      return v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a phone number with area code, like 210-982-2312.';
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter an email address, like name@example.com.';
    case 'area':
      return v ? '' : 'Enter your ZIP code or neighborhood, so we can confirm we reach you.';
    default:
      return '';
  }
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
