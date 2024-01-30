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
  <svg>
      <path d="M0,8 L6,0 L12,8 Q6,4 0,8" fill="black" stroke-width="0" stroke="black"></path></svg>
</template>

<style scoped>


</style>
