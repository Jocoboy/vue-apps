<template>
  <div>hello {{ num }}</div>
  <button @click="click">click</button>
</template>

<script setup>
import { ref } from 'vue';

let num = ref(0);

function click() {
  num.value++;
}
</script>

<style scoped></style>
