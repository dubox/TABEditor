<script setup lang="ts">

import LineH from '../base/LineH.vue';
import LyricNoteCell from './LyricNoteCell.vue';
import TrackCell from '../base/TrackCell.vue';
import { ref, type PropType, computed, watch, watchEffect, reactive, onMounted, inject } from 'vue';
import type Note from '@/stores/Note';
import { useScoreStore } from '@/stores/score';
import type { Keys } from '@/common/types';
const score = useScoreStore();
// const props = defineProps({
// });
const keys = <Keys>inject('keys');
const cell = computed(()=>score.getCellProxy(keys));


</script>

<template>
  <!-- <TrackCell ref="el" class=" jian-note h-full" :width="width"> -->
    <div class=" relative note-head grid grid-cols-1 h-full">
      <LyricNoteCell v-model:value="cell.noteHead" ></LyricNoteCell>
    </div>
    <!-- <TabNoteVCenter value="dot2"></TabNoteVCenter> -->

  <!-- </TrackCell> -->
</template>

<style scoped>
.tab-note {
  font-size: 0.75rem;
}
</style>
