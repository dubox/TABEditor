<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import PageHead from './PageHead.vue';
import TabRowBg from '../tab/TabRowBg.vue';
import TabNote from '../tab/TabNote.vue';
import TabNoteVCenter from '../tab/TabNoteVCenter.vue';
import TabBarLine from '../tab/TabBarLine.vue';
import Arc from '../base/Arc.vue';
const props = defineProps();
const model = defineModel();
const data = {
  head:{},
  body:{
    tabRows:[
      [
        {
          noteHead:{a:'1',b:'',c:'',d:'3',e:'',f:''},
          duration:32,
        },
        {
          noteHead:{a:'',b:'',c:'2',d:'3',e:'',f:''},
          duration:16,
        },
        {
          noteHead:{a:'',b:'',c:'',d:'',e:'',f:'4'},
          duration:8,
        },
      ],
    ],
    jianRows:[],
    lyricRows:[],
  },
};

function onClick(e:Event){
  console.log(data)
}
// provide('Page', attrs);
</script>

<template>
  <div class=" relative">
    <div class="header relative grid grid-cols-12">
      <div class=" col-span-full justify-self-center"><span class=" text-center text-3xl">Test</span></div>
      <div class=" col-span-full justify-self-center "><span class=" text-center text-xl">test</span></div>
      <div class=" col-span-full justify-self-end"><span class=" text-center text-sm">XX：xxx</span></div>

    </div>
    <div class="body  grid grid-cols-12">
      <div class="row-group grid-cols-12 col-span-full" @click="onClick">
        <div class="row-chord grid-cols-12">
          
        </div>
        <div v-for="(row,i) in data.body.tabRows" class=" row-tab relative flex col-span-full">
          <TabRowBg class=" absolute top-0 left-0 -z-10 w-full" :lineHeight="10"  :onClick="onClick"></TabRowBg>
          <TabBarLine :width="2" :lineHeight="10"></TabBarLine>
          <TabNote v-for="(note ,ii) in row" v-model="data.body.tabRows[i][ii]" :lineHeight="10" ></TabNote>
          <!-- <TabNote :lineHeight="10" >
            <Arc :width="25" :dv="1" class=" absolute bottom-full right-1/2"></Arc>
            <Arc :width="65" :dv="1" class=" absolute bottom-full right-1/2"></Arc>
            <Arc :width="125" :dv="1" class=" absolute bottom-full right-1/2"></Arc>
          </TabNote> -->
          <TabNoteVCenter value="1"></TabNoteVCenter>
          <TabNoteVCenter value="dot"></TabNoteVCenter>
          <TabNoteVCenter value="rest4"></TabNoteVCenter>
          <TabNoteVCenter value="rest8"></TabNoteVCenter>
          <TabNoteVCenter value="rest16"></TabNoteVCenter>
          <TabNoteVCenter value="rest32"></TabNoteVCenter>
        </div>
        <div class="row-jian grid-cols-12">

        </div>
        <div class="row-lyric grid-cols-12">

        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped></style>
