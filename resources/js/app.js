import './bootstrap';
import { createApp } from 'vue';
import router from './router.js';

import App from './layouts/App.vue';
import store from './store' //Just folder name. Its fetch by default index.js

createApp(App)
.use(router)
.use(store)
.mount('#app');