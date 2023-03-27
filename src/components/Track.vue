<script setup>

const props = defineProps({
  cupName: String,
  trackName: String,
  imagePath: String
});
</script>

<template>
  <div class="flex-auto w-1/4 rounded-lg overflow-hidden" :class="{
    'bg-red-800 text-neutral-100': props.cupName === 'Mushroom Cup',
    'bg-green-600 text-neutral-100': props.cupName === 'Flower Cup',
    'bg-yellow-400 text-stone-800': props.cupName === 'Star Cup',
    'bg-violet-700 text-neutral-100': props.cupName === 'Special Cup',
    'bg-yellow-200 text-stone-800': props.cupName === 'Thunder Cup'
  }">
    <img :src="props.imagePath" class="w-full" />
    <h4 class="mx-3 my-2 font-semibold">{{ props.trackName }}</h4>
  </div>
</template>

<style>
</style>
