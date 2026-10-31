import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories, governanceTypes, universityAreas } from './data/taxonomy';

const appsCollection = defineCollection({
  // Lee todos los archivos .md dentro de la carpeta src/content/apps/
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(categories),
    license: z.string(), // Ej: "AGPL-3.0", "MIT", "MPL-2.0"
    websiteUrl: z.url(),
    repoUrl: z.url(),
    // Programas privativos que reemplaza; genera las páginas /alternativas-a/
    alternativeTo: z.array(z.string()).default([]),
    // Quién controla el proyecto: la licencia sola no cuenta toda la historia
    governance: z.enum(governanceTypes),
    selfHostable: z.boolean().default(false),
    // Límites reales del proyecto: open core, CLA, centralización, etc.
    watchOut: z.string().optional(),
    // Si está presente, la ficha aparece también en /universidades/
    university: z
      .object({
        area: z.enum(universityAreas),
        note: z.string(), // Qué resuelve para la institución
      })
      .optional(),
    // Campo específico para destacar apps que reparten beneficios o economía social
    revenueSharing: z.boolean().default(false),
    featured: z.boolean().default(false),
    dateAdded: z.date(),
  }),
});

export const collections = {
  apps: appsCollection,
};
