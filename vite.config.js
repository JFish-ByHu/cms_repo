import { defineConfig } from "vite";

import decap, {
  createFolderCollection,
  createField,
} from "vite-plugin-decap-cms";

export default defineConfig({
  publicDir: "public",
  // mediafolder: "docs/public/uploads",
  plugins: [
    decap({
      config: {
        backend: {
          name: "github",
          repo: "JFish-ByHu/test",
          branch: "main",
        },
        collections: [
          // 中文文档集合
          createFolderCollection({
            name: "zh_docs",
            label: "中文文档",
            folder: "docs/zh",
            create: true,
            fields: [
              createField("string", { name: "title", label: "标题" }),
              createField("markdown", { name: "body", label: "内容" }),
            ],
          }),
          // 英文文档集合
          createFolderCollection({
            name: "en_docs",
            label: "English Docs",
            folder: "docsEU/en",
            create: true,
            fields: [
              createField("string", { name: "title", label: "Title" }),
              createField("markdown", { name: "body", label: "Content" }),
            ],
          }),
        ],
      },
    }),
  ],
});
