<script setup lang="ts">
//竖线 小节线等
import LineV from '../base/LineV.vue';
import LineH from '../base/LineH.vue';
import TabNoteCell from './TabNoteCell.vue';
import TabNoteFlag from './TabNoteFlag.vue';
import { ref, type PropType, computed, watch, watchEffect, reactive } from 'vue';
interface Lines  {a:string | null | undefined,b:string | null | undefined,c:string | null | undefined,d:string | null | undefined,e:string | null | undefined,f:string | null | undefined};
const props = defineProps({
  onClick: { type: Function, default: (e: MouseEvent) => { } },
  lineHeight: { type: Number, default: 12 },
  // lines : { type:Object as PropType<Lines>, default: {a:'2',c:'3'} },
});
const model = defineModel();
const noteHead = reactive(model.value.noteHead);
const lines = {a:'1',b:'',c:'',d:'3',e:'',f:''};
function onClick(e: MouseEvent) {
  // alert(props.lineName)
  // props.onClick(e,e.target.dataset,props);
  console.log(e,model.value)
}

const stemHeight = computed(() => {
  let h = props.lineHeight * 6 + 20;
  for(let i in noteHead){
    if(noteHead[i] == '')h -= props.lineHeight;
    else break;
  }
  return h;
});


//bedeck
</script>

<template>
  <div class=" tab-note relative min-w-6">
    <div class=" note-head grid grid-cols-1 justify-center" :style="{ 'line-height': lineHeight + 'px', }">
      <TabNoteCell v-for="(value, name) in noteHead" :key="name" :name="name" v-model:value="noteHead[name]" :lineHeight="lineHeight" :onClick="onClick"></TabNoteCell>
      <!-- <TabNoteCell v-model:value="lines.a" :lineHeight="lineHeight" :onClick="onClick"></TabNoteCell> -->
    </div>
    <div class=" absolute top-0 left-0 w-full -z-10" :style="{ 'height': lineHeight * 6 + 20 + 'px', }">
      <LineV :width="1" :height="stemHeight" class=" note-stem absolute bottom-0 left-1/2 -translate-x-1/2"></LineV>
      <TabNoteFlag type="single" direction="left" :duration="model.duration"></TabNoteFlag>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-note {
  font-size: 0.75rem;
}
</style>
