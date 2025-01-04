<template>

      <div class="product cart-list__product">
        <img src="@/assets/img/product.svg" class="product__img" width="56" height="56" alt="Капричоза">
        <div class="product__text">
          <h2>Капричоза</h2>
          <ul>
            <li>30 см, на тонком тесте</li>
            <li>Соус: томатный</li>
            <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
          </ul>
        </div>
      </div>

      <AppCounter component="cart-list" />

      <div class="cart-list__price">
        <b>782 ₽</b>
      </div>

      <div class="cart-list__button">
        <button type="button" class="cart-list__edit">Изменить</button>
      </div>
</template>

<script setup>

import AppCounter from "@/common/components/AppCounter.vue";
</script>

<style scoped lang="scss">

</style>