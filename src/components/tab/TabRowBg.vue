<script setup lang="ts">
import { ref,inject, getCurrentInstance, computed } from 'vue';
import LineH from '../base/LineH.vue';
import type { PageProvider } from '@/common/types';
import TabBarLine from '../tab/TabBarLine.vue';
// const $this = getCurrentInstance();
// const parentEl = $this?.parent?.vnode.el;//computed((old)=>{return $this?.parent?.vnode.el;});
// const defaultWidth = parentEl.innerHeight;
// console.log(getCurrentInstance())
const props = defineProps({
  width:{type:String,default:'100%'},
  lineHeight:{type:Number,default:12},
  onClick:{type:Function},
});
const lines = ref(['a','b','c','d','e','f']);
// const page = inject<PageProvider>('Page');

</script>

<template>
  <div>
  <div class=" w-full absolute top-0 left-0">
    <LineH v-for="(name,key) in lines" :lineKey="key" :lineName="name" :lineWidth="1" color="#ddd" :height="lineHeight" :onClick="onClick" />
  </div>
  <TabBarLine :width="2" :lineHeight="10" class=" absolute top-0 left-0"></TabBarLine>
  <TabBarLine :width="2" :lineHeight="10" class=" absolute top-0 right-0"></TabBarLine>
</div>
</template>

<style scoped>


</style>
