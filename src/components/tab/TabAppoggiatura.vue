<script setup lang="ts">
import TabNoteCell from './TabNoteCell.vue';
import { useScoreStore } from '@/stores/score';
import TabNoteHead from './TabNoteHead.vue';
import Strum from './Strum.vue';
const score = useScoreStore();
import { ref, type PropType, computed, watch, watchEffect, reactive, onMounted, onUpdated, inject, type Ref } from 'vue';

import type Note from '@/stores/Note';
import type { Keys } from '@/common/types';

const props = defineProps({
  key: { type: Number, default: 0 },
});

const keys = <Keys>inject('keys');
const lineHeight = <Ref>inject('lineHeight');
const cell = computed(() => score.get(keys.rowKey, keys.trackKey, keys.cellKey));

const top = computed(() => {
  const appoggiaturas = cell.value.appoggiatura;
  let max = 0;
  for (let appoggiatura of appoggiaturas){
    let karr = <number[]><unknown>Object.keys(appoggiatura.noteHead);
    max = Math.max(...karr,max);
  }
  let lh = lineHeight.value;
  return max * lh;
});
</script>

<template>
  <div class="appoggiatura relative flex grow-0">
      <TabNoteHead v-for="(item ,index) in cell.appoggiatura" :key="index" :index="index" class=" relative tab-note max-w-full mr-1"></TabNoteHead>
      <svg height="3" :class="`absolute w-4/5 -left-px min-w-[10px]`" :style="`top:${top}px`">
        <g>
          <line stroke="black" stroke-width="1" x1="0" y1="0" x2="90" y2="0"></line>
          <line stroke="black" stroke-width="1" x1="0" y1="3" x2="90" y2="3"></line>
        </g>
      </svg>
      <svg height="13" width="13" :class="`absolute -right-0.5`" :style="`top:${top}px`">
        <g>
          <path stroke="black" stroke-width="1" d="M 3 3 A 8 10 0 0 0 13 10" fill="transparent"></path>
        </g>
      </svg>
  </div>
</template>

<style scoped></style>
