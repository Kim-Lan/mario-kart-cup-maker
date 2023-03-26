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
    <div class="navbar mb-3">
      <div class="navbar-start">
        <h1 class="text-3xl font-bold">Mario Kart Cup Maker</h1>
      </div>
      <div class="navbar-end">
        <DarkModeToggle />
      </div>
    </div>
    <div class="flex flex-col p-5 mx-10 mb-8 border-2 border-gray-900 dark:border-neutral-100 rounded-lg">
      <div>
        <input type="text" placeholder="My Custom Cup" class="input bg-transparent input-bordered rounded" />
      </div>
      <div class="divider my-2"></div>
      <div class="flex flex-row justify-between">
        <div class="w-1/5 h-5 border border-gray-100 dark:border-zinc-700 rounded">

        </div>
        <div class="w-1/5 h-5 border border-gray-100 dark:border-zinc-700 rounded">

        </div>
        <div class="w-1/5 h-5 border border-gray-100 dark:border-zinc-700 rounded">

        </div>
        <div class="w-1/5 h-5 border border-gray-100 dark:border-zinc-700 rounded">

        </div>
      </div>
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
