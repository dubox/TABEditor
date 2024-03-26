<script setup lang="ts">

const props = defineProps({
  num:{type:Number,default:1},
});
</script>

<template>
<div class=" dot flex gap-x-px pl-px pr-px">
  <svg v-for="i in num" width="4" height="4" class=" scale-95">
      <circle cx="2" cy="2" r="2" stroke="black" stroke-width="0" fill="black"></circle>
      </svg>
      
    </div>
  
</template>

<style scoped>

</style>
