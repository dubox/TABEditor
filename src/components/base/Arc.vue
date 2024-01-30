<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    dv: { type: Number, default: 1 },//弯曲方向 1上弯 -1下弯
    width: { type: Number, default: 30 },
    height: { type: Number, default: 5 },
    lineColor: { type: String, default: '#000' },
    lineWidth: { type: Number, default: 1 },
});
const height = computed(() => Math.min( props.width/6 ,15));
const startX = 0;
const startY = computed(() => height.value* ((props.dv+1)/2));
const endX = computed(() => props.width);
const endY = startY;
const midX = computed(() => props.width / 2);
const midY = computed(() =>  startY.value - (2*height.value - props.lineWidth) * props.dv);

</script>

<template>
    <svg :width="width" :height="height">
        <path :d="`M${startX},${startY} Q${midX} ${midY} ${endX} ${endY}`" :stroke="lineColor" :stroke-width="lineWidth"
            fill="none" />
    </svg>
</template>