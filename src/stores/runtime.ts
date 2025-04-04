import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Keys } from '@/common/types';

export const useRuntimeStore = defineStore('runtime', () => {
  const selectedCell = <Keys>reactive({
    
  });

  const trackTypes = {
    'tab':'六线谱',
    'jian':'简谱',
    'lyric':'歌词',
  };
  const cellTypes = {
    'note':'音符',
    'barLine':'小节线',
  };
  const noteFlags = {
    'single':'独立',
    'left':'左',
    'center':'中',
    'right':'右',
  };
  const noteTypes = {
    'tab':{
      'broken':'分解',
      'strum':'扫弦',
      'arpeggio':'琶音',
      'rest':'休止符',
    },
    'jian':{
      'note':'音符',
      'rest':'休止符',}
  };
  const cellTemplates = {
    tab:{
      note: {
        type: 'note',
        noteHead: {},
        noteType: 'broken',
        duration: 4,
      },
      barLine: {
        type: 'barLine',
      },
    },
    jian:{
      note: {
        type: 'note',
        noteHead: '',
        duration: 4,
      },
      barLine: {
        type: 'barLine',
      },
    },

    lyric: {
      note: {
        type: 'lyric',
        lyric: '',
      },
    },
  };

  function getTrackType(type: string) {
    return trackTypes[type] || ''
  }

  return { selectedCell,trackTypes,cellTypes,noteTypes,noteFlags,cellTemplates,}
})
