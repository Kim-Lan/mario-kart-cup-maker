<script setup>

const props = defineProps({
  trackName: String,
  imagePath: String
});
</script>

<template>
  <div>
    <h4>{{ props.trackName }}</h4>
  </div>
</template>
