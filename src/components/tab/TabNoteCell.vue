<script setup lang="ts">
import { getCurrentInstance, ref, type PropType, computed, reactive } from 'vue';

interface EventTarget {
  innerHTML: string;
}
const el = ref<Element | null>();
// const $emit = defineEmits(['input']);
//竖线 小节线等
const props = defineProps({
  onClick: { type: Function, default: (e: MouseEvent) => { } },
  key: { type: Number, default: 0 },
  lineHeight: { type: Number, default: 12 },
  name: { type: String, default: '' },
  type: { type: String, default: '' },
  edit: { type: Boolean, default: true },
  strumPos: { type: Boolean, default: false },
  // value:{type:Object as PropType<any>,default:''},
});
const value = defineModel('value');
// const value = ref('2');

const style = computed(() => {
  // return {'height':props.lineHeight+'px','background-color':(value.value || value.value==='0')?'#fff':'none'};
  let s = `height:${props.lineHeight}px;`;
  if ((value.value || value.value === '0') && props.type == 'broken')
    s += `background-color:#fff`;
  return s;
});

function onInput(e: Event) {
  // if(!_this)return;
  let v = (e?.target as HTMLDivElement)?.innerText;
  value.value = v;
}

function onClick(e: MouseEvent) {
  // alert(props.lineName)
  props.onClick(e, props);
  // console.log(e,value)
}
</script>

<template>
  <div v-if="type == 'broken'" ref="el" :contenteditable="edit" class=" relative tab-note-cell text-center justify-self-center"
    :style="style" @click="onClick" @input="onInput">
    {{ value }}
  </div>
  <div v-if="type != 'broken'" ref="el" class=" relative tab-note-cell text-center justify-self-center"
    :style="style" @click="onClick" @input="onInput">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-note-cell {
  /* background-color: rgb(255, 197, 197); */
  font-family: none;
  border-radius: 50%;
  padding: 0 2px;
  font-size: 0.75rem;
}
</style>
