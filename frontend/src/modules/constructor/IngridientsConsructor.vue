<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">

        <SauceConstructor v-model="pizzaCart.sauce" />

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li v-for="ingredient in pizzaComponents.ingredients" :key="ingredient.id" class="ingredients__item">
              <AppDrag :transfer-data="ingredient">
                <span
                    :class="`filling--${ingredient.value}`"
                    class="filling"
                >
                  {{ingredient.name}}
                </span>
              </AppDrag>

             <AppCounter v-model="ingredient.count" />

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
import AppCounter from "@/common/components/AppCounter.vue";
import {storeToRefs} from "pinia";
import {usePizzaStore} from "@/store/PizzaComponetsStore";
import {useDataStore} from "@/store/DataStore";
import {watch} from "vue";

const {pizzaComponents} = storeToRefs(usePizzaStore());

const {pizzaCart} = storeToRefs(useDataStore());

const pizzaIngredients = defineModel({ type: Array });

watch(pizzaComponents.value, () => {
  pizzaIngredients.value = pizzaComponents.value.ingredients.filter(item => item.count > 0)
})
</script>

<style lang="scss">
@import '@/assets/scss/blocks/ingredients';
@import '@/assets/scss/blocks/filling';
</style>