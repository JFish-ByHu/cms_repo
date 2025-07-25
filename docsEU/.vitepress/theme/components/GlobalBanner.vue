<script setup>
import { onMounted, ref } from "vue";

const bannerVisible = ref(true);

const getItemWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

const setItemWithExpiry = (key, value, ttl) => {
  const now = new Date();
  // ttl 是过期时间（单位：毫秒）
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const closeBanner = () => {
  bannerVisible.value = false;
  setItemWithExpiry("hasCookies", 1, 168 * 60 * 60 * 1000); // 7天
};

onMounted(() => {
  if (getItemWithExpiry("hasCookies") === 1) {
    bannerVisible.value = false;
  }
});
</script>

<template>
  <div class="banner" id="announcement-banner" v-if="bannerVisible">
    <p>
      This website uses strictly necessary cookies to store the log-in state and
      identify the logged-in account.
    </p>
    <div style="display: flex">
      <p>You may check more information about how we use cookies by visiting</p>
      <a href="https://aiot.quectel.com/privacy" target="_blank"
        >[Developer Center Cookies Notice]</a
      >
    </div>
    <button class="banner-close" @click="closeBanner">agree</button>
  </div>
</template>

<style scoped>
.banner {
  background: #1d2836;
  color: white;
  padding: 22px 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 100px;
}

.banner p {
  margin: 0;
  font-size: 18px;
}

.banner a {
  font-size: 18px;
  color: #c02837;
}

.banner-close {
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  background: #c02837;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  width: 76px;
  height: 36px;
  border-radius: 20px;
}

.banner-close:hover {
  opacity: 0.8;
}
</style>
