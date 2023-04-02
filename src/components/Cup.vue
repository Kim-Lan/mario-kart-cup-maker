<script setup>
const props = defineProps({
  cupName: String,
  tracks: Array
});

</script>

<template>
  <div class="p-2">
    <h3 class="font-semibold text-l mb-2">{{ props.cupName }}</h3>
    <div class="flex flex-row flex-wrap gap-4">
      <slot></slot>
    </div>
  </div>
</template>
