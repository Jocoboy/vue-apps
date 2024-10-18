import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());

  const localEnabled = env.VITE_USE_MOCK || false;

  const prodEnabled = env.VITE_USE_MOCK || false;

  // console.log(env);

  return {
    base: './',
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock', //mock文件地址
        localEnabled: localEnabled, // 开发打包开关
        prodEnabled: prodEnabled, // 生产打包开关
        // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `import { setupProdMockServer } from '../mock-prod-server';
                    setupProdMockServer();`,
        logger: true, //是否在控制台显示请求日志
        supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
      }),
      ReactivityTransform(), // 启用响应式语法糖 $ref ...
      // 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
      AutoImport({
        imports: ['vue', 'vue-router'],
      }),
    ],
    // 反向代理解决跨域问题
    server: {
      // host: 'localhost', // 只能本地访问
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT),
      // 运行时自动打开浏览器
      // open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    resolve: {
      // 配置路径别名
      alias: [
        // @代替src
        {
          find: '@',
          replacement: path.resolve('./src'),
        },
      ],
    },
    // 引入scss全局变量
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/color.scss";@import "@/styles/theme.scss";`,
          api: 'modern-compiler', // or 'modern'
        },
      },
    },
  };
});
