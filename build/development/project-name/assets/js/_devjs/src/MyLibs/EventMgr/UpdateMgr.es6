//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

export default class UpdateMgr {

  constructor() {

    this.cnt = 0;
    this.updateList = [];
    this.len = 0;
    this.Timer = null;
    this.isStop = false;

  }

  setup() {


  }

  update() {

    for (var i in this.updateList) this.updateList[i].func();

  }

  loop() {

    this.update();
    this.cnt++;

    this.Timer = requestAnimationFrame(this.loop.bind(this));
    if (this.isStop) cancelAnimationFrame(this.Timer);
    

  }

  stop() {

    this.isStop = true;

  }

  resume() {

    this.isStop = false;
    this.loop();

  }

  add(name, func) {

    var obj = {name:name,func:func};

    this.updateList.push(obj);
    
  }

  remove(name) {

    var target = {name:name,func:()=>{}};

    UpdateMgr.arrRemove(this.updateList, target);

  }

  // ------------------------------------------------------------
  //
  //  静的メンバ
  //
  // ------------------------------------------------------------
  static arrRemove(arr , target) {

    var len = arr.length;
    var check;
    for( var i = 0 ; i < len; i++ ) {
      check = arr[ i ];

      if( check.name == target.name){
        arr.splice( i , 1 ) ;
        i--;
        len--;
      }
    }

    return arr;

  }

}