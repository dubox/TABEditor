<script setup lang="ts">
//竖线 小节线等
import TabNoteCell from '../tab/TabNoteCell.vue';
const props = defineProps({
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
  lineHeight:{type:Number,default:12},
});
const lines = ['a','b','c','d','e','f'];
function onClick(e:MouseEvent){
  // alert(props.lineName)
  // props.onClick(e,e.target.dataset,props);
  // console.log(e,e.target.dataset.data,props)
}
</script>

<template>
<div class=" tab-note grid grid-cols-1 justify-center text-xs" :style="{'line-height':lineHeight+'px','text-algin':'center'}">
  <TabNoteCell  v-for="(name,key) in lines" :name="name" :lineHeight="lineHeight"></TabNoteCell>
</div>
  
</template>

<style scoped>

</style>
