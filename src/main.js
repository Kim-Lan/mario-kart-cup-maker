/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMoon, faSun, faBars, faXmark);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
