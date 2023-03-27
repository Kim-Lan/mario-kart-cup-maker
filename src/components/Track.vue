<script setup>
import { ref } from 'vue';
import { trackCount, selectedTracks } from '../stores.js';

const props = defineProps({
  gameName: String,
  cupName: String,
  trackName: String,
  imagePath: String
});

const isSelected = ref(false);

function onClick() {
  console.log('clicked ' + props.trackName);
  console.log('track count ' + trackCount.value);
  if (isSelected.value || trackCount.value < 4) {
    toggleSelect();
  }
}

function toggleSelect() {
  console.log('toggle select');
  if (isSelected.value) {
    console.log('deselecting');
    for (let i = 0; i < selectedTracks.length; i++) {
      if (selectedTracks[i] !== null && selectedTracks[i].trackName === props.trackName) {
        selectedTracks[i] = null;
        break;
      }
    }
    trackCount.value--;
  } else {
    console.log('selecting');
    for (let i = 0; i < selectedTracks.length; i++) {
      if (!selectedTracks[i]) {
        console.log('null track');
        selectedTracks[i] = props;
        break;
      }
    }
    trackCount.value++;
  }
  isSelected.value = !isSelected.value;
  console.log('new track count ' + trackCount.value);
}

</script>

<template>
  <div class="flex-auto rounded-lg overflow-hidden shadow-md shadow-neutral-300 dark:shadow-neutral-900" :class="{
    'outline outline-4 outline-cyan-200 dark:outline-cyan-100': isSelected,
    'bg-red-700 text-neutral-100 hover:bg-red-600': props.cupName === 'Mushroom Cup',
    'bg-green-600 text-neutral-100 hover:bg-green-400': props.cupName === 'Flower Cup',
    'bg-yellow-400 text-stone-800 hover:bg-yellow-300': props.cupName === 'Star Cup',
    'bg-violet-700 text-neutral-100 hover:bg-violet-500': props.cupName === 'Special Cup',
    'bg-yellow-200 text-stone-800 hover:bg-yellow-100': props.cupName === 'Thunder Cup'
  }" @click="onClick">
    <img :src="props.imagePath" class="w-full pointer-events-none" />
    <h4 class="mx-3 my-2 font-semibold pointer-events-none">{{ props.trackName }}</h4>
  </div>
</template>

<style>
</style>
