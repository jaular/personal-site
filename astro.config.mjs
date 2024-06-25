import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./src/lib/rehypePrettyCode";

export default defineConfig({
  site: "https://jaular.vercel.app",
  integrations: [
    mdx(),
    robotsTxt(),
    alpinejs(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    solidJs(),
  ],
  markdown: {
    smartypants: true,
    gfm: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
// https://connordowson.dev/blog/add-a-custom-syntax-highlighting-theme-in-astro
