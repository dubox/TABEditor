import { useScoreStore } from '@/stores/score';


export default class Cell{

    private score = useScoreStore();

    private _track;
    private _row;

    // public cellWidth:number = 0;
    // public noteHeadWidth:number = 0;
    // public noteHeadOffsetLeft:number = 0;
    // public offsetLeft:number = 0;
    // public height:number = 0;

    public realDuration:number = 0;
   
    public type:string = '';
    

    private _cellEl;
    public elUpdate:number = 0;

    constructor(data ,track ,row){
        for(let i in data){
            this[i] = data[i];
        }
        this._row = row;
        this._track = track;
    }

    set trackType(type){
         this._track.type = type;
    }

    get trackType(){
        return this._track.type;
    }

    get conf(){
        return this.score.data.body.conf[this.trackType];
    }

    get height(){
        return this.conf?.height ;
    }

    get cellWidth(){
        return this.cellEl?.clientWidth ||0;
    }

    get offsetLeft(){
        return this.cellEl?.offsetLeft ||0;
    }

   
    get cellEl(){
        return this._cellEl;
    }

    set cellEl(el){
        this._cellEl = el;
        this.onElUpdated();
    }

  

    onElUpdated(){
        // this.elUpdate ++;// = Date.now();
    }
}