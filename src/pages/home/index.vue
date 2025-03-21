<template>
  <div>我是{{ name }}</div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  let name = ref('首页');
</script>
