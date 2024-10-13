<template>
  <p>{{ num }}</p>
  <button @click="increment">按钮</button>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
</template>


<script setup>
import useCounter from './hooks/useCounter';

const { num, doubles, increment } = useCounter();

</script>

<style scoped></style>
