/**
 * fileOverview: 画面更新クラス
 * Project:
 * File: UpdateMgr
 * Date:
 * Author:
 */

'use strict';

export default class UpdateMgr {

  constructor() {

    //更新回数
    this.cnt = 0;

    //毎フレーム実行させる関数を保持
    this.updateList = [];

    this.len = 0;
    this.Timer = null;
    this.isStop = false;

  }

  setup() {


  }

  //更新(登録された関数の総数分実行する)
  update() {

    for (var i in this.updateList) this.updateList[i].func();

  }

  //更新の実行関数の内容
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