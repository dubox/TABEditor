<script setup lang="ts">
//竖线 小节线等
const props = defineProps({
  onClick:{type:Function,default:(e:MouseEvent)=>{}},
  lineHeight:{type:Number,default:12},
  name:{type:String,default:''},
});

function onClick(e:MouseEvent){
  // alert(props.lineName)
  props.onClick(e,props);
  console.log(e,props)
}
</script>

<template>

  <div contenteditable="true" tabindex="3" class="cell w-full text-center" :style="{'height':lineHeight+'px'}" @click="onClick" >2</div>

  
</template>

<style scoped>

</style>
