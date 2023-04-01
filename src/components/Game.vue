<script setup>
const props = defineProps({
  gameName: String
});
</script>

<template>
  <div class="w-full tab-content flex-auto py-3 px-5 border-l hidden">
    <div>
      <h2 class="text-xl font-bold uppercase">{{ props.gameName }}</h2>
    </div>
    <slot></slot>
  </div>
</template>
