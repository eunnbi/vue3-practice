<script setup lang="ts">
import Modal from "./Modal.vue";
defineProps<{
  content: string;
  musicTitle: string;
}>();
defineEmits(["cancel", "confirm"]);
</script>

<template>
  <Modal>
    <div class="wrapper">
      <p>{{ content }}</p>
      <p>음악 제목: {{ musicTitle }}</p>
      <div>
        <button @click="$emit('confirm')">네!</button>
        <button @click="$emit('cancel')">아니요!</button>
      </div>
    </div>
  </Modal>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
