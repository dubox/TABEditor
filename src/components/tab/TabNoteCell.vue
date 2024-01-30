<script setup lang="ts">
import { getCurrentInstance, ref, type PropType, computed, reactive } from 'vue';

const _this = getCurrentInstance();
const el = ref<Element | null>();
// const $emit = defineEmits(['input']);
//竖线 小节线等
const props = defineProps({
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
  lineHeight:{type:Number,default:12},
  name:{type:String,default:''},
  // value:{type:Object as PropType<any>,default:''},
});
const value = defineModel('value');
// const value = ref('2');

const style = computed(()=>{
  // return {'height':props.lineHeight+'px','background-color':(value.value || value.value==='0')?'#fff':'none'};
  return `height:${props.lineHeight}px;background-color:${(value.value || value.value==='0')?'#fff':'none'}`;
});

function onInput (e:Event){
  // if(!_this)return;
  // _this.emit('input', e?.target?.innerHTML);
  value.value = e?.target?.innerHTML;
}

function onClick(e:MouseEvent){
  // alert(props.lineName)
  props.onClick(e,props);
  // console.log(e,value)
}
</script>

<template>

  <div 
  ref="el"
  contenteditable="true" 
  tabindex="3" 
  class="cell text-center justify-self-center" 
  :style="style" 
  @click="onClick"
  @input="onInput" >
    {{value}}
  </div>
</template>

<style scoped>
.cell {
  /* background-color: rgb(255, 197, 197); */
  font-family:none;
  border-radius: 50%;
  padding: 0 2px;
}
</style>
