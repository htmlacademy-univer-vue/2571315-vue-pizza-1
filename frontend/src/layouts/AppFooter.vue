<template>
  <section class="footer">
    <div class="footer__more">
      <a @click="router.push({name: 'main'})" class="button  button--arrow button--border">Хочу еще одну</a>
    </div>
    <p class="footer__text">Перейти к конструктору<br>чтоб собрать ещё одну пиццу</p>
    <div class="footer__price">
      <b>Итого: {{getPrice}} ₽</b>
    </div>

    <div class="footer__submit">
      <button type="submit" class="button">Оформить заказ</button>
    </div>
  </section>
</template>

<script setup>

import router from "@/router";
import {computed} from "vue";

const totalPrice = defineModel({
  type: Object,
  required: true,
  default: {
    order: [],
    misc: []
  }
})

const getPrice = computed(() => {
  let sum = 0;
  if (totalPrice.value.order.length) {
    sum += totalPrice.value.order.reduce((acc, item) => acc += item, 0)
  }
  if (totalPrice.value.misc.length) {
    sum += totalPrice.value.misc.reduce((acc, item) => acc += item, 0)
  }
  return sum
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/footer';
@import '@/assets/scss/blocks/button';
</style>