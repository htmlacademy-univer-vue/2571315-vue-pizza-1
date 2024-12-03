<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input type="text" placeholder="Введите название пиццы" v-model="pizzaName">
    </label>

    <AppDrop @drop="dropHandler">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${1}-${2}`">
          <div class="pizza__wrapper">
            <div v-for="ingredient in pizzaIngredients.filter(item => item.count > 0)"
                 :key="ingredient.id"
                 class="pizza__filling"
                 :class="[`pizza__filling--${ingredient.value}`, countClass.get(ingredient.count)]"
            />
          </div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>

<script setup>
import AppDrop from "@/common/components/AppDrop.vue";
import {ref} from "vue";

const pizzaName = defineModel('name',{ type: String });
const pizzaIngredients = defineModel('ingredients',{ type: Array });

const countClass = ref(new Map([[1, ''], [2, 'pizza__filling--second'], [3, 'pizza__filling--third']]));
const dropHandler = (ingredient) => {
  pizzaIngredients.value[ingredient.id - 1].count++;
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/pizza';
</style>