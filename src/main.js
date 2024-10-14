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

// pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// 持久化存储
import { createPersistedState } from 'pinia-plugin-persistedstate';
pinia.use(
  createPersistedState({
    auto: true, // 启用所有 Store 默认持久化
  }),
);
// 重写 $reset 方法 => 解决组合式api中无法使用问题
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$patch(initialState);
  };
});

app.use(pinia);
// store
import store from '@/stores';
app.config.globalProperties.$store = store;


app.mount('#app');
