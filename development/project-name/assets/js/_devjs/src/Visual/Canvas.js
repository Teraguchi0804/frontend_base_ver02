/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date:
 * Author:
 */

// import Loader from './Loader.js';
// import Sec01Video from '../Display/UI/Sec01Video.js';

'use strict';

export default class Canvas {

  constructor() {

    this.camera = null;
    this.renderer = null;
    this.scene = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);

  }

  /**
   * 初期化
   */
  init(){

    this.createCamera();
    this.createRenderer();
    this.createScene();

  }

  /**
   * カメラ作成
   */
  _createCamera(){

  }

  /**
   * レンダラー作成
   */
  _createRenderer(){

  }

  /**
   *　シーン作成
   */
  _createScene(){

  }


  onLoad(){

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}