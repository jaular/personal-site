import { z, defineCollection } from "astro:content";
import allTags from "../data/allTags";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string(),
    tag: z.enum(allTags),
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
