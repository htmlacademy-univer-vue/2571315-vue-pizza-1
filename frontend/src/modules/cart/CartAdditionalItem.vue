<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="getCartImage(img)" width="39" height="60" :alt="product">
      <span>{{product}}</span>
    </p>

    <div class="additional-list__wrapper">
      <AppCounter component="additional-list" color="orange" v-model="counter"/>

      <div class="additional-list__price">
        <b>× {{ price }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script setup>
import AppCounter from "@/common/components/AppCounter.vue";
import {getCartImage} from "@/common/helpers/getImage";
import {ref, watch} from "vue";

const props = defineProps({
  price: {
    type: Number,
    required: true,
    default: 0
  },
  product: {
    type: String,
    required: true,
    default: 'Название отсутствует'
  },
  img: {
    type: String,
    required: true,
    default: 'Название отсутствует'
  }
})
const counter = ref(0)

const productPrice = defineModel({type: Number, default: 0})

watch(counter, () => {
  productPrice.value = counter.value * props.price
})

</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/additional-list';
@import '@/assets/scss/blocks/counter';
</style>