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
  // console.log('toggle select');
  if (isSelected.value) {
    // console.log('deselecting');
    for (let i = 0; i < selectedTracks.length; i++) {
      if (selectedTracks[i] !== null && selectedTracks[i].trackName === props.trackName) {
        //selectedTracks[i] = null;
        selectedTracks[i] = {};
        break;
      }
    }
    trackCount.value--;
  } else {
    // console.log('selecting');
    for (let i = 0; i < selectedTracks.length; i++) {
      if (!selectedTracks[i] || Object.keys(selectedTracks[i]).length === 0) {
        // console.log('null track');
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
  // console.log('new track count ' + trackCount.value);
}

</script>

<template>
  <div
    class="flex-1 drop-shadow cursor-pointer"
    :class="{ 'rounded outline outline-4 outline-cyan-200 bg-cyan-200 dark:outline-cyan-100 dark:bg-cyan-100' : isSelected }"
    @click="onClick">
    <img :src="props.imagePath" :alt="props.trackName" class="w-full" />
  </div>
  
  <!-- <div class="flex-1 rounded-md overflow-hidden shadow-md shadow-neutral-300 dark:shadow-neutral-900 cursor-pointer"
    :class="{
      'outline outline-4 outline-cyan-200 dark:outline-cyan-100': isSelected,
      'bg-red-700 text-neutral-100 hover:bg-red-600': props.cupName === 'Mushroom Cup' && !props.isDisplay,
      'bg-green-600 text-neutral-100 hover:bg-green-400': props.cupName === 'Flower Cup' && !props.isDisplay,
      'bg-yellow-400 text-stone-800 hover:bg-yellow-300': props.cupName === 'Star Cup' && !props.isDisplay,
      'bg-violet-700 text-neutral-100 hover:bg-violet-500': props.cupName === 'Special Cup' && !props.isDisplay,
      'bg-yellow-200 text-stone-800 hover:bg-yellow-100': props.cupName === 'Thunder Cup' && !props.isDisplay
    }" @click="onClick">
    <img :src="props.imagePath" class="w-full" />
    <h4 class="lg:mx-3 mx-1 text-xs lg:text-base font-semibold" :class="{
      'text-center my-1 lg:my-2': !props.isDisplay,
      'text-left mt-1 lg:mt-2': props.isDisplay
    }">{{ props.trackName }}</h4>
    <div v-if="props.isDisplay" class="hidden sm:block mb-2 lg:mx-3 mx-1 text-xs text-left">{{ props.gameName }}</div>
  </div> -->
</template>

<style>
</style>
