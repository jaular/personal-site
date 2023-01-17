import { defineConfig } from "astro/config";
import houston from "./houston.json";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  // site: "https://jaular-apuntes.vercel.app",
  integrations: [
    solidJs(),
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
    shikiConfig: {
      theme: {
        name: "Houston",
        type: "dark",
        settings: houston.tokenColors,
      },
    },
  },
  experimental: {
    contentCollections: true,
  },
});

// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
// https://connordowson.dev/blog/add-a-custom-syntax-highlighting-theme-in-astro
