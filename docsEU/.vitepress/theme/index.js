// https://vitepress.dev/guide/custom-theme
import { onMounted } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { validateToken } from "./fetch";
import GlobalBanner from "./components/GlobalBanner.vue";
import Layout from "./Layout.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("GlobalBanner", GlobalBanner);
  },

  setup() {
    const isEUSkip = (urlParams, url, queryToken) => {
      return new Promise((resolve, reject) => {
        if (queryToken) localStorage.setItem("Authorization", queryToken);

        const token = localStorage.getItem("Authorization");
        url.searchParams.delete("token");

        if (token) {
          validateToken(urlParams, token)
            .then(() => {
              resolve();
            })
            .catch((e) => {
              reject(e);
              localStorage.removeItem("Authorization");
              window.location.href =
                urlParams.url + "/login?redirect=" + decodeURIComponent(url);
            });
        } else {
          window.location.href =
            urlParams.url + "/login?redirect=" + decodeURIComponent(url);
        }
      });
    };
    onMounted(async () => {
      let urlParams = {
        API_Url: "https://iot-api.acceleronix.io",
        url: "https://core.acceleronix.io",
      };

      const url = new URL(window.location.href);
      const queryToken = url.searchParams.get("token");
      await isEUSkip(urlParams, url, queryToken);
    });
  },
};
