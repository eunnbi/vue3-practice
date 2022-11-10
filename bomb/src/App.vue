<script setup lang="ts">
import { ref } from 'vue';

const settingTime = 5;
const initialMessage = "Ready to bomb😊";
const initialTime = 0;
const time = ref(initialTime);
const message = ref(initialMessage);
let timerId: number;

const start = () => {
  timerId = setInterval(() => {
    time.value++;
    if (time.value == settingTime) {
      message.value = "Baaaaaaaaamm😱";
      clearInterval(timerId);
    }
  }, 1000);
}

const stop = () => {
  clearInterval(timerId);
}

const reset = () => {
  stop();
  time.value = initialTime;
  message.value = initialMessage;
}
</script>

<template>
  <p>Set Time : {{ settingTime }}</p>
  <button type="button" @click="start">start</button>
  <button type="button" @click="stop">stop</button>
  <button type="button" @click="reset">reset</button>
  <div class="circle">
    <p>
      {{ time }}
    </p>
  </div>
  <p>{{ message }}</p>
</template>

<style scoped>
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