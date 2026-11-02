import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const article = z.object({
  title: z.string(),
  headline: z.string().optional(),
  dek: z.string(),
  description: z.string(),
  category: z.string(),
  date: z.string(),
  read: z.string(),
});

const notice = z.object({
  title: z.string(),
  description: z.string(),
  updated: z.string().optional(),
  lead: z.string().optional(),
});

// The Spanish copies keep the English file names, so each article and notice has one id in both languages.
const journal = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/journal' }), schema: article });
const journalEs = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/journal-es' }), schema: article });
const legal = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/legal' }), schema: notice });
const legalEs = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/legal-es' }), schema: notice });

export const collections = { journal, journalEs, legal, legalEs };
