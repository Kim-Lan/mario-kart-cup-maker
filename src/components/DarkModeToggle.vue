<script setup>
import { useColorMode } from '@vueuse/core';
const colorMode = useColorMode();
</script>

<template>
  <div class=" flex flex-row justify-self-center items-center justify-end gap-1">
    <font-awesome-icon :icon="['fas', 'sun']" class="fill-current w-5 h-5" />
    <input class="toggle" type="checkbox" v-model="colorMode" true-value="dark" false-value="light" />
    <font-awesome-icon :icon="['fas', 'moon']" class="fill-current w-5 h-5" />
  </div>
</template>
