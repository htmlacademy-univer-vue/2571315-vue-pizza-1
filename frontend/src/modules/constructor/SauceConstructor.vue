<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>

    <label v-for="sauce in sauces" :key="sauce.id" class="radio ingredients__input">
      <input type="radio" name="sauce" :value="sauce.name" checked>
      <span>{{sauce.name}}</span>
    </label>
  </div>
</template>

<script setup>
import sauces from "@/mocks/sauces.json";
</script>

<style scoped lang="scss">

</style>