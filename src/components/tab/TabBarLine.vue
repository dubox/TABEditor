<script setup lang="ts">
import LineV from '../base/LineV.vue';

//竖线 小节线等
const props = defineProps({
  width:{type:Number,default:1},
  // height:{type:String,default:'100%'},
  lineHeight:{type:Number,default:10},
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
});

function onClick(e:MouseEvent){
  // alert(props.lineName)
  props.onClick(e,props);
}
</script>

<template>
<div :style="{'width':width+'px','margin-top':(lineHeight/2)+'px'}">
  <LineV :width="width" :height="lineHeight*5" class=" "></LineV>
</div>
  
</template>

<style scoped>


</style>
