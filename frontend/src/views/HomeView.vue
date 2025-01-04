<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

          <DoughConstructor v-model="pizzaCart.dough"/>

          <SizeConstructor v-model="pizzaCart.size"/>

          <IngridientsConsructor v-model="pizzaCart.ingredients" />

          <PizzaVisualiser v-model:name="pizzaCart.name" v-model:ingredients="pizzaCart.ingredients" />

      </div>

    </form>
  </main>
</template>

<script setup>
import DoughConstructor from "@/modules/constructor/DoughConstructor.vue";
import SizeConstructor from "@/modules/constructor/SizeConstructor.vue";
import IngridientsConsructor from "@/modules/constructor/IngridientsConsructor.vue";
import PizzaVisualiser from "@/modules/constructor/PizzaVisualiser.vue";
import {onBeforeMount} from "vue";
import {usePizzaStore} from "@/store/PizzaComponetsStore";
import {storeToRefs} from "pinia";
import {useDataStore} from "@/store/DataStore";

const {fetchAll} = usePizzaStore();

const {pizzaCart} = storeToRefs(useDataStore());

onBeforeMount(async () => {
  await fetchAll();
})
</script>

<style lang="scss">
@import "@/assets/scss/app";
</style>