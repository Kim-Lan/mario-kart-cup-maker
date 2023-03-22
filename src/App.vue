<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
const selectedTracks = ref([]);

const superMarioKart = [
  { cupName: 'Mushroom Cup',
    tracks: ['Mario Circuit 1', 'Donut Plains 1', 'Ghost Valley 1', 'Bowser Castle 1', 'Mario Circuit 2'] },
  { cupName: 'Flower Cup',
    tracks: ['Choco Island 1', 'Ghost Valley 2', 'Donut Plains 2', 'Bowser Castle 2', 'Mario Circuit 3'] },
  { cupName: 'Star Cup',
    tracks: ['Koopa Beach 1', 'Choco Island 2', 'Vanilla Lake 1', 'Bowser Castle 3', 'Mario Circuit 4'] },
  { cupName: 'Special Cup',
    tracks: ['Donut Plains 3', 'Koopa Beach 2', 'Ghost Valley 3', 'Vanilla Lake 2', 'Rainbow Road'] }
];

const marioKart64 = [
  { cupName: 'Mushroom Cup',
    tracks: ['Luigi Raceway', 'Moo Moo Farm', 'Koopa Troopa Beach', 'Kalimari Desert'] },
  { cupName: 'Flower Cup',
    tracks: ['Toad\'s Turnpike', 'Frappe Snowland', 'Choco Mountain', 'Mario Raceway'] },
  { cupName: 'Star Cup',
    tracks: ['Wario Stadium', 'Sherbet Land', 'Royal Raceway', 'Bowser\'s Castle'] },
  { cupName: 'Special Cup',
    tracks: ['D.K.\'s Jungle Parkway', 'Yoshi Valley', 'Banshee Boardwalk', 'Rainbow Road'] }
];

const marioKartSuperCircuit = [
  { cupName: 'Mushroom Cup',
    tracks: ['Peach Circuit', 'Shy Guy Beach', 'Riverside Park', 'Bowser Castle 1'] },
  { cupName: 'Flower Cup',
    tracks: ['Mario Circuit', 'Boo Lake', 'Cheese Land', 'Bowser Castle 2'] },
  { cupName: 'Thunder Cup',
    tracks: ['Luigi Circuit', 'Sky Garden', 'Cheep-Cheep Island', 'Sunset Wilds'] },
  { cupName: 'Star Cup',
    tracks: ['Snow Land', 'Ribbon Road', 'Yoshi Desert', 'Bowser Castle 3'] },
  { cupName: 'Special Cup',
    tracks: ['Lakeside Park', 'Broken Pier', 'Bowser Castle 4', 'Rainbow Road'] }
];

const marioKartDoubleDash = [
  { cupName: 'Mushroom Cup',
    tracks: ['Luigi Circuit', 'Peach Beach', 'Baby Park', 'Dry Dry Desert'] },
  { cupName: 'Flower Cup',
    tracks: ['Mushroom Bridge', 'Mario Circuit', 'Daisy Cruiser', 'Waluigi Stadium'] },
  { cupName: 'Star Cup',
    tracks: ['Sherbet Land', 'Mushroom City', 'Yoshi Circuit', 'DK Mountain'] },
  { cupName: 'Special Cup',
    tracks: ['Wario Colosseum', 'Dino Dino Jungle', 'Bowser\'s Castle', 'Rainbow Road'] }
];

const marioKartDS = [
  { cupName: 'Mushroom Cup',
    tracks: ['Figure-8 Circuit', 'Yoshi Falls', 'Cheep Cheep Beach', 'Luigi\'s Mansion'] },
  { cupName: 'Flower Cup',
    tracks: ['Desert Hills', 'Delfino Square', 'Waluigi Pinball', 'Shroom Ridge'] },
  { cupName: 'Star Cup',
    tracks: ['DK Pass', 'Tick-Tock Clock', 'Mario Circuit', 'Airship Fortress'] },
  { cupName: 'Special Cup',
    tracks: ['Wario Stadium', 'Peach Gardens', 'Bowser Castle', 'Rainbow Road'] }
];

const marioKartWii = [
  { cupName: 'Mushroom Cup',
    tracks: ['Luigi Circuit', 'Moo Moo Meadows', 'Mushroom Gorge', 'Toad\'s Factory'] },
  { cupName: 'Flower Cup',
    tracks: ['Mario Circuit', 'Coconut Mall', 'DK Summit', 'Wario\'s Gold Mine'] },
  { cupName: 'Star Cup',
    tracks: ['Daisy Circuit', 'Koopa Cape', 'Maple Treeway', 'Grumble Volcano'] },
  { cupName: 'Special Cup',
    tracks: ['Dry Dry Ruins', 'Moonview Highway', 'Bowser\'s Castle', 'Rainbow Road'] }
];

const marioKart7 = [
  { cupName: 'Mushroom Cup',
    tracks: ['Toad Circuit', 'Daisy Hills', 'Cheep Cheep Lagoon', 'Shy Guy Bazaar'] },
  { cupName: 'Flower Cup',
    tracks: ['Wuhu Loop', 'Mario Circuit', 'Music Park', 'Rock Rock Mountain'] },
  { cupName: 'Star Cup',
    tracks: ['Piranha Plant Slide', 'Wario Shipyard', 'Neo Bowser City', 'Maka Wuhu'] },
  { cupName: 'Special Cup',
    tracks: ['DK Jungle', 'Rosalina\'s Ice World', 'Bowser\'s Castle', 'Rainbow Road'] }
];

const marioKart8 = [
  { cupName: 'Mushroom Cup',
    tracks: ['Mario Kart Stadium', 'Water Park', 'Sweet Sweet Canyon', 'Thwomp Ruins'] },
  { cupName: 'Flower Cup',
    tracks: ['Mario Circuit', 'Toad Harbor', 'Twisted Mansion', 'Shy Guy Falls'] },
  { cupName: 'Star Cup',
    tracks: ['Sunshine Airport', 'Dolphin Shoals', 'Electrodome', 'Mount Wario'] },
  { cupName: 'Special Cup',
    tracks: ['Cloudtop Cruise', 'Bone-Dry Dunes', 'Bowser\'s Castle', 'Rainbow Road'] }
];
</script>

<template>
  <v-app>
    <v-main>
      <v-text-field label="My Custom Cup"></v-text-field>

      <v-expansion-panels>
        <v-expansion-panel title="Super Mario Kart">
          <v-expansion-panel-text></v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-main>
  </v-app>
</template>


