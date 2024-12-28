<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">Мои данные</h1>
    </div>

    <div class="user">
      <picture>
        <source type="image/webp" srcset="@/assets/img/users/user5@2x.webp 1x, @/assets/img/users/user5@4x.webp 2x">
        <img src="@/assets/img/users/user5@2x.jpg" srcset="@/assets/img/users/user5@4x.jpg" alt="Василий Ложкин" width="72" height="72">
      </picture>
      <div class="user__name">
        <span>Василий Ложкин</span>
      </div>
      <p class="user__phone">Контактный телефон: <span>+7 999-999-99-99</span></p>
    </div>

    <AddressCard />

    <AddressForm />

    <div class="layout__button">
      <button type="button" class="button button--border">Добавить новый адрес</button>
    </div>
  </div>
</template>

<script setup>

import AddressCard from "@/modules/user/AddressCard.vue";
import AddressForm from "@/modules/user/AddressForm.vue";
</script>

<style lang="scss">
@import '@/assets/scss/app';
@import '@/assets/scss/layout/layout';
@import '@/assets/scss/blocks/address-form';
@import '@/assets/scss/blocks/user';
@import '@/assets/scss/blocks/icon';
</style>