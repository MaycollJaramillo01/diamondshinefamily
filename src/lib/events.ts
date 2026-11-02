// Measurement events, ready for whichever tags the company authorizes. No analytics IDs are set anywhere.
// Never pass names, phone numbers, emails or addresses here: only the event and the service key.
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    dsReady?: boolean;
  }
}

export function track(event: 'click_call' | 'quote_start' | 'quote_submit_success', params: { service?: string } = {}) {
  (window.dataLayer ??= []).push({ event, ...params });
}

// Fired only after the endpoint has answered OK.
export function trackLead() {
  window.fbq?.('track', 'Lead');
}
