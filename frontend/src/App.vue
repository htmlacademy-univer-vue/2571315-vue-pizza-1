<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { useDataStore, useProfileStore } from "./store";
import { getToken, removeToken } from "./services/tokenManager";
import { useAuthStore } from "./store";
import AppLayout from "./layouts/AppLayout.vue";
import router from "./router";

const { fetchDough, fetchSizes, fetchSauces, fetchMisc, fetchIngredients } =
  useDataStore();
const { fetchAddresses, fetchOrders } = useProfileStore();

onMounted(async () => {
  await fetchDough();
  await fetchSizes();
  await fetchSauces();
  await fetchMisc();
  await fetchIngredients();
  await fetchAddresses();
  await fetchOrders();

  const token = getToken();
  if (token) {
    try {
      const authStore = useAuthStore();
      authStore.getMe().then(() => {
        router.push({ name: "main" });
      });
    } catch (e) {
      removeToken();
      console.log(e);
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/layout/main.scss";
@import "@/assets/scss/app.scss";
body {
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
}

.main__wrapper {
  padding-bottom: 30px;

  background-color: $white;
  box-shadow: $shadow-light;

  h1 {
    margin-bottom: 0;
    padding: 0 95px;

    text-align: center;

    @include b-s36-h42;
  }

  p {
    padding: 0 95px;

    text-align: center;

    font-size: 20px;
    line-height: 30px;
  }

  b {
    font-size: 1.2em;
  }
}

.main__header {
  margin-bottom: 30px;
  padding: 20px 0;

  background-color: $green-600;

  img {
    display: block;

    margin: 0 auto;
  }
}
</style>
