<script setup lang="ts">
import Nav from "./Nav.vue";
</script>

<template>
  <header class="flex flex-col items-center gap-7">
    <div class="flex flex-col gap-4">
      <img src="@/assets/logo.svg" class="max-w-xs" alt="Vue logo" />
      <h1 class="text-4xl font-bold">Hello 👋</h1>
    </div>
    <Nav />
  </header>
</template>
