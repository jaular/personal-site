import type { Options } from "rehype-pretty-code";
import houston from "./themes/houston.json";

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: JSON.parse(JSON.stringify(houston)),
  // Keep the background or use a custom background color?
  keepBackground: true,
};

// https://rehype-pretty-code.netlify.app/
// https://delba.dev/blog/next-blog-build-time-syntax-highlighting
// https://sat0shi.dev/posts/highlight-line-on-codeblock-with-astro/
