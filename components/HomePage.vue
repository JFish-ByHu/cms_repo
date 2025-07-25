<template>
  <div>
    <div class="banner">
      <img :src="locale.banner" />
      <div class="banner-context">
        <h1>{{ locale.title }}</h1>
        <p class="banner-des">
          {{ locale.desc }}
        </p>
        <p class="banner-btn">
          <span
            v-for="({ text, url }, index) of locale.bannerNavs"
            :key="index"
          >
            <a :href="url">{{ text }}</a>
          </span>
        </p>
      </div>
    </div>

    <div class="divide">{{ locale.learnPathLabel }}</div>

    <main>
      <div
        class="main-row"
        v-for="({ icon, title, subList }, index) of locale.learnPaths"
        :key="index"
      >
        <div class="row-icon">
          <img alt="" :src="icon" />
        </div>
        <div class="row-content-wrapper">
          <div class="row-title">
            <a :href="title.url">{{ title.text }}</a>
          </div>
          <ul class="row-context">
            <li
              v-for="({ text, url }, index) of subList.filter((i) => !!i)"
              :key="index"
            >
              <a :href="url">{{ text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { HomePageLocales } from "./HomePageLocales.js";

export default {
  name: "HomePage",
  props: {
    lang: {
      type: String,
      default: "zh",
    },
  },
  data() {
    return {
      locale: {
        title: "",
        desc: "",
      },
    };
  },

  mounted() {
    this.locale = HomePageLocales()[this.lang];
  },
};
</script>
<style lang="stylus" scoped>
mobile() {
  @media (max-width: $MQMobile) {
    block;
  }
}

.banner {
  position relative;
  width: 100%;
  height: 316px;
  +mobile() {
    height: fit-content;
  }

  img {
    width: 100%;
    height: 100%
    +mobile() {
      display: none;
    }
  }

  .banner-context {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 40px;
    +mobile() {
      position: relative;
      padding: 0;
    }

    .banner-des {
      width: 70%;
      +mobile() {
        width: 100%;
      }
    }

    .banner-btn {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      +mobile() {
        gap: 16px;
      }

      span {
        display inline-block;
        border 1px solid #333;
        padding 2px 22px;
        cursor pointer;
        transition 300ms;
        user-select none;
        word-break keep-all;

        &:hover {
          background: #f6f6f6;
          border 1px solid #888;
        }
      }

    }
  }
}

main {
  margin-top: 40px;
  padding: 0 40px;
  +mobile() {
    margin-top: 24px;
    padding: 0;
  }

  .main-row {
    display: flex;
    margin-bottom: 5px;

    .row-icon {
      overflow hidden;

      img {
        display: block;
        width: 24px;
        height: 24px;
      }

      &:after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 100%;
        background: #DCDCDC;
        float left;
        margin-left: 9px;
        margin-top: 6px;
      }
    }

    &:last-child .row-icon {
      &:after {
        display: none;
      }
    }

    .row-content-wrapper {
      display: flex;
      flex-grow: 1;
      +mobile() {
        flex-direction: column;
      }
    }

    .row-title {
      width: 120px;
      margin-left: 15px;
      line-height: 18px;
      padding-bottom: 50px;
      +mobile() {
        padding-bottom: 24px;
        width: fit-content;
      }

      a {
        font-size: 16px;
        color: #333333;
        font-weight: bold;
      }
    }

    .row-context {
      display: grid;
      grid-template-columns: repeat(3, 1fr)
      flex: 1;
      margin-left: 50px;
      list-style: none;
      flex-wrap: wrap;
      gap: 24px;
      padding-bottom: 24px;
      word-break: keep-all;
      +mobile() {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        padding-left: 0;
        gap: 16px;
      }

      li {
        line-height: 20px;
      }

      a {
        font-size: 14px;
        color: #666666;
      }
    }
  }
}

.divide {
  display flex;
  align-items center;
  font-size 14px;
  color #999999;
  margin-top: 60px
  padding: 0 40px;
  +mobile() {
    padding: 0;
  }

  &:after {
    display: inline-block;
    content: "";
    flex: 1;
    height: 1px;
    background: #E7E7E7;
    margin-left: 16px;
  }
}
</style>
<style lang="stylus">
@media (max-width: $MQMobile) {
  .page {
    padding-top 3.6em !important;
  }

  .theme-default-content {
    padding 0 !important;

    > div {
      margin-top 0 !important;
      padding 24px 16px;
    }
  }
}
</style>
