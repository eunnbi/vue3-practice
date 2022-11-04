<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";

interface Props {
  todos: Todo[];
}
const { todos } = defineProps<Props>();
const { removeTodo, changeDoneState } = useTodosStore();
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
      <button v-if="!todo.done" @click="changeDoneState(todo.id)">V</button>
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
</template>

<style>
li {
  text-transform: capitalize;
}
</style>
