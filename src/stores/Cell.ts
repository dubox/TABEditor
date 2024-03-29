import { useScoreStore } from '@/stores/score';

//decorator stage2
function getter(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
      descriptor.set = function (val) {
        (<Cell>this).data[propertyKey] = val;
      };
      descriptor.get = function () {//console.log(propertyKey)
        return (<Cell>this).data[propertyKey];
      };
    
  }

  /**
   * decorator stage3 目前尚不支持？
   * @param param0 
   * @param param1 
   * @returns 
   */
  function getter2({ get, set }, { kind, name }) {console.log(kind,name)
    if (kind === "accessor") {
      return {
        get() {
          console.log(`getting ${name}`);
  
          return (<Cell><unknown>this).data[name];
        },
  
        set(val) {
          console.log(`setting ${name} to ${val}`);
  
          return (<Cell><unknown>this).data[name] = val;
        },
      };
    }
  }

export default class Cell{

    private static _score;

    private _trackKey;
    private _rowKey;
    private _cellKey;


    public realDuration:number = 0;
   
    private _cellEl;
    public elUpdate:number = 0;

    public handler = {
        get: function (obj, prop) { console.log(prop)
          if (prop in obj) {
            return obj[prop];
          } else {
            return obj.data[prop];
          }
        },
        set: function (obj, prop, value) {//console.log(obj,prop, value);
            if (prop in obj) {
                return obj[prop] = value;
              } else {
                return obj.data[prop] = value;
              }
        }
    };

    static get score(){
        return Cell._score || (Cell._score = useScoreStore());
    }

    // decorator stage3
    // @getter2
    // accessor type:string;
  

    constructor(rowKey:number = null,trackKey:number = null,cellKey:number = null){
        this._rowKey = rowKey ,this._trackKey = trackKey ,this._cellKey = cellKey;
    }

    /**
     * decorator stage2
     * 暴露score的属性给cell使用
     */
    @getter set type(v){}
    @getter set noteHead(v){}
    @getter set duration(v){}
    @getter set noteType(v){}
    @getter set staccato(v){}
    @getter set flag(v){}
    @getter set appoggiatura(v){}
    @getter set slur(v){}
    @getter set dot(v){}


    


    get data() {
        return Cell.score.get(this._rowKey ,this._trackKey ,this._cellKey);
    }

    get track(){
        return Cell.score.get(this._rowKey ,this._trackKey );
    }

    set trackType(type){
        this.track.type = type;
    }

    get trackType(){
        return this.track.type;
    }

    get conf(){
        return Cell.score.data.body.conf[this.trackType];
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
        this.elUpdate ++;// = Date.now();
    }
}