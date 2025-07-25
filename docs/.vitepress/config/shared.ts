import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: "文档中心",
  rewrites: {
    "zh/:rest*": ":rest*",
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

  /* prettier-ignore */
  head: [
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
  ],

  themeConfig: {
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
