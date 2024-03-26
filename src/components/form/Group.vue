<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import Input from '../form/Input.vue';
import Select from '../form/Select.vue';
const props = defineProps({
  title:{type:String,default:'',},
});

const down = ref(true);

function toggleDown() {
  down.value =!down.value;
}
</script>

<template>
    <div class="group w-full flex flex-col py-1 shadow-sm">
      <div :class="`title h-7 leading-7 text-gray-500 select-none ${down? 'down' : 'up'} `" @click="toggleDown">{{title}} 
        <i class=" float-right text-gray-300 cursor-pointer"><span class="up">△</span><span class="down">▽</span></i>
      </div>
      <Transition name="expand-collapse">
      <div v-if="down" :class="`content overflow-hidden`">
        <slot></slot>
    </div>
  </Transition>
    </div>
</template>

<style scoped>
.item{
  padding: 4px 0;
}
.content{
  padding: 10px;
}
.up .up ,.down .down{
  color: rgb(107 114 128 / 1);
}

@keyframes collapse {
  from {
    /* max-height: 1000px;  */
  }
  to {
    /* max-height: 0; */
  }
}
.expand-collapse-enter-active {
  animation: collapse 0s reverse;
}
.expand-collapse-leave-active {
  animation: collapse 0s;
}
</style>
