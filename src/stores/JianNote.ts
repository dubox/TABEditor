
import Cell from './Cell';


export default class JianNote extends Cell{

    

    // public duration:number = 4;
    // public realDuration:number = 0;
    // public dot:number = 0;
    // public type:string = '';
    // public noteType:string = 'broken';
    // public noteHead:object = {};

    private _noteEl;

    // constructor(data ,track ,row){
    //     super(data,track,row);
    //     for(let i in data){
    //         this[i] = data[i];
    //     }
    // }
    

    get height(){
        return  this.conf?.lineHeight*6;
    }

   

    get noteHeadWidth(){
        return this.noteEl?.clientWidth ||0;
    }

    get noteHeadOffsetLeft(){
        return (this.noteEl?.offsetLeft ||0) + this.offsetLeft;
    }

    get noteEl(){
        return this._noteEl?.value;
    }

    set noteEl(el){
        this._noteEl = el;
        this.onElUpdated();
    }

    onElUpdated(){
        // this.elUpdate ++;// = Date.now();
    }

    get minLine(){
        let keys = <number[]><unknown>Object.keys(this.data.noteHead);
        if(keys.length === 0){
            return 0;
        }
        return Math.min(...keys);
    }

    get maxLine(){
        let keys = <number[]><unknown>Object.keys(this.data.noteHead);
        if(keys.length === 0){
            return 6;
        }
        return Math.max(...keys);
    }

    toJson(){
        return {a:1,b:'2'};
    }
}