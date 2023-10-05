import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Tab 1',
      component: () => import('./../containers/Tab1.vue'),
    },
    {
        path: '/tab2',
        name: 'Tab 2',
        component: () => import('./../containers/Tab2.vue'),
    },
    {
        path: '/tab3',
        name: 'Tab 3',
        component: () => import('./../containers/Tab3.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('./../containers/NotFound.vue'),
    }

  ],
})