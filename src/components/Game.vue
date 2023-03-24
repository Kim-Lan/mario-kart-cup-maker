<script setup>

const props = defineProps({
  gameName: String,
  cups: Array
});
</script>

<template>
  <div>
    <h2>{{ props.gameName }}</h2>
    <slot></slot>
  </div>
</template>
