import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './App/App.vue';
import CurrencyConverter from './App/CurrencyConverter.vue';

const routes = [
  { path: '/home', name: 'home', component: Main },
  { path: '/currency-converter', name: 'currency-converter', component: CurrencyConverter },
  { path: '/', redirect: '/home' },
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  }
});

export default router;
