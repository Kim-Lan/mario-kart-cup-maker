import { ref, reactive } from 'vue';

export const selectedTracks = reactive([{}, {}, {}, {}]);

export const selectedIcon = ref('');

export const trackCount = ref(0);
