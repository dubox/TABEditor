<script setup lang="ts">
//竖线 小节线等
import LineV from '../base/LineV.vue';
import LineH from '../base/LineH.vue';
import TabRowBg from '../tab/TabRowBg.vue';
import TabNoteCell from './TabNoteCell.vue';
import TabNoteFlag from './TabNoteFlag.vue';
import TabSlur from './TabSlur.vue';
import Dot from '../base/Dot.vue';
import TabNoteVCenter from './TabNoteVCenter.vue';
import TrackCell from '../base/TrackCell.vue';
import Arc from '../base/Arc.vue';
import { useScoreStore } from '@/stores/score';
const score = useScoreStore();
import { ref, type PropType, computed, watch, watchEffect, reactive, onMounted, onUpdated, inject, provide, type Ref } from 'vue';
import TabRest from './TabRest.vue';
import type Note from '@/stores/Note';
import type { Keys } from '@/common/types';
import TabNoteHead from './TabNoteHead.vue';
import Chord from './Chord.vue';
import TabAppoggiatura from './TabAppoggiatura.vue';

const props = defineProps({
  onClick: { type: Function, default: (e: MouseEvent) => { } },
  lineHeight: { type: Number, default: 12 },
  growNshrink: { type: Boolean, default: false },
});
provide('lineHeight', ref(props.lineHeight));
const keys = <Keys>inject('keys');
const cell = computed(() => score.getCellProxy(keys));


function onClick(e: MouseEvent) {
  // alert(props.lineName)
  // props.onClick(e,e.target.dataset,props);
}


const stemHeight = computed(() => {
  const cellV = cell.value;
  let h = props.lineHeight * 6 + 20;
  if (['strum', 'arpeggio'].includes(cellV.noteType))
    return h - props.lineHeight * cellV.maxLine
  return h - props.lineHeight * cellV.minLine

});

const el = ref();
// cell.value.noteEl = el;

// const showTabBg = computed(() => {
//   const  cellV = cell.value;
//   return (cellV.noteHeadOffsetLeft === 0 ? 1 : 0);
// });
// if(showTabBg){}

const width = computed(() => {
  const cellV = cell.value;
  let w = 256 / cellV.duration;
  for (let i = cellV.dot; i > 0; i--)w += 256 / (cellV.duration * Math.pow(2, i));
  return w;
});
const style2 = computed(() => {
  const cellV = cell.value;
  return `width: min(20%, (100% - ${cellV.noteHeadWidth || 0}px));`;
});
onUpdated(() => {
  cell.value.noteEl = el;
});
onMounted(() => {
  cell.value.noteEl = el;
});


const slur = computed(() =>{
  const cellV = cell.value;
  for (let i in cellV.slur) {
    let cellRight = score.getCellProxy(keys.rowKey, keys.trackKey, keys.cellKey + parseInt(cellV.slur[i].right || 0));
    cellV.slur[i].width = cellRight?.noteHeadOffsetLeft - cellV.noteHeadOffsetLeft;
  }
  return cellV.slur;
})

</script>

<template>
  <div class=" w-px h-full grow shrink-1"></div>
  <TabAppoggiatura v-if="cell.appoggiatura" class=" grow-0 shrink-1"></TabAppoggiatura>
  <div ref="el" class=" relative tab-note grow-0 shrink-0 max-w-full ">
    <template v-if="cell.noteType != 'rest'">
      <TabNoteHead>
        <TabSlur v-for="item in slur" :data="item" class=" absolute left-1/2"
          :style="`bottom:${(6 - cell.minLine + 1) * lineHeight}px`"></TabSlur>
      </TabNoteHead>

      <div class=" absolute top-0 left-0 w-full -z-10" :style="{ 'height': lineHeight * 6 + 20 + 'px', }">
        <LineV :width="1" :height="stemHeight" class=" note-stem absolute bottom-0 left-1/2 -translate-x-1/2"></LineV>
        <TabNoteFlag v-if="cell.duration >= 4" :type="cell.flag" :duration="cell.duration"></TabNoteFlag>



        <Dot v-if="cell.staccato" class="absolute -top-1"></Dot>
        <!-- <slot></slot> -->
      </div>
    </template>
    <TabRest v-if="cell.noteType == 'rest'" :duration="cell.duration" :dot="cell.dot"></TabRest>
    <Chord v-if="cell.chord" :id="cell.chord" class="absolute -left-3"></Chord>
  </div>
  <div v-if="cell.duration < 4" v-for="i in (4 / cell.duration - 1)" class="add-duration shrink-1 ml-[20%]">
    <LineH width="10" :lineWidth="3"></LineH>
  </div>
  <div class=" w-[2px] h-full grow-[2] shrink-1"></div>

</template>

<style scoped>
.chord {
  bottom: calc(100% + 20px);
}
</style>
