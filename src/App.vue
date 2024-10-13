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
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
</template>


<script setup>
import { getCurrentInstance } from 'vue';
import useCounter from './hooks/useCounter';
import useSubmit from './hooks/useSubmit';


const { num, doubles, increment } = useCounter();

const { sexList, submitOk, submitFail, } = useSubmit();


async function handleClick() {
  submitOk('保存成功');
  submitFail('操作失败');
}

</script>

<style scoped></style>
