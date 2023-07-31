// vuetify
import { createVuetify } from 'vuetify';
import { createApp } from 'vue';
import loadFonts from './plugins/webfontloader';

import App from './App.vue';

const vuetify = createVuetify();

loadFonts();

createApp(App)
  .use(vuetify)
  .mount('#app');
