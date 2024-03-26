<script setup lang="ts">
import { computed } from 'vue';

//竖线 小节线等
const props = defineProps({
  type:{type:String,default:'strum'},
  direction:{type:String,default:'up'},
  width:{type:Number,default:9},
  height:{type:Number,default:20},
});

const rotate = computed(()=>{
  return `rotate-${props.direction == 'up'?0:180}`;
});
</script>

<template>
<svg :width="width" :height="height" :class="rotate">
  <path class=" scale-75" d="M0,8 L6,0 L12,8 Q6,4 0,8" fill="black" stroke-width="0" stroke="black"></path>
  <line v-if="type == 'strum'" class=" stroke-black translate-x-1/2" :stroke-width="1" x1="0" y1="2" x2="0" :y2="height"></line>
  <path v-if="type == 'arpeggio'" class=" stroke-black translate-x-1/2" d="M0,2 l0,3 a10,5,0,0,1,0,5 a10,5,0,0,0,0,5 a10,5,0,0,1,0,5 a10,5,0,0,0,0,5 a10,5,0,0,1,0,5 a10,5,0,0,0,0,5 a10,5,0,0,1,0,5 a10,5,0,0,0,0,5 a10,5,0,0,1,0,5 a10,5,0,0,0,0,5" fill="none" stroke-width="1"></path>
</svg>
  
</template>

<style scoped>


</style>
