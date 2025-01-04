<template>
  <div class="layout__sidebar sidebar">
    <a class="logo layout__logo">
      <img src="@/assets/img/logo.svg" alt="V!U!E! Pizza logo" width="90" height="40">
    </a>
    <a class="layout__link" :class="route.name === 'history' ? 'layout__link--active' : ''" @click="router.push({name: 'history'})">История заказов</a>
    <a class="layout__link" :class="route.name === 'profile' ? 'layout__link--active' : ''" @click="router.push({name: 'profile'})" >Мои данные</a>
  </div>
</template>

<script setup>
import router from "@/router";
import {useRoute} from "vue-router";
const route = useRoute();
</script>
<style scoped lang="scss">
@import '@/assets/scss/layout/layout';
</style>
