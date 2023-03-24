<script setup>

const props = defineProps({
  gameName: String,
  cups: Array
});
</script>

<template>
  <div class="my-3">
    <h2 class="font-bold text-xl">{{ props.gameName }}</h2>
    <div class="px-3">
      <slot></slot>
    </div>
  </div>
</template>
