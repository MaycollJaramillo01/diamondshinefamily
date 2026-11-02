import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    dek: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    read: z.string(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string().optional(),
    lead: z.string().optional(),
  }),
});

export const collections = { journal, legal };
