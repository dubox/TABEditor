<script setup lang="ts">
import { getCurrentInstance, ref, type PropType, computed, reactive } from 'vue';

const _this = getCurrentInstance();
const el = ref<Element | null>();
// const $emit = defineEmits(['input']);
//竖线 小节线等
const props = defineProps({
  name:{type:String,default:''},
  // value:{type:Object as PropType<any>,default:''},
});
const value = defineModel('value');
// const value = ref('2');


function onInput (e:Event){
  // if(!_this)return;
  // _this.emit('input', e?.target?.innerHTML);
  value.value = (e?.target as HTMLDivElement)?.innerHTML;
}

function onClick(e:MouseEvent){
}
</script>

<template>

  <div 
  ref="el"
  contenteditable="true" 
  class="cell text-center justify-self-center" 
  @click="onClick"
  @input="onInput" >
    {{value}}
  </div>
</template>

<style scoped>
.cell {
  /* background-color: rgb(255, 197, 197); */
  font-family:none;
  /* border-radius: 50%;
  padding: 0 2px; */
}
</style>
