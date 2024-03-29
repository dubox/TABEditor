<script setup lang="ts">
import { ref, type PropType, computed, watch, watchEffect, reactive, onMounted, onUpdated, inject, type Ref } from 'vue';

import TabNoteCell from './TabNoteCell.vue';
import { useScoreStore } from '@/stores/score';
import Strum from './Strum.vue';
import LineV from '../base/LineV.vue';
const score = useScoreStore();

import type Note from '@/stores/Note';
import type { Keys } from '@/common/types';

const props = defineProps({
  index: { type: Number, default: -1 },
});
const keys = <Keys>inject('keys');
const lineHeight = <Ref>inject('lineHeight');
const cell = computed(() => {
  let cell = score.getCellProxy(keys);
  if(props.index > -1)
    return cell.appoggiatura[props.index];
  return cell;
});

const strum = computed(()=>{
  const cellV = cell.value;
  let karr = <number[]><unknown>Object.keys(cellV.noteHead);
    let lh = lineHeight.value;
    let min = Math.min(...karr) ,max = Math.max(...karr);
    return {
      height: (max-min + 1) * lh - lh/2 ,
      pos:min,
      top:min * lh - lh/2,
      dir:cellV.noteHead[min] == '>'?'up':'down',
    };
});

const style1 = computed(()=>{
  return `line-height:${lineHeight.value}px;`;
});

watch(() => cell.value.noteHead,
  (newValue, oldValue) => {
    for(let i in newValue)
      if(newValue[i] === '')
        delete cell.value.noteHead[i];
  },
  { deep: true })

</script>

<template>
  <div class="tab-note-head relative grid grid-cols-1" :style="style1">
    <LineV v-if="index > -1 && cell.noteType == 'broken'" :width="1" :height="strum.height" :style="`top:${strum.top}px;`" class=" note-stem absolute left-1/2 -translate-x-1/2"></LineV>
    <TabNoteCell v-for="i in 6" :key="i" :name="''" :edit="true" :type="cell.noteType" :lineHeight="lineHeight"
      v-model:value="cell.noteHead[i]">
      <Strum v-if="strum.pos == i && cell.noteType != 'broken'" :type="cell.noteType" :direction="strum.dir" :height="strum.height" class="strum absolute top-1/4 left-1/2 -translate-x-1/2"></Strum>
      
    </TabNoteCell>
    <slot></slot>
  </div>
</template>

<style scoped></style>
