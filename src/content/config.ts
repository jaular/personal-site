import { z, defineCollection } from "astro:content";

const notes = defineCollection({
  schema: {
    title: z.string(),
    publishDate: z.string(),
    author: z.string(),
    heroImage: z
      .object({
        src: z.string(),
        author: z.string(),
      })
      .optional(),
  },
});

export const collections = {
  notes,
};
