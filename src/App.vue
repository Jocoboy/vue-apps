<template>
  <h1>Hello App!</h1>
  <!-- <h1>当前路由信息：{{ $route }}</h1> -->

  <!--使用 router-link 组件进行导航 -->
  <!--通过传递 `to` 来指定链接 -->
  <ol>
    <li><router-link to="/">Go to Home</router-link></li>
    <li><router-link to="/test">Go to Test</router-link></li>
  </ol>

  <hr />

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
</template>


<script setup>

</script>

<style scoped></style>
