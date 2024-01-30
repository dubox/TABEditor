<script setup lang="ts">
const props = defineProps({
  lineKey: {type:Number,default:1},
  lineName: {type:String,default:''},
  color:{type:String,default:'#000'},
  width:{type:String,default:'100%'},
  height:{type:Number,default:-1},
  lineWidth:{type:Number,default:1},
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
});
// const y = props.lineKey * props.lineHeight;

const height = props.height == -1 ?props.lineWidth:props.height;

function onClick(e:MouseEvent){
  // alert(props.lineName)
  props.onClick(e,props);
}
</script>

<template>
  <!-- <rect :y="y" height="10" :width="width" @click="onClick" class="fill-white" ></rect> -->
  <svg :height="height" class=" w-full" @click="onClick">
    <line :stroke-width="lineWidth" :stroke="color"  x1="0" :y1="height/2" :x2="width" :y2="height/2"></line>
  </svg>
</template>

<style scoped>


</style>
