import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
// Rehype Pretty Code
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./src/lib/rehypePrettyCode";

export default defineConfig({
  site: "https://jaular-apuntes.vercel.app",
  integrations: [
    mdx(),
    alpinejs(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
  experimental: {
    contentCollections: true,
  },
});

// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
// https://connordowson.dev/blog/add-a-custom-syntax-highlighting-theme-in-astro
