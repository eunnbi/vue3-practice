<script setup lang="ts">
import Modal from "./Modal.vue";
import { usePlaylistStore } from "@/stores/playlist";
import { ref } from "vue";
const emit = defineEmits(["hideForm"]);
const inputs = ref({
  title: "",
  artist: "",
});
const { addNewMusic } = usePlaylistStore();

const onClickSubmitButton = () => {
  addNewMusic({ title: inputs.value.title, artist: inputs.value.artist });
  emit("hideForm");
};
</script>

<template>
  <Modal>
    <form>
      <div>
        <label
          >음악제목
          <input type="text" v-model="inputs.title" />
        </label>
      </div>
      <div>
        <label
          >아티스트
          <input type="text" v-model="inputs.artist" />
        </label>
      </div>
      <button type="submit" @click.prevent="onClickSubmitButton">
        등록하기
      </button>
    </form>
  </Modal>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
