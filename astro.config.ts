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
const ogImageAlt =
  "estudio completo sobre la parálisis del sueño: qué es, por qué ocurre, cómo se manifiesta y qué tipos de experiencias genera";

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
      components: {
        PageTitle: "@/components/page-title.astro",
      },
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
      sidebar: [
        {
          label: "bienvenida",
          translations: { en: "welcome" },
          items: [
            {
              label: "introducción",
              link: "/intro/",
              translations: { en: "introduction" },
            },
          ],
        },
        {
          label: "qué es la parálisis del sueño",
          translations: { en: "what is sleep paralysis" },
          items: [
            {
              label: "visión general",
              link: "/que-es/",
              translations: { en: "overview" },
            },
            {
              label: "definición",
              link: "/que-es/definicion/",
              translations: { en: "definition" },
            },
            {
              label: "características",
              link: "/que-es/caracteristicas/",
              translations: { en: "characteristics" },
            },
          ],
        },
        {
          label: "por qué ocurre",
          translations: { en: "why it happens" },
          items: [
            {
              label: "visión general",
              link: "/por-que-ocurre/",
              translations: { en: "overview" },
            },
          ],
        },
      ],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
