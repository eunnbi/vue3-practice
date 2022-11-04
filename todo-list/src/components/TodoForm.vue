<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";
const newTodo = ref("");
const { addTodo } = useTodosStore();

const onSubmit = () => {
  addTodo(newTodo.value);
  newTodo.value = "";
};
</script>

<template>
  <form v-on:submit.prevent="onSubmit">
    <input v-model="newTodo" placeholder="Enter todo" />
    <button>Add</button>
  </form>
</template>
