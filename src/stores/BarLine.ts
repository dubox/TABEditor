import Cell from './Cell';


export default class BarLine extends Cell{

    

    // public duration:number = 4;

    private _noteEl;

    

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
        return this._noteEl;
    }

    set noteEl(el){
        this._noteEl = el;
        this.onElUpdated();
    }

    onElUpdated(){
        // this.elUpdate ++;// = Date.now();
    }
}