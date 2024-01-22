<script setup lang="ts">
import { ref, provide, computed } from 'vue';
const props = defineProps();
const attrs = Object.assign({
  width: 1000,
  contentWidth: 800,
  head: true,
  marginX:ref(0),
}, props);
attrs.marginX = computed(() => (attrs.width - attrs.contentWidth)/2);

provide('Page', attrs);
</script>

<template>
</template>

<style scoped></style>
