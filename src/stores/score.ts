import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import Note from './Note';
import TabNote from './TabNote';
import BarLine from './BarLine';
import { useRuntimeStore } from '@/stores/runtime';
import Cell from './Cell';
import JianNote from './JianNote';
import type { Keys } from '@/common/types';


export const useScoreStore = defineStore('score', () => {
  const RT = useRuntimeStore();
  const data = reactive({
    head: {
      title:'Test',
    },
    body: {
      conf:{
        paper:{
          width:210,
          height:297,
          paddingX:20,
          paddingY:20,
        },
        tab:{
          lineHeight:10,
        },
        chords:{
          '123jh23u2h':{
            name:'Fm',
            //{品:{弦:指}}
            points:{
              1:{2:1,6:2},
              4:{4:3},
            },
            startFret:3,//起始品
            mute:[6,4],//6弦不弹
          },
        },
      },
      rows:[
     [
      {
        type: 'tab',

        cells: [
          
          
            {
              type:'note',
              noteHead: { 1: '1', 4: '3', },
              noteType:'broken',
              duration: 32,
              dot: 1,
              flag: 'right',
              chord: '123jh23u2h',
            },
            {
              type:'note',
              noteHead: {5:'|',3:'>'},
              noteType:'strum',
              staccato:true,
              duration: 16,
              flag: 'center',
              appoggiatura:[ //倚音
                {
                  noteHead: {5:'|',3:'>'},
                  noteType:'strum',
                  duration: 8,
                },
                {
                  noteHead: { 1: '1', 4: '3', },
                  noteType:'broken',
                  duration: 8,
                },
              ],
              slur:[
                {right:3}//连接到右边第1个音符
              ],
            },
            {
              type:'note',
              noteHead: {1:'|',4:'>'},
              noteType:'arpeggio',
              duration: 16,
              flag: 'left',
            },
            {
              type:'barLine',
            },
            {
              type:'note',
              noteHead: { 3: '8', 6: '3', },
              noteType:'broken',
              duration: 8,
              dot: 2,
              flag: '',
              
            },{
              type:'note',
              noteHead: { 3: '8', 6: '3', },
              noteType:'broken',
              duration: 1,
              dot: 0,
              flag: '',
              
            },
          
        ]
      },
      {
        type: 'jian',
        cells: [
        {type:'note',
              noteHead: '2',
              duration: 4,
              dot:1,
            },{type:'note',
              noteHead: '8',
              duration: 8,
              dot:0,
            },{type:'note',
              noteHead: '3',
              duration: 4,
              dot:0,
            },{type:'note',
              noteHead: '0',
              duration: 2,
              dot:1,
            },{type:'note',
              noteHead: '7',
              duration: 4,
              dot:0,
            },
            
        ]
      },{
        type: 'lyric',
        cells: [
            {type:'note',
              noteHead: '你好',
              duration: 4,
              dot:1,
            },{type:'note',
              noteHead: 'he',
              duration: 4,
              dot:1,
            },{type:'note',
              noteHead: 'llo',
              duration: 4,
              dot:1,
            },{type:'note',
              noteHead: '吧',
              duration: 4,
              dot:1,
            },
          
        ]
      },
    ],
  ],
  },
  });

  const confTab = computed(() =>  {return data.body.conf.tab;})
  const body = computed(() =>  {return data.body;})
  const rows = computed(() =>  {return data.body.rows;})
  const chords = computed(() =>  {return data.body.conf.chords;})
  const cellProxy = reactive({});
  function getCellProxy(row:number|Keys,trackKey:number=null,cellKey:number=null){
    if(typeof row === 'object')
      var {rowKey,trackKey,cellKey} = row;
    else rowKey = row;
    let key = `${rowKey}-${trackKey}-${cellKey}`;
    
    if(cellProxy[key]){
      return cellProxy[key][0];
    }
    let cell = getCellInstance(rowKey,trackKey,cellKey);
    // let cell = Cell.getInstance(rowKey,trackKey,cellKey);
    cellProxy[key] = [cell];
    return cellProxy[key][0];
  }
  const get = computed(() =>  (rowKey:number|null = null,trackKey:number|null = null,cellKey:number|null = null)=> {
    let res:any = data.body.rows;
    if(rowKey !== null){
      res = res[rowKey];
      if(trackKey !== null){
        res = res[trackKey];
        if(cellKey !== null){
          res = res.cells[cellKey];
        }
      }
    }
    return res;
    
  })
  // function getTrack(rowKey:number,trackKey:number) {
  //   return data.body.rows[rowKey][trackKey];
  // }
  
  function getCellInstance(rowKey,trackKey,cellKey){
    let keys = [rowKey,trackKey,cellKey];
    switch(get.value(rowKey,trackKey).type+'.'+get.value(...keys).type){
      case 'tab.note': return new TabNote(...keys);
      case 'tab.barLine': return new BarLine(...keys);
      case 'jian.note': return new JianNote(...keys);
    }
    return new TabNote(rowKey,trackKey,cellKey);
  }


  function conf(type:string = ''){
    if(type)
    return data.body.conf[type];
    return data.body.conf;
  }

  function pushCell(type,rowKey:number|null = null,trackKey:number|null = null,cellKey:number|null = null){
    let track = get.value(rowKey,trackKey);
    let cell = JSON.parse(JSON.stringify(RT.cellTemplates[track.type][type]));
    track.cells.splice(cellKey+1,0,cell);
    RT.selectedCell = {rowKey ,trackKey ,cellKey:cellKey+1};
  }

  function unshiftCell(type,rowKey:number|null = null,trackKey:number|null = null,cellKey:number|null = null){
    pushCell(type,rowKey,trackKey,cellKey-1);
  }

  

  return { data,body,chords,rows, confTab ,getCellProxy,cellProxy,get ,pushCell,unshiftCell }
})
