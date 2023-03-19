import type { Options } from "rehype-pretty-code";
import houston from "./themes/houston.json";

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: JSON.parse(JSON.stringify(houston)),
  // Keep the background or use a custom background color?
  keepBackground: true,
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ["word--highlighted"];
  },
};

// https://rehype-pretty-code.netlify.app/
// https://delba.dev/blog/next-blog-build-time-syntax-highlighting
// https://sat0shi.dev/posts/highlight-line-on-codeblock-with-astro/
