import { createApp } from 'vue';
import App from './App.vue';

// global sass
import '@/styles/index.scss';


const app = createApp(App);

// vue-router
import router from '@/router';
app.use(router);

// global filters
import { filters } from '@/utils/filter.js';
app.config.globalProperties.$filters = filters;

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);
// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
