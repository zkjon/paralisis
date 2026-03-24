// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export const locales = {
  root: {
    label: "español",
    lang: "es",
  },
  en: {
    label: "english",
    lang: "en",
  },
};

const site = "https://paralisisdelsueño.com";
const ogUrl = new URL("og.jpg?v=1", site).href;
const ogImageAlt = "estudio completo sobre la parálisis del sueño: qué es, por qué ocurre, cómo se manifiesta y qué tipos de experiencias genera";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    starlight({
      title: "parálisis del sueño",
      logo: {
        src: "~/icon.svg",
        replacesTitle: true,
      },
      customCss: ["@/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "github",
          href: "https://github.com/zkjon/paralisis",
        },
        {
          icon: "instagram",
          label: "instagram",
          href: "https://instagram.com/zkjon",
        },
      ],

      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: ogUrl },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:image", content: ogUrl },
        },
        {
          tag: "meta",
          attrs: { property: "og:image:alt", content: ogImageAlt },
        },
      ],
      locales,
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
