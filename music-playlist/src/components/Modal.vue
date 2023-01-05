<script setup lang="ts"></script>

<template>
  <div class="modal-wrapper">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 250px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
