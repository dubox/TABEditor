<script setup lang="ts">
import { computed, inject, onUpdated, reactive } from 'vue';
import LineH from '../base/LineH.vue';
import Dot from '../base/Dot.vue';
import TabNoteVCenter from './TabNoteVCenter.vue';
import LineV from '../base/LineV.vue';
import type Note from '@/stores/Note';
import type { Keys } from '@/common/types';
import { useScoreStore } from '@/stores/score';
const score = useScoreStore();
const props = defineProps({
  type: { type: String, default: 'single' },// single单独 ，left center right
  duration: { type: Number, default: 4 },//时值
});
const keys = <Keys>inject('keys');
const cell =  computed(()=>score.get(keys.rowKey ,keys.trackKey ,keys.cellKey));//computed(()=><Note><unknown>(rows[keys.rowKey][keys.trackKey].cells[keys.cellKey]));
  
const width = computed(() => {
  let cellV = cell.value;console.log('width',cellV?.cellWidth,cellV.noteHeadOffsetLeft);
  if(props.type == 'center')return cellV?.cellWidth+1;
  if(props.type == 'left')return cellV?.noteHeadWidth/2 + (cellV.noteHeadOffsetLeft - cellV.offsetLeft) + 1;
  if(props.type == 'right')return cellV?.cellWidth - cellV?.noteHeadWidth/2 - (cellV.noteHeadOffsetLeft - cellV.offsetLeft);
  return 0;
});
const style1 = computed(()=>{
  let cellV = cell.value;console.log('style1',cell.value.noteHeadOffsetLeft,cellV?.cellWidth)
  if(props.type == 'right')return `left:50%`;
  return `left:${ - (cellV.noteHeadOffsetLeft - cellV.offsetLeft)-1}px`;
});
const styleDot = computed(()=>{
  let cellV = cell.value;
  if(props.type == 'right')return `left:0px`;
  if(props.type == 'left')return `right:0px`;
  return `left:${  (cellV.noteHeadOffsetLeft - cellV.offsetLeft)+1 + cellV?.noteHeadWidth/2}px`;
});

const type = computed(()=>{
  
  return ['left', 'center', 'right'].includes(props.type)?props.type:'single';
});

const forks = computed(()=>Math.log(props.duration/4)/Math.log(2));//根据时值计算符尾齿数量
onUpdated(()=>{
  // console.log('flag',cell.dot)
  //  cell.dot = (<Note>inject('cell')).dot;console.log('flag',cell.dot)
})
</script>

<template>
  
  <div v-if="type != 'single'"
    :class="` note-flag absolute bottom-0`" :style="style1">
    <Dot v-if="cell.dot" :num="cell.dot" class="absolute -top-1" :style="styleDot" ></Dot>
    <LineH v-for="i in forks" :lineWidth="2" :width="width+'px'" class=" mt-1"></LineH>
    <!-- <LineH v-if="duration >= 16" :lineWidth="2" class=" mt-1"></LineH>
    <LineH v-if="duration >= 8" :lineWidth="2" class=" mt-1"></LineH> -->
  </div>

  <template v-if="type == 'single'">
    <svg width="10.5" height="38.5" class=" note-flag absolute bottom-0 left-1/2">

      <g transform="translate(-526,-260),scale(0.9)">
        
        <!-- <path v-if="duration >= 32"
          d="M 584.10639,318.49334 C 583.54389,312.18084 588.94894,309.9196 591.60639,306.99334 C 594.13235,304.21187 595.05506,301.00362 594.95187,297.99774 C 594.92432,297.19517 594.70644,293.71763 592.33742,290.23102 C 595.50534,298.97813 592.55589,302.48908 589.67446,305.2826 C 586.18452,308.66606 583.58834,311.85478 584.10639,318.49334 z "
          style="fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;">
        </path>
        <path v-if="duration >= 16"
          d="M 584.55369,325.42059 C 583.99119,319.10809 589.39624,316.84685 592.05369,313.92059 C 594.57965,311.13912 595.50236,307.93087 595.39917,304.92499 C 595.37162,304.12242 595.15374,300.64488 592.78472,297.15827 C 595.95264,305.90538 593.00319,309.41633 590.12176,312.20985 C 586.63182,315.59331 584.03564,318.78203 584.55369,325.42059 z "
          style="fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;">
        </path> -->
        <path v-for="i in forks" :class="[` -translate-y-${(i-1)*2}`]"
          d="M 584.67204,332.94254 C 584.10954,326.63004 589.51459,324.3688 592.17204,321.44254 C 594.698,318.66107 595.62071,315.45282 595.51752,312.44694 C 595.48997,311.64437 595.27209,308.16683 592.90307,304.68022 C 596.07099,313.42733 593.12154,316.93828 590.24011,319.7318 C 586.75017,323.11526 584.15399,326.30398 584.67204,332.94254 z "
          style="fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;">
        </path>
      </g>
    </svg>
    <Dot v-if="cell.dot" :num="cell.dot" value="dot2" class=" dot absolute bottom-0 left-1/2" ></Dot>
</template>
</template>

<style scoped></style>
