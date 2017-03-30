/**
 * fileOverview:
 * Project:
 * File: Canvas
 * Date:
 * Author:
 */

import Entry from '../Entry.js';
import Camera from './Utils/Camera.js';

'use strict';

export default class Canvas extends Entry{

  constructor() {

    super();

    this.camera = null;
    this.renderer = null;
    this.scene = null;

		this.cube = null;

    this.createCamera = this._createCamera.bind(this);
    this.createRenderer = this._createRenderer.bind(this);
    this.createScene = this._createScene.bind(this);
    this.createObject = this._createObject.bind(this);

  }

  /**
   * 初期化
   */
  init(){
    
    window.console.log('Canvas_Init');

    this.createCamera();
    this.createRenderer();
    this.createScene();

		this.createObject();

		this.scene.add(this.camera);
		this.scene.add(this.cube);

  }

  /**
   * カメラ作成
   */
  _createCamera(){

		this.camera = new Camera(45, 1, 1, 20000);

		window.console.log(this.camera);
		
  }

  /**
   * レンダラー作成
   */
  _createRenderer(){

		this.renderer = new THREE.WebGLRenderer({antialias: true});

    // this.renderer = new THREE.WebGLRenderer({
    //   canvas             : document.getElementById(this.el().attr('id'));
    //   alpha              : false;
    //   antialias          : false;
    //   stencil            : false;
    //   depth              : true;
    //   premultipliedAlpha : false;
    // });
		//
    this.renderer.autoClear = true;
    this.renderer.setClearColor(0xffffff);

		document.getElementById("WebGL-output").appendChild(this.renderer.domElement);

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

	  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	  var cubeMaterial = new THREE.MeshBasicMaterial({
	    color: 0xff0000,
      wireframe: false
    });

    this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    this.cube.position.x = -4;
    this.cube.position.y = 3;
    this.cube.position.z = 0;

	}


  onLoad(){

  }

  setEvents() {

    $(window).on('load', this.onLoad.bind(this));

  }

}