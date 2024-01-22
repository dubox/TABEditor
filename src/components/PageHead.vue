<script setup lang="ts">
import type { PageProvider } from '@/common/types';
import { ref,inject, computed } from 'vue';
const props = defineProps<{
  height?:number,
}>();
const page = inject<PageProvider>('Page');

</script>

<template>
  <g>
    <rect :x="2" :height="height" :width="page?.contentWidth" class="fill-slate-600" ></rect>
  </g>
</template>

<style scoped>


</style>
