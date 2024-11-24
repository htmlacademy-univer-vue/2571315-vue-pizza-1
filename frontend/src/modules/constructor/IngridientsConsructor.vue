<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">

        <SauceConstructor />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li v-for="ingredient in pizzaIngredients" :key="ingredient.id" class="ingredients__item">
              <AppDrag :transfer-data="ingredient">
                <span
                    :class="'filling--' + ingredient.value"
                    class="filling"
                >
                  {{ingredient.name}}
                </span>
              </AppDrag>

              <div class="counter counter--orange ingredients__counter">
                <button type="button" class="counter__button counter__button--minus" @click="ingredient.count > 0? ingredient.count-- : ''">
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input type="text" name="counter" class="counter__input" :min="0" v-model="ingredient.count">
                <button type="button" class="counter__button counter__button--plus" @click="ingredient.count ++">
                  <span class="visually-hidden">Больше</span>
                </button>
              </div>

            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import AppDrag from "@/common/components/AppDrag.vue";
import SauceConstructor from "@/modules/constructor/SauceConstructor.vue";

const pizzaIngredients = defineModel({ type: Array });
</script>

<style lang="scss">
@import '@/assets/scss/blocks/ingredients';
@import '@/assets/scss/blocks/filling';
</style>