<script setup lang="ts">
import Arc from '../base/Arc.vue';
import { useScoreStore } from '@/stores/score';
const score = useScoreStore();

//竖线 小节线等
const props = defineProps({
  data:{type:Object,default:{}},
});

</script>

<template>
  <Arc  :width="data.width || 10" :dv="data.dv" class=""></Arc>

</template>

<style scoped>


</style>
