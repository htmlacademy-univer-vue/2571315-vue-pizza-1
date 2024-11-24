<template>
  <div class="content__dough">

    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label v-for="dough in doughs"
               :key="dough.id"
               class="dough__input"
               :class="`dough__input--${dough.value}`"
        >
          <input type="radio" name="dought" :value="dough.value" class="visually-hidden" v-model="chosenDough">
          <b>{{ dough.name }}</b>
          <span>{{dough.description}}</span>
        </label>
      </div>

    </div>

  </div>
</template>

<script setup>
import doughs from "@/mocks/dough.json";

const chosenDough = defineModel({type: String, default: 'thin'});
</script>


<style scoped lang="scss">
@import '@/assets/scss/blocks/dough';
</style>