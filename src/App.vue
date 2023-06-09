<script setup>
import { ref, reactive } from 'vue';
import draggable from 'vuedraggable';
import { marioKartGames } from './tracks.js';
import DarkModeToggle from './components/DarkModeToggle.vue';
import Game from './components/Game.vue';
import Cup from './components/Cup.vue';
import Track from './components/Track.vue';
import { selectedTracks } from './stores.js'

const activeGame = reactive({
  gameName: '',
  cups: []
});

const isSidebarOpen = ref(false);

function selectTab(game, event) {
  const target = event.currentTarget;
  const isActive = target.classList.contains('active');
  activeGame.gameName = '';
  activeGame.cups = [];

  const tabItems = document.getElementsByClassName('tab-item');
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove('active');
  }

  const tabContent = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add('hidden');
  }

  if (!isActive)
  {
    event.currentTarget.classList.add('active');
    activeGame.gameName = game.gameName;
    activeGame.cups = game.cups;
    document.getElementById(activeGame.gameName).classList.remove('hidden');
  }
  else
  {
    document.getElementById('empty-content').classList.remove('hidden');
  }
}

function getPath(gameName, cupIndex, cupName, track) {
  let gameIndex = 0;
  for (let i = 0; i < marioKartGames.length; i++) {
    if (marioKartGames[i].gameName === gameName)
      gameIndex = i;
  }
  let path_gameIndex = (gameIndex + 1).toString().padStart(2, '0');

  let path_cupIndex = (cupIndex + 1).toString().padStart(2, '0');

  return `assets/${path_gameIndex}.${gameName.replaceAll(':', '')}`
    + `/${path_cupIndex}.${cupName}`
    + `/${track.replaceAll(' ', '_').replaceAll('-', '_').replaceAll('.', '')}.png`;
}

</script>

<template>
  <div
    class="pl-4 pr-2 md:px-8 md:py-4 flex flex-col bg-white text-gray-900 dark:bg-neutral-800 dark:text-neutral-100 min-h-screen">
    <div class="navbar md:mb-8 pr-0">
      <div class="flex-1 md:navbar-start">
        <h1 class="text-2xl md:text-3xl font-bold">Mario Kart Cup Maker</h1>
      </div>
      <div class="flex-none">
        <label class="btn btn-circle btn-ghost swap swap-rotate">
          <input type="checkbox" v-model="isSidebarOpen" />
          <font-awesome-icon :icon="['fas', 'bars']" size="xl" class="swap-off" />
          <font-awesome-icon :icon="['fas', 'xmark']" size="xl" class="swap-on" />
        </label>
      </div>
    </div>

    <div class="flex flex-row-reverse">
      <div :class="{ block: isSidebarOpen, hidden: !isSidebarOpen }" class="flex-none w-full lg:w-1/4 mx-4 px-4">
        <DarkModeToggle />
      </div>

      <div class="flex-1">
        <div class="flex flex-col p-5 mx-10 mb-8 border-2 border-gray-900 dark:border-neutral-100 rounded-lg">
          <div>
            <input type="text" placeholder="My Custom Cup" class="input bg-transparent input-bordered rounded" />
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

        <div class="flex flex-row border">
          <div class="tab-group w-1/5 flex flex-col flex-auto">
            <button v-for="game in marioKartGames"
              class="tab-item p-2 btn btn-ghost lg:text-base sm:text-xs rounded-none no-animation"
              @click="selectTab(game, $event)">
              {{ game.gameName }}
            </button>
          </div>
          <div class="w-full tab-content flex-auto py-3 px-5 border-l" id="empty-content"></div>
          <Game v-for="game in marioKartGames" :id="game.gameName">
            <Cup v-for="(cup, index) in game.cups" :cup-name="cup.cupName" :key="cup.cupName">
              <Track v-for="track in cup.tracks" :key="track" :game-name="game.gameName" :cup-name="cup.cupName"
                :track-name="track" :image-path="getPath(game.gameName, index, cup.cupName, track)" />
            </Cup>
          </Game>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>
.active {
  background-color: #b91c1c;
  color: #f5f5f5;
}

.active:hover {
  background-color: #dc2626;
}

#track-display div:first-child div {
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
}
</style>
