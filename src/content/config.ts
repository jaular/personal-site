import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    author: z.string(),
    tag: z.string(),
    heroImage: z
      .object({
        src: z.string(),
        author: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  posts,
};
