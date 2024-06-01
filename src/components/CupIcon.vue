<script setup lang="ts">
import { ref, computed, emit } from 'vue';
import { selectedIcon } from '../stores.js';

const props = defineProps({
  cupName: String,
  imagePath: String,
  isDisplay: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['iconClicked']);

defineExpose({ setSelected, getImagePath, getCupName })

// const isSelected = computed(() => {
//   return !props.isDisplay && props.imagePath === selectedIcon;
// });
const isSelected = ref(false);

function onClick() {
  if (!props.isDisplay) {
    if (!isSelected.value) {
      selectedIcon.value = {
        cupName: props.cupName,
        imagePath: props.imagePath,
      };
    } else {
      selectedIcon.value = {};
    }
    emit('iconClicked');
  }
}

function setSelected(value) {
  isSelected.value = value;
}

function getImagePath() {
  return props.imagePath;
}

function getCupName() {
  return props.cupName;
}
</script>

<template>
  <div class="flex-shrink flex justify-center">
    <img
      class="w-3/4 cursor-pointer rounded-full"
      :class="{ 'outline outline-4 outline-cyan-200 dark:outline-cyan-100' : isSelected }"
      :src="props.imagePath"
      @click.prevent="onClick"
    />
  </div>
</template>
