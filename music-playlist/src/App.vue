<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import MusicCard from "./components/MusicCard.vue";
import MusicForm from "./components/MusicForm.vue";
import { usePlaylistStore } from "./stores/playlist";

const store = usePlaylistStore();
const { playingList, musicList } = storeToRefs(store);
const open = ref(false);
const showForm = () => (open.value = true);
const hideForm = () => (open.value = false);
</script>

<template>
  <main>
    <h1>
      재생목록: [<span
        v-for="{ title } in playingList"
        v-if="playingList.length !== 0"
        >"{{ title }}"</span
      >]
    </h1>
    <section>
      <MusicCard
        v-for="{ id, title, artist } in musicList"
        :title="title"
        :artist="artist"
        :id="id"
      />
      <button type="button" @click="showForm">+ 새음악</button>
    </section>
  </main>
  <MusicForm @hide-form="hideForm" v-if="open" />
</template>

<style scoped>
h1 {
  font-weight: bold;
}
section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
