import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {createPinia} from 'pinia';
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);


const pinia = createPinia();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).mount('#app');
