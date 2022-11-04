import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([
    {
      id: 1,
      title: "Learn Vue",
      done: false,
    },
  ]);

  function addTodo(todoText: string) {
    todos.value.push({
      id: todos.value[todos.value.length - 1].id + 1,
      title: todoText,
      done: false,
    });
  }

  function changeDoneState(id: number) {
    todos.value.forEach((todo) => {
      if (todo.id === id) todo.done = true;
    });
  }

  function removeTodo(id: number) {
    todos.value.splice(
      todos.value.findIndex((elem) => elem.id === id),
      1
    );
  }

  const todosUndone = computed(() => {
    return todos.value.filter((todo) => !todo.done);
  });

  const todosDone = computed(() => {
    return todos.value.filter((todo) => todo.done);
  });

  return {
    todos,
    addTodo,
    removeTodo,
    changeDoneState,
    todosDone,
    todosUndone,
  };
});
