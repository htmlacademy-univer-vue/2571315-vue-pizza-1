<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <DoughConstructor />

        <SizeConstructor />

        <IngridientsConsructor />

        <PizzaVisualiser />

      </div>

    </form>
  </main>
</template>

<script setup>
import DoughConstructor from "@/modules/constructor/DoughConstructor.vue";
import SizeConstructor from "@/modules/constructor/SizeConstructor.vue";
import IngridientsConsructor from "@/modules/constructor/IngridientsConsructor.vue";
import PizzaVisualiser from "@/modules/constructor/PizzaVisualiser.vue";
</script>

<style lang="scss">
@import '@/assets/scss/layout/content';
@import '@/assets/scss/layout/sheet';
@import '@/assets/scss/blocks/radio';
@import '@/assets/scss/blocks/input';
@import '@/assets/scss/blocks/select';
@import '@/assets/scss/blocks/button';
@import '@/assets/scss/blocks/radio';
@import '@/assets/scss/blocks/counter';
@import '@/assets/scss/blocks/title';
</style>