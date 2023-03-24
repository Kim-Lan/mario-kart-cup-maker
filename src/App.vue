<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { marioKartGames } from './tracks.js';
import Game from './components/Game.vue';
import Cup from './components/Cup.vue';
import Track from './components/Track.vue';

const selectedTracks = ref([]);


</script>

<template>
  <main>
    <div id="topbar" class="w-full">
      <h1 class="text-3xl font-bold">Mario Kart Cup Maker</h1>
    </div>
    <div id="custom-cup" class="w-full">
      <v-text-field label="My Custom Cup"></v-text-field>
    </div>
    <div id="index">
      <Game v-for="game in marioKartGames" :game-name=game.gameName>
        <Cup v-for="cup in game.cups" :cup-name="cup.cupName">
          <Track v-for="track in cup.tracks" :track-name="track" />
        </Cup>
      </Game>
    </div>

  </main>
</template>

<style>
main {
  padding: 20px 30px;
}
</style>
