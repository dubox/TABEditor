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
    <path d="M0,0 6,8 12,0  Q6,4 0,0" fill="black" stroke-width="0" stroke="black"></path></svg>
</template>

<style scoped>


</style>
