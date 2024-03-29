<script setup lang="ts">
import { computed, onMounted, onUpdated, provide, reactive, ref } from 'vue';

import TabNote from '../tab/TabNote.vue';
import TabBarLine from '../tab/TabBarLine.vue';
import JianNote from '../jian/JianNote.vue';
import LyricNote from '../lyric/LyricNote.vue';
import { useScoreStore } from '@/stores/score';
import type Note from '@/stores/Note';
import { useRuntimeStore } from '@/stores/runtime';
import type { Keys } from '@/common/types';
const score = useScoreStore();
const RT = useRuntimeStore();
// const resizeObserver = new ResizeObserver((entries) => {console.log('resizeObserver',entries)});

const props = defineProps({
  rowKey: { type: Number, default: -1 },
  trackKey: { type: Number, default: -1 },
  cellKey: { type: Number, default: -1 },
});

provide('keys', props);
const keys = <Keys>props;

  
// const track = score.getTrack(props.rowKey,props.trackKey);
const cell =  computed(()=>score.getCellProxy(keys));
  // if(props.cellKey == 0)
  // console.log(cell,props.rowKey, props.trackKey , props.cellKey,cell)

  const el = ref();
// cell.value.cellEl = el;


const width = computed(()=>{
  const cellV = cell.value;
  let duration = cellV.duration;
  let d = 1/duration;
  let dot = cellV.dot || 0;
  if(dot && duration>=4)//大于4分音符的音符、休止符，不加附点 // && cellV.noteType!='rest'
    for(let i = dot;i>0;i--)d += 1/(duration * Math.pow(2,i));
  // cellV.realDuration = d || 0;
  return 128*2 * d;
});
const style1 = computed(()=>{
  const cellV = cell.value;
  // console.log(keys.rowKey ,keys.trackKey ,keys.cellKey,'style',width.value,cellV.cellWidth)
  // return `width:${props.width}px;flex-grow:${props.width};flex-shrink:${1};`;
  let s = `width:${width.value}px;flex-grow:0;flex-shrink:1;`;
  if(cellV.height)s += `height:${cellV.height}px;`;
  return s;
});
onMounted(() => {
  cell.value.cellEl=el;
});
onUpdated(() => {
  cell.value.cellEl=el;
});

const selected = computed(()=>RT.selectedCell.rowKey == keys.rowKey && RT.selectedCell.trackKey == keys.trackKey && RT.selectedCell.cellKey == keys.cellKey);

function onClick(e: MouseEvent) {
  RT.selectedCell = keys;
}

function push(type){
  score.pushCell(type,keys.rowKey,keys.trackKey,keys.cellKey);
}

function unshift(type){
  score.unshiftCell(type,keys.rowKey,keys.trackKey,keys.cellKey);
}
</script>

<template>
  <div ref="el" @click="onClick" :class="`cell relative flex items-center gap-0 h-full self-start ${selected?'outline-dashed':''} hover:outline-dashed outline-slate-400 outline-1`" :style="style1">
    <div class="prev-handle absolute -left-[31px] h-full w-0 hidden">
      <div class=" shrink-0 h-full w-4 bg-white opacity-80 shadow-sm text-lg content-center text-center border border-solid rounded-md cursor-pointer">〡</div>
      <div class=" shrink-0 h-full w-4 bg-white opacity-80 shadow-sm text-lg content-center text-center border border-solid rounded-md cursor-pointer">♪</div>
    </div>
    
    <template v-if="cell.type == 'barLine'">
      <TabBarLine v-if="cell.trackType == 'tab'" class=""></TabBarLine>
    </template>
    <template v-if="cell.type == 'note'">
      <TabNote v-if="cell.trackType == 'tab'" :lineHeight="10"></TabNote>
      <JianNote v-if="cell.trackType == 'jian'" ></JianNote>
      <LyricNote v-if="cell.trackType == 'lyric'" ></LyricNote>
    </template>
    <div class="back-handle  absolute -right-[31px] h-full hidden">
      <div @click.stop="push('note')" class=" shrink-0 h-full w-4 bg-white opacity-80 shadow-sm text-lg content-center text-center border border-solid rounded-md cursor-pointer">♪</div>
      <div @click.stop="push('barLine')" class=" shrink-0 h-full w-4 bg-white opacity-80 shadow-sm text-lg content-center text-center border border-solid rounded-md cursor-pointer">〡</div>
    </div>
  </div>
</template>

<style scoped>
.cell:hover .prev-handle,
.cell:hover .back-handle {
  display: flex;
  z-index: 1;
}
</style>
