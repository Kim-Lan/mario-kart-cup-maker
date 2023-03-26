<script setup>

const props = defineProps({
  gameName: String,
  cups: Array
});
</script>

<template>
  <div class="collapse collapse-arrow my-3">
    <input type="checkbox" class="peer" />
    <h2 class="collapse-title font-bold text-xl">{{ props.gameName }}</h2>
    <div class="collapse-content px-3">
      <slot></slot>
    </div>
  </div>
</template>
