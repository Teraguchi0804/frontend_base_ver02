/**
 * fileOverview:
 * Project:
 * File: Camera
 * Date:
 * Author:
 */

'use strict';

export default class Camera {

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