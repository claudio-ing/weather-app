import { createApp } from 'vue';
import { createPinia } from 'pinia';
import loadFonts from './plugins/webfontloader';
import router from './router';
import vuetify from './plugins/vuetify';

import App from './App.vue';

const pinia = createPinia();
loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app');
