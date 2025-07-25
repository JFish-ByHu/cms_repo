// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import "./style.css";
import GlobalBanner from "./components/GlobalBanner.vue";
import Layout from "./Layout.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("GlobalBanner", GlobalBanner);
  },
};
