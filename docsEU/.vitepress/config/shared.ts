import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: "Document",
  rewrites: {
    "en/:rest*": ":rest*",
  },
  lastUpdated: true,
  // cleanUrls: true, // VitePress 将从 URL 中删除 .html 后缀
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
  },

  // sitemap: {
  //   hostname: "https://vitepress.dev",
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes("migration"));
  //   },
  // },

  /* prettier-ignore */
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    // ['meta', { name: 'theme-color', content: 'yellow' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:locale', content: 'en' }],
    // ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    // ['meta', { property: 'og:site_name', content: 'VitePress' }],
    // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    // ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }],
    ["script", { src: "/js&css/jquery.slim.min.js" }],
    ["script", { src: "/js&css/jquery.fancybox.min.js" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/js&css/jquery.fancybox.min.css",
      },
    ],
    // ["script", { src: "/js&css/validateToken.js" }],
  ],

  themeConfig: {
    logo: { src: "/favicon.png", width: 24, height: 24 },

    search: {
      provider: "local",
      options: {
        // appId: 'R2IYF7ETH7',
        // apiKey: '599cec31baffa4868cae4e79f180729b',
        // indexName: 'docsearch',
        locales: {
          // ...enSearch,
        },
      },
    },

    // carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },
  },
});
