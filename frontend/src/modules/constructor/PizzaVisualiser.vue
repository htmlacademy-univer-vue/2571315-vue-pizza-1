<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input type="text" placeholder="Введите название пиццы" v-model="pizzaName">
    </label>

    <AppDrop @drop="dropHandler">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${pizzaCart.dough.value ?? 'light'}-${pizzaCart.sauce.value ?? 'creamy'}`">
          <div class="pizza__wrapper">
            <div v-for="ingredient in pizzaIngredients"
                 :key="ingredient.id"
                 class="pizza__filling"
                 :class="[`pizza__filling--${ingredient.value}`, countClass.get(ingredient.count)]"
            />
          </div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ getPrice ?? 0 }} ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script setup>
import AppDrop from "@/common/components/AppDrop.vue";
import {useDataStore} from "@/store/DataStore";
import {storeToRefs} from "pinia";

const pizzaName = defineModel('name',{ type: String });
const pizzaIngredients = defineModel('ingredients',{ type: Array });

const {pizzaCart, getPrice} = storeToRefs(useDataStore());


const countClass = new Map([[1, ''], [2, 'pizza__filling--second'], [3, 'pizza__filling--third']]);
const dropHandler = (ingredient) => {
  pizzaIngredients.value[ingredient.id - 1].count++;
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/pizza';
</style>