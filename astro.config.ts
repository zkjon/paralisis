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

// https://astro.build/config
export default defineConfig({
  site: "https://paralisis.zkjon.dev",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    starlight({
      title: "parálisis del sueño",
      routeMiddleware: "@/router-data.ts",
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
              label: "definición",
              link: "/que-es/",
              translations: { en: "definition" },
            },
            {
              label: "características",
              link: "/que-es/caracteristicas/",
              translations: { en: "characteristics" },
            },
            {
              label: "tipos de parálisis",
              link: "/que-es/tipos/",
              translations: { en: "types of sleep paralysis" },
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
            {
              label: "fases del sueño",
              link: "/por-que-ocurre/fases-del-sueno/",
              translations: { en: "sleep stages" },
            },
            {
              label: "factores de riesgo",
              link: "/por-que-ocurre/factores/",
              translations: { en: "risk factors" },
            },
          ],
        },
        {
          label: "durante el episodio",
          translations: { en: "during the episode" },
          items: [
            {
              label: "sensaciones físicas",
              link: "/durante-el-episodio/sensaciones/",
              translations: { en: "physical sensations" },
            },
            {
              label: "alucinaciones",
              link: "/durante-el-episodio/alucinaciones/",
              translations: { en: "hallucinations" },
            },
          ],
        },
        {
          label: "qué hacer",
          translations: { en: "what to do" },
          items: [
            {
              label: "durante el episodio",
              link: "/que-hacer/durante/",
              translations: { en: "during an episode" },
            },
            {
              label: "reducir la frecuencia",
              link: "/que-hacer/frecuencia/",
              translations: { en: "reducing frequency" },
            },
          ],
        },
        {
          label: "prevalencia",
          translations: { en: "prevalence" },
          items: [
            {
              label: "datos y estadísticas",
              link: "/prevalencia/datos/",
              translations: { en: "data and statistics" },
            },
          ],
        },
        {
          label: "historia y cultura",
          translations: { en: "history and culture" },
          items: [
            {
              label: "interpretaciones históricas",
              link: "/historia-y-cultura/interpretaciones/",
              translations: { en: "historical interpretations" },
            },
            {
              label: "representaciones culturales",
              link: "/historia-y-cultura/representaciones/",
              translations: { en: "cultural representations" },
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
