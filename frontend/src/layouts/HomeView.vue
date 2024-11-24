<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <DoughConstructor v-model="pizza.dough"/>

        <SizeConstructor v-model="pizza.size"/>

        <IngridientsConsructor v-model="pizza.ingredients" />

        <PizzaVisualiser v-model:name="pizza.name" v-model:ingredients="pizza.ingredients" />

      </div>

    </form>
  </main>
</template>

<script setup>
import DoughConstructor from "@/modules/constructor/DoughConstructor.vue";
import SizeConstructor from "@/modules/constructor/SizeConstructor.vue";
import IngridientsConsructor from "@/modules/constructor/IngridientsConsructor.vue";
import PizzaVisualiser from "@/modules/constructor/PizzaVisualiser.vue";
import ingredients from "@/mocks/ingredients.json";
import {ref} from "vue";

const pizza = ref({
  dough: "thin",
  size: "small",
  sauce: 'cream',
  ingredients: ingredients,
  name: ''
})
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>