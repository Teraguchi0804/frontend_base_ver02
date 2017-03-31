/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date:
 * Author:
 */

import Entry from '../Entry.js';
// import Camera from './Utils/Camera.js';

'use strict';

export default class Canvas extends Entry{

  constructor(opts = {}) {

    super();

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.output = opts.output || document.createElement('div');

    this.camera = null;
    this.renderer = null;
    this.scene = null;
		this.cube = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createObject = this._createObject.bind(this);

    this.onResize = this._onResize.bind(this);

    this.Update = this._Update.bind(this);

  }

  /**
   * 初期化
   */
  init(){

    this.createCamera();
    this.createRenderer();
    this.createScene();

		this.createObject();

    this.Update();

    window.addEventListener('resize', () => {
      this.onResize();
    }, false);

  }

  /**
   * カメラ作成
   */
  _createCamera(){

		// gb.in.camera = this.camera = new Camera(45, 1, 1, 20000);
		// this.camera = new THREE.PerspectiveCamera(45, 1, 1, 20000);

    this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 10, 1000);
    this.camera.position.set(0, 0, 300);
    // this.camera.lookAt( this.scene.position );

  }

  /**
   * レンダラー作成
   */
  _createRenderer(){

		this.renderer = new THREE.WebGLRenderer({
      alpha              : false,
      antialias          : false,
      stencil            : false,
      depth              : true,
      premultipliedAlpha : false
		});

    this.renderer.setClearColor( 0xffffff );
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.setSize( this.width, this.height );
    this.output.appendChild(this.renderer.domElement);

  }

  /**
   *　シーン作成
   */
  _createScene(){

		this.scene = new THREE.Scene();

  }

	/**
	 *　Object作成
	 */
	_createObject(){

    var cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
    var cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: false
    });

    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.x = -4;
    this.cube.position.y = 3;
    this.cube.position.z = 0;

    this.scene.add(this.cube);

	}

  /**
   *　更新
   */
  _Update() {
    requestAnimationFrame( () => {
      this.Update();
    });
    // this.controls.update();
    this.renderer.render( this.scene, this.camera );
  }

  /**
   *　画面リサイズ
   */
  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}