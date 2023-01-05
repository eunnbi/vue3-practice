<script setup lang="ts">
import type { Music } from "@/stores/playlist";
import { usePlaylistStore } from "@/stores/playlist";
import { ref } from "vue";
import CheckingModal from "./CheckingModal.vue";

type ModalType = "" | "DELETE" | "PLAYLIST";

defineProps<{
  title: Music["title"];
  artist: Music["artist"];
  id: Music["id"];
}>();

const { changePlayingStatus, removeMusic } = usePlaylistStore();

const modal = ref<{
  type: ModalType;
  content: string;
}>({
  type: "",
  content: "",
});

const showDeletionModal = () => {
  modal.value = {
    type: "DELETE",
    content: "정말 노래를 지울까요?",
  };
};

const showAddingPlaylistModal = () => {
  modal.value = {
    type: "PLAYLIST",
    content: "정말 재생목록에 추가할건가요?",
  };
};

const closeModal = () => {
  modal.value = {
    type: "",
    content: "",
  };
};

const onConfirmDeletion = (id: Music["id"]) => {
  removeMusic(id);
  closeModal();
};

const onConfirmAddingPlaylist = (id: Music["id"]) => {
  changePlayingStatus(id);
  closeModal();
};
</script>

<template>
  <article>
    <h1>{{ title }}</h1>
    <p>By {{ artist }}</p>
    <div>
      <button @click="showAddingPlaylistModal">재생목록에 추가</button>
      <button @click="showDeletionModal">노래 지우기</button>
    </div>
  </article>
  <CheckingModal
    :music-title="title"
    :content="modal.content"
    @confirm="onConfirmDeletion(id)"
    @cancel="closeModal"
    v-if="modal.type === 'DELETE'"
  />
  <CheckingModal
    :music-title="title"
    :content="modal.content"
    @confirm="onConfirmAddingPlaylist(id)"
    @cancel="closeModal"
    v-if="modal.type === 'PLAYLIST'"
  />
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 1rem;
  border: 2px solid gray;
  border-radius: 16px;
}
h1 {
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}
p {
  align-self: flex-end;
  margin-bottom: 0.9rem;
}
</style>
