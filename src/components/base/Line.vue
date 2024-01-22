<script setup lang="ts">
const props = defineProps({
  lineKey: {type:Number,default:1},
  lineName: {type:String},
  width:{type:String,default:'100%'},
  lineHeight:{type:Number,default:12},
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
});
// const y = props.lineKey * props.lineHeight;

function onClick(e:MouseEvent){
  // alert(props.lineName)
  props.onClick(e,props);
}
</script>

<template>
  <!-- <rect :y="y" height="10" :width="width" @click="onClick" class="fill-white" ></rect> -->
  <svg :height="lineHeight" class=" w-full" @click="onClick">
    <line class="stroke-1 stroke-black"  x1="0" :y1="lineHeight/2" :x2="width" :y2="lineHeight/2"></line>
  </svg>
</template>

<style scoped>


</style>
