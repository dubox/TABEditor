<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import PageHead from './PageHead.vue';
import TabRow from '../tab/TabRow.vue';
import TabNote from '../tab/TabNote.vue';
import TabBarLine from '../tab/TabBarLine.vue';
const props = defineProps();

function onClick(e,attrs){
  console.log(attrs.lineName)
}
// provide('Page', attrs);
</script>

<template>
  <div class=" relative">
    <div class="header relative grid grid-cols-12">
      <div class=" col-span-full justify-self-center"><span class=" text-center text-3xl">橄榄树</span></div>
      <div class=" col-span-full justify-self-center "><span class=" text-center text-xl">橄榄树</span></div>
      <div class=" col-span-full justify-self-end"><span class=" text-center text-sm">作曲：张三</span></div>

    </div>
    <div class="body  grid grid-cols-12">
      <div class="row-group grid-cols-12 col-span-full">
        <div class="row-chord grid-cols-12">
          
        </div>
        <div class=" row-tab relative flex col-span-full" style="font-family: none;">
          <TabRow class=" absolute top-0 left-0 -z-10 w-full" :lineHeight="12"  :onClick="onClick"></TabRow>
          <TabBarLine :width="2" :lineHeight="12"></TabBarLine>
          <TabNote :lineHeight="12" ></TabNote>
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
