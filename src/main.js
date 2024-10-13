import { createApp } from 'vue';
import '@/styles/index.scss';
import App from './App.vue';
import router from '@/router';
import { filters } from '@/utils/filter.js';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$filters = filters;

app.mount('#app');
