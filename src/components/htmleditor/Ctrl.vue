<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import Input from '../form/Input.vue';
import Select from '../form/Select.vue';
import Group from '../form/Group.vue';
import { useScoreStore } from '@/stores/score';
import { useRuntimeStore } from '@/stores/runtime';
const score = useScoreStore();
score.init();
const RT = useRuntimeStore();
const paper = score.body.conf.paper;
const props = defineProps({
  height:{
    type:Number,
    default:200,
  }
});

const cell =  computed(()=>{
  
  let c = score.get(RT.selectedCell.rowKey||0 ,RT.selectedCell.trackKey||0 ,RT.selectedCell.cellKey||0);
  console.log(RT.selectedCell ,c)
  return c;
});

const down = ref(false);

function toggleDown() {
  down.value =!down.value;
}
</script>

<template>
  <div class=" w-full flex flex-col">
    <Group title="页面设置">
      <div class="item">
        <Input type="number" prefix="上下边距：" suffix="mm" v-model="paper.paddingY" />
      </div>
      <div class="item " >
        <Input type="number" prefix="左右边距：" suffix="mm" v-model="paper.paddingX" />
      </div>
    </Group>
    <Group v-if="RT.selectedCell.rowKey > -1" :title="`行${RT.selectedCell.rowKey+1}`">
      <div class="item">
        <Input prefix="rowKey:" suffix="" v-model="RT.selectedCell.rowKey" />
      </div>
    </Group>
    <Group v-if="RT.selectedCell.trackKey > -1" :title="`音轨${RT.selectedCell.trackKey+1}`">
      <div class="item">
        <Select prefix="类型:" suffix="" v-model="cell.trackType" :readonly="true">
            <option v-for="(v,i) in RT.trackTypes" :value="i">{{v}}</option>
          </Select>
      </div>
    </Group>
    <Group v-if="RT.selectedCell.cellKey > -1" :title="`单元${RT.selectedCell.cellKey+1}`">
      <div class="item">
        <Select prefix="类型:" suffix="" v-model="cell.type" >
            <option v-for="(v,i) in RT.cellTypes" :value="i">{{v}}</option>
          </Select>
      </div>
      <template v-if="cell.type=='note'">
        <div class="item">
          <Select prefix="音符类型:" suffix="" v-model="cell.noteType" >
            <option v-for="(v,i) in RT.noteTypes[cell.trackType]" :value="i">{{v}}</option>
          </Select>
        </div>
        <div class="item flex">
          <Input v-for="i in 6" :prefix="`${i}:`" suffix="" v-model="cell.noteHead[i]" />
        </div>
        <div class="item">
          <Select prefix="时值:" suffix="" v-model="cell.duration" >
            <option v-for="i in [1,2,4,8,16,32]" :value="i">{{i}}</option>
          </Select>
          <Select prefix="附点:" suffix="" v-model="cell.dot" >
            <option v-for="i in [0,1,2]" :value="i">{{i}}</option>
          </Select>
        </div>
        <div class="item">
          <Select prefix="符尾:" suffix="" v-model="cell.flag" >
            <option v-for="(v,i) in RT.noteFlags" :value="i">{{v}}</option>
          </Select>
        </div>
        <Group title="倚音">
          <div v-for="(v,i) in cell.appoggiatura" class="">
              <div class="item">
                <Select prefix="音符类型:" suffix="" v-model="v.noteType" >
                  <option v-for="(vv,ii) in RT.noteTypes[cell.trackType]" :value="ii">{{vv}}</option>
                </Select>
              </div>
              <div class="item">
                <Input v-for="ii in 6" :prefix="`${ii}:`" suffix="" v-model="v.noteHead[ii]" />
              </div>
          </div>
        </Group>
        <Group title="连线">
          <div v-for="(v,i) in cell.slur" class="item">
                <Input  prefix="连接至:" suffix="" v-model="v.right" />
                <Input  prefix="外标" suffix="" v-model="v.out" />
                <Input  prefix="中标" suffix="" v-model="v.on" />
                <Select prefix="方向:" suffix="" v-model="v.dv" >
                  <option :value="1">向上</option>
                  <option :value="-1">向下</option>
                </Select>
          </div>
        </Group>
      </template>
    </Group>



    </div>
  
</template>

<style scoped>
.item{
  padding: 4px 0;
  display: flex;
}
</style>
