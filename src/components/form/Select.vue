<script setup lang="ts">
import { ref, provide, computed } from 'vue';
const props = defineProps({
  prefix:{type:String,default:'',},
  suffix:{type:String,default:'',},
  readonly:{type:Boolean,default:false,},
});

const model = defineModel();

</script>

<template>
  <div class=" flex w-full text-sm text-gray-400 h-6 leading-6 border-0 border-b-2 border-solid border-gray-200 has-[:focus]:border-gray-400" >
  <div class="prefix shrink-0">{{prefix}}</div>
  <select v-model="model" :disabled="readonly" class="w-full border-0 p-0 focus:ring-0 text-center text-gray-500">
                  <slot></slot>
                </select>
    <div class="suffix shrink-0">{{ suffix }}</div>
</div>
 
 </template>

<style scoped></style>
