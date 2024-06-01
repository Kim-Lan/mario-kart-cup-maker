<script setup>
import { ref, reactive } from 'vue';
import draggable from 'vuedraggable';
import { Cups } from './cups.js';
import DarkModeToggle from './components/DarkModeToggle.vue';
import Cup from './components/Cup.vue';
import CupIcon from './components/CupIcon.vue';
import Track from './components/Track.vue';
import { selectedTracks, selectedIcon } from './stores.js'

const cupIcons = [];

function onIconClicked() {
  for (const icon of cupIcons) {
    icon.setSelected(false);
    if (icon.getImagePath() === selectedIcon.value) {
      icon.setSelected(true);
    }
  }
}

function getCupPath(cupIndex, cupName) {
  let path_cupIndex = (cupIndex + 1).toString().padStart(2, '0');

  return `assets/09.Mario Kart 8 Deluxe`
    + `/${path_cupIndex}.${cupName}`
    + `/${cupName.replaceAll(' ', '_')}.png`;
}

function getTrackPath(cupIndex, cupName, track) {
  let path_cupIndex = (cupIndex + 1).toString().padStart(2, '0');

  return `assets/09.Mario Kart 8 Deluxe`
    + `/${path_cupIndex}.${cupName}`
    + `/${track.replaceAll(' ', '_').replaceAll(/[()]/g, '')}.png`;
}

</script>

<template>
  <div class="max-w-3xl mx-auto flex flex-col text-gray-900 dark:text-neutral-100 min-h-screen">
    <div class="navbar md:mb-8 pr-0">
      <div class="flex-1 md:navbar-start">
        <h1 class="text-2xl md:text-3xl font-bold">Mario Kart 8 DX Cup Maker</h1>
      </div>
      <div class="flex-none">
        <DarkModeToggle />
      </div>
    </div>

    <div class="flex flex-row-reverse">
      <div class="flex-1">
        <div class="flex flex-col p-5 mx-10 mb-8 border-2 border-gray-900 dark:border-neutral-100 rounded-lg">
          <div class="flex flex-row items-center">
            <CupIcon is-display :image-path="selectedIcon" />
            <input type="text" placeholder="My Custom Cup" class="input bg-transparent input-bordered rounded font-bold text-xl" />
          </div>
          <div class="divider my-2"></div>
          <draggable id="track-display" :list="selectedTracks" item-key="id"
            class="flex flex-row flex-wrap justify-between gap-4">
            <template #item="{ element }">
              <div class="flex-1 border border-gray-100 dark:border-zinc-700 rounded-md">
                <Track is-display v-if="element !== null" v-bind="element" class="w-full h-full" />
              </div>
            </template>
          </draggable>
        </div>
        <div class="pl-8">
          <p>Click to choose an icon and courses for your custom cup!</p>
        </div>

        <div class="flex flex-col">
          <Cup v-for="(cup, index) in Cups" :cup-name="cup.cupName" :id="cup.cupName" :key="cup.cupName">
            <CupIcon ref="cupIcons" :image-path="getCupPath(index, cup.cupName)" @icon-clicked="onIconClicked" />
            <Track v-for="track in cup.tracks" :key="track" :game-name="'Mario Kart 8 Deluxe'" :cup-name="cup.cupName"
              :track-name="track" :image-path="getTrackPath(index, cup.cupName, track)" />
          </Cup>
        </div>
      </div>
    </div>



  </div>
</template>

<style>
body {
  @apply bg-gray-100;
  @apply dark:bg-neutral-800
}

.active {
  background-color: #b91c1c;
  color: #f5f5f5;
}

.active:hover {
  background-color: #dc2626;
}

/* #track-display div:first-child div {
  background-color: #b91c1c;
  color: #f5f5f5;
}

#track-display div:nth-child(2) div {
  background-color: #16a34a;
  color: #f5f5f5;
}

#track-display div:nth-child(3) div {
  background-color: #facc15;
  color: #292524;
}

#track-display div:nth-child(4) div {
  background-color: #6d28d9;
  color: #f5f5f5;
} */
</style>
