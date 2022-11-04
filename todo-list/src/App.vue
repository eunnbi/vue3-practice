<script setup lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "./stores/todos";

const store = useTodosStore();
const { todosDone, todosUndone } = storeToRefs(store);
</script>

<template>
  <TodoForm />
  <h1>Todo</h1>
  <TodoList :todos="todosUndone" />
  <h1>Done</h1>
  <TodoList :todos="todosDone" />
  <p v-if="todosUndone.length === 0 && todosDone.length != 0">
    Congratulations! You finished all tasks!
  </p>
</template>
