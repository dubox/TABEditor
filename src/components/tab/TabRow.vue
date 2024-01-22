<script setup lang="ts">
import { ref,inject, getCurrentInstance, computed } from 'vue';
import Line from '../base/Line.vue';
import type { PageProvider } from '@/common/types';

// const $this = getCurrentInstance();
// const parentEl = $this?.parent?.vnode.el;//computed((old)=>{return $this?.parent?.vnode.el;});
// const defaultWidth = parentEl.innerHeight;
console.log(getCurrentInstance())
const props = defineProps({
  width:{type:String,default:'100%'},
  lineHeight:{type:Number,default:12},
  onClick:{type:Function},
});
const lines = ref(['a','b','c','d','e','f']);
// const page = inject<PageProvider>('Page');

</script>

<template>
  <div class=" w-full grid grid-cols-1">
    <Line v-for="(name,key) in lines" :lineKey="key" :lineName="name" :lineHeight="lineHeight" :onClick="onClick" />
  </div>
</template>

<style scoped>


</style>
