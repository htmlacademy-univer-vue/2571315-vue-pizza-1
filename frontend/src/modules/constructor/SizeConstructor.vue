<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label v-for="size in pizzaComponents.sizes" :key="size.id" class="diameter__input" :class="`diameter__input--${size.value}`">
          <input type="radio" name="diameter" :value="size" v-model="chosenSize" class="visually-hidden">
          <span>{{size.name}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {usePizzaStore} from "@/store/PizzaComponetsStore";

const chosenSize = defineModel({type: String, default: 'small'})

const {pizzaComponents} = storeToRefs(usePizzaStore());
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/diameter';
</style>