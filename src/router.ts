import { createRouter, createWebHashHistory } from 'vue-router';

import WidgetContainer from './components/WidgetContainer.vue';
import WidgetSettings from './components/WidgetSettings.vue';

const router = createRouter({ // eslint-disable-line new-cap
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'WidgetContainer',
      component: WidgetContainer,
    },
    {
      path: '/settings',
      name: 'WidgetSettings',
      component: WidgetSettings,
    },
  ],
});

export default router;
