import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const PROJECTS_PATH = "src/data/projects";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PROJECTS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      ogImage: image().or(z.string()).optional(),
      thumbnail: image().or(z.string()).optional(),
    }),
});

export const collections = { projects };
