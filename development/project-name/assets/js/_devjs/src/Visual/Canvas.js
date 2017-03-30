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

		// this.camera = new THREE.PerspectiveCamera(45, 1, 1, 20000);

  }

  /**
   * レンダラー作成
   */
  _createRenderer(){

	@renderer = new THREE.WebGLRenderer({
			canvas             : document.getElementById(@el().attr('id'))
			alpha              : false
			antialias          : false
			stencil            : false
			depth              : true
			premultipliedAlpha : false
		})
	@renderer.autoClear = true
	@renderer.setClearColor(0xffffff)

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