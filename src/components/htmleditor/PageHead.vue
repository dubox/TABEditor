<script setup lang="ts">
import { ref, provide, computed } from 'vue';
const props = defineProps({
  height:{
    type:Number,
    default:200,
  }
});

// provide('Page', attrs);
</script>

<template>
  <div class=" relative w-full bg-slate-300" :style="{height: `${height}px`}">

  </div>
</template>

<style scoped></style>
