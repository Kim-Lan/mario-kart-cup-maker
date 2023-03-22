<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { marioKartGames } from './tracks.js';
const selectedTracks = ref([]);


</script>

<template>
  <v-app>
    <v-main>
      <v-text-field label="My Custom Cup"></v-text-field>

      <v-expansion-panels>
        <v-expansion-panel v-for="game in marioKartGames">
          <v-expansion-panel-title>{{ game.gameName }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-expansion-panels>
              <v-expansion-panel v-for="cup in game.cups">
                <v-expansion-panel-title>{{ cup.cupName }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-list-item v-for="track in cup.tracks">{{ track }}</v-list-item>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-main>
  </v-app>
</template>


