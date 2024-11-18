<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input type="text" name="pizza_name" placeholder="Введите название пиццы">
    </label>

    <AppDrop @drop="dropHandler">
      <div class="content__constructor">
        <div class="pizza pizza--foundation--big-tomato">
          <div class="pizza__wrapper">
            <div v-for="ingredient in actualIngredients"
                 class="pizza__filling pizza__filling--ananas"
                 :class="'pizza__filling--' + ingredient"
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

const actualIngredients = ref(new Set())
const dropHandler = (ingridient) => {
  actualIngredients.value.add(ingridient);
  console.log(ingridient);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/pizza';
</style>