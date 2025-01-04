<template>
  <AppHeader />
  <main class="layout">
    <SideBar v-if="['profile', 'history'].includes(route.name)"/>
    <router-view/>
  </main>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import {useRoute} from "vue-router";
import SideBar from "@/layouts/SideBar.vue";

const route = useRoute();
</script>

<style>

</style>