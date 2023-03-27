<script setup>

const props = defineProps({
  cupName: String,
  trackName: String,
  imagePath: String
});

function onClick(event) {
  console.log(trackName + 'clicked');
};
</script>

<template>
  <div
    class="flex-auto w-1/4 rounded-lg overflow-hidden shadow-md shadow-neutral-300 dark:shadow-neutral-900 hover:scale-95"
    :class="{
      'bg-red-700 text-neutral-100 hover:bg-red-600': props.cupName === 'Mushroom Cup',
      'bg-green-600 text-neutral-100 hover:bg-green-400': props.cupName === 'Flower Cup',
      'bg-yellow-400 text-stone-800 hover:bg-yellow-300': props.cupName === 'Star Cup',
      'bg-violet-700 text-neutral-100 hover:bg-violet-500': props.cupName === 'Special Cup',
      'bg-yellow-200 text-stone-800 hover:bg-yellow-100': props.cupName === 'Thunder Cup'
    }" @click="onClick">
    <img :src="props.imagePath" class="w-full" />
    <h4 class="mx-3 my-2 font-semibold">{{ props.trackName }}</h4>
  </div>
</template>

<style>
</style>
