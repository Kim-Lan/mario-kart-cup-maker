<script setup>
import { ref } from 'vue';
import { trackCount, selectedTracks } from '../stores.js';

const props = defineProps({
  gameName: String,
  cupName: String,
  trackName: String,
  imagePath: String,
  isDisplay: Boolean,
});

const isSelected = ref(false);

function onClick() {
  if (!props.isDisplay && (isSelected.value || trackCount.value < 4)) {
    toggleSelect();
  }
}

function toggleSelect() {
  if (isSelected.value) {
    for (let i = 0; i < selectedTracks.length; i++) {
      if (selectedTracks[i] !== null && selectedTracks[i].trackName === props.trackName) {
        selectedTracks[i] = {};
        break;
      }
    }
    trackCount.value--;
  } else {
    for (let i = 0; i < selectedTracks.length; i++) {
      if (!selectedTracks[i] || Object.keys(selectedTracks[i]).length === 0) {
        selectedTracks[i] = {
          gameName: props.gameName,
          cupName: props.cupName,
          trackName: props.trackName,
          imagePath: props.imagePath
        }
        break;
      }
    }
    trackCount.value++;
  }
  isSelected.value = !isSelected.value;
}

</script>

<template>
  <div
    class="flex-1 drop-shadow cursor-pointer"
    :class="{ 'rounded outline outline-4 outline-cyan-200 bg-cyan-200 dark:outline-cyan-100 dark:bg-cyan-100' : isSelected }"
    @click="onClick">
    <img :src="props.imagePath" :alt="props.trackName" class="w-full" />
  </div>
</template>

<style>
</style>
