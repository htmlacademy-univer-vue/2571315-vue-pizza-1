<template>
  <header class="header">
    <div class="header__logo pointer">
      <a @click="router.push({name: 'main'})" class="logo">
        <img src="@/assets/img/logo.svg" alt="V!U!E! Pizza logo" width="90" height="40">
      </a>
    </div>
    <div class="header__cart pointer">
      <a @click="router.push({name: 'cart'})">0 ₽</a>
    </div>
    <div class="header__user pointer">
      <a @click="router.push({name: 'profile'})" class="header__login">
        <span>Войти</span>
      </a>
    </div>
  </header>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/header";

.pointer {
  cursor: pointer;
}
</style>