<script setup lang="ts">
import { ref, provide, computed } from 'vue';
const props = defineProps({
  type:{type:String,default:'text',},
  prefix:{type:String,default:'',},
  suffix:{type:String,default:' ',},
  readonly:{type:Boolean,default:false,},
});

const model = defineModel();

</script>

<template>
  <div class=" flex w-full text-sm text-gray-400 h-6 leading-6 border-0 border-b-2 border-solid border-gray-200 has-[:focus]:border-gray-400" >
  <div class="prefix shrink-0">{{prefix}}</div>
    <input :type="type" v-model="model" :readonly="readonly" class="w-full border-0 p-0 focus:ring-0 text-center text-gray-500"/>
    <div class="suffix shrink-0">{{ suffix }}</div>
</div>
</template>

<style scoped>

</style>
