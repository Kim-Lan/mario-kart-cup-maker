<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { marioKartGames } from './tracks.js';
import DarkModeToggle from './components/DarkModeToggle.vue';
import Game from './components/Game.vue';
import Cup from './components/Cup.vue';
import Track from './components/Track.vue';

const selectedTracks = ref([]);
</script>

<template>
  <div class="px-8 py-4 flex flex-col bg-white text-gray-900 dark:bg-neutral-800 dark:text-neutral-100">
    <div class="navbar w-full mb-3">
      <div>
        <h1 class="text-3xl font-bold">Mario Kart Cup Maker</h1>
      </div>
      <DarkModeToggle />
    </div>
    <div class="w-full p-4">
      <input type="text" placeholder="My Custom Cup" class="input" />
    </div>
    <div>
      <Game v-for="game in marioKartGames" :game-name=game.gameName>
        <Cup v-for="cup in game.cups" :cup-name="cup.cupName">
          <Track v-for="track in cup.tracks" :track-name="track" />
        </Cup>
      </Game>
    </div>
  </div>
</template>
