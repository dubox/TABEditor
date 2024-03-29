<script setup lang="ts">

import LineH from '../base/LineH.vue';
import JianNoteCell from './JianNoteCell.vue';
import TrackCell from '../base/TrackCell.vue';
import { ref, type PropType, computed, watch, watchEffect, reactive, onMounted, inject } from 'vue';
import type Note from '@/stores/Note';
import { useScoreStore } from '@/stores/score';
import type { Keys } from '@/common/types';
const score = useScoreStore();
// const props = defineProps({
// });
const keys = <Keys>inject('keys');
const cell = computed(()=>score.getCellProxy(keys));


const width = computed(()=>{
  const cellV = cell.value;
  let w = 256/cellV.duration;
  for(let i = cellV.dot;i>0;i--)w += 256/(cellV.duration * Math.pow(2,i));
  return w;
});
</script>

<template>
  <!-- <TrackCell class=" jian-note h-full" :width="width"> -->
    <div class=" relative note-head grid grid-cols-1 h-full">
      <JianNoteCell v-model:value="cell.noteHead" ></JianNoteCell>
      
    </div>
    <!-- <TabNoteVCenter value="dot2"></TabNoteVCenter> -->


  <!-- </TrackCell> -->
</template>

<style scoped>
.tab-note {
  font-size: 0.75rem;
}
</style>
