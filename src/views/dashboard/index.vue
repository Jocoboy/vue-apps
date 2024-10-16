<template>
    首页
</template>
<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

import api from '@/api';

api.test.getMapInfo().then((res) => { });
</script>
<style lang='scss'' scoped></style>