![workflow on master branch](https://github.com/jocoboy/vue-apps/actions/workflows/vite-deploy.yml/badge.svg?branch=master)

# Vue-apps

## Environment

[Vue 3.x](https://cn.vuejs.org/guide/quick-start.html)

[Vue Router 4.x](https://router.vuejs.org/zh/guide/)

[Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html)

[Pinia](https://pinia.vuejs.org/zh/getting-started.html)
[Pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)

[Axios](https://www.axios-http.cn/docs/intro)

### Development Only

[Vite 5.x](https://cn.vitejs.dev/guide/)

[ESLint 9.x](https://eslint.nodejs.cn/docs/)

[Prettier](https://www.prettier.cn/docs/)

[Sass](https://www.sass.hk/guide/)

[Mock](http://mockjs.com/)
[Vite-plugin-mock](https://www.viterc.cn/en/vite-plugin-mock.html)

## VSC Settings

### Code Segment

```json
{
  "vue3": {
    "prefix": "vue3",
    "body": [
      "<template>",
      "$1",
      "</template>",
      "<script setup>",
      "import { getCurrentInstance } from 'vue';",
      "const { proxy } = getCurrentInstance();",
      "</script>",
      "<style lang='scss'' scoped></style>"
    ],
    "description": "vue3 setup"
  }
}
```
