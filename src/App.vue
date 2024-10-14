<template>
  <el-button @click="increment">按钮</el-button>
  <h1>Bank Account Balance : {{ $filters.currencyUSD(num) }}</h1>
  <el-row class="mb-4">
    <el-button @click="handleClick">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-icon :size="100" color="red">
    <Edit />
  </el-icon>

  <el-button @click="handleClick2">click api</el-button>
  <h1>{{ res }}</h1>

  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
</template>


<script setup>
import useCounter from '@/hooks/useCounter';
import useSubmit from '@/hooks/useSubmit';
// import { useCounterStore } from '@/stores/counter';

const { num, doubles, increment } = useCounter();

const { sexList, submitOk, submitFail, } = useSubmit();


async function handleClick() {
  submitOk('保存成功');
  submitFail('操作失败');
}

import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
let res = $ref(null);

async function handleClick2() {
  res = await proxy.$api.demo.time();
}

// const counter = useCounterStore()

let counter = proxy.$store.counter.useCounterStore();

counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()

</script>

<style scoped></style>
