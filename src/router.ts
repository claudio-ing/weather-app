import { createRouter, createWebHistory } from 'vue-router';

import WidgetContainer from './components/WidgetContainer.vue';
import WidgetSettings from './components/WidgetSettings.vue';

const router = createRouter({ // eslint-disable-line new-cap
  history: createWebHistory(process.env.BASE_URL),
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
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
