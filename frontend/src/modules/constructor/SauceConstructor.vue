<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label v-for="sauce in pizzaComponents.sauces" :key="sauce.id" class="radio ingredients__input">
      <input type="radio" name="sauce" :value="sauce" v-model="pizzaSauce" :checked="sauce.id === 2">
      <span>{{sauce.name}}</span>
    </label>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {usePizzaStore} from "@/store/PizzaComponetsStore";

const {pizzaComponents} = storeToRefs(usePizzaStore());

const pizzaSauce = defineModel();

</script>

<style scoped lang="scss">

</style>