<script setup>

const props = defineProps({
  cupName: String,
  tracks: Array
});
</script>

<template>
  <div>
    <h3>{{ props.cupName }}</h3>
    <slot></slot>
  </div>
</template>
