<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex gap-5">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style>
a.router-link-exact-active {
  font-weight: bold;
  color: green;
}
</style>
