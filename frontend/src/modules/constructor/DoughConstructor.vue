<template>
  <div class="content__dough">

    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label v-for="dough in pizzaComponents.dough"
               :key="dough.id"
               class="dough__input"
               :class="`dough__input--${dough.value}`"
        >
          <input type="radio" name="dough" :value="dough" class="visually-hidden" v-model="chosenDough" :checked="dough.id === 1">
          <b>{{ dough.name }}</b>
          <span>{{dough.description}}</span>
        </label>
      </div>

    </div>

  </div>
</template>

<script setup>
import {usePizzaStore} from "@/store/PizzaComponetsStore";
import {storeToRefs} from "pinia";

const {pizzaComponents} = storeToRefs(usePizzaStore());

const chosenDough = defineModel();
</script>


<style scoped lang="scss">
@import '@/assets/scss/blocks/dough';
</style>