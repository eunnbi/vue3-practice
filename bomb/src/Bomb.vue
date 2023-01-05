<script setup lang="ts">
const { time } = defineProps({
  time: Number,
});
</script>

<template>
  <div class="circle">
    <p>
      {{ time }}
    </p>
  </div>
</template>

<style>
.circle {
  background-color: black;
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
}
</style>
