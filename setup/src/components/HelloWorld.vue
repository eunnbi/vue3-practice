<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-center font-bold">{{ msg }}</h1>
  </div>
</template>
