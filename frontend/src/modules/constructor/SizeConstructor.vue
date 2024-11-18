<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label v-for="size in sizes" :key="size.id" class="diameter__input" :class="'diameter__input--' + size.value">
          <input type="radio" name="diameter" value="small" class="visually-hidden">
          <span>{{size.name}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import sizes from "@/mocks/sizes.json";
</script>

<style scoped lang="scss">
@import '@/assets/scss/blocks/diameter';
</style>