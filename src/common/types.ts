import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface PageProvider{
    width:number,
  contentWidth:number,
}

export interface Keys{
    rowKey: number,
    trackKey: number,
    cellKey: number,
}


  