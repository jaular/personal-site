import { z, defineCollection } from "astro:content";
import tags from "../data/tags";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string(),
    tag: z.enum(tags),
    heroImage: z
      .object({
        src: z.string().url(),
        author: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  posts,
};
