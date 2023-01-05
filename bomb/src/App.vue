<script setup lang="ts">
import { ref, watch } from "vue";
import Bomb from "./Bomb.vue";

const settingTime = 5;
const initialMessage = "Ready to bomb😊";
const initialTime = 0;
const time = ref(initialTime);
const message = ref(initialMessage);
let timerId: number;

const start = () => {
  timerId = setInterval(() => {
    time.value++;
  }, 1000);
};

const stop = () => {
  clearInterval(timerId);
};

const reset = () => {
  stop();
  time.value = initialTime;
  message.value = initialMessage;
};
watch(time, (newTime) => {
  if (newTime === settingTime) {
    stop();
    message.value = "Baaaaaaaaamm😱";
  }
});
</script>

<template>
  <p>Set Time : {{ settingTime }}</p>
  <div>
    <button type="button" @click="start">start</button>
    <button type="button" @click="stop">stop</button>
    <button type="button" @click="reset">reset</button>
  </div>
  <Bomb :time="time" />
  <p>{{ message }}</p>
</template>
