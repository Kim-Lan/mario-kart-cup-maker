// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMoon, faSun);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
