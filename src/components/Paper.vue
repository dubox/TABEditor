<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import { useRuntimeStore } from '@/stores/runtime';
import type { Keys } from '@/common/types';
const RT = useRuntimeStore();
const props = defineProps({
  paddingX: { type: Number, default: 20 },//左右边距
  paddingY: { type: Number, default: 20 },//上下边距
  width: { type: Number, default: 210 },//上下边距
  height: { type: Number, default: 297 },//上下边距
});

function onSelfClick() {
  RT.selectedCell = <Keys>{};
}
</script>

<template>
  <div @click.self="onSelfClick" class="paper" :style="`width: ${width}mm;height: ${height}mm;padding: ${paddingY}mm ${paddingX}mm;`">
    <div @click.self="onSelfClick" class="edit-area content relative w-full h-full">
      <div class="paper-indicator absolute bottom-full left-full w-10 h-10 border-gray-300 border-l border-b"></div>
      <div class="paper-indicator absolute bottom-full right-full w-10 h-10 border-gray-300 border-r border-b"></div>
    <slot></slot>
    <div class="paper-indicator absolute top-full left-full w-10 h-10 border-gray-300 border-l border-t"></div>
      <div class="paper-indicator absolute top-full right-full w-10 h-10 border-gray-300 border-r border-t"></div>
  </div>
    </div>
</template>

<style scoped>
.paper{
  background-color: #fcfcfc;
  z-index: 0;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
</style>
