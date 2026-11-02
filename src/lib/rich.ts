import { claims } from '../data/claims';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Turns a data string into safe HTML: [text](url) becomes a link, [confirm:key] becomes the visible mark.
export function rich(text: string): string {
  return escape(text)
    .replace(/ ?\[confirm:([a-z0-9-]+)\]/g, (_, key: string) => {
      if (!(key in claims)) throw new Error(`Unknown claim key: ${key}`);
      return claims[key] === 'verified' ? '' : ' <span class="tc">To&nbsp;confirm</span>';
    })
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
}
