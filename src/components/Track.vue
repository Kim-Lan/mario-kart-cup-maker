<script setup>

const props = defineProps({
  trackName: String,
  imagePath: String
});
</script>

<template>
  <div class="flex-auto w-1/4">
    <h4>{{ props.trackName }}</h4>
  </div>
</template>

<style>
</style>
