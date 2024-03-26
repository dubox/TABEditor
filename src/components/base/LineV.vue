<script setup lang="ts">
//竖线 小节线等
const props = defineProps({
  width:{type:Number,default:1},
  height:{type:Number,default:60},
  lineHeight:{type:Number,default:10},
});
</script>

<template>
<svg :width="width" :height="height">
  <line class=" stroke-black" :stroke-width="width" x1="0" :y1="0" :x2="0" :y2="height"></line>
</svg>
  
</template>

<style scoped>


</style>
