<script setup lang="ts">
import { ref, provide, computed, reactive, onMounted } from 'vue';

import TabRowBg from '../tab/TabRowBg.vue';
import Chord from '../tab/Chord.vue';
import JianNote from '../jian/JianNote.vue';
import LyricNote from '../lyric/LyricNote.vue';
import TabNoteVCenter from '../tab/TabNoteVCenter.vue';
import Arc from '../base/Arc.vue';
import TrackCell from '../base/TrackCell.vue';
const props = defineProps();
const model = defineModel();
import { useScoreStore } from '@/stores/score';
import Paper from '../Paper.vue';
const score = useScoreStore();
// score.init();
const data = score.data;
const body = data.body;
const paper = body.conf.paper;
function onClick2(e: Event) {
  console.log('onClick2')
  // data.body.rows[0][0].cells[0] = data.body.rows[0][0].cells[1];
  data.head.title = '哈哈哈';
  // data.body.rows.splice(0,1);
  score.$patch((state) => {
    // state.data.body.rows.splice(0,1);
    // state.data.body.rows = state.data.body.rows.filter((item, i)=>{return i!=0;})
  })
  console.log(score.cellProxy)
}

onMounted(() => {
  console.log('Page onMounted');

})



/**
 * 简六时值对应：选中一个音符 另一边对应时值位的音符高亮
 * 
 * 
 */


</script>

<template>
  <div @click="onClick2" class="viewport overflow-scroll self-center h-full w-full" >
  <div class="papers flex flex-col w-fit gap-4 items-center px-2 py-12" :style="`margin:0px auto;`">
    <Paper :width="paper.width" :height="paper.height" :padding-x="paper.paddingX" :padding-y="paper.paddingY">
      
        <div class="header relative grid grid-cols-12">
          <div class=" col-span-full justify-self-center"><span class=" text-center text-3xl">{{ data.head.title}}</span></div>
          <div class=" col-span-full justify-self-center "><span class=" text-center text-xl">test</span></div>
          <div class=" col-span-full justify-self-end"><span class=" text-center text-sm">XX：xxx</span></div>

        </div>
        <div class="body ">
          <div class="row-group">
            <div v-for="(row, i) in body.rows" :key="i" class="row relative w-full mb-2">
              <div v-for="(track, ii) in row" :key="ii" class=" flex">
                <div :class="`track ${track.type == 'tab' && 'mb-6 mt-20'} relative flex w-full items-center pl-2`">
                  <TabRowBg v-if="track.type == 'tab'" class=" absolute top-0 left-0 -z-10 w-full"
                    :lineHeight="score.confTab.lineHeight"></TabRowBg>
                  <TrackCell v-for="(cell, iii) in track.cells" :key="iii" :rowKey="i" :trackKey="ii" :cellKey="iii">
                  </TrackCell>
                </div>
              </div>
            </div>
          </div>
        </div>

    </Paper>
    <Paper></Paper>
  </div>
</div>
</template>

<style scoped>

</style>
