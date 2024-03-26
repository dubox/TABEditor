<script setup lang="ts">
import { computed } from 'vue';
import { useScoreStore } from '@/stores/score';
const score = useScoreStore();

const props = defineProps({
  id: { type: String, default: '' },
  edit: { type:Boolean, default: false },
});

const chord = computed(() => {
  return score.data.body.conf.chords[props.id];
});

function onInput(e: Event) {
  // if(!_this)return;
  let chordV = chord.value;
  let target = (e?.target as HTMLDivElement);
  let v = target?.innerText; console.log(v, e)
  let name = target?.dataset.name;
  switch (name) {
    case 'name': chordV.name = v; break;
    case 'startFret': chordV.startFret = v; break;
    case 'point': {
      let fret = target?.dataset.fret;
      let string = target?.dataset.string;
      chord.value.points[fret] = chord.value.points[fret] || {}
      if (v === '') delete chord.value.points[fret][string];
      else
        chord.value.points[fret][string] = v;
    } break;

    default:
      break;
  }

}

function mute(e: Event){
  if(!props.edit)return;
  let chordV = chord.value;
  let string = +(e?.target as HTMLDivElement)?.dataset.string;
  let k = chordV.mute.indexOf(string);console.log('mute',string,k,e)
  if(k > -1){
    chordV.mute.splice(k,1);
  }else
  chordV.mute.push(string);
}

function blackBg(fret, string) {
  let p = chord.value.points;
  return (p[fret] && p[fret][string]) && 'bg-black';
}

//×╳
</script>

<template>
  <div class="chord grid grid-cols-1 justify-items-end w-[66px]">
    <div @input="onInput" data-name="name" :contenteditable="edit" class="title mb-1 w-[54px] h-4 leading-4 text-xs text-center font-bold">
      {{ chord.name }}</div>

    <div class="body relative w-[54px]">
      <svg class=" absolute -top-[0.5px] left-[4px] -z-50" x="91" y="222" width="46" height="45"
        xmlns="http://www.w3.org/2000/svg">
        <g class=" translate-x-[0.5px] translate-y-[0.5px]">
          <line v-for="i in 5" x1="-0.5" :y1="(i - 1) * 11" x2="45.5" :y2="(i - 1) * 11" class="stroke-gray-950"></line>
          <line v-for="i in 6" :x1="9 * (i - 1)" y1="0" :x2="9 * (i - 1)" y2="44" class="stroke-gray-950"></line>
        </g>
      </svg>
      <div class="flex flex-row-reverse w-full h-[9px] absolute -top-[5px] left-0 cursor-pointer select-none">
        <div v-for="i in 6" @click="mute" :data-string="i" :class="` ${edit && 'mute-h'} text-[6px] w-[9px] h-full text-center font-bold `">
          <!-- <div v-if="chord.mute.includes(i)" :data-string="i">╳</div> -->
          <div :data-string="i" :class="` ${chord.mute.includes(i) || 'hidden'}`">╳</div>
        </div>
      </div>
      <div @input="onInput" data-name="startFret" :contenteditable="edit"
        :class="`startFret absolute top-0 -left-3 w-3 h-[11px] leading-[11px] rounded-sm font-bold text-right text-[8px] outline-slate-400 ${edit && 'hover:outline-dashed'} outline-1`">{{ chord.startFret }}</div>
      <div class=" grid grid-cols-1 w-full">
        <div class=" flex w-full flex-row-reverse" v-for="fret in 4">
          <div v-for="string in 6" class="flex items-center h-[11px]">
            <div @input="onInput" data-name="point" :data-fret="fret" :data-string="string" :contenteditable="edit"
              :class="` text-[9px] ${chord.points[fret]?.[string] === '0'?'text-opacity-100':'text-white'} ${blackBg(fret, string)} leading-[9px] h-[9px] w-[9px] rounded-full text-center overflow-hidden`">
              {{ chord.points[fret]?.[string] }}</div>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<style scoped>
.mute-h:hover div{
  display:block;
  color:#999;
  }
</style>
