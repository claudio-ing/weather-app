// vuetify
import { createVuetify } from 'vuetify';
import { createApp } from 'vue';
import loadFonts from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import router from './router';

import App from './App.vue';

const vuetify = createVuetify();

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
