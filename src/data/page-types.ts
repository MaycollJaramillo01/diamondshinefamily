// The shape of a data-driven page. Every text string may carry [confirm:key] and [label](url); rich() prints them.
type Item = { name: string; text?: string };
type Base = { id?: string; title: string; text?: string; note?: string };

export type Section =
  | (Base & { kind: 'rows'; items: Item[]; pic?: string; ratio?: number; side?: 'left' | 'right' })
  | (Base & { kind: 'list'; items: string[]; pic?: string; ratio?: number })
  | (Base & { kind: 'steps'; steps: Item[] })
  | (Base & { kind: 'columns'; columns: { name: string; items: string[] }[] })
  | (Base & { kind: 'plate'; pic: string; ratio?: number; flip?: boolean; items?: string[] })
  | (Base & { kind: 'table'; head: string[]; rows: string[][] })
  | (Base & { kind: 'limits'; items?: string[]; columns?: { name: string; items: string[] }[] })
  | (Base & { kind: 'prints'; items: { pic: string; ratio?: number; name: string; text: string }[] })
  | (Base & { kind: 'statement'; text: string })
  | { kind: 'quote'; id?: string; review: string; photo: string; credit: string };

export type Page = {
  slug: string;
  seoTitle: string;
  description: string;
  h1: string;
  lead: string;
  hero: { main: string; ratio?: number; second?: string; secondRatio?: number; position?: string };
  crumb?: { label: string; href: string }[];
  formService?: string;
  // Named here, the page also publishes a Service block in its schema.
  serviceName?: string;
  review?: string;
  closeReview?: string;
  action?: { label: string; href: string };
  sections: Section[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string; line: string }[];
  close: { title: string; text: string; pic?: string; ratio?: number };
};
