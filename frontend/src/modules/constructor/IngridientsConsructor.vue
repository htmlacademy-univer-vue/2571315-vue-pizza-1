<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">

        <SauceConstructor />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li v-for="ingredient in ingredients" :key="ingredient.id" class="ingredients__item">
              <AppDrag :transfer-data="ingredient.value">
                <span
                    :class="'filling--' + ingredient.value"
                    class="filling"
                >
                  {{ingredient.name}}
                </span>
              </AppDrag>

              <div class="counter counter--orange ingredients__counter">
                <button type="button" class="counter__button counter__button--minus" disabled>
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input type="text" name="counter" class="counter__input" value="0">
                <button type="button" class="counter__button counter__button--plus">
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
import ingredients from "@/mocks/ingredients.json";
import SauceConstructor from "@/modules/constructor/SauceConstructor.vue";
</script>

<style lang="scss">
@import '@/assets/scss/blocks/ingredients';
@import '@/assets/scss/blocks/filling';
</style>