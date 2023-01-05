import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface Music {
  id: number;
  title: string;
  artist: string;
  isPlaying: boolean;
}

export const usePlaylistStore = defineStore("playlist", () => {
  const musicList = ref<Music[]>([
    {
      id: 1,
      title: "라일락",
      artist: "아이유",
      isPlaying: false,
    },
  ]);
  let nextId = 2;

  function addNewMusic({ title, artist }: Omit<Music, "isPlaying" | "id">) {
    musicList.value.push({
      id: nextId++,
      title,
      artist,
      isPlaying: false,
    });
  }

  function removeMusic(id: Music["id"]) {
    musicList.value = musicList.value.filter((item) => item.id !== id);
  }

  function changePlayingStatus(id: Music["id"]) {
    musicList.value = musicList.value.map((item) =>
      item.id === id ? { ...item, isPlaying: true } : item
    );
  }

  const playingList = computed(() => {
    return musicList.value.filter((item) => item.isPlaying);
  });

  return {
    musicList,
    addNewMusic,
    removeMusic,
    changePlayingStatus,
    playingList,
  };
});
