<script setup>
const props = defineProps({
  cupName: String,
  tracks: Array,
});

</script>

<template>
  <div class="w-full py-3 px-5 max-md:py-1 max-md:px-1">
    <div class="flex flex-row gap-4 max-md:gap-1 items-center">
      <slot></slot>
    </div>
  </div>
</template>
