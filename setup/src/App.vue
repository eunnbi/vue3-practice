<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
</script>

<template>
  <Header />
  <div class="mt-10">
    <RouterView />
  </div>
</template>
